import { Component, Input } from '@angular/core';

@Component({
	selector:    'systelab-percentage-circle',
	templateUrl: 'percentage-circle.component.html'
})
export class PercentageCircleComponent {

	@Input() public value = 0;
	@Input() public text = '';
	@Input() public color;


}
