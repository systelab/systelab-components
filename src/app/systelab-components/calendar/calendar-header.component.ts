import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'systelab-calendar-header',
	templateUrl: 'calendar-header.component.html',
	styleUrls:   ['calendar-header.component.scss']
})
export class CalendarHeaderComponent {

	@Input() currentDate: Date;

	@Output() previousYear = new EventEmitter();
	@Output() previousMonth = new EventEmitter();

	@Output() nextMonth = new EventEmitter();
	@Output() nextYear = new EventEmitter();

	constructor(private i18nService: I18nService) {

	}
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
		return this.i18nService.formatMonthAndYear(this.currentDate);
	}
}

