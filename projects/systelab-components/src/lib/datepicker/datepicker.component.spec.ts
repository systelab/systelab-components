import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SystelabTranslateModule } from 'systelab-translate';
import { ButtonComponent } from '../button/button.component';
import { TouchspinComponent } from '../spinner/spinner.component';
import { Datepicker } from './datepicker.component';

@Component({
	selector: 'systelab-datepicker-test',
	template: `
                  <div>
                      <systelab-datepicker [(currentDate)]="currentDate" [showTodayButton]="showTodayButton"
                                           [markPreviousAfterDate]="true" [showDateFormatOnError]="showDateFormatOnError"
                      ></systelab-datepicker>
                  </div>
			  `,
	styles:   []
})
export class DatepickerTestComponent {

	public defaultYear = 2018;
	public defaultMonth = 9;
	public defaultDay = 20;
	public defaultHours = 14;
	public defaultMinutes = 5;
	public showDateFormatOnError = true;
	public showTodayButton = true;

	public currentDate: Date;

	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}
}

describe('Systelab DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				CalendarModule,
				HttpClientModule,
				SystelabTranslateModule],
			declarations: [TouchspinComponent,
				Datepicker,
				ButtonComponent,
				DatepickerTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DatepickerTestComponent);
		fixture.detectChanges();
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial day value of 20', () => {
		expect(fixture.componentInstance.currentDate.getDate())
			.toBe(fixture.componentInstance.defaultDay);
	});

	it('should show a popup when click', () => {
		clickOnInput(fixture);
		expect(isVisiblePopupVisible(fixture))
			.toBeTruthy();
	});

	it('should set today when click on today button', () => {
		clickOnInput(fixture);
		clickOn(fixture, '#today');
		expect(fixture.componentInstance.currentDate.getDay())
			.toEqual(new Date().getDay());
		expect(fixture.componentInstance.currentDate.getMonth())
			.toEqual(new Date().getMonth());
		expect(fixture.componentInstance.currentDate.getFullYear())
			.toEqual(new Date().getFullYear());
	});

	it('should set previous year if I click on previous year button', () => {
		clickOnInput(fixture);
		const yearBefore = getVisibleYearInPopup(fixture);
		clickOn(fixture, '#previousYear');
		const yearAfter = getVisibleYearInPopup(fixture);
		expect(yearAfter)
			.toEqual(yearBefore - 1);
	});

	it('should set next year if I click on next year button', () => {
		clickOnInput(fixture);
		const yearBefore = getVisibleYearInPopup(fixture);
		clickOn(fixture, '#nextYear');
		const yearAfter = getVisibleYearInPopup(fixture);
		expect(yearAfter)
			.toEqual(yearBefore + 1);
	});

	xit('should set previous month if I click on previous month button', () => {
		clickOnInput(fixture);
		clickOn(fixture, '#previousMonth');
		const monthAfter = getVisibleMonthInPopup(fixture);
		expect(monthAfter)
			.toEqual('COMMON_SEPTEMBER ');
	});

	xit('should set next month if I click on next month button', () => {
		clickOnInput(fixture);
		clickOn(fixture, '#nextMonth');
		const monthAfter = getVisibleMonthInPopup(fixture);
		expect(monthAfter)
			.toEqual('COMMON_NOVEMBER ');
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, new Date(fixture.componentInstance.defaultYear, fixture.componentInstance.defaultMonth,
			fixture.componentInstance.defaultDay + 1, fixture.componentInstance.defaultHours, fixture.componentInstance.defaultMinutes));
		expect(fixture.componentInstance.currentDate.getDate())
			.toBe(fixture.componentInstance.defaultDay + 1);
	});

	it('should increment by 2 days when entering 2d', () => {
		enterText(fixture, '2d');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(2);
	});

	it('should decrement by 2 days when entering -2d', () => {
		enterText(fixture, '-2d');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(-2);
	});
	it('should increment by 14 days when entering 2w', () => {
		enterText(fixture, '2w');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(14);
	});

	it('should increment by 3 months when entering 3m', () => {
		enterText(fixture, '3m');
		expect(differenceInCalendarMonths(fixture.componentInstance.currentDate, new Date()))
			.toBe(3);
	});

	it('should increment by 3 years when entering 3y', () => {
		enterText(fixture, '3y');
		expect(differenceInCalendarYears(fixture.componentInstance.currentDate, new Date()))
			.toBe(3);
	});

	it('should show red background when entering a past date', () => {
		enterText(fixture, '-2d');
		expect(isRedBackground(fixture))
			.toBeTruthy();
	});

	it('should not show red background when entering a future date', () => {
		enterText(fixture, '2d');
		expect(isRedBackground(fixture))
			.toBeFalsy();
	});

	it('should not show red background when entering today', () => {
		clickOnInput(fixture);
		clickOn(fixture, '#today');
		expect(isRedBackground(fixture))
			.toBeFalsy();
	});

	it('should show date format on error if showDateFormatOnError is true', () => {
		fixture.componentInstance.showDateFormatOnError = true;
		enterText(fixture, '20/02/1986');
		expect(isPlaceholderEmpty(fixture))
			.toBeFalsy();
		expect(getPlaceholder(fixture))
			.toBe('BAD_DATE_FORMAT m/d/y');
		expect
	});

	it('should have placeholder to empty', () => {
		fixture.componentInstance.showDateFormatOnError = false;
		enterText(fixture, '20/02/1986');
		expect(isPlaceholderEmpty(fixture))
			.toBeTruthy();
		expect(isInputBorderRed(fixture))
			.toBeTruthy();
	});
});

