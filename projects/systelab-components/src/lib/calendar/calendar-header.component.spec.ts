import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { CalendarHeaderComponent } from './calendar-header.component';

@Component({
    selector: 'systelab-calendar-header-test',
    template: `
        <div>
            <systelab-calendar-header [currentDate]="date" (previousYear)="doPreviousYear()" (previousMonth)="doPreviousMonth()"
                                      (nextMonth)="doNextMonth()" (nextYear)="doNextYear()"></systelab-calendar-header>
        </div>
	`,
    styles: [],
    standalone: false
})
export class CalendarHeaderTestComponent {

	public date: Date = new Date();
	public nextYearActivated = false;
	public nextMonthActivated = false;
	public previousYearActivated = false;
	public previousMonthActivated = false;

	public doPreviousYear(): void {
		this.previousYearActivated = true;
	}

	public doPreviousMonth(): void {
		this.previousMonthActivated = true;
	}

	public doNextMonth(): void {
		this.nextMonthActivated = true;
	}

	public doNextYear(): void {
		this.nextYearActivated = true;
	}

}

const clickButton = (fixture: ComponentFixture<CalendarHeaderTestComponent>, buttonId: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
};

describe('Systelab Calendar Header', () => {
	let fixture: ComponentFixture<CalendarHeaderTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        CalendarHeaderComponent,
        CalendarHeaderTestComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        SystelabTranslateModule,
        SystelabPreferencesModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CalendarHeaderTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should emit when click on previous year button', () => {
		clickButton(fixture, 'previous-year');
		expect(fixture.componentInstance.previousYearActivated).toEqual(true);
	});

	it('should emit when click on previous month button', () => {
		clickButton(fixture, 'previous-month');
		expect(fixture.componentInstance.previousMonthActivated).toEqual(true);
	});

	it('should emit when click on next month button', () => {
		clickButton(fixture, 'next-month');
		expect(fixture.componentInstance.nextMonthActivated).toEqual(true);
	});

	it('should emit when click on next year button', () => {
		clickButton(fixture, 'next-year');
		expect(fixture.componentInstance.nextYearActivated).toEqual(true);
	});

});
