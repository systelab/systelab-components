import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';
import { ButtonModule } from 'primeng/button';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { SystelabTranslateModule } from 'systelab-translate';
import { ButtonComponent } from '../button/button.component';
import { TouchspinComponent } from '../spinner/spinner.component';
import { DatepickerComponent } from './datepicker.component';

@Component({
    selector: 'systelab-datepicker-test',
    template: `
                  <div>
                      <systelab-datepicker [(currentDate)]="currentDate" [showTodayButton]="showTodayButton"
                                           [markPreviousAfterDate]="true"
                      ></systelab-datepicker>
                  </div>
			  `,
    styles: [],
    standalone: false
})
export class DatepickerTestComponent {

	public defaultYear = 2018;
	public defaultMonth = 9;
	public defaultDay = 20;
	public defaultHours = 14;
	public defaultMinutes = 5;
	public error = true;
	public formatError = false;
	public showTodayButton = true;

	public currentDate: Date;

	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}
}

export class AuxFunctionClass {
	public static setValue(fixture: ComponentFixture<DatepickerTestComponent>, value: Date): void {
		fixture.componentInstance.currentDate = value;
		fixture.detectChanges();
	}

	public static enterText(fixture: ComponentFixture<DatepickerTestComponent>, text: string): void {
		const inputComponent = fixture.debugElement.query(By.css('.p-inputtext')).nativeElement;
		inputComponent.value = text;
		inputComponent.dispatchEvent(new Event('keydown'));
		inputComponent.dispatchEvent(new Event('input'));
		inputComponent.dispatchEvent(new Event('keyup'));
		fixture.detectChanges();
		inputComponent.dispatchEvent(new Event('blur'));
		fixture.detectChanges();
	}

	public static clickOnInput(fixture: ComponentFixture<DatepickerTestComponent>): void {
		const button = fixture.debugElement.query(By.css('.p-inputtext')).nativeElement;
		button.click();
		fixture.detectChanges();
	}

	public static isVisiblePopupVisible(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
		return (fixture.debugElement.nativeElement.querySelector('.p-datepicker-calendar-container') !== null);
	}

	public static getVisibleYearInPopup(fixture: ComponentFixture<DatepickerTestComponent>): number {
		return parseInt(fixture.debugElement.nativeElement.querySelector('.p-datepicker-year').firstChild.nodeValue, 10);
	}

	public static getVisibleMonthInPopup(fixture: ComponentFixture<DatepickerTestComponent>): string {
		return fixture.debugElement.nativeElement.querySelector('.p-datepicker-month').firstChild.nodeValue;
	}

	public static isRedBackground(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
		return (fixture.debugElement.nativeElement.querySelector('.warning-date') !== null);
	}

	public static isInputBorderRed(fixture: ComponentFixture<DatepickerTestComponent>): boolean {
		return (fixture.debugElement.nativeElement.querySelector('.date-error') !== null);
	}

	public static clickOn(fixture: ComponentFixture<DatepickerTestComponent>, id: string): void {
		const button = fixture.debugElement.query(By.css(id)).nativeElement;
		button.click();
		fixture.detectChanges();
	}

	public static isSameDate(dateOne: Date, dateTwo: Date): boolean {
		if (!dateOne || !dateTwo) {
			return false;
		}
		if (dateOne.getDate() !== dateTwo.getDate()) {
			return false;
		}
		if (dateOne.getMonth() !== dateTwo.getMonth()) {
			return false;
		}
		return dateOne.getFullYear() === dateTwo.getFullYear();
	}

	public static isSameHourAndMinute(dateOne: Date, dateTwo: Date): boolean {
		if (!dateOne || !dateTwo) {
			return false;
		}
		if (dateOne.getHours() !== dateTwo.getHours()) {
			return false;
		}
		return dateOne.getMinutes() === dateTwo.getMinutes();
	}
}

