import { Component } from '@angular/core';

@Component({
	selector:    'showcase-checkbox',
	templateUrl: 'showcase-checkbox.component.html'
})
export class ShowcaseCheckboxComponent {

	public check1 = false;
	public check2 = false;
	public check3 = true;

	constructor() {
	}
}
