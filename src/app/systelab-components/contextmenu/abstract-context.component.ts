import { ChangeDetectorRef, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

declare var jQuery: any;

export abstract class AbstractContextComponent<T> implements OnInit, OnDestroy {

	@ViewChild('dropdownparent', {static: true}) public dropdownParent: ElementRef;
	@ViewChild('dropdownmenu', {static: false}) public dropdownMenuElement: ElementRef;
	@ViewChild('dropdown', {static: false}) public dropdownElement: ElementRef;
	@ViewChild('ngcontent', {static: false}) public ngcontent: ElementRef;

	@Output() public action = new EventEmitter();

	@Input() public elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();
	@Input() public fontSize: string;
	@Input() public fontColor: string;
	@Input() public isEmbedded = false;

	public destroyWheelListener: Function;
	public destroyMouseListener: Function;
	public destroyKeyListener: Function;
	public scrollHandler: any;
	public isOpened = false;
	protected previousActionChild: string;

	protected constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
	}

	public ngOnInit() {
		jQuery(this.dropdownParent.nativeElement).on('hide.bs.dropdown', this.actionsAfterCloseDropDown.bind(this));
	}

	@HostListener('window:resize', ['$event'])
	public onResize(event: any) {
		if (this.isDropDownOpened()) {
			this.closeDropDown();
		}
	}

	public isDropDownOpened(): boolean {
		return this.dropdownParent.nativeElement.className.includes('show');
	}

	protected loop(x: number, y: number): void {
		if (this.isDropDownOpened()) {
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'position', 'fixed');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'position', 'absolute');
			y = y - this.dropdownParent.nativeElement.offsetHeight;
			if (y + this.dropdownElement.nativeElement.offsetHeight > window.innerHeight) {
				y = y - this.dropdownElement.nativeElement.offsetHeight;
			}
			if (x + this.dropdownElement.nativeElement.offsetWidth > window.innerWidth) {
				x = x - this.dropdownElement.nativeElement.offsetWidth;
			}
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', y + 'px');
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', x + 'px');
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'visible');
			this.addListeners();

		} else {
			setTimeout(() => this.loop(x, y), 10);
		}
	}

	public showDropDown(x: number, y: number) {
		setTimeout(() => this.loop(x, y), 10);
	}

	public resetDropDownPositionAndHeight() {
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'top', null);
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'left', null);
	}

	protected getFirstChildLeft(selectedChild: ElementRef) {
		let firstChildLeft = this.dropdownElement.nativeElement.offsetWidth + 15;
		const firstChildAbsoluteLeft = this.dropdownElement.nativeElement.offsetLeft;

		if (firstChildAbsoluteLeft + this.dropdownElement.nativeElement.offsetWidth +
			selectedChild.nativeElement.offsetWidth > window.innerWidth) {
			firstChildLeft = -selectedChild.nativeElement.offsetWidth + 10;
		}
		return firstChildLeft;
	}


	protected getFirstChildLeftWithLevels(selectedChild: ElementRef, optionLevel: number, previousMenuWidth: Array<number>) {
		let firstChildLeft;
		let accumulativeLeft = 0;
		const firstChildAbsoluteLeft = this.dropdownElement.nativeElement.offsetLeft;

		if (optionLevel < 1) {
			firstChildLeft = this.dropdownElement.nativeElement.offsetWidth + 12;
		} else {
			firstChildLeft = previousMenuWidth[optionLevel - 1] + 12;
			for (let i = 0; i < optionLevel; i++) {
				accumulativeLeft = accumulativeLeft + previousMenuWidth[i];
			}
		}

		if (firstChildAbsoluteLeft + this.dropdownElement.nativeElement.offsetWidth + accumulativeLeft +
			selectedChild.nativeElement.offsetWidth > window.innerWidth) {
			firstChildLeft = -selectedChild.nativeElement.offsetWidth + 15;
		}
		return firstChildLeft;
	}

	protected getFirstChildTop(event: any, selectedChild: ElementRef) {
		const firstChildAbsoluteTop = event.clientY;
		let firstChildRelativeTop = event.target.offsetTop;

		if (firstChildAbsoluteTop + selectedChild.nativeElement.offsetHeight > window.innerHeight) {
			firstChildRelativeTop = firstChildRelativeTop - selectedChild.nativeElement.offsetHeight;
		}
		return firstChildRelativeTop;
	}

	public actionsAfterCloseDropDown() {
		this.previousActionChild = undefined;
		this.isOpened = false;
		this.cdr.detectChanges();
		this.removeScrollHandler();
		if (this.destroyWheelListener) {
			this.destroyWheelListener();
		}
		if (this.destroyKeyListener) {
			this.destroyKeyListener();
		}
		if (this.destroyMouseListener) {
			this.destroyMouseListener();
		}
		this.resetDropDownPositionAndHeight();
	}

	public closeDropDown() {
		if (this.isDropDownOpened()) {
			this.myRenderer.removeAttribute(this.dropdownParent.nativeElement, 'aria-expanded');
			this.myRenderer.removeClass(this.dropdownParent.nativeElement, 'show');
			this.myRenderer.removeClass(this.dropdownMenuElement.nativeElement, 'show');
			this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
		}
		this.actionsAfterCloseDropDown();
	}

	protected addListeners() {
		this.addScrollHandler();
		this.destroyMouseListener = this.myRenderer.listen('window', 'click', (evt: MouseEvent) => {
			this.handleMouseEvents(evt);
		});
		this.destroyWheelListener = this.myRenderer.listen('window', 'scroll', (evt: WheelEvent) => {
			this.handleWheelEvents(evt);
		});
		this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', (evt: KeyboardEvent) => {
			this.handleKeyboardEvents(evt);
		});
	}

	protected handleKeyboardEvents(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (this.isDropDownOpened()) {
				this.closeDropDown();
			}
		}
	}

	protected handleWheelEvents(event: WheelEvent) {
		this.checkTargetAndClose(event.target);
	}

	protected handleMouseEvents(event: MouseEvent) {
		this.checkTargetAndClose(event.target);
	}

	protected scroll(event: any) {
		this.checkTargetAndClose(event.target);
	}

	protected checkTargetAndClose(target: any) {
		if (!this.checkIfNgContent(target)) {
			if (this.isDropDownOpened()) {
				this.closeDropDown();
			}
		}
	}

	public ngContentStopPropagation(event: any): void {
		event.stopPropagation();
	}

	protected checkIfNgContent(target: any): boolean {
		let currentElement = target;
		while (currentElement !== this.dropdownElement && currentElement) {
			if (currentElement === this.ngcontent.nativeElement) {
				return true;
			} else {
				currentElement = currentElement.parentElement;
			}
		}
		return false;
	}

	protected addScrollHandler() {
		this.scrollHandler = this.scroll.bind(this);
		window.addEventListener('scroll', this.scrollHandler, true);
	}

	protected removeScrollHandler() {
		window.removeEventListener('scroll', this.scrollHandler, true);
	}

	public ngOnDestroy() {
		this.removeScrollHandler();
	}

	public dotsClicked(event: MouseEvent) {
		if (!this.isDropDownOpened()) {
			this.hideDivUntilIsPositioned(event.clientX, event.clientY);
		}
	}

	protected hideDivUntilIsPositioned(x: number, y: number) {
		// hide the div until is positioned in event x y position to avoid flick
		this.myRenderer.setStyle(this.dropdownMenuElement.nativeElement, 'visibility', 'hidden');
		this.isOpened = true;
		this.cdr.detectChanges();
		this.showDropDown(x, y);
	}

	public open(event: MouseEvent) {

		jQuery('#' + this.elementID).dropdown('toggle');

		if (!this.isDropDownOpened()) {
			// Add class manually because is not set when jquery.dropdwon toogle is executed
			this.myRenderer.addClass(this.dropdownParent.nativeElement, 'show');
			this.hideDivUntilIsPositioned(event.clientX, event.clientY);
		}
	}

	public toggle(elementID: string) {
		jQuery('#' + elementID).toggle();
	}
}
