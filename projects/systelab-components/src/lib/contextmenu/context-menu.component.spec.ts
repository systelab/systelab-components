import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { ContextMenuSubmenuItemComponent } from './context-menu-submenu-item.component';

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
	public contextSubMenuOptions: Array<ContextMenuOption> = [];
	public lastSelectedOption = '';

	public ngOnInit(): void {

		this.contextSubMenuOptions = [
			new ContextMenuOption('suboption1', 'Sub Option 1', null),
			new ContextMenuOption('suboption2', 'Sub Option 2', null),
		];

		this.contextMenuOptions = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, 'icon-check-circle', 'rgb(40, 167, 69)'),
			new ContextMenuOption('option2', 'Option 2', null, null, false, 'icon-minus-circle', 'rgb(255, 0, 0)', null),
			new ContextMenuOption('option3', 'Option 3', null, null, false, 'icon-chevron-circle-up',
				'rgb(50, 50, 50)', 'rgb(21, 143, 239)'),
			new ContextMenuOption('option4', 'Option 3', null, null, false, 'icon-close', 'rgb(21, 143, 239)', 'rgb(255, 255, 255)'),
			new ContextMenuOption('option5', 'Option 5', null, null, false, 'icon-checkbox', 'transparent',
				'rgb(214, 214, 214)', () => true),
			new ContextMenuOption('option6', 'Option 6', null, null, false, 'icon-checkbox', 'transparent',
				'rgb(214, 214, 214)', () => true, this.contextSubMenuOptions)
		];
	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		const levelSeparator = '_|_';
		const actions: string[] = contextMenuActionData.actionId.split(levelSeparator);
		this.lastSelectedOption = actions[actions.length - 1];
	}
}

const clickOnDots = (fixture: ComponentFixture<ContextMenuTestComponent>) => {
	const button = fixture.debugElement.query(By.css('.dropdown-toggle')).nativeElement;
	button.click();
	fixture.detectChanges();
};

const isPopupVisible = (fixture: ComponentFixture<ContextMenuTestComponent>) => (fixture.debugElement.nativeElement
	.querySelector('.slab-dropdown-scroll') !== null);

const isSubPopupVisible = (fixture: ComponentFixture<ContextMenuTestComponent>) => (fixture.debugElement.nativeElement
	.querySelector('.slab-dropdown-absolute') !== null);

const getNumberOfElements = (fixture: ComponentFixture<ContextMenuTestComponent>, className: string) => fixture.debugElement.nativeElement
	.querySelectorAll(className).length;

const clickOnOption = (fixture: ComponentFixture<ContextMenuTestComponent>, elementNumber: number) => {
	const button = fixture.debugElement.query(By.css('li:nth-child(' + elementNumber + ')')).nativeElement;
	button.click();
	fixture.detectChanges();
};

const mouseOver = (fixture: ComponentFixture<ContextMenuTestComponent>, elementNumber: number) => {
	const button = fixture.debugElement.query(By.css('li:nth-child(' + elementNumber + ')')).nativeElement;
	button.dispatchEvent(new MouseEvent('mouseover', {
		view: window,
		bubbles: true,
		cancelable: true
	}));
	fixture.detectChanges();
};

const clickOnSubOption = (fixture: ComponentFixture<ContextMenuTestComponent>, elementNumber: number) => {
	const button = fixture.debugElement.query(By.css('systelab-context-menu-submenu-item > li:nth-child(' + elementNumber + ')'))
		.nativeElement;
	button.click();
	fixture.detectChanges();
};

describe('Systelab Context Menu', () => {
	let fixture: ComponentFixture<ContextMenuTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				CalendarModule,
				HttpClientModule,
				SystelabTranslateModule],
			declarations: [ContextMenuComponent, ContextMenuItemComponent, ContextMenuTestComponent, ContextMenuSubmenuItemComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContextMenuTestComponent);
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

	it('should represent all the menu options and suboptions', () => {
		clickOnDots(fixture);
		expect(getNumberOfElements(fixture, 'systelab-context-menu-item'))
			.toEqual(8);
	});

	it('should call to the specific action when an option is selected', () => {
		clickOnDots(fixture);
		clickOnOption(fixture, 3);
		expect(fixture.componentInstance.lastSelectedOption).toEqual('option3');
	});

	it('should show a submenu when clicked', () => {
		clickOnDots(fixture);
		clickOnOption(fixture, 6);
		expect(isSubPopupVisible(fixture))
			.toBeTruthy();
	});

	it('should call to the specific action when a suboption is selected', () => {
		clickOnDots(fixture);
		clickOnOption(fixture, 6);
		clickOnSubOption(fixture, 2);
		expect(fixture.componentInstance.lastSelectedOption).toEqual('suboption2');
	});

	it('should show submenu on mouse over', () => {
		clickOnDots(fixture);
		mouseOver(fixture, 6);
		clickOnSubOption(fixture, 2);
		expect(fixture.componentInstance.lastSelectedOption).toEqual('suboption2');
	});
});
