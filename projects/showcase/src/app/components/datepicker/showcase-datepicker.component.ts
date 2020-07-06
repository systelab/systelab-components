import { Component, ViewChild } from '@angular/core';
import { DatepickerTimeComponent, Month } from 'systelab-components';
import { Week } from 'systelab-components';

@Component({
	selector:    'showcase-datepicker',
	templateUrl: 'showcase-datepicker.component.html'
})
export class ShowcaseDatepickerComponent {

	public myDate;
	public myDateWithReset;
	public maxDate: Date;
	public minDate: Date;
	public isDisabled: boolean;
	public selectedMonth: Month = new Month(0, '', 0, false);
	public selectedWeek: Week = new Week(0, '', 0, 0, 0, false);
	constructor() {
		this.myDate = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.maxDate = new Date(2018, 9, 20);	// October 20, 2018
		this.minDate = new Date(2017, 0, 20);	// January 20, 2017
		this.myDateWithReset = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.isDisabled = false;
	}

	@ViewChild ('dateTimeWithReset', {static: false}) dateTimeWithReset: DatepickerTimeComponent;
	public resetDateAndTime() {
		this.myDate = new Date();
		this.myDateWithReset = new Date();
	}
}
