import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
										 [showSaveButton]="showDownloadButton"
                                         [showZoomByAreaButton]="true"
                                         [showAdjustButton]="true"
                                         [transparentBackgroundForButtons]="transparentBackgroundForButtons"
										 [overlapImageWithButtons]="overlapImageWithButtons"
										 [allowBorderColor]="allowBorderColor"
                                         [showZoomScale]="true">
                  </systelab-image-viewer>`,
    styles: [],
    standalone: false
})
export class ImageViewerTestComponent {
	@ViewChild('imageViewer') public imageViewer: ImageViewerComponent;

	public imageSrc = 'base/testAssets/map.jpg';
	public imageTitle = 'Barcelona Eixample District';
	public actionButtons: ActionButton[] = [
		{action: 'Action 1', label: 'Action 1', type: ActionButtonType.BUTTON},
		{action: 'red', label: 'Apply red', type: ActionButtonType.TOGGLE_BUTTON, state: {checked: false, disabled: false}},
		{action: 'green', label: 'Apply green', type: ActionButtonType.TOGGLE_BUTTON, state: {checked: false, disabled: false}}
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
	public transparentBackgroundForButtons = false;
	public showDownloadButton = true;
	public overlapImageWithButtons = true;
	public allowBorderColor = 'white';

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

	public setInitials() {
		this.imageViewer.setInitialValues();
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

const clickAdjustButton = (imageViewer: ComponentFixture<ImageViewerTestComponent>) => {
	const button = imageViewer.debugElement.nativeElement.querySelector('[data-test-id="AdjustBtn"]');
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
    declarations: [ImageViewerComponent, ImageViewerTestComponent, ButtonComponent, SliderComponent, ToggleButtonComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        SystelabTranslateModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();

		fixture = TestBed.createComponent(ImageViewerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should initialize with zoom and drag disabled', () => {
		expect(fixture.componentInstance.imageViewer.zoomEnabled).toBeFalse();
		expect(fixture.componentInstance.imageViewer.dragEnabled).toBeFalse();
	});

	it('should render action and zoom toggle buttons', () => {
		const numActionButton = fixture.debugElement.nativeElement.querySelectorAll('systelab-toggle-button').length;
		expect(numActionButton).toEqual(3);
	});

	it('should render the rest of regular buttons', () => {
		const numActionButton = fixture.debugElement.nativeElement.querySelectorAll('systelab-button').length;
		expect(numActionButton).toEqual(3);
	});

	it('should render action buttons with the correct state (enabled and non-primary look&feel)', () => {
		const toggleButtons = fixture.debugElement.nativeElement.querySelectorAll('systelab-toggle-button');

		toggleButtons.forEach(toggleButton => {
			expect(toggleButton.querySelector('button').disabled).toBe(false);
			expect(toggleButton.querySelector('button').classList.contains('btn-outline-primary')).toBe(true);
		});
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
	})

	it('should change filter props when filter button is clicked', () => {
		clickToggleButton(fixture, 1);
		expect(fixture.componentInstance.imageViewer.imgParams.filter)
			.toBe('red');
		expect(fixture.componentInstance.imageViewer.filteredUrl)
			.toBe('url(#red)');
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

	it('should have initialized zoom with valid value', async () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		fixture.componentInstance.setInitials();
		expect(imageViewerComponent.imgParams.sliderZoomPct).toBeGreaterThanOrEqual(imageViewerComponent.sliderZoomMin);
		expect(imageViewerComponent.imgParams.sliderZoomPct).toBeLessThanOrEqual(imageViewerComponent.sliderZoomMax);
	});

	it('should adjust image zoom after doing adjust to a valid value', async () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		fixture.componentInstance.setInitials();
		imageViewerComponent.imgParams.sliderZoomPct = 199;
		clickAdjustButton(fixture);
		await fixture.whenStable();
		expect(imageViewerComponent.imgParams.sliderZoomPct).toBeGreaterThanOrEqual(imageViewerComponent.sliderZoomMin);
		expect(imageViewerComponent.imgParams.sliderZoomPct).toBeLessThanOrEqual(imageViewerComponent.sliderZoomMax);
	});


	it('should toggleZoomByArea when zoom is enabled', () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		fixture.componentInstance.setInitials();
		imageViewerComponent.zoomEnabled = true;
		imageViewerComponent.toggleZoomByArea();
		expect(imageViewerComponent.zoomEnabled).toBeFalse();
	});

	it('should toggleZoomByArea when zoom is disabled', () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		fixture.componentInstance.setInitials();
		imageViewerComponent.zoomEnabled = false;
		imageViewerComponent.toggleZoomByArea();
		expect(imageViewerComponent.zoomEnabled).toBeTrue();
		expect(imageViewerComponent.dragEnabled).toBeFalse();
	});

	it('should get new with when zoom is enabled', () => {
		const imageViewerComponent = fixture.componentInstance.imageViewer;
		fixture.componentInstance.setInitials();
		imageViewerComponent.zoomEnabled = true;
		imageViewerComponent.toggleZoomByArea();
		expect(imageViewerComponent.imageWidth).not.toBe('');
	});

	it('should should not have transparent class when input is false', () => {
		const isTransparentClass = fixture.debugElement.nativeElement.getElementsByClassName('bg-color-transparent').length;
		expect(fixture.componentInstance.imageViewer.transparentBackgroundForButtons).toBe(false);
		expect(isTransparentClass).toBe(0);
	});

	it('should should have transparent class when input is true', () => {
		fixture.componentInstance.transparentBackgroundForButtons = true;
		fixture.detectChanges();
		const isTransparentClass = fixture.debugElement.nativeElement.getElementsByClassName('bg-color-transparent').length;
		expect(fixture.componentInstance.imageViewer.transparentBackgroundForButtons).toBe(true);
		expect(isTransparentClass).toBeGreaterThan(0);
	});

	it('should show download button when input is true', () => {
		fixture.componentInstance.showDownloadButton = true;
		fixture.detectChanges();
		const button = fixture.debugElement.nativeElement.querySelector('[data-test-id="SaveBtn"]');
		expect(button).toBeDefined();
	});

	it('should not show download button when input is true', () => {
		fixture.componentInstance.showDownloadButton = false;
		fixture.detectChanges();
		const button = fixture.debugElement.nativeElement.querySelector('[data-test-id="SaveBtn"]');
		expect(button).toBeNull();
	});

	it('should overlap image with buttons', () => {
		fixture.componentInstance.overlapImageWithButtons = true;
		const isNoOverlapClass = fixture.debugElement.nativeElement.getElementsByClassName('no-overlapping').length;
		expect(fixture.componentInstance.imageViewer.overlapImageWithButtons).toBe(true);
		expect(isNoOverlapClass).toBe(0);
	});

	it('should not overlap image with buttons', () => {
		fixture.componentInstance.overlapImageWithButtons = false;
		fixture.detectChanges();
		const isNoOverlapClass = fixture.debugElement.nativeElement.getElementsByClassName('no-overlapping').length;
		expect(fixture.componentInstance.imageViewer.overlapImageWithButtons).toBe(false);
		expect(isNoOverlapClass).toBeGreaterThan(0);
	});

	it('should set allow zoom area border color to the input value', () => {
		fixture.componentInstance.allowBorderColor = 'blue';
		fixture.detectChanges();
		const area = fixture.debugElement.nativeElement.querySelector('[data-test-id="ZoomSelector"]');
		expect(area.style.borderColor).toEqual('blue');
	});
});

