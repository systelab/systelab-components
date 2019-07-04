import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerTimeComponent } from './datepicker-time.component';
import { ButtonModule, CalendarModule } from 'primeng/primeng';
import { TouchspinComponent } from '../spinner/spinner.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { Datepicker } from './datepicker.component';

@Component({
	selector: 'systelab-datepicker-time-test',
	template: `
        <div>
            <systelab-date-time [(currentDate)]="currentDate"></systelab-date-time>
            <button type="button" class="btn mt-2 mr-1" (click)="resetDatePickerTime()">Reset value
            </button>
        </div>
	`,
	styles: []
})
export class DatepickerTimeTestComponent {

	public defaultYear = 2018;
	public defaultMonth = 9;
	public defaultDay = 20;
	public defaultHours = 14;
	public defaultMinutes = 5;

	public currentDate: Date;

	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}

	public resetDatePickerTime() {
		this.currentDate = undefined;
	}
}

describe('Systelab DatepickerTimeComponent', () => {
	let fixture: ComponentFixture<DatepickerTimeTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				CalendarModule,
				HttpClientModule,
				SystelabTranslateModule],
			declarations: [TouchspinComponent,
				Datepicker,
				DatepickerTimeComponent,
				DatepickerTimeTestComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DatepickerTimeTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial day value of 20', () => {
		expect(fixture.componentInstance.currentDate.getDate()).toBe(fixture.componentInstance.defaultDay);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, new Date(fixture.componentInstance.defaultYear, fixture.componentInstance.defaultMonth,
			fixture.componentInstance.defaultDay + 1, fixture.componentInstance.defaultHours, fixture.componentInstance.defaultMinutes));
		expect(fixture.componentInstance.currentDate.getDate()).toBe(fixture.componentInstance.defaultDay + 1);
	});

	it('should have the changed value if there is a change in the hour value', () => {
		setHourValue(fixture, 16);
		expect(fixture.componentInstance.currentDate.getHours()).toBe(16);
	});

	it('should have the changed value if there is a change in the minutes value', () => {
		setMinuteValue(fixture, 59);
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(59);
	});

	it('currentDate should be undefined if there is a reset action', () => {
		resetDatepickerTime(fixture);
		expect(fixture.componentInstance.currentDate).toBeFalsy();
	});


	it('currentHours should decrement the value if hours minus button is clicked (-1)', () => {
		clickTouchSpinnerButton(fixture, '#hours', '#minus-button');
		expect(fixture.componentInstance.currentDate.getHours()).toBe(fixture.componentInstance.defaultHours - 1);
	});

	it('currentHours should increment the value if hours plus button is clicked (+1)', () => {
		clickTouchSpinnerButton(fixture, '#hours', '#plus-button');
		expect(fixture.componentInstance.currentDate.getHours()).toBe(fixture.componentInstance.defaultHours + 1);
	});

	it('currentMinutes should decrement the value if minutes minus button is clicked (-1)', () => {
		clickTouchSpinnerButton(fixture, '#minutes', '#minus-button');
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(fixture.componentInstance.defaultMinutes - 1);
	});

	it('currentMinutes should increment the value if minutes plus button is clicked (+1)', () => {
		clickTouchSpinnerButton(fixture, '#minutes', '#plus-button');
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(fixture.componentInstance.defaultMinutes + 1);
	});

});

function resetDatepickerTime(fixture: ComponentFixture<DatepickerTimeTestComponent>) {
	fixture.componentInstance.resetDatePickerTime();
	fixture.detectChanges();
}

function setValue(fixture: ComponentFixture<DatepickerTimeTestComponent>, value: Date) {
	fixture.componentInstance.currentDate = value;
	fixture.detectChanges();
}

function setHourValue(fixture: ComponentFixture<DatepickerTimeTestComponent>, value: number) {
	fixture.componentInstance.currentDate.setHours(value);
	fixture.detectChanges();
}

function setMinuteValue(fixture: ComponentFixture<DatepickerTimeTestComponent>, value: number) {
	fixture.componentInstance.currentDate.setMinutes(value);
	fixture.detectChanges();
}

function clickTouchSpinnerButton(fixture: ComponentFixture<DatepickerTimeTestComponent>, spinnerID: string, buttonID: string) {
	const button = fixture.debugElement.nativeElement.querySelector(spinnerID).querySelector(buttonID);
	button.click();
	fixture.detectChanges();
}


