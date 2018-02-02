import { Component, Input, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

export class TimelineEvent {
	constructor(public title: string, public publishingDate: Date, public text: string, public inverted = false, public icon?) {

	}

	public getIcon() {
		if (this.icon) {
			return this.icon;
		} else {
			return 'icon-download';
		}
	}

	public getColor() {
		return 'warning';
	}
}

@Component({
	selector:    'systelab-timeline',
	templateUrl: 'timeline.component.html',
	styleUrls:   ['timeline.component.scss']
})
export class TimelineComponent {

	@Input() public events: TimelineEvent[] = [];

	constructor(protected i18nService: I18nService) {

	}

	public getPrintableDate(event: TimelineEvent) {
		return this.i18nService.formatDateTime(event.publishingDate);
	}
}
