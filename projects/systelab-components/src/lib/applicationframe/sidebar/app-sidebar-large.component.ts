import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './app-sidebar.component';

@Component({
    selector: 'systelab-app-sidebar-large',
    templateUrl: 'app-sidebar-large.component.html',
    standalone: false
})
export class ApplicationSidebarLargeComponent implements OnInit {

	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Output() public selected = new EventEmitter();

	constructor() {
	}

	public ngOnInit(): void {
		this.checkSubMenuSelected();
	}

	private checkSubMenuSelected() {
		this.tabs.forEach((tab) => {
			if (tab.subMenu) {
				tab.subMenu.forEach((subTab) => {
					if (subTab.isSelected === true) {
						tab.isSelected = true;
					}
				});
			}
		});
	}

	public selectTab(id: string) {
		this.tabs.forEach((tab) => {
			tab.isSelected = (tab.id === id);
			if (tab.subMenu) {
				tab.subMenu.forEach((subTab) => {
					if (subTab.id === id) {
						subTab.isSelected = true;
						tab.isSelected = true;
					} else {
						subTab.isSelected = false;
					}
				});
			}
		});
		this.selected.emit(id);
	}
}
