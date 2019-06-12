import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

export class TimelineEvent {

	public inverted = false;
	public icon?: string;
	public extraText?: string;
	public data: Object;
	public color: string;

	constructor(public title: string, public publishingDate: Date, public text: string) {

	}

	public getIcon() {
		if (this.icon) {
			return this.icon;
		} else {
			return 'icon-download';
		}
	}

	public getColor() {
		if (this.color) {
			return this.color;
		}
		return 'warning';
	}
}

@Component({
	selector:    'systelab-timeline',
	templateUrl: 'timeline.component.html'
})
export class TimelineComponent {

	@Input() public events: TimelineEvent[] = [];
	@Output() public timelineClick = new EventEmitter<TimelineEvent>();

	constructor(protected i18nService: I18nService) {

	}

	public getPrintableDate(event: TimelineEvent) {
		return this.i18nService.formatDateTime(event.publishingDate, true);
	}

	public doClick(timelineEvent: TimelineEvent) {
		this.timelineClick.emit(timelineEvent);
	}
}
