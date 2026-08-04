import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerCalendarComponent, DatePickerTranslations } from './datepicker-calendar.component';

const ES_TRANSLATIONS: DatePickerTranslations = {
	dayNames:        ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	dayNamesShort:   ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
	dayNamesMin:     ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
	monthNames:      ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
		'Noviembre', 'Diciembre'],
	monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
};

@Component({
	selector:   'systelab-datepicker-calendar-test',
	template:   `
		            <systelab-datepicker-calendar [(ngModel)]="currentDate" [dateFormat]="dateFormat"
		                                          [firstDayOfWeek]="firstDayOfWeek" [translations]="translations"
		                                          [minDate]="minDate" [maxDate]="maxDate"
		                                          [showTime]="showTime" [timeOnly]="timeOnly"
		                                          [selectOtherMonths]="selectOtherMonths"
		                                          [showOtherMonths]="showOtherMonths"
		                                          (onSelect)="selectedDate = $event">
		            </systelab-datepicker-calendar>
	            `,
	standalone: false
})
export class DatepickerCalendarTestComponent {
	public currentDate: Date = new Date(2020, 2, 15);
	public dateFormat = 'dd/mm/yy';
	public firstDayOfWeek = 1;
	public translations = ES_TRANSLATIONS;
	public minDate: Date;
	public maxDate: Date;
	public showTime = false;
	public timeOnly = false;
	public selectOtherMonths = false;
	public showOtherMonths = true;
	public selectedDate: Date;
}

