import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SliderDoubleRangeComponent } from './slider-double-range.component';


@Component({
    selector: 'systelab-slider-double-range-test',
    template: `
                <div>
                    <systelab-slider-double-range
						 [min]="min"
						 [max]="max"
						 [step]="step"
						 [(minValue)]="minValue"
						 [(maxValue)]="minValue">
					</systelab-slider-double-range>
                    <label class="min-label-value">{{minValue}}</label>
					<label class="max-label-value">{{maxValue}}</label>
                </div>
	          `,
    styles: [],
    standalone: false
})

export class SliderDoubleRangeTestComponent {
	public min = 0;
	public max = 100;
	public step = 20;
	public minValue = 20;
	public maxValue = 80;
}


const checkHasMinValue = (fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) => {
	const label = fixture.debugElement.nativeElement.querySelector('.min-label-value');
	expect(label.innerHTML).toContain(value);
};

const checkHasMaxValue = (fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) => {
	const label = fixture.debugElement.nativeElement.querySelector('.max-label-value');
	expect(label.innerHTML).toContain(value);
};

const setMaxValue = (fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) => {
	fixture.componentInstance.maxValue = value;
	fixture.detectChanges();
};

const setMinValue = (fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) => {
	fixture.componentInstance.minValue = value;
	fixture.detectChanges();
};

describe('Systelab Slider-Double-Range', () => {
	let fixture: ComponentFixture<SliderDoubleRangeTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				SliderDoubleRangeComponent,
				SliderDoubleRangeTestComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderDoubleRangeTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have a minimum value', () => {
		checkHasMinValue(fixture, 20);
	});

	it('should have a maximum value', () => {
		checkHasMaxValue(fixture, 80);
	});

	it('should have the changed value if there is a change in max value', () => {
		setMaxValue(fixture, 90);
		checkHasMaxValue(fixture, 90);
	});

	it('should have the changed value if there is a change in min value', () => {
		setMinValue(fixture, 10);
		checkHasMinValue(fixture, 10);
	});
});
