import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ButtonComponent} from '../button/button.component';
import {SliderComponent} from '../slider/slider.component';
import {ToggleButtonComponent} from '../toggle-button/toggle-button.component';
import {ImageViewerComponent, ActionButton, ActionButtonType} from 'systelab-components';

@Component({
	selector: 'systelab-image-viewer-test',
	template: `
        <systelab-image-viewer class="slab-overflow-container"
			   [imageSrc]="imageSrc"
			   [imageDescription]="description"
			   [overlayText]="description"
			   [actionButtons]="actionButtons"
			   (clickActionButton)="doClickActionButton($event)"
			   [showZoomByAreaButton]="true"
			   [showAdjustButton]="true"
			   [showZoomScale]="true">
        </systelab-image-viewer>`,
	styles:   []
})
export class ImageViewerTestComponent {
	public imageSrc = '/map.jpg';
	public description = 'Barcelona Eixample District';
	public actionButtons: ActionButton[] = [
		{action: 'Action 1', label: 'Action 1', type: ActionButtonType.BUTTON},
		{action: 'blue', label: 'Apply blue', type: ActionButtonType.TOGGLE_BUTTON},
		{action: 'green', label: 'Apply green', type: ActionButtonType.TOGGLE_BUTTON}
	];
	private buttonActionClicked: string;

	doClickActionButton($event: string): void {
		this.buttonActionClicked = $event;
	}
}

describe('ImageViewerComponent', () => {
	let fixture: ComponentFixture<ImageViewerTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				HttpClientModule],
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
		expect(overlayText).toEqual(fixture.componentInstance.description);
	});

	it('should call  overlay text', () => {
		const overlayText = fixture.debugElement.nativeElement.querySelector('#imageViewerOverlayText').innerHTML;
		expect(overlayText).toEqual(fixture.componentInstance.description);
	});

});
