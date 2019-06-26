import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerTime } from './datepicker-time.component';
import { ButtonModule, CalendarModule } from 'primeng/primeng';
import { TouchspinComponent } from '../spinner/spinner.component';
import { SystelabTranslateModule } from 'systelab-translate';

@Component({
	selector: 'systelab-datepicker-time-test',
	template: `
        <div>
            <systelab-date-time
                    [(currentDate)]="currentDate" [(currentHours)]="currentHoursStr"
                    [(currentMinutes)]="currentMinutesStr"></systelab-date-time>
            <button type="button" class="btn mt-2 mr-1" (click)="resetDatePickerTime()">Reset value
            </button>
        </div>
	`,
	styles: []
})
export class DatepickerTimeTestComponent {
	public currentDate: Date;
	public currentHoursStr: string;
	public currentMinutesStr: string;

	constructor() {
		this.currentDate = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.currentHoursStr = '14';
		this.currentMinutesStr = '05';
	}

	resetDatePickerTime() {
		this.currentDate = undefined;
	}
}

describe('Systelab DatepickerTime', () => {
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
			declarations: [TouchspinComponent, DatepickerTime, DatepickerTimeTestComponent]
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
		expect(fixture.componentInstance.currentDate.getDate()).toEqual(20);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, new Date(2018, 9, 21, 14, 15, 30, 0));
		expect(fixture.componentInstance.currentDate.getDate()).toEqual(21);
	});

	it('should have the changed value if there is a change in the hour value', () => {
		setHourValue(fixture, '16');
		async(() => expect(fixture.componentInstance.currentDate.getHours()).toEqual(16));
	});

	it('should have the changed value if there is a change in the minutes value', () => {
		setMinuteValue(fixture, '59');
		async(() => expect(fixture.componentInstance.currentDate.getMinutes()).toEqual(59));
	});

	it('currentDate should be undefined if there is a reset action', () => {
		resetDatepickerTime(fixture);
		expect(fixture.componentInstance.currentDate).toBeFalsy();
	});

	it('currentHours should be "00" if there is a reset action', () => {
		resetDatepickerTime(fixture);
		async(() => expect(fixture.componentInstance.currentHoursStr).toEqual('00'));
	});

	it('currentMinutes should be "00" if there is a reset action', () => {
		resetDatepickerTime(fixture);
		async(() => expect(fixture.componentInstance.currentMinutesStr).toEqual('00'));
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

function setHourValue(fixture: ComponentFixture<DatepickerTimeTestComponent>, value: string) {
	fixture.componentInstance.currentHoursStr = value;
	fixture.detectChanges();
}

function setMinuteValue(fixture: ComponentFixture<DatepickerTimeTestComponent>, value: string) {
	fixture.componentInstance.currentMinutesStr = value;
	fixture.detectChanges();
}

