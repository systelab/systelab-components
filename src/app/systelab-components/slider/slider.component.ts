import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

	@ViewChild('range', {static: false}) element: ElementRef;

	public sliderChangeEvent(event: any) {
		const v = this.element.nativeElement.value;
		if (v !== this.value) {
			this.value = v;
			this.valueChange.emit(this.value);
		}
	}

	public sliderInputEvent(event: any) {
		if (this.continuous) {
			this.value = this.element.nativeElement.value;
			this.valueChange.emit(this.value);
		}
	}
}
