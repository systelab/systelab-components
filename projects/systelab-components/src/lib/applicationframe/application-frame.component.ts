import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { ApplicationHeaderMenuEntry } from './header/app-header.component';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './sidebar/app-sidebar.component';
import { ApplicationSidebarLargeComponent } from './sidebar/app-sidebar-large.component';
import { ApplicationSidebarSmallComponent } from './sidebar/app-sidebar-small.component';

@Component({
	selector:    'systelab-app-frame',
	templateUrl: 'application-frame.component.html'
})
export class ApplicationFrameComponent {

	@ViewChild('sidebarLarge', {static: false}) sidebar: ApplicationSidebarLargeComponent;
	@ViewChild('sidebarSmall', {static: false}) sidebarSmall: ApplicationSidebarSmallComponent;

	@Input() public userName: string;
	@Input() public userFullName: string;
	@Input() public title: string;
	@Input() public menuBars = false;
	@Input() public logoIcon = '';

	@Input() public menu: ApplicationHeaderMenuEntry[] = [];
	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Input() public showSideBar = true;
	@Input() public largeSideBar = true;

	@Output() public selected = new EventEmitter();

	constructor(protected i18nService: I18nService) {
	}

	public doSelect(id: string): void {
		this.selected.emit(id);
	}

	public continueSelect(id: string): void {
		if (this.sidebar) {
			this.sidebar.selectTab(id);
		} else if (this.sidebarSmall) {
			this.sidebarSmall.selectTab(id);
		}
	}
}
