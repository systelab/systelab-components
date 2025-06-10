import { Component } from '@angular/core';

@Component({
    selector: 'showcase-radio',
    templateUrl: 'showcase-radio.component.html',
    standalone: false
})
export class ShowcaseRadioComponent {

	public urgency = 'no-urgent';
	public urgency2 = 'urgent';

	constructor() {
	}
}