function setValue(fixture: ComponentFixture<DatepickerTestComponent>, value: Date) {
	fixture.componentInstance.currentDate = value;
	fixture.detectChanges();
}

function enterText(fixture: ComponentFixture<DatepickerTestComponent>, text: string) {
	const inputComponent = fixture.debugElement.query(By.css('.p-inputtext')).nativeElement;
	inputComponent.value = text;
	inputComponent.dispatchEvent(new Event('keydown'));
	inputComponent.dispatchEvent(new Event('input'));
	inputComponent.dispatchEvent(new Event('keyup'));
	fixture.detectChanges();
	inputComponent.dispatchEvent(new Event('blur'));
	fixture.detectChanges();
}

function clickOnInput(fixture: ComponentFixture<DatepickerTestComponent>) {
	const button = fixture.debugElement.query(By.css('.p-inputtext')).nativeElement;
	button.click();
	fixture.detectChanges();
}

function isVisiblePopupVisible(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
	return (fixture.debugElement.nativeElement.querySelector('.p-datepicker-calendar-container') !== null);
}

function getVisibleYearInPopup(fixture: ComponentFixture<DatepickerTestComponent>) {
	return parseInt(fixture.debugElement.nativeElement.querySelector('.p-datepicker-year').firstChild.nodeValue, 10);
}

function getVisibleMonthInPopup(fixture: ComponentFixture<DatepickerTestComponent>) {
	return fixture.debugElement.nativeElement.querySelector('.p-datepicker-month').firstChild.nodeValue;
}

function isRedBackground(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
	return (fixture.debugElement.nativeElement.querySelector('.warning-date') !== null);
}

function isPlaceholderEmpty(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
	return (fixture.debugElement.nativeElement.querySelector('input').placeholder === '');
}

function getPlaceholder(fixture: ComponentFixture<DatepickerTestComponent>): string {
	return fixture.debugElement.nativeElement.querySelector('input').placeholder;
}

function isInputBorderRed(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
	return (fixture.debugElement.nativeElement.querySelector('.date-error') !== null);
}

function clickOn(fixture: ComponentFixture<DatepickerTestComponent>, id: string) {
	const button = fixture.debugElement.query(By.css(id)).nativeElement;
	button.click();
	fixture.detectChanges();
}
