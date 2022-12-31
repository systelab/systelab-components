import {Component} from '@angular/core';

@Component({
	selector: 'tooltip',
	templateUrl: 'tooltip.component.html'
})
export class TooltipComponent {

	public position = 'top';
	public tooltip = '';
	public left = 0;
	public top = 0;
	public visible = false;
}
