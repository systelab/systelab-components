import { Component, Input } from '@angular/core';
import { TouchSpinValues } from '../../systelab-components/spinner/touch.spin-values';


@Component( {
	selector:    'lower-flex',
	templateUrl: 'lower-flex.component.html'
} )
export class LowerFlexComponent {

	@Input() public language: string;

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;
	public touchSpinValues3: TouchSpinValues;
	public myDate: Date;
	public check2: boolean = false;

	constructor() {

		this.touchSpinValues1 = new TouchSpinValues( 1, 1, 10 );
		this.touchSpinValues2 = new TouchSpinValues( 5, 1, 20, 2 );
		this.touchSpinValues3 = new TouchSpinValues( 5, 1, 20, 2 );
	}

}
