import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { ContextPanelComponent } from './context-panel.component';

@Component({
	selector: 'systelab-context-panel-test',
	template: `
                <systelab-context-panel>
                </systelab-context-panel>
	          `
})
export class ContextPanelTestComponent {
}

describe('Systelab Context Panel', () => {
	let fixture: ComponentFixture<ContextPanelTestComponent>;

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
			declarations: [ContextPanelComponent, ContextPanelTestComponent]
		})
			.compileComponents();
	}));

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

function clickOnDots(fixture: ComponentFixture<ContextPanelTestComponent>) {
	const button = fixture.debugElement.query(By.css('.dropdown-toggle')).nativeElement;
	button.click();
	fixture.detectChanges();
}

function isPopupVisible(fixture: ComponentFixture<ContextPanelTestComponent>) {
	return (fixture.debugElement.nativeElement.querySelector('.slab-dropdown') !== null);
}
