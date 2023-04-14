import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../button/button.component';
import { SliderComponent } from '../slider/slider.component';
import { ToggleButtonComponent } from '../toggle-button/toggle-button.component';
import { ActionButton, ActionButtonType, ImageViewerComponent } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';

@Component({
	selector: 'systelab-image-viewer-test',
	template: `
        <systelab-image-viewer #imageViewer class="slab-overflow-container"
			   [imageSrc]="imageSrc"
			   [imageTitle]="imageTitle"
			   [overlayText]="imageTitle"
			   [actionButtons]="actionButtons"
				 [imageFilters]="imageFilters"
			   (clickActionButton)="doClickActionButton($event)"
				 (clickOverlayText)="doClickOverlayText()"
			   [showZoomByAreaButton]="true"
			   [showAdjustButton]="true"
			   [showZoomScale]="true">
        </systelab-image-viewer>`,
	styles:   []
})
export class ImageViewerTestComponent {
	@ViewChild('imageViewer') public imageViewer: ImageViewerComponent;

	public imageSrc = 'base/testAssets/map.jpg';
	public imageTitle = 'Barcelona Eixample District';
	public actionButtons: ActionButton[] = [
		{action: 'Action 1', label: 'Action 1', type: ActionButtonType.BUTTON},
		{action: 'red', label: 'Apply red', type: ActionButtonType.TOGGLE_BUTTON},
		{action: 'green', label: 'Apply green', type: ActionButtonType.TOGGLE_BUTTON}
	];
	public imageFilters = `
	<filter id="red">
	<feColorMatrix type="matrix"
					 values="1 0 0 0 0
							 0 0 0 0 0
							 0 0 0 0 0
							 0 0 0 1 0"/>
	</filter>
	<filter id="green">
		<feColorMatrix type="matrix"
						 values="0 0 0 0 0
								 0 1 0 0 0
								 0 0 0 0 0
								 0 0 0 1 0"/>
	</filter>`;
	private buttonActionClicked: string;

	public doClickActionButton($event: string): void {
		if ($event === 'Action 1') {
			console.log('Click on '+$event);
		} else {
			this.applyImageFilter($event);
		}
	}

	public doClickOverlayText(): void {
		console.log('Text over image clicked');
	}

	public applyImageFilter(action: string): void {
		if (this.imageViewer.getFilter() === action) {
			this.imageViewer.setFilter(undefined);
		} else {
			this.imageViewer.setFilter(action);
		}
	}
}

const clickActionButton = (imageViewer: ComponentFixture<ImageViewerTestComponent>, children: number) => {
	const button = imageViewer.debugElement.nativeElement.querySelector('#imageViewerHeader > div:nth-child('
		+ children +') > div.ml-1 > systelab-button > button');
	button.click();
	imageViewer.detectChanges();
};

const clickToggleButton = (imageViewer: ComponentFixture<ImageViewerTestComponent>, children: number) => {
	const button = imageViewer.debugElement.nativeElement.querySelector('#imageViewerHeader > div:nth-child('
		+ children +') > div.ml-1 > systelab-toggle-button');
	button.click();
	imageViewer.detectChanges();
};

const clickOverlay = (imageViewer: ComponentFixture<ImageViewerTestComponent>) => {
	const overlay = imageViewer.debugElement.nativeElement.querySelector('#imageViewerOverlayText');
	overlay.click();
	imageViewer.detectChanges();
};

describe('ImageViewerTestComponent', () => {
	let fixture: ComponentFixture<ImageViewerTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				HttpClientModule,
				SystelabTranslateModule
			],
			declarations: [ImageViewerComponent,ImageViewerTestComponent,ButtonComponent,SliderComponent,ToggleButtonComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(ImageViewerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should render action and zoom toggle buttons', () => {
		const numActionButton = fixture.debugElement.nativeElement.querySelectorAll('systelab-toggle-button').length;
		expect(numActionButton).toEqual(3);
	});

	it('should render the rest of regular buttons', () => {
		const numActionButton = fixture.debugElement.nativeElement.querySelectorAll('systelab-button').length;
		expect(numActionButton).toEqual(3);
	});

	it('should render description parameter as overlay text', () => {
		const overlayText = fixture.debugElement.nativeElement.querySelector('#imageViewerOverlayText').innerHTML;
		expect(overlayText).toEqual(fixture.componentInstance.imageTitle);
	});

	it('should call  overlay text', () => {
		const overlayText = fixture.debugElement.nativeElement.querySelector('#imageViewerOverlayText').innerHTML;
		expect(overlayText).toEqual(fixture.componentInstance.imageTitle);
	});

	it('should call action when action button is clicked', () => {
		spyOn(fixture.componentInstance, 'doClickActionButton');
		clickActionButton(fixture, 1);
		expect(fixture.componentInstance.doClickActionButton)
			.toHaveBeenCalled();
	});

	it('should call filter when filter button is clicked', () => {
		spyOn(fixture.componentInstance, 'applyImageFilter');
		clickToggleButton(fixture, 1);
		expect(fixture.componentInstance.applyImageFilter)
			.toHaveBeenCalled();
	});

	it('should overlay action when overlay is clicked', () => {
		spyOn(fixture.componentInstance, 'doClickOverlayText');
		clickOverlay(fixture);
		expect(fixture.componentInstance.doClickOverlayText)
			.toHaveBeenCalled();
	});

	it('should setInitialValues create zoom scales chunks', () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		imageViewerComponent.setInitialValues();
		expect(imageViewerComponent.zoomScale.marks.length).toBeGreaterThanOrEqual(0);
	});

});

