import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { CalendarFooterComponent } from './calendar-footer.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'systelab-calendar-footer-test',
    template: `
        <div>
            <systelab-calendar-footer [currentDate]="date" (onClearDate)="doClearDate($event)"></systelab-calendar-footer>
        </div>
	`,
    styles: [],
    standalone: false
})
export class CalendarFooterTestComponent {

	public date: Date = new Date();

	public doClearDate(value): void {
		this.date = value;
	}
}

const clickClearButton = (fixture: ComponentFixture<CalendarFooterTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('#clear-date-button button');
	button.click();
	fixture.detectChanges();
};

describe('Systelab Calendar Footer', () => {
	let fixture: ComponentFixture<CalendarFooterTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CalendarFooterComponent,
				ButtonComponent,
				CalendarFooterTestComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CalendarFooterTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should emit when click clear button', () => {
		clickClearButton(fixture);
		expect(fixture.componentInstance.date).toEqual(undefined);
	});

});
