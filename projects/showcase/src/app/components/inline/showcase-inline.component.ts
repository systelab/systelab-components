import { Component } from '@angular/core';
import {TouchSpinValues} from 'systelab-components';

@Component({
    selector: 'showcase-inline',
    templateUrl: './showcase-inline.component.html',
    standalone: false
})
export class ShowcaseInlineComponent {
	constructor() { }

	public touchSpinValues: TouchSpinValues = new TouchSpinValues(0, 0, 400, 1);
}
