import { Component } from '@angular/core';
import { MessagePopupService } from '../../../systelab-components/modal';
import { NavbarItem } from '../../../systelab-components/navbar/navbar.component';

@Component({
	selector:    'showcase-navbar',
	templateUrl: 'showcase-navbar.component.html'
})
export class ShowcaseNavbarComponent {

	public items1: NavbarItem[] = [];
	public items2: NavbarItem[] = [];
	public items3: NavbarItem[] = [];
	public items4: NavbarItem[] = [];
	public items5: NavbarItem[] = [];


	constructor(protected messagePopupService: MessagePopupService) {
		/* Items for the horizontal navbar without images */
		this.items1.push(new NavbarItem(11, 'Option 1', '', false, true, true, null, '_self', 'https://google.com'));
		this.items1.push(new NavbarItem(12, 'Disabled', '', false, false, false, null, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(13, 'Option 3', '', false, false, true, null, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(14, 'Option 4', '', false, false, true, null, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(15, 'Blank Link', '', false, false, true, null, '_blank', 'https://werfen.com'));

		/* Items for the horizontal navbar with images */
		this.items2.push(new NavbarItem(21, 'Option 1', 'slab-icon-medium icon-home', false, true, true, null, '_self', 'https://google.com'));
		this.items2.push(new NavbarItem(22, 'Disabled', 'slab-icon-medium icon-bug', false, false, false, null, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(23, 'Option 3', 'slab-icon-medium icon-calendar', false, false, true, null, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(24, 'Option 4', 'slab-icon-medium icon-clock', false, false, true, null, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(25, 'Blank Link', 'slab-icon-medium icon-print', false, false, true, null, '_blank', 'https://werfen.com'));

		/*Items for the horizontal navbar with images inline */
		this.items3.push(new NavbarItem(31, 'Option 1', 'slab-icon-medium icon-home', true, true, true, null, '_self', 'https://google.com'));
		this.items3.push(new NavbarItem(32, 'Disabled', 'slab-icon-medium icon-bug', true, false, false, null, '_self', 'https://werfen.com'));
		this.items3.push(new NavbarItem(33, 'Option 3', 'slab-icon-medium icon-calendar', true, false, true, null, '_self', 'https://werfen.com'));
		this.items3.push(new NavbarItem(35, 'Blank Link', 'slab-icon-medium icon-clock', true, false, true, null, '_blank', 'https://werfen.com'));

		/*Items for the vertical navbar without images*/
		this.items4.push(new NavbarItem(41, 'Option 1', '', false, true, true, null, '_self', 'https://google.com'));
		this.items4.push(new NavbarItem(42, 'Disabled', '', false, false, false, null, '_self', 'https://werfen.com'));
		this.items4.push(new NavbarItem(45, 'Blank Link', '', false, false, true, null, '_blank', 'https://werfen.com'));

		/*Items for the vertical navbar with images */
		this.items5.push(new NavbarItem(51, 'Option 1', 'slab-icon-medium icon-home', false, true, true, null, '_self', 'https://google.com'));
		this.items5.push(new NavbarItem(52, 'Option 2', 'slab-icon-medium icon-bug', false, false, true, null, '_self', 'https://werfen.com'));
		this.items5.push(new NavbarItem(53, 'Open Modal', 'slab-icon-medium icon-calendar', true, false, true, () => this.showModal()));
	}

	public showModal() {
		this.messagePopupService.showInformationPopup('Test', 'Example Text', 'w-33 h-33');
	}
}
