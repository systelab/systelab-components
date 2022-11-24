import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output,
	ViewChild
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

export enum ActionButtonType {
	BUTTON,
	TOGGLE_BUTTON,
	DROP_DOWN
}

export interface ActionButton {
	action: string;
	label: string;
	type: ActionButtonType;
}

@Component({
	selector:    'systelab-image-viewer',
	templateUrl: 'image-viewer.component.html',
	styleUrls:   ['image-viewer.component.scss']
})
export class ImageViewerComponent {

	@Input() public imageSrc: string;
	@Input() public imageTitle: string;
	@Input() public overlayText: string;
	@Input() public actionButtons: ActionButton[];
	@Input() public imageFilters = '';
	@Input() public showZoomByAreaButton = false;
	@Input() public showAdjustButton = false;
	@Input() public showZoomScale = false;
	@Input() public showSliderToolTip = false;
	@Input() public sliderZoomMin = 100;
	@Input() public sliderZoomMax = 200;
	@Input() public sliderZoomStep = 1;

	@Output() public clickActionButton = new EventEmitter<string>();
	@Output() public clickOverlayText = new EventEmitter();

	@ViewChild('imageViewerWrapper') public imageViewerWrapper: ElementRef;
	@ViewChild('imageViewerImg') public imageViewerImg: ElementRef;

	@HostBinding('class.zooming') zoomEnabled = false;
	@HostBinding('class.dragging') dragEnabled = false;

	public imgParams = {
		sliderZoomPct: null,
		filter:        undefined,
		top:           0,
		left:          0,
		width:         null,
		height:        null
	};

	public zoomSelector = {
		visible: false,
		allow:   true,
		top:     null,
		left:    null,
		width:   null,
		height:  null
	};

	public zoomScale = {
		totalWidth: null,
		sliderThumb:     14,
		chunks: 8,
		marks: [{marginLeft: 0, label: ''}],
	};

	public actionButtonType: any = ActionButtonType;

	private zoomArea = {
		top:          null,
		left:         null, //zoomArea
		scrollTop:    null,
		scrollLeft:   null,
		cursorStartX: null,
		cursorStartY: null, //cursor
		imgStartLeft: null,
		imgStartTop:  null, //image
		minDragLeft:  null,
		maxDragLeft:  null,
		minDragTop:   null,
		maxDragTop:   null
	};

	private viewPort: any;
	private image: any;
	private wrapper: any;

	private imageClicked = false;

	constructor(private readonly chref: ChangeDetectorRef, private readonly elementRef: ElementRef,
				private readonly sanitizer: DomSanitizer) {
	}

	@HostListener('mousedown', ['$event'])
	public doMouseDown(event: any): void {
		if (event.target.id === 'imageViewerImg') {
			event.preventDefault();

			this.initializeCommonParameters(event.clientX, event.clientY);

			if (this.dragEnabled) {
				this.initializeDragAction();

			} else if (this.zoomEnabled) {
				this.initializeZoomByAreaAction();
			}
		}
	}

	@HostListener('mousemove', ['$event'])
	public doMouseMove(event: MouseEvent): void {
		if (this.imageClicked) {
			if (this.dragEnabled) {

				this.scrollViewport(this.zoomArea.cursorStartX - event.clientX + this.zoomArea.left,
					this.zoomArea.cursorStartY - event.clientY + this.zoomArea.top);

			} else if (this.zoomEnabled) {
				this.updateZoomSelector(event.clientX, event.clientY);
			}
		}
	}

	@HostListener('mouseup')
	public doMouseUp(): void {
		if (this.imageClicked) {
			if (this.dragEnabled) {
				this.zoomArea.scrollTop = this.viewPort.scrollTop;
				this.zoomArea.scrollLeft = this.viewPort.scrollLeft;

			} else if (this.zoomEnabled && this.zoomSelector.allow) {
				if (this.zoomSelector.width > 0 && this.zoomSelector.height > 0) {
					this.resizeZoomSelectorAndImage();
				}
				this.chref.detectChanges();
				this.imgParams.sliderZoomPct = this.getSliderPct();
			}
			this.deactivateZoomSelector();
			this.imageClicked = false;
		} else {
			this.zoomArea.scrollTop = this.viewPort.scrollTop;
			this.zoomArea.scrollLeft = this.viewPort.scrollLeft;
		}
	}

	public getWidth(): string {
		if (this.zoomEnabled) {
			return this.imgParams.width + 'px';
		} else {
			return this.imgParams.sliderZoomPct ? this.image.naturalWidth * this.imgParams.sliderZoomPct / 100 + 'px'
				: undefined;
		}
	}

