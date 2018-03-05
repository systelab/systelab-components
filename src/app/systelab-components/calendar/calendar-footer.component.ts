import {Component, EventEmitter, Input, Output} from '@angular/core';
import {I18nService} from 'systelab-translate/lib/i18n.service';

@Component({
	selector: 'systelab-calendar-footer',
	templateUrl: 'calendar-footer.component.html'
})
export class CalendarFooterComponent {

	@Input() currentDate: Date;

	@Output() onClearDate: EventEmitter<void> = new EventEmitter<void>();

	constructor(private i18nService: I18nService) {
	}

	public clearDate(): void {
		this.onClearDate.emit();
	}
}

