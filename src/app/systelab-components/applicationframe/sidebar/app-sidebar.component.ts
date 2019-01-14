import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';

export class ApplicationSidebarTab {

	constructor(public id: string, public name: string, public isSelected: boolean, public subMenu?: ApplicationSidebarTab[], public action?: any) {
		subMenu = [];
	}
}

export class ApplicationSidebarAction {
	constructor(public name: string, public action: any, public icon?: string) {
	}
}

@Component({
	selector:    'systelab-app-sidebar',
	templateUrl: 'app-sidebar.component.html'
})
export class ApplicationSidebarComponent implements OnInit {

	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Output() public selected = new EventEmitter();

	constructor(protected dialogService: DialogService) {
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