describe('Systelab DatepickerCalendarComponent', () => {

	let fixture: ComponentFixture<DatepickerCalendarTestComponent>;
	let calendar: DatepickerCalendarComponent;

	const getInput = (): HTMLInputElement => fixture.debugElement.query(By.css('input')).nativeElement;

	const openPanel = (): void => {
		getInput().click();
		fixture.detectChanges();
	};

	const getPanel = (): HTMLElement => fixture.debugElement.nativeElement.querySelector('.slab-datepicker-panel');

	const getDayCells = (): Array<HTMLElement> =>
		Array.from(fixture.debugElement.nativeElement.querySelectorAll('.slab-datepicker-day'));

	const getDay = (day: number): HTMLElement =>
		getDayCells().find(cell => !cell.parentElement.classList.contains('slab-datepicker-other-month') &&
			cell.textContent.trim() === String(day));

	const type = (text: string): void => {
		const input = getInput();
		input.value = text;
		input.dispatchEvent(new Event('keydown'));
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DatepickerCalendarComponent, DatepickerCalendarTestComponent],
			imports:      [BrowserModule, BrowserAnimationsModule, FormsModule],
			providers:    [provideZoneChangeDetection()]
		}).compileComponents();
	});

	beforeEach(async () => {
		fixture = TestBed.createComponent(DatepickerCalendarTestComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();
		calendar = fixture.debugElement.query(By.directive(DatepickerCalendarComponent)).componentInstance;
	});

	afterEach(() => fixture.destroy());

	it('should instantiate', () => {
		expect(calendar).toBeDefined();
	});

	describe('input field', () => {

		it('should show the model value formatted with the given format', () => {
			expect(getInput().value).toEqual('15/03/2020');
		});

		it('should reformat the value when the format changes', () => {
			fixture.componentInstance.dateFormat = 'yy-mm-dd';
			fixture.detectChanges();
			expect(getInput().value).toEqual('2020-03-15');
		});

		it('should format day and month names with the given translations', () => {
			fixture.componentInstance.dateFormat = 'DD, d MM yy';
			fixture.detectChanges();
			expect(getInput().value).toEqual('Domingo, 15 Marzo 2020');
		});

		it('should be empty when there is no value', async () => {
			fixture.componentInstance.currentDate = null;
			fixture.detectChanges();
			await fixture.whenStable();
			expect(getInput().value).toEqual('');
		});
	});

	describe('typing', () => {

		it('should update the model with a valid date', () => {
			type('01/12/2019');
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2019, 11, 1));
		});

		it('should accept two digit years when the format asks for them', () => {
			fixture.componentInstance.dateFormat = 'dd/mm/y';
			fixture.detectChanges();
			type('01/12/19');
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2019, 11, 1));
		});

		it('should reject a two digit year when the format asks for four digits', () => {
			type('01/12/19');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});

		it('should reject a date that does not exist', () => {
			type('31/02/2019');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});

		it('should reject text that does not match the format', () => {
			type('not a date');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});

		it('should clear the model when the input is emptied', () => {
			type('');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});

		it('should keep the typed text when keepInvalid is set', () => {
			calendar.keepInvalid = true;
			type('nonsense');
			expect(fixture.componentInstance.currentDate as any).toEqual('nonsense');
		});

		it('should ignore input events not preceded by a keydown', () => {
			const input = getInput();
			input.value = '01/12/2019';
			input.dispatchEvent(new Event('input'));
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2020, 2, 15));
		});
	});

	describe('panel', () => {

		it('should not render the panel until it is opened', () => {
			expect(getPanel()).toBeNull();
		});

		it('should render the panel when the input is clicked', () => {
			openPanel();
			expect(getPanel()).not.toBeNull();
		});

		it('should render the panel when the input gets the focus', () => {
			getInput().dispatchEvent(new Event('focus'));
			fixture.detectChanges();
			expect(calendar.overlayVisible).toBeTruthy();
		});

		it('should close the panel when clicking outside', () => {
			openPanel();
			document.dispatchEvent(new MouseEvent('mousedown'));
			fixture.detectChanges();
			expect(calendar.overlayVisible).toBeFalsy();
			expect(getPanel()).toBeNull();
		});

		it('should close the panel on escape', () => {
			openPanel();
			getInput().dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape'}));
			fixture.detectChanges();
			expect(calendar.overlayVisible).toBeFalsy();
		});

		it('should render the panel inline without an input', () => {
			calendar.inline = true;
			calendar.ngOnInit();
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('input'))).toBeNull();
			expect(getPanel()).not.toBeNull();
		});
	});

	describe('day grid', () => {

		beforeEach(() => openPanel());

		it('should show the week day names starting on the configured first day of week', () => {
			const weekDays = Array.from(fixture.debugElement.nativeElement.querySelectorAll('.slab-datepicker-weekday'))
				.map((element: HTMLElement) => element.textContent.trim());
			expect(weekDays).toEqual(['L', 'M', 'X', 'J', 'V', 'S', 'D']);
		});

		it('should place the days of the month on the right week day', () => {
			// 1st of March 2020 was a Sunday, so with Monday as first day of week it is the 7th cell.
			const firstWeek = fixture.debugElement.nativeElement.querySelectorAll('tbody tr')[0];
			expect(firstWeek.children[6].textContent.trim()).toEqual('1');
		});

		it('should mark the selected day', () => {
			const selected = fixture.debugElement.nativeElement.querySelectorAll('.slab-datepicker-day-selected');
			expect(selected.length).toEqual(1);
			expect(selected[0].textContent.trim()).toEqual('15');
		});

		it('should show the days of the other months', () => {
			const otherMonth = fixture.debugElement.nativeElement.querySelectorAll('.slab-datepicker-other-month');
			expect(otherMonth.length).toBeGreaterThan(0);
			expect(otherMonth[0].children.length).toEqual(1);
		});

		it('should not render the days of the other months when showOtherMonths is false', () => {
			fixture.componentInstance.showOtherMonths = false;
			fixture.detectChanges();
			const otherMonth = fixture.debugElement.nativeElement.querySelectorAll('.slab-datepicker-other-month');
			expect(otherMonth.length).toBeGreaterThan(0);
			expect(otherMonth[0].children.length).toEqual(0);
		});

		it('should select a day and emit the selection', fakeAsync(() => {
			getDay(20).click();
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2020, 2, 20));
			expect(fixture.componentInstance.selectedDate).toEqual(new Date(2020, 2, 20));
			tick(200);
			fixture.detectChanges();
			expect(calendar.overlayVisible).toBeFalsy();
		}));

		it('should not select days out of the other months when selectOtherMonths is false', () => {
			const otherMonthDay = fixture.debugElement.nativeElement
				.querySelector('.slab-datepicker-other-month .slab-datepicker-day');
			expect(otherMonthDay.classList).toContain('slab-datepicker-day-disabled');
			otherMonthDay.click();
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2020, 2, 15));
		});

		it('should select days of the other months when selectOtherMonths is true', () => {
			fixture.componentInstance.selectOtherMonths = true;
			fixture.detectChanges();
			const otherMonthDay = fixture.debugElement.nativeElement
				.querySelector('.slab-datepicker-other-month .slab-datepicker-day');
			expect(otherMonthDay.classList).not.toContain('slab-datepicker-day-disabled');
		});

		it('should disable the days before minDate and after maxDate', () => {
			fixture.componentInstance.minDate = new Date(2020, 2, 10);
			fixture.componentInstance.maxDate = new Date(2020, 2, 20);
			fixture.detectChanges();
			expect(getDay(9).classList).toContain('slab-datepicker-day-disabled');
			expect(getDay(10).classList).not.toContain('slab-datepicker-day-disabled');
			expect(getDay(20).classList).not.toContain('slab-datepicker-day-disabled');
			expect(getDay(21).classList).toContain('slab-datepicker-day-disabled');
		});

		it('should not update the model when clicking a disabled day', () => {
			fixture.componentInstance.minDate = new Date(2020, 2, 10);
			fixture.detectChanges();
			getDay(9).click();
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2020, 2, 15));
		});
	});

	describe('navigation', () => {

		beforeEach(() => openPanel());

		it('should go to the previous month', () => {
			calendar.navBackward();
			expect(calendar.currentMonth).toEqual(1);
			expect(calendar.currentYear).toEqual(2020);
		});

		it('should go to the previous year when going back from january', () => {
			calendar.currentMonth = 0;
			calendar.navBackward();
			expect(calendar.currentMonth).toEqual(11);
			expect(calendar.currentYear).toEqual(2019);
		});

		it('should go to the next month', () => {
			calendar.navForward();
			expect(calendar.currentMonth).toEqual(3);
		});

		it('should go to the next year when going forward from december', () => {
			calendar.currentMonth = 11;
			calendar.navForward();
			expect(calendar.currentMonth).toEqual(0);
			expect(calendar.currentYear).toEqual(2021);
		});

		it('should jump one year backward and forward', () => {
			calendar.navYearBackward();
			expect(calendar.currentYear).toEqual(2019);
			calendar.navYearForward();
			expect(calendar.currentYear).toEqual(2020);
		});

		it('should rebuild the grid when navigating', () => {
			calendar.navForward();
			fixture.detectChanges();
			expect(calendar.months[0].month).toEqual(3);
			expect(getDay(30)).toBeDefined();
			expect(getDay(31)).toBeUndefined();
		});

		it('should not navigate when it is disabled', () => {
			calendar.disabled = true;
			calendar.navForward();
			expect(calendar.currentMonth).toEqual(2);
		});
	});

	describe('time', () => {

		beforeEach(async () => {
			fixture.componentInstance.showTime = true;
			fixture.componentInstance.currentDate = new Date(2020, 2, 15, 10, 30);
			fixture.detectChanges();
			await fixture.whenStable();
			fixture.detectChanges();
			openPanel();
		});

		it('should append the time to the input value', () => {
			expect(getInput().value).toEqual('15/03/2020 10:30');
		});

		it('should show the time picker', () => {
			expect(fixture.debugElement.nativeElement.querySelector('.slab-datepicker-time-picker')).not.toBeNull();
			expect(calendar.hourDisplay).toEqual('10');
			expect(calendar.minuteDisplay).toEqual('30');
		});

		it('should increment and decrement the hour', () => {
			const buttons = fixture.debugElement.nativeElement
				.querySelectorAll('.slab-datepicker-hour-picker button');
			buttons[0].dispatchEvent(new MouseEvent('mousedown'));
			buttons[0].dispatchEvent(new MouseEvent('mouseup'));
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate.getHours()).toEqual(11);

			buttons[1].dispatchEvent(new MouseEvent('mousedown'));
			buttons[1].dispatchEvent(new MouseEvent('mouseup'));
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate.getHours()).toEqual(10);
		});

		it('should increment the minute and roll over', () => {
			calendar.setTime(23, 59);
			const buttons = fixture.debugElement.nativeElement
				.querySelectorAll('.slab-datepicker-minute-picker button');
			buttons[0].dispatchEvent(new MouseEvent('mousedown'));
			buttons[0].dispatchEvent(new MouseEvent('mouseup'));
			fixture.detectChanges();
			expect(fixture.componentInstance.currentDate.getMinutes()).toEqual(0);
		});

		it('should parse a date and a time', () => {
			type('01/12/2019 08:45');
			expect(fixture.componentInstance.currentDate).toEqual(new Date(2019, 11, 1, 8, 45));
		});

		it('should reject an invalid time', () => {
			type('01/12/2019 25:45');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});

		it('should keep the time inside the minDate boundary', () => {
			fixture.componentInstance.minDate = new Date(2020, 2, 15, 12, 0);
			fixture.detectChanges();
			calendar.setTime(11, 0);
			calendar.decrementHour(new Event('click'));
			expect(calendar.currentHour).toEqual(12);
			expect(calendar.currentMinute).toEqual(0);
		});
	});

	describe('time only', () => {

		beforeEach(async () => {
			fixture.componentInstance.timeOnly = true;
			fixture.componentInstance.currentDate = new Date(2020, 2, 15, 10, 30);
			fixture.detectChanges();
			await fixture.whenStable();
			fixture.detectChanges();
			openPanel();
		});

		it('should show only the time in the input', () => {
			expect(getInput().value).toEqual('10:30');
		});

		it('should not show the day grid', () => {
			expect(fixture.debugElement.nativeElement.querySelector('.slab-datepicker-calendar-container')).toBeNull();
			expect(fixture.debugElement.nativeElement.querySelector('.slab-datepicker-time-picker')).not.toBeNull();
		});

		it('should parse a time keeping today as date', () => {
			type('08:45');
			expect(fixture.componentInstance.currentDate.getHours()).toEqual(8);
			expect(fixture.componentInstance.currentDate.getMinutes()).toEqual(45);
		});
	});

	describe('clear', () => {

		it('should reset the value and the input', () => {
			calendar.clear();
			fixture.detectChanges();
			expect(calendar.value).toBeNull();
			expect(getInput().value).toEqual('');
			expect(fixture.componentInstance.currentDate).toBeNull();
		});
	});

	describe('formatting and parsing', () => {

		it('should format with every supported token', () => {
			const date = new Date(2020, 2, 5);
			expect(calendar.formatDate(date, 'd/m/y')).toEqual('5/3/20');
			expect(calendar.formatDate(date, 'dd/mm/yy')).toEqual('05/03/2020');
			expect(calendar.formatDate(date, 'D DD M MM')).toEqual('Jue Jueves Mar Marzo');
			expect(calendar.formatDate(date, 'oo')).toEqual('065');
			expect(calendar.formatDate(date, '\'day\' dd')).toEqual('day 05');
			expect(calendar.formatDate(date, '@')).toEqual(String(date.getTime()));
		});

		it('should parse with every supported token', () => {
			expect(calendar.parseDate('5/3/20', 'd/m/y')).toEqual(new Date(2020, 2, 5));
			expect(calendar.parseDate('05/03/2020', 'dd/mm/yy')).toEqual(new Date(2020, 2, 5));
			expect(calendar.parseDate('Jueves 05 Marzo 2020', 'DD dd MM yy')).toEqual(new Date(2020, 2, 5));
			expect(calendar.parseDate('065/2020', 'oo/yy')).toEqual(new Date(2020, 2, 5));
		});

		it('should throw when the value does not match the format', () => {
			expect(() => calendar.parseDate('05-03-2020', 'dd/mm/yy')).toThrow();
			expect(() => calendar.parseDate('05/03/2020extra', 'dd/mm/yy')).toThrow();
			expect(() => calendar.parseDate('30/02/2020', 'dd/mm/yy')).toThrow();
		});

		it('should return null for an empty value', () => {
			expect(calendar.parseDate('', 'dd/mm/yy')).toBeNull();
		});

		it('should parse and format times', () => {
			expect(calendar.parseTime('08:45')).toEqual({hour: 8, minute: 45});
			expect(() => calendar.parseTime('08')).toThrow();
			expect(() => calendar.parseTime('24:00')).toThrow();
			expect(() => calendar.parseTime('08:60')).toThrow();
			expect(calendar.formatTime(new Date(2020, 2, 5, 8, 5))).toEqual('08:05');
		});
	});

	describe('selectable', () => {

		it('should honour minDate, maxDate, disabledDates and disabledDays', () => {
			calendar.minDate = new Date(2020, 2, 10);
			calendar.maxDate = new Date(2020, 2, 20);
			expect(calendar.isSelectable(9, 2, 2020, false)).toBeFalsy();
			expect(calendar.isSelectable(15, 2, 2020, false)).toBeTruthy();
			expect(calendar.isSelectable(21, 2, 2020, false)).toBeFalsy();
			expect(calendar.isSelectable(15, 1, 2020, false)).toBeFalsy();
			expect(calendar.isSelectable(15, 2, 2019, false)).toBeFalsy();

			calendar.minDate = undefined;
			calendar.maxDate = undefined;
			calendar.disabledDates = [new Date(2020, 2, 15)];
			expect(calendar.isDateDisabled(15, 2, 2020)).toBeTruthy();
			expect(calendar.isSelectable(15, 2, 2020, false)).toBeFalsy();

			calendar.disabledDates = undefined;
			calendar.disabledDays = [0, 6];
			expect(calendar.isSelectable(15, 2, 2020, false)).toBeFalsy();
			expect(calendar.isSelectable(16, 2, 2020, false)).toBeTruthy();
		});
	});
});
