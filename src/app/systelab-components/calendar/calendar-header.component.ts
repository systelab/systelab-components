import { Component, EventEmitter, Input, Output } from '@angular/core';
import { format } from 'date-fns';

@Component({
	selector:    'systelab-calendar-header',
	templateUrl: 'calendar-header.component.html',
	styleUrls:   ['calendar-header.component.scss']
})
export class CalendarHeaderComponent {

	@Input() currentDate: string;
	@Input() locale: string;

	@Output() previousYear = new EventEmitter();
	@Output() previousMonth = new EventEmitter();

	@Output() nextMonth = new EventEmitter();
	@Output() nextYear = new EventEmitter();

	public doPreviousYear() {
		this.previousYear.emit();
	}

	public doPreviousMonth() {
		this.previousMonth.emit();
	}

	public doNextMonth() {
		this.nextMonth.emit();
	}

	public doNextYear() {
		this.nextYear.emit();
	}

	public getTitle() {
		return format(this.currentDate, 'MMMM, YYYY', {locale: this.locale});
	}
}

