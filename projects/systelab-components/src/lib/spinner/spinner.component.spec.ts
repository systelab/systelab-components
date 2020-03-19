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
                    <systelab-spinner [spinValues]="values" (change)="doValueChange()"></systelab-spinner>
                    <label class="label-value">{{values.value}}</label>
                </div>
	          `,
	styles:   []
})
export class SpinnerTestComponent {
	public values = new TouchSpinValues(34, 1, 100);
	
	public doValueChange() {
	}
}

describe('Systelab Spinner', () => {
	let fixture: ComponentFixture<SpinnerTestComponent>;

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
		fixture = TestBed.createComponent(SpinnerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, 34);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, 90);
		checkHasValue(fixture, 90);
	});

	it('should increment the value if plus button is clicked (+1)', () => {
		clickPlusButton(fixture);
		checkHasValue(fixture, 34 + 1);
	});

	it('should increment the value n times if plus button is clicked (+11)', () => {
		setStep(fixture, 11);
		clickPlusButton(fixture);
		checkHasValue(fixture, 34 + 11);
	});

	it('should not increment the value if is the maximum', () => {
		setValue(fixture, 100);
		clickPlusButton(fixture);
		checkHasValue(fixture, 100);
	});

	it('should decrement the value if minus button is clicked (-1)', () => {
		clickMinusButton(fixture);
		checkHasValue(fixture, 34 - 1);
	});

	it('should decrement the value n times if minus button is clicked (-11)', () => {
		setStep(fixture, 11);
		clickMinusButton(fixture);
		checkHasValue(fixture, 34 - 11);
	});

	it('should not decrement the value if is the minimum', () => {
		setValue(fixture, 1);
		clickMinusButton(fixture);
		checkHasValue(fixture, 1);
	});

	it('should call method change when the minus button is clicked', () => {
		spyOn(fixture.componentInstance, 'doValueChange');
		clickMinusButton(fixture);
		expect(fixture.componentInstance.doValueChange).toHaveBeenCalled();
	});

	it('should call method change when the plus button is clicked', () => {
		spyOn(fixture.componentInstance, 'doValueChange');
		clickPlusButton(fixture);
		expect(fixture.componentInstance.doValueChange).toHaveBeenCalled();
	});

	it('should not call method change when the value is not changed', () => {
		spyOn(fixture.componentInstance, 'doValueChange');
		setValue(fixture, 100);
		clickPlusButton(fixture);
		expect(fixture.componentInstance.doValueChange).not.toHaveBeenCalled();
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
