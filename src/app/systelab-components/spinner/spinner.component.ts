import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TouchSpinValues } from './touch.spin-values';

@Component({
	selector:    'systelab-spinner',
	templateUrl: 'spinner.component.html',
	styleUrls:   ['spinner.component.scss']
})
export class TouchspinComponent {

	@Input() public disabled = false;
	private _spinValues: TouchSpinValues;
	protected _valueStr: string;
	@Input() fillUnitsWithZero = false;

	@Input() public isInGrid = false;

	private previousValue: number;

	@Input()
	get value(): number {
		return this._spinValues ? this._spinValues.value : 0;
	}

	set value(val: number) {
		if (this._spinValues) {
			this.previousValue = this._spinValues.value;
			this._spinValues.value = val;

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
			this._valueStr = (val.length === 1 && this.fillUnitsWithZero) ? ('0' + val) : val;
		} else {
			this._valueStr = this.fillUnitsWithZero ? '00' : '0';
		}
		this.valueStrChange.emit(this._valueStr);
	}

	@Output() public valueStrChange = new EventEmitter<string>();

	public minus() {
		const value: number = Number(this._spinValues.value);
		const stepValue: number = this._spinValues.step;
		const fixedNumber: number = (this._spinValues.isDecimal) ? 2 : 0;

		let itHasChanged = false;
		if (value - stepValue > this._spinValues.min) {
			this._spinValues.value = Number((value - this._spinValues.step).toFixed(fixedNumber));
			itHasChanged = true;
		} else {
			if (this._spinValues.value !== this._spinValues.min) {
				this._spinValues.value = this._spinValues.min;
				itHasChanged = true;
			}
		}
		if (itHasChanged) {
			this.previousValue = this._spinValues.value;
			this.change.emit(this._spinValues.value);
			this.valueChange.emit(this._spinValues.value);
			this.value = this._spinValues.value;
		}
	}

	public plus() {
		const value: number = Number(this._spinValues.value);
		const stepValue: number = this._spinValues.step;
		const fixedNumber: number = (this._spinValues.isDecimal) ? 2 : 0;

		let itHasChanged = false;
		if (value + stepValue < this._spinValues.max) {
			this._spinValues.value = Number((value + this._spinValues.step).toFixed(fixedNumber));
			itHasChanged = true;
		} else {
			if (this._spinValues.value !== this._spinValues.max) {
				this._spinValues.value = this._spinValues.max;
				itHasChanged = true;
			}
		}

		if (itHasChanged) {
			this.previousValue = this._spinValues.value;
			this.change.emit(this._spinValues.value);
			this.valueChange.emit(this._spinValues.value);
			this.value = this._spinValues.value;
		}
	}

	public checkKey($event: KeyboardEvent): boolean {
		if ($event.charCode >= 44 && $event.charCode <= 57 && $event.charCode !== 47) {
			return true;
		} else {
			return false;
		}
	}

	public pushEnter(keyCode: number): void {
		if (keyCode === 9 && this.isInGrid || keyCode === 13) {
			this.checkValue(this.valueStr);
		}
	}

	public checkValue(valueStr: string) {
		const value: number = Number(valueStr);
		const fixedNumber: number = (this._spinValues.isDecimal) ? 2 : 0;

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
				this.value = Number(value.toFixed(fixedNumber));
				this.valueChange.emit(Number(value.toFixed(fixedNumber)));
				this.change.emit(Number(value.toFixed(fixedNumber)));
			}
		}
	}
}
