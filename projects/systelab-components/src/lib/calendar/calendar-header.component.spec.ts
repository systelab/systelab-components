import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {SystelabTranslateModule} from 'systelab-translate';
import {SystelabPreferencesModule} from 'systelab-preferences';
import {CalendarHeaderComponent} from './calendar-header.component';

@Component({
	selector: 'systelab-calendar-header-test',
	template: `
        <div>
            <systelab-calendar-header [currentDate]="date" (previousYear)="doPreviousYear($event)" (previousMonth)="doPreviousMonth($event)"
                                      (nextMonth)="doNextMonth($event)" (nextYear)="doNextYear($event)"></systelab-calendar-header>
        </div>
	`,
	styles: []
})
export class CalendarHeaderTestComponent {

	public date: Date = new Date();
	public nextYearActivated = false;
	public nextMonthActivated = false;
	public previousYearActivated = false;
	public previousMonthActivated = false;

	public doPreviousYear(newValue): void {
		this.previousYearActivated = true;
	}

	public doPreviousMonth(newValue): void {
		this.previousMonthActivated = true;
	}

	public doNextMonth(newValue): void {
		this.nextMonthActivated = true;
	}

	public doNextYear(newValue): void {
		this.nextYearActivated = true;
	}

}

describe('Systelab Calendar Header', () => {
	let fixture: ComponentFixture<CalendarHeaderTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				HttpClientModule],
			declarations: [
				CalendarHeaderComponent,
				CalendarHeaderTestComponent]
		})
			.compileComponents();
	}));

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

function clickButton(fixture: ComponentFixture<CalendarHeaderTestComponent>, buttonId: string) {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
}
