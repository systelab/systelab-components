import { Component } from '@angular/core';
import { MessagePopupService } from 'systelab-components';
import { BreadcrumbItem, BreadcrumbSubItem } from 'systelab-components';

@Component({
	selector:    'showcase-breadcrumb',
	templateUrl: 'showcase-breadcrumb.component.html'
})
export class ShowcaseBreadcrumbComponent {

	public items: BreadcrumbItem[] = [];

	constructor(protected messagePopupService: MessagePopupService) {

		const subItems: BreadcrumbSubItem[] = [];
		subItems.push(new BreadcrumbSubItem('1', 'Apartments', null, 'https://google.com?apartments'));
		subItems.push(new BreadcrumbSubItem('2', 'Campings', () => this.showModal()));

		this.items.push(new BreadcrumbItem('1', 'Home', true, null, null, 'https://google.com'));
		this.items.push(new BreadcrumbItem('2', 'Restaurants', true, () => this.showModal()));
		this.items.push(new BreadcrumbItem('3', 'Hotels', true, null, subItems, 'https://google.com'));
		this.items.push(new BreadcrumbItem('4', 'Rooms', true, null, null, 'https://google.com'));
		this.items.push(new BreadcrumbItem('5', 'Libraries', false, null, null, 'https://google.com'));

	}

	public showModal() {
		this.messagePopupService.showInformationPopup('Test', 'Example Text');
	}
}
