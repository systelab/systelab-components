import { Component, Input } from '@angular/core';

export class BreadcrumbSubItem {
	constructor(public id: string, public text: string, public url: string, public action?: any) {
	}
}

export class BreadcrumbItem {
	constructor(public id: string, public text: string, public isActive: boolean, public url: string, public subItems?: BreadcrumbSubItem[], public action?: any) {
	}
}

@Component({
	selector:    'systelab-breadcrumb',
	templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

	@Input() public items: BreadcrumbItem[];
	@Input() public backgroundColor: string;
	@Input() public fontColor: string;

	constructor() {
	}
}
