import { Component, Input } from '@angular/core';

export class NavbarItem {
	constructor(public id: number, public text: string, public image: string, public floatImage: boolean, public isActive: boolean,
	            public isEnabled: boolean, public action: any, public target?: string, public url?: string,) {
	}
}

@Component({
	selector:    'systelab-navbar',
	templateUrl: 'navbar.component.html',
})
export class NavbarComponent {

	@Input() public items: NavbarItem[] = [];
	@Input() public isVertical = false;
	@Input() public backgroundColor;
	@Input() public backgroundHoverColor: string;
	@Input() public fontColor = 'white';
	@Input() public align = 'left';
	@Input() public id: string;

	public hovered = 0;

	constructor() {
	}
}