describe('Systelab DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;
	let fixture2: ComponentFixture<DatepickerComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TouchspinComponent,
        DatepickerComponent,
        ButtonComponent,
        DatepickerTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule,
        CalendarModule,
        SystelabTranslateModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
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
		AuxFunctionClass.clickOnInput(fixture);
		expect(AuxFunctionClass.isVisiblePopupVisible(fixture))
			.toBeTruthy();
	});

	it('should set today when click on today button', () => {
		AuxFunctionClass.clickOnInput(fixture);
		AuxFunctionClass.clickOn(fixture, '#today');
		expect(fixture.componentInstance.currentDate.getDay())
			.toEqual(new Date().getDay());
		expect(fixture.componentInstance.currentDate.getMonth())
			.toEqual(new Date().getMonth());
		expect(fixture.componentInstance.currentDate.getFullYear())
			.toEqual(new Date().getFullYear());
	});

	it('should set previous year if I click on previous year button', () => {
		AuxFunctionClass.clickOnInput(fixture);
		const yearBefore = AuxFunctionClass.getVisibleYearInPopup(fixture);
		AuxFunctionClass.clickOn(fixture, '#previousYear');
		const yearAfter = AuxFunctionClass.getVisibleYearInPopup(fixture);
		expect(yearAfter)
			.toEqual(yearBefore - 1);
	});

	it('should set next year if I click on next year button', () => {
		AuxFunctionClass.clickOnInput(fixture);
		const yearBefore = AuxFunctionClass.getVisibleYearInPopup(fixture);
		AuxFunctionClass.clickOn(fixture, '#nextYear');
		const yearAfter = AuxFunctionClass.getVisibleYearInPopup(fixture);
		expect(yearAfter)
			.toEqual(yearBefore + 1);
	});

	xit('should set previous month if I click on previous month button', () => {
		AuxFunctionClass.clickOnInput(fixture);
		AuxFunctionClass.clickOn(fixture, '#previousMonth');
		const monthAfter = AuxFunctionClass.getVisibleMonthInPopup(fixture);
		expect(monthAfter)
			.toEqual('COMMON_SEPTEMBER ');
	});

	xit('should set next month if I click on next month button', () => {
		AuxFunctionClass.clickOnInput(fixture);
		AuxFunctionClass.clickOn(fixture, '#nextMonth');
		const monthAfter = AuxFunctionClass.getVisibleMonthInPopup(fixture);
		expect(monthAfter)
			.toEqual('COMMON_NOVEMBER ');
	});

	it('should set next month +1 when calling nextmonth and current month < 11', () => {
		fixture2 = TestBed.createComponent(DatepickerComponent);
		fixture2.detectChanges();
		fixture2.componentInstance.currentCalendar.currentMonth = 9;
		fixture2.componentInstance.nextMonth();
		expect(fixture2.componentInstance.currentCalendar.currentMonth).toBe(10);
	});

	it('should set next month to 0 when calling nextmonth and current month >= 11', () => {
		fixture2 = TestBed.createComponent(DatepickerComponent);
		fixture2.detectChanges();
		fixture2.componentInstance.currentCalendar.currentMonth = 11;
		fixture2.componentInstance.nextMonth();
		expect(fixture2.componentInstance.currentCalendar.currentMonth).toBe(0);
	});

	it('should have the changed value if there is a change', () => {
		AuxFunctionClass.setValue(fixture, new Date(fixture.componentInstance.defaultYear, fixture.componentInstance.defaultMonth,
			fixture.componentInstance.defaultDay + 1, fixture.componentInstance.defaultHours, fixture.componentInstance.defaultMinutes));
		expect(fixture.componentInstance.currentDate.getDate())
			.toBe(fixture.componentInstance.defaultDay + 1);
	});

	it('should increment by 2 days when entering 2d', () => {
		AuxFunctionClass.enterText(fixture, '2d');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(2);
	});

	it('should increment by 5 days when entering 5d', () => {
		AuxFunctionClass.enterText(fixture, '5d');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(5);
	});

	it('should decrement by 2 days when entering -2d', () => {
		AuxFunctionClass.enterText(fixture, '-2d');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(-2);
	});
	it('should increment by 14 days when entering 2w', () => {
		AuxFunctionClass.enterText(fixture, '2w');
		expect(differenceInCalendarDays(fixture.componentInstance.currentDate, new Date()))
			.toBe(14);
	});

	it('should increment by 3 months when entering 3m', () => {
		AuxFunctionClass.enterText(fixture, '3m');
		expect(differenceInCalendarMonths(fixture.componentInstance.currentDate, new Date()))
			.toBe(3);
	});

	it('should increment by 3 years when entering 3y', () => {
		AuxFunctionClass.enterText(fixture, '3y');
		expect(differenceInCalendarYears(fixture.componentInstance.currentDate, new Date()))
			.toBe(3);
	});

	it('should show red background when entering a past date', () => {
		AuxFunctionClass.enterText(fixture, '-2d');
		expect(AuxFunctionClass.isRedBackground(fixture))
			.toBeTruthy();
	});

	it('should not show red background when entering a future date', () => {
		AuxFunctionClass.enterText(fixture, '2d');
		expect(AuxFunctionClass.isRedBackground(fixture))
			.toBeFalsy();
	});

	it('should not show red background when entering today', () => {
		AuxFunctionClass.clickOnInput(fixture);
		AuxFunctionClass.clickOn(fixture, '#today');
		expect(AuxFunctionClass.isRedBackground(fixture))
			.toBeFalsy();
	});

	it('should show red border if error property is true', () => {
		fixture.componentInstance.formatError = true;
		AuxFunctionClass.enterText(fixture, '20/02/1986');
		expect(AuxFunctionClass.isInputBorderRed(fixture))
			.toBeTruthy();
	});

	it('yy-mm-dd format', () => {
		fixture2 = TestBed.createComponent(DatepickerComponent);
		fixture2.componentInstance.dateFormat = 'yy-mm-dd';
		fixture2.componentInstance.currentDate = new Date(1990, 10, 30);
		fixture2.detectChanges();

		expect(fixture2.componentInstance.language.dateFormatValue).toBe('yy-mm-dd');
		expect(fixture2.componentInstance.currentCalendar.dateFormat).toBe('yy-mm-dd');
	});

	it('should set error property on false if a date is selected', () => {
		fixture2 = TestBed.createComponent(DatepickerComponent);
		fixture2.detectChanges();
		fixture2.componentInstance.formatError = true;
		fixture2.componentInstance.currentDate = new Date('02/20/1986');
		fixture2.componentInstance.selectDate();
		expect(fixture2.componentInstance.formatError)
			.toBeFalsy();
		fixture2.destroy();
	});

	describe('Set of specs for datepicker with inputs withIntegratedTime and timeOnly active', () => {
		const setup = (isTimeOnly?: boolean) => {
			const fixtureDatepicker = TestBed.createComponent(DatepickerComponent);
			const datepickerComponent = fixtureDatepicker.componentInstance;
			datepickerComponent.withIntegratedTime = true;
			datepickerComponent.onlyTime = isTimeOnly;
			fixtureDatepicker.detectChanges();

			return {fixtureDatepicker, datepickerComponent};
		};

		it('Datepicker component parse date and hour', () => {
			const {datepickerComponent} = setup();
			const dateString = '3/30/2020 21:20';
			const expectedDate = new Date(dateString);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = dateString;
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			const isSameDateAndHour = AuxFunctionClass.isSameDate(expectedDate, datepickerComponent.currentDate) &&
				AuxFunctionClass.isSameHourAndMinute(expectedDate, datepickerComponent.currentDate);
			expect(datepickerComponent.formatError)
				.toBeFalsy();
			expect(isSameDateAndHour)
				.toBeTruthy();

		});

		it('Datepicker component parse only date', () => {
			const {datepickerComponent} = setup();
			const dateString = '3/30/2020';
			const expectedDate = new Date(dateString);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = dateString;
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			const isSameDate = AuxFunctionClass.isSameDate(expectedDate, datepickerComponent.currentDate);
			expect(datepickerComponent.formatError)
				.toBeFalsy();
			expect(isSameDate)
				.toBeTruthy();

		});

		it('Datepicker parsing incorrect format, format error', () => {
			const {datepickerComponent} = setup();
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '3/30/2020 : 5:11';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			expect(datepickerComponent.formatError)
				.toBeTruthy();

		});

		it('Datepicker only time, parsing incorrect hour, format error', () => {
			const {datepickerComponent} = setup(true);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '24:11';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			expect(datepickerComponent.formatError)
				.toBeTruthy();

		});

		it('Datepicker only time, parsing incorrect minute, format error', () => {
			const {datepickerComponent} = setup(true);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '4:66';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			expect(datepickerComponent.formatError)
				.toBeTruthy();

		});

		it('Datepicker only time, parsing correct time', () => {
			const {datepickerComponent} = setup(true);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '4:6';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			const expectedDate = new Date();
			expectedDate.setHours(4, 6);
			const isSameDate = AuxFunctionClass.isSameHourAndMinute(expectedDate, datepickerComponent.currentDate);
			expect(isSameDate)
				.toBeTruthy();
			expect(datepickerComponent.formatError)
				.toBeFalsy();

		});

	});

	describe('Set of specs for datepicker with inputs selectOtherMonths active', () => {
		const setup = (selectOtherMonths = false) => {
			const fixtureDatepicker = TestBed.createComponent(DatepickerComponent);
			const datepickerComponent = fixtureDatepicker.componentInstance;
			datepickerComponent.selectOtherMonths = selectOtherMonths;
			fixtureDatepicker.detectChanges();
			return {fixtureDatepicker, datepickerComponent};
		};

		it('Datepicker calendar display other months days but non selectable', () => {
			const {datepickerComponent} = setup( false);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '10/20/2022';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();

			expect(datepickerComponent.currentCalendar.isDateDisabled(4, 10, 2022))
				.toBeFalsy();
			expect(datepickerComponent.currentCalendar.isSelectable(4, 10, 2022, true))
				.toBeFalsy();
			expect(datepickerComponent.currentCalendar.isDateDisabled(30, 9, 2022))
				.toBeFalsy();
			expect(datepickerComponent.currentCalendar.isSelectable(30, 9, 2022, true))
				.toBeFalsy();

		});

		it('Datepicker calendar display other months days and are selectable', () => {
			const {datepickerComponent} = setup( true);
			datepickerComponent.currentCalendar.inputfieldViewChild.nativeElement.value = '10/20/2022';
			datepickerComponent.inputChanged = true;
			datepickerComponent.changeDate();
			expect(datepickerComponent.currentCalendar.isDateDisabled(30, 9, 2022))
				.toBeFalsy();
			expect(datepickerComponent.currentCalendar.isSelectable(30, 9, 2022, true))
				.toBeTruthy();
			expect(datepickerComponent.currentCalendar.isDateDisabled(4, 10, 2022))
				.toBeFalsy();
			expect(datepickerComponent.currentCalendar.isSelectable(4, 10, 2022, true))
				.toBeTruthy();

		});

	});

	describe('Set of specs for calendar with inputs showOtherMonths', () => {
		const setup = (showOtherMonths = true) => {

			const fixtureDatePicker = TestBed.createComponent(Calendar);
			const calendarComponent = fixtureDatePicker.componentInstance;

			 calendarComponent.showOtherMonths = showOtherMonths;
			fixtureDatePicker.detectChanges();

			const button = fixtureDatePicker.debugElement.query(By.css('.p-inputtext')).nativeElement;
			button.click();
			fixtureDatePicker.detectChanges();

			const datesContainer = fixtureDatePicker.debugElement.query(By.css('.p-datepicker-calendar-container'));
			const otherMonthDates = datesContainer.queryAll(By.css('.p-datepicker-other-month'));

			return {otherMonthDates};
		};


		it('Calendar show other months days', () => {
			const {otherMonthDates} = setup(true);

			for (const otherMonthDate of otherMonthDates) {
				expect(otherMonthDate.children.length)
					.toEqual(1);
				expect(otherMonthDate.children[0].name)
					.toEqual('span');
			}

		});

		it('Calendar do not show other months days', () => {
			const {otherMonthDates} = setup(false);

			for (const otherMonthDate of otherMonthDates) {
				expect(otherMonthDate.children.length)
					.toEqual(0);
				expect(otherMonthDate.children)
					.toEqual([]);
			}

		});

	});

	describe('Datepicker display with a specific format', () => {
		it('yy-mm-dd format', () => {
			fixture2 = TestBed.createComponent(DatepickerComponent);
			fixture2.componentInstance.dateFormat = 'yy-mm-dd';
			fixture2.componentInstance.currentDate = new Date(1990, 10, 30);
			fixture2.detectChanges();
	
			expect(fixture2.componentInstance.language.dateFormatValue).toBe('yy-mm-dd');
			expect(fixture2.componentInstance.currentCalendar.dateFormat).toBe('yy-mm-dd');
		});
	});
});

