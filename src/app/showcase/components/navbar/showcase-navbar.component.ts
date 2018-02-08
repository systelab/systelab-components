import { Component } from '@angular/core';
import { MessagePopupService } from '../../../systelab-components/modal/message-popup/message-popup.service';
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
		this.items1.push(new NavbarItem(1, 'Option 1', '', false, true, true, '_self', 'https://google.com'));
		this.items1.push(new NavbarItem(2, 'Disabled', '', false, false, false, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(3, 'Option 3', '', false, false, true, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(4, 'Option 4', '', false, false, true, '_self', 'https://werfen.com'));
		this.items1.push(new NavbarItem(5, 'Blank Link', '', false, false, true, '_blank', 'https://werfen.com'));

		/* Items for the horizontal navbar with images */
		this.items2.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', false, true, true, '_self', 'https://google.com'));
		this.items2.push(new NavbarItem(2, 'Disabled', 'slab-icon-medium icon-bug', false, false, false, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(3, 'Option 3', 'slab-icon-medium icon-calendar', false, false, true, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(4, 'Option 4', 'slab-icon-medium icon-clock', false, false, true, '_self', 'https://werfen.com'));
		this.items2.push(new NavbarItem(5, 'Blank Link', 'slab-icon-medium icon-print', false, false, true, '_blank', 'https://werfen.com'));

		/*Items for the horizontal navbar with images inline */
		this.items3.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', true, true, true, '_self', 'https://google.com'));
		this.items3.push(new NavbarItem(2, 'Disabled', 'slab-icon-medium icon-bug', true, false, false, '_self', 'https://werfen.com'));
		this.items3.push(new NavbarItem(3, 'Option 3', 'slab-icon-medium icon-calendar', true, false, true, '_self', 'https://werfen.com'));
		this.items3.push(new NavbarItem(5, 'Blank Link', 'slab-icon-medium icon-clock', true, false, true, '_blank', 'https://werfen.com'));

		/*Items for the vertical navbar without images*/
		this.items4.push(new NavbarItem(1, 'Option 1', '', false, true, true, '_self', 'https://google.com'));
		this.items4.push(new NavbarItem(2, 'Disabled', '', false, false, false, '_self', 'https://werfen.com'));
		this.items4.push(new NavbarItem(5, 'Blank Link', '', false, false, true, '_blank', 'https://werfen.com'));

		/*Items for the vertical navbar with images */
		this.items5.push(new NavbarItem(1, 'Option 1', 'slab-icon-medium icon-home', false, true, true, '_self', 'https://google.com'));
		this.items5.push(new NavbarItem(2, 'Option 2', 'slab-icon-medium icon-bug', false, false, true, '_self', 'https://werfen.com'));
		this.items5.push(new NavbarItem(3, 'Open Modal', 'slab-icon-medium icon-calendar', true, false, true, '', '', () => this.showModal()));
	}

	public showModal() {
		this.messagePopupService.showInformationPopup('Test', 'Example Text', 'w-33 h-33');
	}
}
