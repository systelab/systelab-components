import { Component, Input } from '@angular/core';
import { Datepicker } from './datepicker.component';

@Component({
	selector:    'mp-date',
	templateUrl: 'datepicker.component.html'
})
export class MDatepicker extends Datepicker {

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		this.currentDateChange.emit(this._currentDate);
		this.checkPreviousDate();
	}

	private checkPreviousDate() {
		if (this.currentDate && this.currentCalendar._isValid) {
			let today: Date = new Date();
			today.setHours(0, 0, 0, 0);

			if (this.currentDate && this.currentDate.getTime() < today.getTime()) {
				this.previousDate = true;
			} else {
				this.previousDate = false;
			}
		} else {
			this.previousDate = false;
		}
	}
}