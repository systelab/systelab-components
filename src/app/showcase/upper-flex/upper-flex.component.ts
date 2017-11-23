import { Component } from '@angular/core';
import { TouchSpinValues } from '../../systelab-components/spinner/touch.spin-values';

@Component( {
	selector:    'upper-flex',
	templateUrl: 'upper-flex.component.html'
} )
export class UpperFlexComponent {

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;
	public touchSpinValues3: TouchSpinValues;

	constructor() {

		this.touchSpinValues1 = new TouchSpinValues( 1, 1, 10 );
		this.touchSpinValues2 = new TouchSpinValues( 5, 1, 20, 2 );
		this.touchSpinValues3 = new TouchSpinValues( 5, 1, 20, 2 );
	}

}
