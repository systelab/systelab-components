import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { Datepicker } from './datepicker.component';
import { TouchSpinValues } from '../spinner/touch.spin-values';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector: 'systelab-date-time',
	templateUrl: 'datepicker-time.component.html'
})
export class DatepickerTime extends Datepicker {

	public touchSpinHourValues: TouchSpinValues;
	public touchSpinMinuteValues: TouchSpinValues;

	protected _currentHours: string;
	protected _currentMinutes: string;

	constructor(myRenderer: Renderer2, i18nService: I18nService) {
		super(myRenderer, i18nService);

		this.touchSpinHourValues = new TouchSpinValues(Number(this.currentHours), 0, 23, 1);
		this.touchSpinMinuteValues = new TouchSpinValues(Number(this.currentMinutes), 0, 59, 1);
	}

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		this.currentDateChange.emit(this._currentDate);
		if (this._currentDate) {
			this.currentHours = this.currentHours ? this.currentHours : String(this._currentDate.getHours());
			this.currentMinutes = this.currentMinutes ? this.currentMinutes : String(this._currentDate.getMinutes());
		} else {
			this.updateCurrentHours(undefined);
			this.updateCurrentMinutes(undefined);
		}
	}

	@Input()
	get currentHours(): string {
		return this._currentHours;
	}

	set currentHours(value: string) {
		this.updateCurrentHours(value);
		if (value && this.currentDate) {
			if (this._currentHours) {
				this._currentDate.setHours(Number(value));
			} else {
				this._currentDate.setHours(0);
			}
			this.currentDateChange.emit(this._currentDate);
		}
	}

	@Output() public currentHoursChange = new EventEmitter<string>();

	@Input()
	get currentMinutes(): string {
		return this._currentMinutes;
	}

	set currentMinutes(value: string) {
		this.updateCurrentMinutes(value);

		if (value && this.currentDate) {
			if (this._currentMinutes) {
				this._currentDate.setMinutes(Number(value));
			} else {
				this._currentDate.setMinutes(0);
			}
			this.currentDateChange.emit(this._currentDate);
		}
	}

	@Output() public currentMinutesChange = new EventEmitter<string>();

	private updateCurrentHours(value: string) {
		setTimeout(() => {
			this._currentHours = value;
			this.touchSpinHourValues.value = value ? Number(value) : 0;
			this.currentHoursChange.emit(this._currentHours);
		});
	}

	private updateCurrentMinutes(value: string) {
		setTimeout(() => {
			this._currentMinutes = value;
			this.touchSpinMinuteValues.value = value ? Number(value) : 0;
			this.currentMinutesChange.emit(this._currentMinutes);
		});
	}

}
