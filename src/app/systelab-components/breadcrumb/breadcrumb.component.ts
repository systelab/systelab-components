import { Component, Input } from '@angular/core';

@Component({
	selector:    'systelab-breadcrumb',
	templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

	@Input() public items: Array<Object>;
	@Input() public backgroundColor: string;
	@Input() public fontColor: string;

	constructor() {
	}

}
