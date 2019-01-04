import { Component } from '@angular/core';

@Component({
	selector:    'showcase-input',
	templateUrl: 'showcase-input.component.html'
})
export class ShowcaseInputComponent {

	public value: '';

	constructor() {
	}

	public doEnter() {
		console.log('doEnter');
	}
}
