import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';

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
	public doPreviousYear(): void {
		this.previousYear.emit();
	}

	public doPreviousMonth(): void {
		this.previousMonth.emit();
	}

	public doNextMonth(): void {
		this.nextMonth.emit();
	}

	public doNextYear(): void {
		this.nextYear.emit();
	}

	public getTitle(): string {
		return this.i18nService.formatMonthAndYear(this.currentDate);
	}
}

