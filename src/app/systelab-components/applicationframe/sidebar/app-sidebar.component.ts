import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';

export class ApplicationSidebarTab {

	constructor(public name: string, public isSelected: boolean, public isIconMenu = false, public id = '') {
	}
}

export class ApplicationSidebarAction {
	constructor(public name: string, public action: any) {
	}
}

@Component({
	selector:    'app-sidebar',
	templateUrl: 'app-sidebar.component.html',
	styleUrls:   ['app-sidebar.component.scss']
})
export class ApplicationSidebarComponent {

	@Input() public actions: ApplicationSidebarAction[] = [];
	@Input() public tabs: ApplicationSidebarTab[] = [];
	@Output() public selected = new EventEmitter();

	constructor(protected dialogService: DialogService) {
	}

	private selectTab(tab: number, redirection: string) {
		for (let i = 0; i < this.tabs.length; i++) {
			this.tabs[i].isSelected = (i === tab);
		}
		this.selected.emit(tab);
	}
}
