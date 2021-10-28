import { Component, NgZone } from '@angular/core';
import { Month } from 'systelab-components';
import { Week } from 'systelab-components';
import { I18nService } from 'systelab-translate';

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
	public yesterdayDate;
	public languageList = [
		{description: 'Spanish', id: 'es'},
		{description: 'English', id: 'en'},
		{description: 'English (USA)', id: 'en-US'}
	];

	constructor(public i18nService: I18nService, protected readonly zone: NgZone) {
		this.myDate = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.maxDate = new Date(2018, 9, 20);	// October 20, 2018
		this.minDate = new Date(2017, 0, 20);	// January 20, 2017
		this.myDateWithReset = new Date(2018, 9, 20, 14, 5, 30, 0);
		this.isDisabled = false;
		this.yesterdayDate = new Date().setDate(new Date().getDate() - 1);
	}

	public resetDateAndTime(): void {
		this.myDate = new Date();
		this.myDateWithReset = new Date();
	}


	public languageChangeEvent(event: any): void {
		this.zone.run(() => {
			this.i18nService.use(event.id).subscribe();
		});
	}
}
