import { Component } from '@angular/core';

@Component({
	selector:    'showcase-datepicker',
	templateUrl: 'showcase-datepicker.component.html'
})
export class ShowcaseDatepickerComponent {

	public myDate = new Date();

	constructor() {
	}
}
