import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector:    'showcase-inputs',
	templateUrl: 'showcase-inputs.component.html'
})
export class ShowcaseInputsComponent {

	public colorId: any;
	public colorValue: any;

	public _disableRefreshButton = false;
	private firstViewportChanged = true;

	@Input()
	get disableRefreshButton() {
		return this._disableRefreshButton;
	}

	set disableRefreshButton(pDisableRefreshButton: boolean) {
		this._disableRefreshButton = pDisableRefreshButton;
		this.disableRefreshButtonChange.emit(pDisableRefreshButton);
	}

	@Output() public disableRefreshButtonChange = new EventEmitter();

	public myDate = new Date();

	public comboOptionList: Array<Object> = [];

	constructor() {

		this.comboOptionList = [
			{description: 'New York', id: 1},
			{description: 'Rome', id: 2},
			{description: 'London', id: 3},
			{description: 'Barcelona', id: 4},
			{description: 'París', id: 5},
			{description: 'Berlín', id: 6},
			{description: 'Oslo', id: 7},
			{description: 'Atenas', id: 8},
			{description: 'Lisboa', id: 9},
			{description: 'Amsterdam', id: 10},
			{description: 'St Petersburgo', id: 11}
		];

	}

	public doSelect(action: string) {
		console.log(action);
	}

	public comboChangeEvent(event: any): void {
		console.log('comboValue ', event);
		console.log(this.colorId);
		console.log(this.colorValue);

	}
}
