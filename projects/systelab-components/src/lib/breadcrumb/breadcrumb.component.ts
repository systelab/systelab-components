import { Component, Input } from '@angular/core';

export class BreadcrumbSubItem {
	constructor(public id: string, public text: string, public action: any, public url?: string) {
	}
}

export class BreadcrumbItem {
	// eslint-disable-next-line max-len
	constructor(public id: string, public text: string, public isActive: boolean, public action: any, public subItems?: BreadcrumbSubItem[], public url?: string) {
	}
}

@Component({
	selector: 'systelab-breadcrumb',
	templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

	@Input() public items: BreadcrumbItem[];
	@Input() public backgroundColor: string;
	@Input() public fontColor: string;
	@Input() public itemMaxWidth: '9999px';
	@Input() public subItemMaxWidth: '9999px';

	constructor() {
	}

	public noop() {
	}
}
