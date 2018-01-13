import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector:    'systelab-slider',
	templateUrl: 'slider.component.html'
})
export class SliderComponent {

	@Input() public min = 0;
	@Input() public max = 100;
	@Input() public step = 1;
	@Input() public continuous = true;

	@Input() public value = 0;
	@Output() public valueChange = new EventEmitter();

	public sliderChangeEvent(event: any) {
		if (!this.continuous) {
			console.log(this.value);
			this.value = event.srcElement.value;
			this.valueChange.emit(this.value);
		}
	}

	public sliderInputEvent(event: any) {
		if (this.continuous) {
			console.log(this.value);
			this.value = event.srcElement.value;
			this.valueChange.emit(this.value);
		}
	}
}
