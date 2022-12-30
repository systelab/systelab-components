import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { ContextPanelComponent } from './context-panel.component';
import { CdkMenuModule } from '@angular/cdk/menu';

@Component({
	selector: 'systelab-context-panel-test',
	template: `
                <systelab-context-panel>
                    <div class="d-flex flex-column"></div>
                    <div class="header-content">
                        <p class="text-left">
                            <span class="icon-filter"></span> Last 30 days
                        </p>
                    </div>
                    <div class="main-content d-flex flex-column mb-2">
											<div class="internal-content">Internal content</div>
                    </div>
                </systelab-context-panel>
	          `
})
export class ContextPanelTestComponent {
}

describe('Systelab Context Panel', () => {
	let fixture: ComponentFixture<ContextPanelTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				CalendarModule,
				HttpClientModule,
				CdkMenuModule,
				SystelabTranslateModule],
			declarations: [ContextPanelComponent, ContextPanelTestComponent]
		})
			.compileComponents();
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

function clickOnDots(fixture: ComponentFixture<ContextPanelTestComponent>) {
	const button = fixture.debugElement.query(By.css('.slab-context-menu')).nativeElement;
	button.click();
	fixture.detectChanges();
}

function isPopupVisible(fixture: ComponentFixture<ContextPanelTestComponent>) {
	return fixture.debugElement.query(By.css('.internal-content')).nativeElement!=null;
}
