import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { TooltipDirective } from '../../tooltip/tooltip.directive';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './app-sidebar.component';
import { ApplicationSidebarLargeComponent } from './app-sidebar-large.component';

@Component({
    selector: 'systelab-app-sidebar-large-test',
    template: `
        <div>
            <systelab-app-sidebar-large [actions]="actions" [tabs]="tabs"
                                        (selected)="updateSelectedTab($event)"></systelab-app-sidebar-large>
        </div>
	`,
    styles: [],
    standalone: false
})
export class AppSidebarLargeTestComponent implements OnInit {

	public actions: Array<ApplicationSidebarAction> = [];
	public tabs: Array<ApplicationSidebarTab> = [];

	public currentTab = 'tab1';
	public actionValue = '';
	public actionTabValue = '';

	public ngOnInit(): void {
		this.setActions();
		this.setTabs();
	}

	public updateSelectedTab(newTabID: string): void {
		this.currentTab = newTabID;
	}

	private setTabs(): void {
		const tabs: Array<ApplicationSidebarTab> = [];
		tabs.push(new ApplicationSidebarTab('tab1', 'Tab 1', true, null, null));
		tabs.push(new ApplicationSidebarTab('tab2', 'Tab 2', false, null, null));
		tabs.push(new ApplicationSidebarTab('tab3', 'Tab 3', false, null, () => this.tabAction()));
		tabs.push(new ApplicationSidebarTab('tab4', 'Tab 4', false, this.setSubTabs(), null));
		this.tabs = tabs;
	}

	private setSubTabs(): Array<ApplicationSidebarTab> {
		const subTabs: Array<ApplicationSidebarTab> = [];
		subTabs.push(new ApplicationSidebarTab('subtab1', 'Sub Tab 1', false, null, null));
		subTabs.push(new ApplicationSidebarTab('subtab2', 'Sub Tab 2', false, null, null));
		return subTabs;
	}

	private setActions(): void {
		const actionList: Array<ApplicationSidebarAction> = [];
		actionList.push(new ApplicationSidebarAction('dummy action 1', () => this.doActionOne()));
		actionList.push(new ApplicationSidebarAction('dummy action 2', () => this.doActionTwo()));
		actionList.push(new ApplicationSidebarAction('dummy action 3', () => this.doActionThree()));
		this.actions = actionList;
	}

	private doActionOne() {
		this.actionValue = 'new action value';
	}

	private tabAction(): void {
		this.actionTabValue = 'new action tab value';
	}

	private doActionTwo() {
	}

	private doActionThree() {
	}

}

describe('Systelab App Sidebar Large', () => {
	let fixture: ComponentFixture<AppSidebarLargeTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        TooltipDirective,
        ApplicationSidebarLargeComponent,
        AppSidebarLargeTestComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        SystelabTranslateModule,
        SystelabPreferencesModule],
    providers: [
        TooltipDirective,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppSidebarLargeTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should initializate four tabs', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-tab').length).toEqual(4);
	});

	it('should initializate three buttons', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('button').length).toEqual(3);
	});

	it('should set as selected the first tab', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-tab')[0].classList.contains('selected')).toEqual(true);
	});

	it('should set the second tab as selected when we click on them', () => {
		clickTab(fixture, 1);
		expect(fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-tab')[0].classList.contains('selected')).toEqual(false);
		expect(fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-tab')[1].classList.contains('selected')).toEqual(true);
		expect(fixture.componentInstance.currentTab).toEqual('tab2');
	});

	it('should execute action when click on button', () => {
		clickAction(fixture, 0);
		expect(fixture.componentInstance.actionValue).toEqual('new action value');
	});

	it('should execute tab action when click on tab', () => {
		clickTab(fixture, 2);
		expect(fixture.componentInstance.actionTabValue).toEqual('new action tab value');
	});

	it('should initialize two subtabs', () => {
		expect(fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-subtab').length).toEqual(2);
	});

});

function clickTab(fixture: ComponentFixture<AppSidebarLargeTestComponent>, tabNumber: number) {
	fixture.debugElement.nativeElement.querySelectorAll('.slab-app-sidebar-tab')[tabNumber].click();
	fixture.detectChanges();
}

function clickAction(fixture: ComponentFixture<AppSidebarLargeTestComponent>, actionNumber: number) {
	fixture.debugElement.nativeElement.querySelectorAll('button')[actionNumber].click();
	fixture.detectChanges();
}
