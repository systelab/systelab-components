import { Component } from '@angular/core';

@Component({
	selector:    'showcase-button',
	templateUrl: 'showcase-button.component.html'
})
export class ShowcaseButtonComponent {

	public customVariable = true;

	constructor() {
	}

	public doSomething() {
		this.customVariable = !this.customVariable;
	}
}
