import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { SliderDoubleRangeComponent } from './slider-double-range.component';


@Component({
	selector: 'systelab-slider-double-range-test',
	template: `
                <div>
                    <systelab-slider-double-range [min]="min" [max]="max" [step]="step" [(value)]="value"></systelab-slider-double-range>
                    <label class="label-value">{{value}}</label>
                </div>
	          `,
	styles:   []
})
export class SliderDoubleRangeTestComponent {
	public min = 0;
	public max = 100;
	public step = 1;
	public value = 30;
}

describe('Systelab Slider', () => {
	let fixture: ComponentFixture<SliderDoubleRangeTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [SliderDoubleRangeComponent, SliderDoubleRangeTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderDoubleRangeTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, 30);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, 90);
		checkHasValue(fixture, 90);
	});
});

function checkHasValue(fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toContain(value);
}

function setValue(fixture: ComponentFixture<SliderDoubleRangeTestComponent>, value: number) {
	fixture.componentInstance.value = value;
	fixture.detectChanges();
}


