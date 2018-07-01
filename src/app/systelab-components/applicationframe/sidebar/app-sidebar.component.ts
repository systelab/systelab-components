import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';

export class ApplicationSidebarTab {

	constructor(public id: string, public name: string, public isSelected: boolean) {
	}
}

export class ApplicationSidebarAction {
	constructor(public name: string, public action: any) {
	}
}

@Component({
	selector:    'systelab-app-sidebar',
	templateUrl: 'app-sidebar.component.html'
})
export class ApplicationSidebarComponent {

	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Output() public selected = new EventEmitter();

	constructor(protected dialogService: DialogService) {
	}

	private selectTab(id: string) {
		this.tabs.forEach((tab) => tab.isSelected = (tab.id === id));
		this.selected.emit(id);
	}
}
