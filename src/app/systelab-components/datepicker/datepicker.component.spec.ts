import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { TouchspinComponent } from '../spinner/spinner.component';
import { SystelabTranslateModule } from 'systelab-translate';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';
import { Datepicker } from './datepicker.component';

@Component({
	selector: 'systelab-datepicker-test',
	template: `
                <div>
                    <systelab-datepicker [(currentDate)]="currentDate"></systelab-datepicker>
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

	public currentDate: Date;

	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}
}

describe('Systelab DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
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
				DatepickerTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DatepickerTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial day value of 20', () => {
		expect(fixture.componentInstance.currentDate.getDate())
			.toBe(fixture.componentInstance.defaultDay);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, new Date(fixture.componentInstance.defaultYear, fixture.componentInstance.defaultMonth,
			fixture.componentInstance.defaultDay + 1, fixture.componentInstance.defaultHours, fixture.componentInstance.defaultMinutes));
		expect(fixture.componentInstance.currentDate.getDate())
			.toBe(fixture.componentInstance.defaultDay + 1);
	});

	it('should increment by 2 days when entering 2d', () => {
		enterText(fixture, '2d');
		console.log(fixture.componentInstance.currentDate);
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

	it('should 011219 be 01/12/2019', () => {
		enterText(fixture, '011219');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/12/2019'));
	});

	it('should 01122019 be 01/12/2019', () => {
		enterText(fixture, '01122019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/12/2019'));
	});

	it('should 1/12/2019 be 01/12/2019', () => {
		enterText(fixture, '1/12/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/12/2019'));
	});
	it('should 1.6.19 be 01/06/2019', () => {
		enterText(fixture, '1.6.19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/06/2019'));
	});
	it('should 1-6-19 be 01/06/2019', () => {
		enterText(fixture, '1-6-19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/06/2019'));
	});
	it('should 1619 be 01/06/2019', () => {
		enterText(fixture, '1619');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date('01/06/2019'));
	});

});

function setValue(fixture: ComponentFixture<DatepickerTestComponent>, value: Date) {
	fixture.componentInstance.currentDate = value;
	fixture.detectChanges();
}

function enterText(fixture: ComponentFixture<DatepickerTestComponent>, text: string) {
	const inputComponent = fixture.debugElement.query(By.css('.ui-inputtext')).nativeElement;
	inputComponent.value = text;
	inputComponent.dispatchEvent(new Event('keydown'));
	inputComponent.dispatchEvent(new Event('input'));
	inputComponent.dispatchEvent(new Event('keyup'));
	fixture.detectChanges();
	inputComponent.dispatchEvent(new Event('blur'));
	fixture.detectChanges();
}
