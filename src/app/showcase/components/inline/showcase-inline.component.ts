import { Component } from '@angular/core';
import {TouchSpinValues} from '../../../systelab-components/spinner/touch.spin-values';

@Component({
	selector: 'showcase-inline',
	templateUrl: './showcase-inline.component.html'
})
export class ShowcaseInlineComponent {
	constructor() { }

	public touchSpinValues: TouchSpinValues = new TouchSpinValues(0, 0, 400, 1);
}
