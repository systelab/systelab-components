import { Component } from '@angular/core';
import { TouchSpinValues } from '../../systelab-components/spinner/touch.spin-values';

@Component( {
	selector:    'full-flex',
	templateUrl: 'full-flex.component.html'
} )
export class FullFlexComponent {

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;

	public check2: boolean = false;

	constructor() {

		this.touchSpinValues1 = new TouchSpinValues( 1, 1, 10 );
		this.touchSpinValues2 = new TouchSpinValues( 5, 1, 20, 2 );
	}

}
