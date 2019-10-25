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
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { of } from 'rxjs';

export class USMockI18nService {
	public get(key: string) {
		return of(key);
	}
	public getFirstDayOfWeek() {
		return 0;
	}

	public getDateFormatForDatePicker() {
		return 'mm/dd/yy';
	}

	public getCurrentLanguage() {
		return 'en-US';
	}
}

export class ESMockI18nService {
	public get(key: string) {
		return of(key);
	}

	public getFirstDayOfWeek() {
		return 1;
	}

	public getDateFormatForDatePicker() {
		return 'dd/mm/yy';
	}

	public getCurrentLanguage() {
		return 'es-ES';
	}
}

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

describe('Systelab US DatepickerComponent', () => {
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
				DatepickerTestComponent],
			providers: [{provide: I18nService, useClass: USMockI18nService}]
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

	it('should 12/25/2019 be 25 Dec 2019', () => {
		enterText(fixture, '12/25/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});

	xit('should 011219 be 12 Jan 2019', () => {
		enterText(fixture, '011219');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});

	xit('should 01122019 be 12 Jan 2019', () => {
		enterText(fixture, '01122019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});

	it('should 1/12/2019 be 01 Dec 2019', () => {
		enterText(fixture, '1/12/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});
	it('should 1.6.19 be null', () => {
		enterText(fixture, '1.6.19');
		expect(fixture.componentInstance.currentDate).toBeNull();
	});
	it('should 1-6-19 be null', () => {
		enterText(fixture, '1-6-19');
		expect(fixture.componentInstance.currentDate).toBeNull();
	});
	xit('should 2619 be 6 Feb 2019', () => {
		enterText(fixture, '2619');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 1, 6));
	});

});


describe('Systelab ES DatepickerComponent', () => {
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
				DatepickerTestComponent],
			providers:    [{provide: I18nService, useClass: ESMockI18nService}]
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

	it('should 25/12/2019 be 25 Dec 2019', () => {
		enterText(fixture, '25/12/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});
	xit('should 251219 be 25 Dec 2019', () => {
		enterText(fixture, '251219');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});
	xit('should 01122019 be 01 Dec 2019', () => {
		enterText(fixture, '01122019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 1.6.19 be null', () => {
		enterText(fixture, '1.6.19');
		expect(fixture.componentInstance.currentDate).toBeNull();
	});
	it('should 1-6-19 be null', () => {
		enterText(fixture, '1-6-19');
		expect(fixture.componentInstance.currentDate).toBeNull();
	});
	xit('should 1619 be 01 Jun 2019', () => {
		enterText(fixture, '1619');
		expect(fixture.componentInstance.currentDate).toEqual(new Date(2019, 5, 1));
	});

});

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
