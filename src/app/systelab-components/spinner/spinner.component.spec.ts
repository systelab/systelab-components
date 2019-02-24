import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TouchSpinValues } from './touch.spin-values';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { TouchspinComponent } from './spinner.component';

@Component({
	selector: 'systelab-spinner-test',
	template: `
                <div>
                    <systelab-spinner [spinValues]="values"></systelab-spinner>
                    <label class="label-value">{{values.value}}</label>
                </div>
	          `,
	styles:   []
})
export class SpinnerTestComponent {
	public values = new TouchSpinValues(34, 1, 100);
}

describe('Systelab Spinner', () => {
	let spinnerTestFixture: ComponentFixture<SpinnerTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [TouchspinComponent, SpinnerTestComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		spinnerTestFixture = TestBed.createComponent(SpinnerTestComponent);
		spinnerTestFixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(spinnerTestFixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(spinnerTestFixture, 34);
	});

	it('should have the changed value if there is a change', () => {
		setValue(spinnerTestFixture, 90);
		checkHasValue(spinnerTestFixture, 90);
	});

	it('should increment the value if plus button is clicked (+1)', () => {
		clickPlusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 34 + 1);
	});

	it('should increment the value n times if plus button is clicked (+11)', () => {
		setStep(spinnerTestFixture, 11);
		clickPlusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 34 + 11);
	});

	it('should not increment the value if is the maximum', () => {
		setValue(spinnerTestFixture, 100);
		clickPlusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 100);
	});

	it('should decrement the value if minus button is clicked (-1)', () => {
		clickMinusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 34 - 1);
	});

	it('should decrement the value n times if minus button is clicked (-11)', () => {
		setStep(spinnerTestFixture, 11);
		clickMinusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 34 - 11);
	});

	it('should not decrement the value if is the minimum', () => {
		setValue(spinnerTestFixture, 1);
		clickMinusButton(spinnerTestFixture);
		checkHasValue(spinnerTestFixture, 1);
	});
});

function clickPlusButton(fixture: ComponentFixture<SpinnerTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('#plus-button');
	button.click();
	fixture.detectChanges();
}

function clickMinusButton(fixture: ComponentFixture<SpinnerTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('#minus-button');
	button.click();
	fixture.detectChanges();
}

function checkHasValue(fixture: ComponentFixture<SpinnerTestComponent>, value: number) {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toContain(value);
}

function setValue(fixture: ComponentFixture<SpinnerTestComponent>, value: number) {
	fixture.componentInstance.values.value = value;
	fixture.detectChanges();
}

function setStep(fixture: ComponentFixture<SpinnerTestComponent>, value: number) {
	fixture.componentInstance.values.step = value;
	fixture.detectChanges();
}
