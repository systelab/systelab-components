import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './app-sidebar.component';


@Component({
	selector:    'systelab-app-sidebar-small',
	templateUrl: 'app-sidebar-small.component.html'
})
export class ApplicationSidebarSmallComponent {

	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Output() public selected = new EventEmitter();

	constructor() {
	}

	public selectTab(id: string) {
		this.tabs.forEach((tab) => {
			tab.isSelected = (tab.id === id);
		});
		this.selected.emit(id);
	}

	public executeTabAction(tab: ApplicationSidebarTab): void {
		if ( !tab.subMenu && tab.action) {
			tab.action(tab.id);
		} else if ( !tab.subMenu && !tab.action) {
			this.selectTab(tab.id);
		}
	}
}
