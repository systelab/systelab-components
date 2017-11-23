import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector:    'systelab-slider',
	templateUrl: 'slider.component.html'
})
export class SliderComponent {

	private _sliderValue = 0;

	@Input() public min = 0;
	@Input() public max = 100;
	@Input() public step: number;

	@Input()
	get value() {
		return this._sliderValue;
	}

	@Output() public valueChange = new EventEmitter();

	set value(val: number) {
		this._sliderValue = val;
		this.valueChange.emit(this._sliderValue);
	}

	public sliderChangeEvent(event: any) {

	}

}
