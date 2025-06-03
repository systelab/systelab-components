import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { of } from 'rxjs';
import { I18nService, SystelabTranslateModule } from 'systelab-translate';
import { ButtonComponent } from '../button/button.component';
import { TouchspinComponent } from '../spinner/spinner.component';
import { DatepickerComponent } from './datepicker.component';

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

	public getDateFormat() {
		return 'MM/dd/yy';
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

	public getDateFormat() {
		return 'dd/MM/yy';
	}
}

export class ESMockI18nService2 {
	public get() {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const translations = {
			COMMON_JANUARY: 'Enero',
			COMMON_FEBRUARY: 'Febrero',
			COMMON_MARCH: 'Marzo',
			COMMON_APRIL: 'Abril',
			COMMON_MAY: 'Mayo',
			COMMON_JUNE: 'Junio',
			COMMON_JULY: 'Julio',
			COMMON_AUGUST: 'Agosto',
			COMMON_SEPTEMBER: 'Septiembre',
			COMMON_OCTOBER: 'Octubre',
			COMMON_NOVEMBER: 'Noviembre',
			COMMON_DECEMBER: 'Diciembre',
			COMMON_MONDAY : 'Lunes',
			COMMON_TUESDAY : 'Martes',
			COMMON_WEDNESDAY : 'Miércoles',
			COMMON_THURSDAY : 'Jueves',
			COMMON_FRIDAY : 'Viernes',
			COMMON_SATURDAY : 'Sábado',
			COMMON_SUNDAY : 'Domingo',
			COMMON_FIRST_DAY:'L',
			COMMON_SECOND_DAY:'M',
			COMMON_THIRD_DAY:'X',
			COMMON_FOURTH_DAY:'J',
			COMMON_FIFTH_DAY:'V',
			COMMON_SIXTH_DAY:'S',
			COMMON_SEVENTH_DAY:'D'
		};
		return of(translations);
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

	public getDateFormat() {
		return 'dd/MM/yy';
	}
}

export class ZHMockI18nService {
	public get(key: string) {
		return of(key);
	}

	public getFirstDayOfWeek() {
		return 1;
	}

	public getDateFormatForDatePicker() {
		return 'y-m-d';
	}

	public getCurrentLanguage() {
		return 'zh-CN';
	}

