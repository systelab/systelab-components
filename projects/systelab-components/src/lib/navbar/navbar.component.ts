import {Component, Input} from '@angular/core';

export class NavbarItem {
	constructor(public id: number, public text: string, public image: string, public floatImage: boolean, public isSelected: boolean,
	            public isEnabled: boolean, public action: any, public target?: string, public url?: string, public backgroundColor?: string, public fontColor?: string) {
	}
}

@Component({
	selector: 'systelab-navbar',
	templateUrl: 'navbar.component.html',
})
export class NavbarComponent {

	@Input() public items: NavbarItem[] = [];
	@Input() public isVertical = false;
	@Input() public backgroundColor;
	@Input() public backgroundHoverColor: string;
	@Input() public borderColor: string;
	@Input() public activeColor = 'white';
	@Input() public activeFontColor = 'black';
	@Input() public fontHoverColor:string;
	@Input() public fontColor = 'white';
	@Input() public align = 'left';
	@Input() public id: string;
	@Input() public hideBottomBorder: boolean;
	@Input() public hideTopBorder: boolean;
	@Input() public hideRightBorder: boolean;
	@Input() public hideLeftBorder: boolean;
	@Input() public padding: string;

	public hovered: number;

	constructor() {
	}

	public noop() {
	}
}
