import { Component, OnInit } from '@angular/core';
import { TouchSpinValues } from '../../systelab-components/spinner/touch.spin-values';


@Component({
	selector:    'showcase-spinners',
	templateUrl: 'showcase-spinners.component.html'
})
export class ShowcaseSpinnersComponent {

	public check1 = false;
	public check2 = false;
	public check3 = true;

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;
	public touchSpinValues3: TouchSpinValues;

	public sliderValue = 100;

	constructor() {
		this.touchSpinValues1 = new TouchSpinValues(1, 1, 10);
		this.touchSpinValues2 = new TouchSpinValues(5, 1, 20, 2);
		this.touchSpinValues3 = new TouchSpinValues(0, -10, 10, 1);
	}
}
