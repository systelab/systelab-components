import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuOption } from './context-menu-option';
import { ContextMenuActionData } from './context-menu-action-data';
import { ContextMenuItemComponent } from './context-menu-item.component';
import { DatepickerTestComponent } from '../datepicker/datepicker.component.spec';

@Component({
	selector: 'systelab-context-menu-test',
	template: `
                <systelab-context-menu [contextMenuOptions]="contextMenuOptions"
                                       (action)="executeContextMenuAction($event)">
                </systelab-context-menu>
	          `
})
export class ContextMenuTestComponent implements OnInit {
	public contextMenuOptions: Array<ContextMenuOption> = [];

	public ngOnInit(): void {
		this.contextMenuOptions = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, 'icon-check-circle', 'rgb(40, 167, 69)'),
			new ContextMenuOption('option2', 'Option 2', null, null, false, 'icon-minus-circle', 'rgb(255, 0, 0)', null),
			new ContextMenuOption('option3', 'Option 3', null, null, false, 'icon-chevron-circle-up', 'rgb(50, 50, 50)', 'rgb(21, 143, 239)'),
			new ContextMenuOption('option4', 'Option 3', null, null, false, 'icon-close', 'rgb(21, 143, 239)', 'rgb(255, 255, 255)'),
			new ContextMenuOption('option5', 'Option 5', null, null, false, 'icon-checkbox', 'transparent', 'rgb(214, 214, 214)', () => true, null, '20px')
		];
	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		console.log (contextMenuActionData.actionId);
	}
}

fdescribe('Systelab Context Menu', () => {
	let fixture: ComponentFixture<ContextMenuTestComponent>;

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
			declarations: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContextMenuTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should represent all the menu options', () => {
		clickOnDots(fixture);
		expect(isPopupVisible(fixture)).toBeTruthy();
	});
});

function clickOnDots(fixture: ComponentFixture<ContextMenuTestComponent>) {
	const button = fixture.debugElement.query(By.css('.dropdown-toggle')).nativeElement;
	button.click();
	fixture.detectChanges();
}


function isPopupVisible(fixture: ComponentFixture<ContextMenuTestComponent>) {
	return (fixture.debugElement.nativeElement.querySelector('.slab-dropdown-scroll') !== null);
}
