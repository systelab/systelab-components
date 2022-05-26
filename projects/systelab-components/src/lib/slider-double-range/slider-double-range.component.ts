import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
	selector:    'systelab-slider-double-range',
	templateUrl: 'slider-double-range.component.html'
})
export class SliderDoubleRangeComponent {

	@Input() public min = 0;
	@Input() public max = 100;
	@Input() public step = 1;
	@Input() public continuous = true;

	@Input() public minValue = 0;
	@Input() public maxValue = 0;
	@Output() public minValueChange = new EventEmitter();
	@Output() public maxValueChange = new EventEmitter();

	@ViewChild('firstRange', {static: false}) firstRange: ElementRef;
	@ViewChild('secondRange', {static: false}) secondRange: ElementRef;

	minGap = 0;
	clicked = false;

	public firstSliderInputEvent(): void {
		const result = Number(this.secondRange.nativeElement.value) - Number(this.firstRange.nativeElement.value);
		this.clicked = true;
		if (result <= this.minGap) {
			this.minValue = Number(this.secondRange.nativeElement.value);
			this.firstRange.nativeElement.value = this.minValue;
		}else{
			this.minValue = Number(this.firstRange.nativeElement.value);
		}
		this.minValueChange.emit(this.minValue);
	}

	public sliderOneChangeEvent(): void {
		const value = this.firstRange.nativeElement.value;
		if (value !== this.minValue) {
			this.minValue = value;
			this.minValueChange.emit(this.minValue);
		}
	}

	public secondSliderInputEvent(): void {
		this.clicked = true;
		const result = Number(this.secondRange.nativeElement.value) - Number(this.firstRange.nativeElement.value);
		if (result <= this.minGap) {
			this.maxValue = Number(this.firstRange.nativeElement.value);
			this.secondRange.nativeElement.value = this.maxValue;
		}else{
			this.maxValue = Number(this.secondRange.nativeElement.value);
		}
		this.maxValueChange.emit(this.maxValue);
	}

	public sliderTwoChangeEvent(): void {
		const value = this.secondRange.nativeElement.value;
		if (value!== this.maxValue) {
			this.maxValue = value;
			this.maxValueChange.emit(this.maxValue);
		}
	}
}
