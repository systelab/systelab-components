import { Component } from '@angular/core';

@Component({
	selector:    'showcase-combobox',
	templateUrl: 'showcase-combobox.component.html'
})
export class ShowcaseComboboxComponent {

	public colorId: any;
	public colorValue: any;
	public listSelectedValues = true;
	public multiple = true;
	public selectDeselectAll = true;

	public comboOptionList: Array<Object> = [];

	constructor() {

		this.comboOptionList = [
			{description: 'New York', id: 1},
			{description: 'Rome', id: 2, selected: true},
			{description: 'London', id: 3},
			{description: 'Barcelona', id: 4, selected: true},
			{description: 'París', id: 5},
			{description: 'Berlín', id: 6},
			{description: 'Oslo', id: 7},
			{description: 'Atenas', id: 8},
			{description: 'Lisboa', id: 9},
			{description: 'Amsterdam', id: 10},
			{description: 'St Petersburgo', id: 11}
		];
	}

	public comboChangeEvent(event: any): void {
		console.log('comboValue ', event);
		console.log(this.colorId);
		console.log(this.colorValue);
	}
}
