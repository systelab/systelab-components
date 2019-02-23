import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider.component';

@Component({
	selector: 'systelab-slider-test',
	template: `
                <div>
                    <systelab-slider [min]="min" [max]="max" [step]="step" [(value)]="value"></systelab-slider>
                    <label class="label-value">{{value}}</label>
                </div>
	          `,
	styles:   []
})
export class SliderTestComponent {
	public min = 0;
	public max = 100;
	public step = 1;
	public value = 30;
}

describe('Systelab Slider', () => {
	let sliderTestFixture: ComponentFixture<SliderTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [SliderComponent, SliderTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		sliderTestFixture = TestBed.createComponent(SliderTestComponent);
		sliderTestFixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(sliderTestFixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(sliderTestFixture, 30);
	});

	it('should have the changed value if there is a change', () => {
		setValue(sliderTestFixture, 90);
		checkHasValue(sliderTestFixture, 90);
	});
});

function checkHasValue(spinnerTestFixture: ComponentFixture<SliderTestComponent>, value: number) {
	const label = spinnerTestFixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toContain(value);
}

function setValue(spinnerTestFixture: ComponentFixture<SliderTestComponent>, value: number) {
	spinnerTestFixture.componentInstance.value = value;
	spinnerTestFixture.detectChanges();
}


