import { Component, ViewEncapsulation } from '@angular/core';
import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';

@Component( {
	selector:    'showcase-two-columns-panel',
	templateUrl: 'showcase-two-columns.component.html'
} )
export class ShowcaseTwoColumnsComponent {

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;

	constructor() {

		this.touchSpinValues1 = new TouchSpinValues( 1, 1, 10 );
		this.touchSpinValues2 = new TouchSpinValues( 5, 1, 20, 2 );
	}

}
