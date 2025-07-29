import { Component, ViewEncapsulation } from '@angular/core';
import { TouchSpinValues } from 'systelab-components';

@Component( {
    selector: 'showcase-two-columns-panel',
    templateUrl: 'showcase-two-columns.component.html',
    standalone: false
} )
export class ShowcaseTwoColumnsComponent {

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;

	constructor() {

		this.touchSpinValues1 = new TouchSpinValues( 1, 1, 10 );
		this.touchSpinValues2 = new TouchSpinValues( 5, 1, 20, 2 );
	}

}
