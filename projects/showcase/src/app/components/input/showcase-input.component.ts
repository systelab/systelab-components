import { Component } from '@angular/core';

@Component({
    selector: 'showcase-input',
    templateUrl: 'showcase-input.component.html',
    standalone: false
})
export class ShowcaseInputComponent {

	public value: '';
	public texts: Array<string> = [];

	constructor() {
		this.texts = [
			'New York',
			'Rome',
			'London',
			'Barcelona',
			'París',
			'Berlín',
			'Oslo',
			'Atenas',
			'Lisboa',
			'Amsterdam',
			'St Petersburgo'
		];
	}

	public doEnter() {
		console.log('doEnter');
	}
}
