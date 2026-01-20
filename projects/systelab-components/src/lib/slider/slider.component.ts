import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'systelab-slider',
    templateUrl: 'slider.component.html',
    standalone: false,
})
export class SliderComponent {

	@Input() public min = 0;
	@Input() public max = 100;
	@Input() public step = 1;
	@Input() public continuous = true;

	@Input() public value = 0;
	@Output() public valueChange = new EventEmitter();

	@ViewChild('range', {static: false}) element: ElementRef;

	public sliderChangeEvent(evt: Event) {
		const newValue = Number((evt.target as HTMLInputElement).value);
		if (newValue !== this.value) {
			this.value = newValue;
			setTimeout(() => {
				this.valueChange.emit(this.value);
			});
		}
	}

	public sliderInputEvent(evt: Event) {
		if (this.continuous) {
			this.value = Number((evt.target as HTMLInputElement).value);
			this.valueChange.emit(this.value);
		}
	}
}
