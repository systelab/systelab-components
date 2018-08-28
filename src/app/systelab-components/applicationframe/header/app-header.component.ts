import { Component, Input } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';

export class ApplicationHeaderMenuEntry {
	constructor(public optionName: string, public isDivider: boolean, public action?: any) {
	}
}

@Component({
	selector: 'systelab-app-header',
	templateUrl: 'app-header.component.html'
})
export class ApplicationHeaderComponent {

	@Input() public userName: string;
	@Input() public userFullName: string;
	@Input() public hospitalName: string;
	@Input() public logoIcon: string;
	@Input() public menuBars = false;
	@Input() public menu: ApplicationHeaderMenuEntry[] = [];

	constructor(protected dialogService: DialogService) {
		if (!this.logoIcon) {
			this.logoIcon = 'icon-modulab';
		}
	}
}
