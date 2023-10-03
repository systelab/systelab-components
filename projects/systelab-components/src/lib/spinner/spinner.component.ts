import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TouchSpinValues } from './touch.spin-values';

@Component({
	selector:    'systelab-spinner',
	templateUrl: 'spinner.component.html'
})
export class TouchspinComponent {
	@Input() public error = false;
	@Input() public disabled = false;
	@Input() public fillUnitsWithZero: boolean | number = false; //0 if false, and 1 if true
	@Input() public tabindex: number;
	@Input() public isInGrid = false;

	@Output() public valueChange = new EventEmitter<number>();
	@Output() public change = new EventEmitter();
	@Output() public valueStrChange = new EventEmitter<string>();

	protected _valueStr: string;
	private _validKeys: string[] = ['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
		'Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9',
		'NumpadSubtract', 'Minus', 'Comma', 'Period', 'NumpadDecimal'];
	private _spinValues: TouchSpinValues;
	private _previousValue: number;

	@Input()
	get valueStr(): string {
		return this._valueStr;
	}
	set valueStr(val: string) {
		if (val) {
			const valNumber = Number(val);
			if (this.value && this.value !== valNumber) {
				if (valNumber < this._spinValues.min || valNumber > this._spinValues.max) {
					this.value = this._previousValue;
				}
			}
			this._valueStr = (val.length === 1 && this.fillUnitsWithZero) ? ('0' + val) : val;
		} else {
			this._valueStr = this.fillUnitsWithZero ? '00' : '0';
		}
		this.valueStrChange.emit(this._valueStr);
	}

	@Input()
	get value(): number {
		return this._spinValues ? this._spinValues.value : 0;
	}
	set value(val: number) {
		if (this._spinValues) {
			this._previousValue = this._spinValues.value;
			this._spinValues.value = val;
			const numberOfZeros = typeof this.fillUnitsWithZero === 'boolean' ? this.fillUnitsWithZero ? 1 : 0 : this.fillUnitsWithZero;
			if (val) {
				const valStr: string = val > 0 ? String(val)
						.padStart(numberOfZeros + 1, '0') :
					String(val)
						.substring(0, 1) + String(val)
						.substring(1)
						.padStart(numberOfZeros + 1, '0');
				if (valStr !== this.valueStr) {
					this.valueStr = valStr;
				}
			} else {
				this.valueStr = '0'.padStart(numberOfZeros + 1, '0');
			}
		}
	}

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
		this._previousValue = this._spinValues.value;
	}



	public minus() {
		const value = Number(this._spinValues.value);

		if (value - this._spinValues.step > this._spinValues.min) {
			this._spinValues.value = Number((value - this._spinValues.step).toFixed(this._spinValues.getPrecision()));
			this.saveValueAndEmit(this._spinValues.value);
		} else if (this._spinValues.value !== this._spinValues.min) {
			this._spinValues.value = this._spinValues.min;
			this.saveValueAndEmit(this._spinValues.value);
		}
	}

	public plus() {
		const value = Number(this._spinValues.value);

		if (value + this._spinValues.step < this._spinValues.max) {
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
		return this._validKeys.some(code => code === event.code);
	}

	public doKeyDown(event: KeyboardEvent): void {
		if (event.code === 'ArrowUp') {
			this.plus();
			event.preventDefault();
		} else if (event.code === 'ArrowDown') {
			this.minus();
			event.preventDefault();
		} else if (event.code === 'Tab' && this.isInGrid || event.code === 'Enter') {
			this.checkValue(this.valueStr);
		}
	}

	public checkValue(valueStr: string) {
		const value = Number(valueStr);

		if (isNaN(value)) {
			this._spinValues.value = this._previousValue;
		} else {
			if (value < this._spinValues.min || value > this._spinValues.max) {
				this._spinValues.value = this._previousValue;
				if (this._previousValue) {

					const valStr: string = (this._previousValue <= 9 && this.fillUnitsWithZero) ? '0' + this._previousValue : String(this._previousValue);
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
		this._previousValue = value;
		this.value = Number(value.toFixed(this._spinValues.getPrecision()));
		this.valueChange.emit(this.value);
		this.change.emit(this.value);
	}
}
