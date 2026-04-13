import { Component, Input } from '@angular/core';

export class BreadcrumbSubItem {
	constructor(public id: string, public text: string, public action: any, public url?: string) {
	}
}

export class BreadcrumbItem {
	 
	constructor(public id: string, public text: string, public isActive: boolean, public action: any, public subItems?: BreadcrumbSubItem[], public url?: string) {
	}
}

@Component({
    selector: 'systelab-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    standalone: false
})
export class BreadcrumbComponent {

	@Input() public items: BreadcrumbItem[];
	@Input() public backgroundColor: string;
	@Input() public fontColor: string;
	@Input() public itemMaxWidth: string = '100%';
	@Input() public subItemMaxWidth: string = '100%';

	constructor() {
	}

	public noop() {
	}
}