	public getDateFormat() {
		return 'yy-MM-dd';
	}
}

@Component({
    selector: 'systelab-datepicker-test',
    template: `
                  <div>
                      <systelab-datepicker [(currentDate)]='currentDate'></systelab-datepicker>
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

	public currentDate: Date;

	constructor() {
		this.currentDate = new Date(this.defaultYear, this.defaultMonth, this.defaultDay, this.defaultHours, this.defaultMinutes);
	}
}

const getMonth = (date: Date) => {
	const months = [];
	months[0] = 'Enero';
	months[1] = 'Febrero';
	months[2] = 'Marzo';
	months[3] = 'Abril';
	months[4] = 'Mayo';
	months[5] = 'Junio';
	months[6] = 'Julio';
	months[7] = 'Agosto';
	months[8] = 'Septiembre';
	months[9] = 'Octubre';
	months[10] = 'Noviembre';
	months[11] = 'Diciembre';
	return months[date.getMonth()];
};

const enterText = (fixture: ComponentFixture<DatepickerTestComponent> | ComponentFixture<DatepickerComponent>, text: string) => {
	const inputComponent = fixture.debugElement.query(By.css('.p-inputtext')).nativeElement;
	inputComponent.value = text;
	inputComponent.dispatchEvent(new Event('keydown'));
	inputComponent.dispatchEvent(new Event('input'));
	inputComponent.dispatchEvent(new Event('keyup'));
	fixture.detectChanges();
	inputComponent.dispatchEvent(new Event('blur'));
	fixture.detectChanges();
};

describe('Systelab US DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;

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
    providers: [{ provide: I18nService, useClass: USMockI18nService }, provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

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

	it('should 011219 be 12 Jan 2019', () => {
		enterText(fixture, '011219');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});

	it('should 01122019 be 12 Jan 2019', () => {
		enterText(fixture, '01122019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});
	it('should 1/12/2019 be 12 Jan 2019', () => {
		enterText(fixture, '1/12/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});
	it('should 1/12/19 be 12 Jan 2019', () => {
		enterText(fixture, '1/12/19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 12));
	});
	it('should 11/1/19 be 1 Nov 2019', () => {
		enterText(fixture, '11/1/19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 10, 1));
	});
	it('should 11/1/2019 be 1 Nov 2019', () => {
		enterText(fixture, '11/1/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 10, 1));
	});
	it('should 11/12019 be null', () => {
		enterText(fixture, '11/12019');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1.6.19 be null', () => {
		enterText(fixture, '1.6.19');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1-6-19 be null', () => {
		enterText(fixture, '1-6-19');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 2619 be 6 Feb 2019', () => {
		enterText(fixture, '2619');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 1, 6));
	});
});

describe('Systelab ES DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;

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
    providers: [{ provide: I18nService, useClass: ESMockI18nService }, provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

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
	it('should 251219 be 25 Dec 2019', () => {
		enterText(fixture, '251219');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});
	it('should 01122019 be 01 Dec 2019', () => {
		enterText(fixture, '01122019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 1/12/2019 be 1 Dec 2019', () => {
		enterText(fixture, '1/12/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 1/12/19 be 1 Dec 2019', () => {
		enterText(fixture, '1/12/19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 11/1/19 be 11 Jan 2019', () => {
		enterText(fixture, '11/1/19');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 11));
	});
	it('should 11/1/2019 be 11 Jan 2019', () => {
		enterText(fixture, '11/1/2019');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 11));
	});
	it('should 11/12019 be null', () => {
		enterText(fixture, '11/12019');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1.6.19 be null', () => {
		enterText(fixture, '1.6.19');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1-6-19 be null', () => {
		enterText(fixture, '1-6-19');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1619 be 01 Jun 2019', () => {
		enterText(fixture, '1619');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 5, 1));
	});
});

describe('Systelab ZH DatepickerComponent', () => {
	let fixture: ComponentFixture<DatepickerTestComponent>;
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
    providers: [{ provide: I18nService, useClass: ZHMockI18nService }, provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(DatepickerTestComponent);
		fixture.detectChanges();
	});
	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
	it('should 2019-12-25 be 25 Dec 2019', () => {
		enterText(fixture, '2019-12-25');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});
	it('should 191225 be 25 Dec 2019', () => {
		enterText(fixture, '191225');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 25));
	});
	it('should 20191201 be 01 Dec 2019', () => {
		enterText(fixture, '20191201');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 2019-12-01 be 1 Dec 2019', () => {
		enterText(fixture, '2019-12-01');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 19-12-1 be 1 Dec 2019', () => {
		enterText(fixture, '19-12-1');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 11, 1));
	});
	it('should 19-1-11 be 11 Jan 2019', () => {
		enterText(fixture, '19-1-11');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 11));
	});
	it('should 2019-1-11 be 11 Jan 2019', () => {
		enterText(fixture, '2019-1-11');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 0, 11));
	});
	it('should 20191-11 be null', () => {
		enterText(fixture, '20191-11');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 19.1.6 be null', () => {
		enterText(fixture, '19.1.6');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 19/6/1 be null', () => {
		enterText(fixture, '19/6/1');
		expect(fixture.componentInstance.currentDate)
			.toBeNull();
	});
	it('should 1961 be 01 Jun 2019', () => {
		enterText(fixture, '1961');
		expect(fixture.componentInstance.currentDate)
			.toEqual(new Date(2019, 5, 1));
	});
});

describe('Systelab ES DatepickerComponent, check translations', () => {
	let fixture: ComponentFixture<DatepickerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TouchspinComponent,
        ButtonComponent,
        DatepickerComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule,
        CalendarModule,
        SystelabTranslateModule],
    providers: [{ provide: I18nService, useClass: ESMockI18nService2 }, provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DatepickerComponent);
		fixture.componentInstance.inline = true;
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('monday short should be in spanish translation "L"', () => {
		fixture.whenStable().then(() => {
			const daySpan = fixture.debugElement.query(By.css(`table th:first-child span`));
			expect(daySpan.nativeElement.textContent.trim())
				.toEqual('L');
			});
		});

	it('month should be in spanish translation', () => {
		fixture.whenStable().then(() => {
			const currentDate=new Date();
			const monthSpan = fixture.debugElement.query(By.css(`.p-datepicker-month`));
			expect(monthSpan.nativeElement.textContent.trim())
				.toEqual(getMonth(currentDate));
			});
		});

	it('after select next month, should be in spanish translation', () => {
		fixture.whenStable().then(() => {
			const today = new Date();
			const currentDate=new Date(today.getFullYear(), today.getMonth(), 1);
			const nextMonthDate=new Date(currentDate.setMonth(currentDate.getMonth()+1));
			const nextMonth = fixture.debugElement.query(By.css(`#nextMonth`)).nativeElement;
			nextMonth.dispatchEvent(new Event('click'));
			fixture.detectChanges();

			const monthSpan = fixture.debugElement.query(By.css(`.p-datepicker-month`));
			expect(monthSpan.nativeElement.textContent.trim())
				.toEqual(getMonth(nextMonthDate));
			});
		});

});
