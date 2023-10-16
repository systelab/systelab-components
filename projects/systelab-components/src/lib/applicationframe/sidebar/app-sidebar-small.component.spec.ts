import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { ApplicationSidebarSmallComponent } from './app-sidebar-small.component';
import { TooltipDirective } from '../../tooltip/tooltip.directive';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './app-sidebar.component';

@Component({
	selector: 'systelab-app-sidebar-small-test',
	template: `
        <div>
            <systelab-app-sidebar-small [actions]="actions" [tabs]="tabs"
                                        (selected)="updateSelectedTab($event)"></systelab-app-sidebar-small>
        </div>
	`,
	styles: []
})
export class AppSidebarSmallTestComponent {

	public actions: Array<ApplicationSidebarAction> = [];
	public tabs: Array<ApplicationSidebarTab> = [];

	public updateSelectedTab(newTabID: string): void {
	}

	private setTabs(): void {
		const tabs: Array<ApplicationSidebarTab> = [];
		tabs.push(new ApplicationSidebarTab('tab1', 'Tab 1', false, null, null));
		tabs.push(new ApplicationSidebarTab('tab2', 'Tab 2', false, null, null));
		tabs.push(new ApplicationSidebarTab('tab3', 'Tab 3', false, null, null));
		tabs.push(new ApplicationSidebarTab('tab4', 'Tab 4', false, null, null));
		this.tabs = tabs;
	}

	private setActions(): void {
		const actionList: Array<ApplicationSidebarAction> = [];
		actionList.push(new ApplicationSidebarAction('dummy action 1', () => this.doActionOne()));
		actionList.push(new ApplicationSidebarAction('dummy action 2', () => this.doActionTwo()));
		actionList.push(new ApplicationSidebarAction('dummy action 3', () => this.doActionThree()));
		this.actions = actionList;
	}

	private doActionOne() {
	}

	private doActionTwo() {
	}

	private doActionThree() {
	}

}

describe('Systelab App Sidebar Small', () => {
	let fixture: ComponentFixture<AppSidebarSmallTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				HttpClientModule],
			declarations: [
				TooltipDirective,
				ApplicationSidebarSmallComponent,
				AppSidebarSmallTestComponent],
			providers: [
				TooltipDirective
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppSidebarSmallTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

});