	public getFilter(): string {
		return this.imgParams.filter;
	}

	public setFilter(filter: string): void {
		this.imgParams.filter = filter;
	}

	public doAdjust(): void {
		this.imgParams.sliderZoomPct = this.getInitialZoom();
		this.dragEnabled = false;
		this.zoomEnabled = false;
	}

	public toggleZoomByArea(): void {
		if (this.zoomEnabled) {
			this.zoomEnabled = false;
			this.dragEnabled = this.imageOverflowViewport();
		} else {
			this.scaleImage(1);
			this.zoomEnabled = true;
			this.dragEnabled = false;
		}
	}

	public sliderZoomChanged(): void {
		this.dragEnabled = this.imageOverflowViewport();
		this.zoomEnabled = false;
		this.scaleImage(1);
	}

	public setInitialValues(): void {
		this.viewPort = this.elementRef.nativeElement;
		this.image = this.imageViewerImg.nativeElement;
		this.wrapper = this.imageViewerWrapper.nativeElement;

		// Set zoom scale width and marks
		this.zoomScale.totalWidth = this.viewPort.querySelector('input[type="range"]').offsetWidth;

		// Set zoom to fit the image
		this.imgParams.sliderZoomPct = this.getInitialZoom();
		// Min zoom 5% smaller than initial zoom
		this.sliderZoomMin = this.imgParams.sliderZoomPct - 5;

		// Calculate ruler marks (100x matches the real size of the image)
		const zoomMarkLength = this.sliderZoomMax / this.zoomScale.chunks;
		this.zoomScale.marks = [];

		for (let i = 1; i <= this.zoomScale.chunks; i += 1) {
			const label = i % 2 ? '' : zoomMarkLength*i/100 + '';
			const marginLeftValue = this.getSliderMarkMarginByZoomFactor(zoomMarkLength*i)-1;
			if (marginLeftValue > 0) {
				this.zoomScale.marks.push({marginLeft: marginLeftValue, label});
			}
		}
		this.doAdjust();
	}

	public isFilterEnabled(action: string): boolean {
		return this.imgParams.filter === action;
	}

	public getDropMainDownLabel(dropDownLabel: string): string {
		return dropDownLabel.substring(0, dropDownLabel.indexOf('|'));
	}

	public getDropDownLabels(dropDownLabel: string): string[] {
		return dropDownLabel.slice(dropDownLabel.indexOf('|') + 1)
			.split(';');
	}

	public getDropDownAction(dropDownActions: string, i: number): string {
		return dropDownActions.split(';')[i];
	}

