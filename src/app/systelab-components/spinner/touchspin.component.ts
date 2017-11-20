import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TouchSpinValues } from './touch.spin-values';

@Component({
	selector:    'systelab-spinner',
	templateUrl: 'touchspin.component.html',
	styleUrls:   ['touchspin.component.scss']
})
export class TouchspinComponent {

	public isDisabled: boolean = false;
	private _spinValues: TouchSpinValues;
	protected _valueStr: string;
	@Input() fillUnitsWithZero: boolean = false;

	private previousValue: number;

	@Input()
	get value(): number {
		return this._spinValues ? this._spinValues.value : 0;
	}

	set value(val: number) {
		if (this._spinValues) {
			this.previousValue = this._spinValues.value;
			this._spinValues.value = val;
			this.valueChange.emit(this._spinValues.value);

			if (val) {
				const valStr: string = (val <= 9 && this.fillUnitsWithZero) ? '0' + val : String(val);
				if (valStr !== this.valueStr) {
					this.valueStr = valStr;
				}
			} else {
				this.valueStr = this.fillUnitsWithZero ? '00' : '0';
			}
		}
	}

	@Output() public valueChange = new EventEmitter<number>();
	@Output() public change = new EventEmitter();

	@Input()
	get spinValues(): TouchSpinValues {
		return this._spinValues;
	}

	set spinValues(val: TouchSpinValues) {
		this._spinValues = val;

		if (!this._spinValues.step) {
			this._spinValues.step = 1;
		}
		this.value = this._spinValues.value;
		this.previousValue = this._spinValues.value;
	}

	@Input()
	get valueStr(): string {
		return this._valueStr;
	}

	set valueStr(val: string) {
		if (val) {
			const valNumber: number = Number(val);
			if (this.value && this.value !== valNumber) {
				if (valNumber < this._spinValues.min || valNumber > this._spinValues.max) {
					this.value = this.previousValue;
				}
			}
			this._valueStr = val;
		} else {
			this._valueStr = this.fillUnitsWithZero ? '00' : '0';
		}
		this.valueStrChange.emit(val);
	}

	@Output() public valueStrChange = new EventEmitter<string>();

	public minus() {
		let value: number       = Number(this._spinValues.value),
			stepValue: number   = this._spinValues.step,
			fixedNumber: number = ( this._spinValues.isDecimal ) ? 2 : 0;

		if (value - stepValue > this._spinValues.min) {
			this._spinValues.value = Number((value - this._spinValues.step).toFixed(fixedNumber));
		} else {
			this._spinValues.value = this._spinValues.min;
		}

		this.previousValue = this._spinValues.value;
		this.change.emit(this._spinValues.value);
		this.value = this._spinValues.value;
	}

	public plus() {
		let value: number       = Number(this._spinValues.value),
			stepValue: number   = this._spinValues.step,
			fixedNumber: number = ( this._spinValues.isDecimal ) ? 2 : 0;

		if (value + stepValue < this._spinValues.max) {
			this._spinValues.value = Number((value + this._spinValues.step).toFixed(2));
		} else {
			this._spinValues.value = this._spinValues.max;
		}

		this.previousValue = this._spinValues.value;
		this.change.emit(this._spinValues.value);
		this.value = this._spinValues.value;
	}

	public checkKey($event: KeyboardEvent): boolean {
		if ($event.charCode >= 44 && $event.charCode <= 57 && $event.charCode !== 47 || $event.keyCode === 9) {
			return true;
		} else {
			return false;
		}
	}

	public checkValue(valueStr: string) {
		let value: number       = Number(valueStr),
			fixedNumber: number = ( this._spinValues.isDecimal ) ? 2 : 0;

		if (isNaN(value)) {
			this._spinValues.value = this.previousValue;
		} else {
			if (value < this._spinValues.min || value > this._spinValues.max) {
				this._spinValues.value = this.previousValue;
				if (this.previousValue) {

					const valStr: string = (this.previousValue <= 9 && this.fillUnitsWithZero) ? '0' + this.previousValue : String(this.previousValue);
					if (valStr !== this.valueStr) {
						this.valueStr = valStr;
					}
				} else {
					this.valueStr = this.fillUnitsWithZero ? '00' : '0';
				}
			} else {
				this.previousValue = value;
				this.value = Number(value.toFixed(fixedNumber))
				this.change.emit(Number(value.toFixed(fixedNumber)));
			}
		}

	}

}
