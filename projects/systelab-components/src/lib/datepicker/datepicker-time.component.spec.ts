import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DatepickerTimeComponent } from './datepicker-time.component';
import { TouchspinComponent } from '../spinner/spinner.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { DatepickerComponent } from './datepicker.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'systelab-datepicker-time-test',
    template: `
        <div>
            <systelab-date-time [(currentDate)]="currentDate"></systelab-date-time>
            <systelab-date-time [(currentDate)]="currentDateWithReset" [resetTimeWhenChangingCurrentDate]="true"></systelab-date-time>
            <systelab-date-time [(currentDate)]="currentDate" [showCalendar]="false"></systelab-date-time>
            <systelab-button class="mt-2 mr-1" (click)="resetDatePickerTime()">Reset value</systelab-button>
            <systelab-button class="mt-2 mr-1" (click)="setCurrentDate()">Set Current Date</systelab-button>
        </div>
	`,
    styles: [],
    standalone: false
})
export class DatepickerTimeTestComponent {

	public defaultYear = 2018;
	public defaultMonth = 9;
	public defaultDay = 20;
	public defaultHours = 14;
	public defaultMinutes = 5;

	public updatedHours = 11;
	public updatedMinutes = 3;

	public currentDate: Date;
	public currentDateWithReset: Date;
	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
		this.currentDateWithReset = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}

	public resetDatePickerTime() {
		this.currentDate = undefined;
	}

	public setCurrentDate() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.updatedHours, this.updatedMinutes);
		this.currentDateWithReset = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.updatedHours, this.updatedMinutes);
	}
}


const resetDatepickerTime = (fixture: ComponentFixture<DatepickerTimeTestComponent>) => {
	fixture.componentInstance.resetDatePickerTime();
	fixture.detectChanges();
};

const setCurrentDate = (fixture: ComponentFixture<DatepickerTimeTestComponent>) => {
	fixture.componentInstance.setCurrentDate();
	fixture.detectChanges();
};


const setValue = (fixture: ComponentFixture<DatepickerTimeTestComponent>, value: Date) => {
	fixture.componentInstance.currentDate = value;
	fixture.detectChanges();
};

const setHourValue = (fixture: ComponentFixture<DatepickerTimeTestComponent>, value: number) => {
	fixture.componentInstance.currentDate.setHours(value);
	fixture.detectChanges();
};

const setMinuteValue = (fixture: ComponentFixture<DatepickerTimeTestComponent>, value: number) => {
	fixture.componentInstance.currentDate.setMinutes(value);
	fixture.detectChanges();
};

const clickTouchSpinnerButton = (fixture: ComponentFixture<DatepickerTimeTestComponent>, spinnerID: string, buttonID: string) => {
	const button = fixture.debugElement.nativeElement.querySelector(spinnerID).querySelector(buttonID);
	button.click();
	fixture.detectChanges();
};

describe('Systelab DatepickerTimeComponent', () => {
	let fixture: ComponentFixture<DatepickerTimeTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TouchspinComponent,
        DatepickerComponent,
        ButtonComponent,
        DatepickerTimeComponent,
        DatepickerTimeTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule,
        CalendarModule,
        SystelabTranslateModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
	});

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
		clickTouchSpinnerButton(fixture, '#hours', '.spinner-button-minus');
		expect(fixture.componentInstance.currentDate.getHours()).toBe(fixture.componentInstance.defaultHours - 1);
	});

	it('currentHours should increment the value if hours plus button is clicked (+1)', () => {
		clickTouchSpinnerButton(fixture, '#hours', '.spinner-button-plus');
		expect(fixture.componentInstance.currentDate.getHours()).toBe(fixture.componentInstance.defaultHours + 1);
	});

	it('currentMinutes should decrement the value if minutes minus button is clicked (-1)', () => {
		clickTouchSpinnerButton(fixture, '#minutes', '.spinner-button-minus');
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(fixture.componentInstance.defaultMinutes - 1);
	});

	it('currentMinutes should increment the value if minutes plus button is clicked (+1)', () => {
		clickTouchSpinnerButton(fixture, '#minutes', '.spinner-button-plus');
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(fixture.componentInstance.defaultMinutes + 1);
	});

	it('update current date and see different behaviours in hour', () => {
		setCurrentDate(fixture);

		expect(fixture.componentInstance.currentDate.getHours()).toBe(14);
		expect(fixture.componentInstance.currentDate.getMinutes()).toBe(5);
		expect(fixture.componentInstance.currentDateWithReset.getHours()).toBe(11);
		expect(fixture.componentInstance.currentDateWithReset.getMinutes()).toBe(3);
	});

	it('should be two calendars because one of the datepicker has showCalendar false', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('.p-calendar').length).toEqual(2);
	});

});
