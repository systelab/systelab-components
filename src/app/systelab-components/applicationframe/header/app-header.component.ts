import { Component, Input } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';

export class ApplicationHeaderMenuEntry {
	constructor(public optionName: string, public isDivider: boolean, public action?: any) {
	}
}

@Component({
	selector:    'app-header',
	templateUrl: 'app-header.component.html',
	styleUrls:   ['app-header.component.scss']
})
export class ApplicationHeaderComponent {

	@Input() public userName: string;
	@Input() public userFullName: string;
	@Input() public hospitalName: string;
	@Input() public menu: ApplicationHeaderMenuEntry[] = [];

	constructor(protected dialogService: DialogService) {
	}
}
