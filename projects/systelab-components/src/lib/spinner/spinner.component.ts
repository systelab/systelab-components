import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TouchSpinValues } from './touch.spin-values';

@Component({
	selector:    'systelab-spinner',
	templateUrl: 'spinner.component.html'
})
export class TouchspinComponent {

	private static readonly ARROW_DOWN = 40;

	private static readonly ARROW_UP = 38;

	@Input() public disabled = false;
	@Input() public fillUnitsWithZero: boolean|number = false; //0 if false, and 1 if true
	private _spinValues: TouchSpinValues;
	protected _valueStr: string;


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
			const numberOfZeros = typeof this.fillUnitsWithZero === 'boolean' ? this.fillUnitsWithZero ? 1 : 0 : this.fillUnitsWithZero;
			if (val) {
				const valStr: string = val >0 ? String(val).padStart(numberOfZeros+1, '0'):
					String(val).substring(0,1)+String(val).substring(1).padStart(numberOfZeros+1, '0');
				if (valStr !== this.valueStr) {
					this.valueStr = valStr;
				}
			} else {
				this.valueStr = '0'.padStart(numberOfZeros+1, '0');
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

		if (value - stepValue > this._spinValues.min) {
			this._spinValues.value = Number((value - this._spinValues.step).toFixed(this._spinValues.getPrecision()));
			this.saveValueAndEmit(this._spinValues.value);
		} else {
			if (this._spinValues.value !== this._spinValues.min) {
				this._spinValues.value = this._spinValues.min;
				this.saveValueAndEmit(this._spinValues.value);
			}
		}
	}

	public plus() {
		const value: number = Number(this._spinValues.value);
		const stepValue: number = this._spinValues.step;

		if (value + stepValue < this._spinValues.max) {
			this._spinValues.value = Number((value + this._spinValues.step).toFixed(this._spinValues.getPrecision()));
			this.saveValueAndEmit(this._spinValues.value);
		} else {
			if (this._spinValues.value !== this._spinValues.max) {
				this._spinValues.value = this._spinValues.max;
				this.saveValueAndEmit(this._spinValues.value);
			}
		}
	}

	public doCheckKey(event: KeyboardEvent): boolean {
		if (event.charCode >= 44 && event.charCode <= 57 && event.charCode !== 47) {
			return true;
		} else {
			return false;
		}
	}

	public doKeyDown(event: KeyboardEvent): void {
		if (event.keyCode === TouchspinComponent.ARROW_UP) {
			this.plus();
			event.preventDefault();
		} else {
			if (event.keyCode === TouchspinComponent.ARROW_DOWN) {
				this.minus();
				event.preventDefault();
			} else {
				if (event.keyCode === 9 && this.isInGrid || event.keyCode === 13) {
					this.checkValue(this.valueStr);
				}
			}
		}
	}

	public checkValue(valueStr: string) {
		const value: number = Number(valueStr);

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
				this.saveValueAndEmit(value);
			}
		}
	}

	private saveValueAndEmit(value: number): void {
		this.previousValue = value;
		this.value = Number(value.toFixed(this._spinValues.getPrecision()));
		this.valueChange.emit(this.value);
		this.change.emit(this.value);
	}
}
