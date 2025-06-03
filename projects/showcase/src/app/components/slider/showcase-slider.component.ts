import { Component } from '@angular/core';

@Component({
    selector: 'showcase-slider',
    templateUrl: 'showcase-slider.component.html',
    standalone: false
})
export class ShowcaseSliderComponent {

	public sliderValue = 100;

	public startValue = 10;

	public endValue = 80;

	constructor() {}

}
