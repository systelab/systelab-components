import { Component, Input, OnInit } from '@angular/core';
import { SpyMenuItem } from './spy-menu-item';

@Component({
	selector:    'systelab-spy-menu',
	templateUrl: './spy-menu.component.html'
})
export class SpyMenuComponent implements OnInit {

	@Input() public items: Array<SpyMenuItem>;
	@Input() public sectionSelected: string;

	constructor() {
	}

	public ngOnInit(): void {
	}

	public doClick(item: SpyMenuItem) {
		if (!this.isItemDisabled(item)) {
			document.querySelector('#' + item.id)
				.scrollIntoView({
					behavior: 'smooth',
					block:    'start',
				});
			setTimeout(() => this.sectionSelected = item.id, 100);
		}
	}

	public isItemDisabled(item: SpyMenuItem): boolean {
		if (typeof item.disabled === 'function') {
			return item.disabled();
		} else {
			return item.disabled;
		}
	}

	public isItemHidden(item: SpyMenuItem): boolean {
		if (typeof item.hidden === 'function') {
			return item.hidden();
		} else {
			return item.hidden;
		}
	}
}
