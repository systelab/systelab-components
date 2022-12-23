import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TouchSpinValues } from './touch.spin-values';
import { BrowserModule, By } from '@angular/platform-browser';
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
	public values = new TouchSpinValues(34.12345, 1.00001, 100.001, 1.12345, true, 5);

	public doValueChange() {
	}
}


const clickPlusButton = (fixture: ComponentFixture<SpinnerTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('#plus-button');
	button.click();
	fixture.detectChanges();
};

const clickMinusButton = (fixture: ComponentFixture<SpinnerTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('#minus-button');
	button.click();
	fixture.detectChanges();
};

const checkHasValue = (fixture: ComponentFixture<SpinnerTestComponent>, value: number) => {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toEqual(value.toString());
};

const enterText = (fixture: ComponentFixture<SpinnerTestComponent>, text: string) => {
	const inputComponent = fixture.debugElement.query(By.css('input')).nativeElement;
	inputComponent.value = text;
	inputComponent.dispatchEvent(new Event('keydown'));
	inputComponent.dispatchEvent(new Event('input'));
	inputComponent.dispatchEvent(new Event('keyup'));
	fixture.detectChanges();
	inputComponent.dispatchEvent(new Event('blur'));
	fixture.detectChanges();
};

const setStep = (fixture: ComponentFixture<SpinnerTestComponent>, value: number) => {
	fixture.componentInstance.values.step = value;
	fixture.detectChanges();
};

describe('Systelab Spinner with decimals', () => {
	let fixture: ComponentFixture<SpinnerTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [TouchspinComponent, SpinnerTestComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SpinnerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, 34.12345);
	});

	it('should have the changed value if there is a change', () => {
		enterText(fixture, '90.56564');
		checkHasValue(fixture, 90.56564);
	});

	it('should have the changed value if there is a change', () => {
		enterText(fixture, '90.565641');
		checkHasValue(fixture, 90.56564);
	});

	it('should have the changed value if there is a change', () => {
		enterText(fixture, '90.565648');
		checkHasValue(fixture, 90.56565);
	});

	it('should increment the value if plus button is clicked (+1.12345)', () => {
		clickPlusButton(fixture);
		checkHasValue(fixture, 34.12345 + 1.12345);
	});

	it('should increment the value n times if plus button is clicked (+11.12345)', () => {
		setStep(fixture, 11.12345);
		clickPlusButton(fixture);
		checkHasValue(fixture, 34.12345 + 11.12345);
	});

	it('should not increment the value if is the maximum', () => {
		enterText(fixture, '100.001');
		clickPlusButton(fixture);
		checkHasValue(fixture, 100.001);
	});

	it('should set the maximum if by clicking the plus button the value is above the maximum', () => {
		enterText(fixture, '99.999');
		clickPlusButton(fixture);
		checkHasValue(fixture, 100.001);
	});

	it('should decrement the value if minus button is clicked (-1.12345)', () => {
		clickMinusButton(fixture);
		checkHasValue(fixture, 34.12345 - 1.12345);
	});

	it('should decrement the value n times if minus button is clicked (-11.12345)', () => {
		setStep(fixture, 11.12345);
		clickMinusButton(fixture);
		checkHasValue(fixture, 34.12345 - 11.12345);
	});

	it('should not decrement the value if is the minimum', () => {
		enterText(fixture, '1.00001');
		clickMinusButton(fixture);
		checkHasValue(fixture, 1.00001);
	});

	it('should set the minimum if by clicking the minus button the value is below the minimum', () => {
		enterText(fixture, '1.1');
		clickMinusButton(fixture);
		checkHasValue(fixture, 1.00001);
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
		enterText(fixture, '100.001');
		spyOn(fixture.componentInstance, 'doValueChange');
		clickPlusButton(fixture);
		expect(fixture.componentInstance.doValueChange).not.toHaveBeenCalled();
	});

});
