import { Component } from '@angular/core';
import { ChipButtonItem } from '../../../systelab-components/chip-button/chip-button.component';

@Component({
	selector:    'showcase-button',
	templateUrl: 'showcase-button.component.html'
})
export class ShowcaseButtonComponent {

	public customVariable = true;
	public buttonList: Array<ChipButtonItem> = [];

	constructor() {

		this.buttonList = [
			{name: 'New York', id: 1},
			{name: 'Rome', id: 2},
			{name: 'London', id: 3},
			{name: 'Barcelona', id: 4},
			{name: 'París', id: 5},
			{name: 'Berlín', id: 6},
			{name: 'Oslo', id: 7},
			{name: 'Atenas', id: 8},
			{name: 'Lisboa', id: 9},
			{name: 'Amsterdam', id: 10},
			{name: 'St Petersburgo', id: 11}
		];
	}

	public doSomething() {
		this.customVariable = !this.customVariable;
	}
}