	public getImageFiltersHtml(): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(this.imageFilters);
	}

	public getFilterUrl(): string {
		return this.imgParams.filter ? `url(#${this.imgParams.filter})` : '';
	}

	private initializeCommonParameters(xCoord: number, yCoord: number): void {
		const viewportOffset =  this.viewPort.getBoundingClientRect();
		this.imageClicked = true;
		//store zoomArea left&top
		this.zoomArea.left = viewportOffset.left;
		this.zoomArea.top = viewportOffset.top;

		//store starting positions of cursor (relative to zoomArea)
		this.zoomArea.cursorStartX = xCoord + this.viewPort.scrollLeft - this.zoomArea.left;
		this.zoomArea.cursorStartY = yCoord + this.viewPort.scrollTop - this.zoomArea.top;
	}

	private initializeZoomByAreaAction(): void {
		//set drag boundaries (relative to zoomArea)
		this.zoomArea.minDragLeft = 0;
		this.zoomArea.maxDragLeft = this.wrapper.width;
		this.zoomArea.minDragTop = 0;
		this.zoomArea.maxDragTop = this.wrapper.height;

		this.activateZoomSelector();
	}

	private initializeDragAction(): void {
		//store starting positions of image (relative to zoomArea)
		this.zoomArea.imgStartLeft = this.image.offsetLeft;
		this.zoomArea.imgStartTop = this.image.offsetTop;

		//set drag boundaries (relative to zoomArea)
		this.zoomArea.minDragLeft = this.wrapper.width - this.image.width;
		this.zoomArea.maxDragLeft = 0;
		this.zoomArea.minDragTop = this.wrapper.height - this.image.height;

		this.zoomArea.maxDragTop = 0;
	}

	private updateZoomSelector(xCoord: number, yCoord: number): void {
		//calculate selector width and height (relative to zoomArea)
		let width = (xCoord + this.viewPort.scrollLeft - this.zoomArea.left) - this.zoomArea.cursorStartX;
		let height = (yCoord + this.viewPort.scrollTop - this.zoomArea.top) - this.zoomArea.cursorStartY;

		//prevent dragging in prohibited areas (relative to zoomArea)
		if (xCoord - this.zoomArea.left <= this.zoomArea.minDragLeft) {
			width = this.zoomArea.minDragLeft - this.zoomArea.cursorStartX;
		} else if (xCoord - this.zoomArea.left >= this.zoomArea.maxDragLeft) {
			width = this.zoomArea.maxDragLeft - this.zoomArea.cursorStartX;
		}
		if (yCoord - this.zoomArea.top <= this.zoomArea.minDragTop) {
			height = this.zoomArea.minDragTop - this.zoomArea.cursorStartY;
		} else if (yCoord - this.zoomArea.top >= this.zoomArea.maxDragTop) {
			height = this.zoomArea.maxDragTop - this.zoomArea.cursorStartY;
		}
		//update zoom-selector
		this.zoomSelector.width = Math.abs(width);
		this.zoomSelector.height = Math.abs(height);
		if (width < 0) {
			this.zoomSelector.left = this.zoomArea.cursorStartX - Math.abs(width);
		}
		if (height < 0) {
			this.zoomSelector.top = this.zoomArea.cursorStartY - Math.abs(height);
		}

		// Prevent zoom factor above the maximum allowed
		this.zoomSelector.allow = this.imgParams.width * this.getTargetMagnification() <= this.image.naturalWidth * this.sliderZoomMax / 100;
	}

	private resizeZoomSelectorAndImage(): void {
		const magnification = this.getTargetMagnification();

		this.zoomSelector.width *= magnification;
		this.zoomSelector.height *= magnification;

		//reposition zoom-selector and image (relative to zoomArea)
		const selectorLeft = (this.wrapper.width / 2) - (this.zoomSelector.width / 2);
		const selectorTop = (this.wrapper.height / 2) - (this.zoomSelector.height / 2);

		this.zoomSelector.left = selectorLeft;
		this.zoomSelector.top = selectorTop;

		this.scaleImage(magnification);

		//scroll viewport after the image is resized
		setTimeout(() => {
			this.scrollViewport(this.zoomArea.cursorStartX * magnification, this.zoomArea.cursorStartY * magnification);
		}, 10);
	}

	private getTargetMagnification(): number {
		return this.zoomSelector.width < this.zoomSelector.height ?
			this.wrapper.offsetWidth / this.zoomSelector.width
			: this.wrapper.offsetHeight / this.zoomSelector.height; //go for the highest magnification
	}

	private getSliderMarkMarginByZoomFactor(zoomFactor: number): number {
		return ((zoomFactor) - this.sliderZoomMin) / (this.sliderZoomMax - this.sliderZoomMin)
		* (this.zoomScale.totalWidth - this.zoomScale.sliderThumb) + this.zoomScale.sliderThumb;
	}

	private scrollViewport(scrollLeft: number, scrollTop: number): void {
		this.viewPort.scrollLeft = scrollLeft;
		this.viewPort.scrollTop = scrollTop;
	}

	private deactivateZoomSelector(): void {
		this.zoomSelector.visible = false;
		this.zoomSelector.top = 0;
		this.zoomSelector.left = 0;
		this.zoomSelector.width = 0;
		this.zoomSelector.height = 0;
	}

	private activateZoomSelector(): void {
		this.zoomSelector.visible = true;
		this.zoomSelector.top = this.zoomArea.cursorStartY;
		this.zoomSelector.left = this.zoomArea.cursorStartX;
		this.zoomSelector.width = 0;
		this.zoomSelector.height = 0;
	}

	private getSliderPct(): number {
		return Math.round(this.image.offsetWidth / this.image.naturalWidth * 100);
	}

	private imageOverflowViewport(): boolean {
		return this.image.offsetWidth > this.viewPort.offsetWidth || this.image.offsetHeight > this.viewPort.offsetHeight;
	}

	private scaleImage(magnification: number): void {
		this.imgParams.width = this.image.offsetWidth * magnification;
		this.imgParams.height = this.image.offsetHeight * magnification;
	}

	private getInitialZoom(): number {
		// Calculate initial zoom of the image to fit the window
		const availableSize = this.viewPort.offsetWidth < this.viewPort.offsetHeight ? this.viewPort.offsetWidth
			: this.viewPort.offsetHeight;
		const imageSize = this.image.naturalWidth < this.image.naturalHeight ? this.image.naturalWidth : this.image.naturalHeight;
		return availableSize / imageSize * 100;
	}

}
