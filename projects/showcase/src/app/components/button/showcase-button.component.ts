import { Component } from '@angular/core';
import { ChipButtonItem } from 'systelab-components';

@Component({
	selector:    'showcase-button',
	templateUrl: 'showcase-button.component.html'
})
export class ShowcaseButtonComponent {

	public customVariable = true;
	public buttonList: Array<ChipButtonItem> = [];

	constructor() {

		this.buttonList = [
			{name: 'New York', id: 1, isChecked: false},
			{name: 'Rome', id: 2, isChecked: false},
			{name: 'London', id: 3, isChecked: false},
			{name: 'Barcelona', id: 4, isChecked: false},
			{name: 'París', id: 5, isChecked: false},
			{name: 'Berlín', id: 6, isChecked: false},
			{name: 'Oslo', id: 7, isChecked: false},
			{name: 'Atenas', id: 8, isChecked: false},
			{name: 'Lisboa', id: 9, isChecked: false},
			{name: 'Amsterdam', id: 10, isChecked: false},
			{name: 'St Petersburgo', id: 11, isChecked: false}
		];
	}

	public doSomething() {
		this.customVariable = !this.customVariable;
	}

	public doClick(event:any) {
		console.log(event);
	}
}
