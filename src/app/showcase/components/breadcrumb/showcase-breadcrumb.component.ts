import { Component } from '@angular/core';
import { MessagePopupService } from '../../../systelab-components/modal/message-popup/message-popup.service';
import { BreadcrumbItem, BreadcrumbSubItem } from '../../../systelab-components/breadcrumb/breadcrumb.component';

@Component({
	selector:    'showcase-breadcrumb',
	templateUrl: 'showcase-breadcrumb.component.html'
})
export class ShowcaseBreadcrumbComponent {

	public items: BreadcrumbItem[] = [];

	constructor(protected messagePopupService: MessagePopupService) {

		const subItems: BreadcrumbSubItem[] = [];
		subItems.push(new BreadcrumbSubItem('1', 'Apartments', 'https://google.com?apartments'));
		subItems.push(new BreadcrumbSubItem('2', 'Campings', '', () => this.showModal()));

		this.items.push(new BreadcrumbItem('1', 'Home', false, 'https://google.com'));
		this.items.push(new BreadcrumbItem('2', 'Holidays', false, '', null, () => this.showModal()));
		this.items.push(new BreadcrumbItem('3', 'Hotels', false, 'https://google.com', subItems));
		this.items.push(new BreadcrumbItem('4', 'Rooms', true, 'https://google.com'));

	}

	public showModal() {
		this.messagePopupService.showInformationPopup('Test', 'Example Text');
	}
}
