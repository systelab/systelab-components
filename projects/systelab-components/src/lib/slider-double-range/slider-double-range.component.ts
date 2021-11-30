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

	@Input() public firstValue = 0;
	@Input() public secondValue = 0;
	@Output() public firstValueChange = new EventEmitter();
	@Output() public secondValueChange = new EventEmitter();

	@ViewChild('firstRange', {static: false}) firstRange: ElementRef;
	@ViewChild('secondRange', {static: false}) secondRange: ElementRef;

	minGap = 0;

	public firstSliderInputEvent(): void {
		const result = Number(this.secondRange.nativeElement.value) - Number(this.firstRange.nativeElement.value);
		if (result <= this.minGap) {
			this.firstValue = Number(this.secondRange.nativeElement.value);
			this.firstRange.nativeElement.value = this.firstValue;
		}else{
			this.firstValue = Number(this.firstRange.nativeElement.value);
		}
		this.firstValueChange.emit(this.firstValue);
	}

	public secondSliderInputEvent(): void {
		const result = Number(this.secondRange.nativeElement.value) - Number(this.firstRange.nativeElement.value);
		if (result <= this.minGap) {
			this.secondValue = Number(this.firstRange.nativeElement.value);
			this.secondRange.nativeElement.value = this.secondValue;
		}else{
			this.secondValue = Number(this.secondRange.nativeElement.value);
		}
		this.secondValueChange.emit(this.secondValue);
	}

	public sliderOneChangeEvent(): void {
		const value = this.firstRange.nativeElement.value;
		if (value!== this.firstValue) {
			this.firstValue = value;
			this.firstValueChange.emit(this.firstValue);
		}
	}

	public sliderTwoChangeEvent(): void {
		const value = this.firstRange.nativeElement.value;
		if (value !== this.firstValue) {
			this.firstValue = value;
			this.secondValueChange.emit(this.firstValue);
		}
	}
}
