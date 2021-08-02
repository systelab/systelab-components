import { Component, Input, Renderer2 } from '@angular/core';
import { Datepicker } from './datepicker.component';
import { TouchSpinValues } from '../spinner/touch.spin-values';
import { I18nService } from 'systelab-translate';
import { DataTransformerService } from './date-transformer.service';

@Component({
	selector:    'systelab-date-time',
	templateUrl: 'datepicker-time.component.html',
	providers:   [DataTransformerService]
})
export class DatepickerTimeComponent extends Datepicker {

	public touchSpinHourValues: TouchSpinValues;
	public touchSpinMinutesValues: TouchSpinValues;

	constructor(myRenderer: Renderer2, i18nService: I18nService, dataTransformerService: DataTransformerService) {
		super(myRenderer, i18nService, dataTransformerService);

		this.touchSpinHourValues = new TouchSpinValues(0, 0, 23, 1);
		this.touchSpinMinutesValues = new TouchSpinValues(0, 0, 59, 1);
	}

	@Input()
	override get currentDate(): Date {
		return this._currentDate;
	}
	@Input() public resetTimeWhenChangingCurrentDate = false;

	override set currentDate(value: Date) {
		this._currentDate = value;
		if (this._currentDate) {
			if (this.resetTimeWhenChangingCurrentDate) {
				this.touchSpinHourValues.value = this._currentDate.getHours();
				this.touchSpinMinutesValues.value = this._currentDate.getMinutes();
			} else {
				if (this._currentDate.getHours() === 0 || this.touchSpinHourValues.value !== 0) {
					this._currentDate.setHours(this.touchSpinHourValues.value);
				} else {
					this.touchSpinHourValues.value = this._currentDate.getHours();
				}
				if (this._currentDate.getMinutes() === 0 || this.touchSpinMinutesValues.value !== 0) {
					this._currentDate.setMinutes(this.touchSpinMinutesValues.value);
				} else {
					this.touchSpinMinutesValues.value = this._currentDate.getMinutes();
				}
			}
		} else {
			this.touchSpinHourValues.value = 0;
			this.touchSpinMinutesValues.value = 0;
			this.currentHoursChanged(0);
			this.currentMinutesChanged(0);
		}
	}

	public currentHoursChanged(value: number) {
		if (this._currentDate) {
			this._currentDate.setHours(value);
			this.currentDateChange.emit(this._currentDate);
		}
	}

	public currentMinutesChanged(value: number) {
		if (this._currentDate) {
			this._currentDate.setMinutes(value);
			this.currentDateChange.emit(this._currentDate);
		}
	}
}
