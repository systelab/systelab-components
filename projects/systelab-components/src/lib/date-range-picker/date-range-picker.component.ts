import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'systelab-date-range-picker',
    templateUrl: 'date-range-picker.component.html',
    standalone: false
})
export class DateRangepicker {

	private _fromDate: Date;
	private _toDate: Date;

	@Input() public minDate: Date;
	@Input() public maxDate: Date;

	@Input() public disabled = false;

	@Input()
	get fromDate(): Date {
		return this._fromDate;
	}

	set fromDate(value: Date) {
		this._fromDate = value;
		this.fromDateChange.emit(value);
	}

	@Input()
	get toDate(): Date {
		return this._toDate;
	}

	set toDate(value: Date) {
		this._toDate = value;
		this.toDateChange.emit(value);
	}

	@Output() public toDateChange = new EventEmitter<Date>();
	@Output() public fromDateChange = new EventEmitter<Date>();

}
