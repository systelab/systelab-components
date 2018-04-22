import { Component } from '@angular/core';
import {MonthSelectorComponent, Month} from '../../../systelab-components/month-selector/month-selector.component';
import {WeekSelectorComponent, Week} from '../../../systelab-components/week-selector/week-selector.component';
@Component({
	selector:    'showcase-datepicker',
	templateUrl: 'showcase-datepicker.component.html'
})
export class ShowcaseDatepickerComponent {

	public myDate;
	public maxDate: Date;
	public minDate: Date;
	public isDisabled: boolean;
	public selectedMonth: Month = new Month(0, '', 0, false);
	public selectedWeek: Week = new Week(0, '', 0, 0, 0, false);
	constructor() {
		this.myDate = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.maxDate = new Date(2018, 9, 20);	// October 20, 2018
		this.minDate = new Date(2017, 0, 20);	// January 20, 2017
		this.isDisabled = false;
	}
}
