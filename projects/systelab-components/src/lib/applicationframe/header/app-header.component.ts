import { Component, Input } from '@angular/core';
import { DialogService } from '../../modal/dialog/dialog.service';
import {Dropdown} from 'bootstrap';

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
	@Input() public title: string;
	@Input() public logoIcon: string;
	@Input() public menuBars = false;
	@Input() public menu: ApplicationHeaderMenuEntry[] = [];

	constructor(protected dialogService: DialogService) {

	}

	public toggleDropDown(): void {
		const dropDownElement = document.getElementById('toggleDropDownAppHeader');
		const dropdown = new Dropdown(dropDownElement.children[0], {
			popperConfig: (defaultBsPopperConfig) => {
				defaultBsPopperConfig = {
					placement: 'bottom-end',
					strategy: 'fixed',
					modifiers: [
						{name: 'offset', options: {offset: [75, 10]}}
					]
				}
				return defaultBsPopperConfig;
			}
		});
		dropdown.toggle();
	}
}
