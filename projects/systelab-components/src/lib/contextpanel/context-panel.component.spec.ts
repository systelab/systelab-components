import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { ContextPanelComponent } from './context-panel.component';

@Component({
    selector: 'systelab-context-panel-test',
    template: `
                <systelab-context-panel>
                </systelab-context-panel>
	          `,
    standalone: false
})
export class ContextPanelTestComponent {
}


const clickOnDots = (fixture: ComponentFixture<ContextPanelTestComponent>) => {
	const button = fixture.debugElement.query(By.css('.dropdown-toggle')).nativeElement;
	button.click();
	fixture.detectChanges();
};

const isPopupVisible = (fixture: ComponentFixture<ContextPanelTestComponent>) =>
	(fixture.debugElement.nativeElement.querySelector('.slab-dropdown') !== null);

describe('Systelab Context Panel', () => {
	let fixture: ComponentFixture<ContextPanelTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ContextPanelComponent,
				ContextPanelTestComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				DatePickerModule,
				SystelabTranslateModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContextPanelTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should show a popup when clicked', () => {
		clickOnDots(fixture);
		expect(isPopupVisible(fixture))
			.toBeTruthy();
	});
});
