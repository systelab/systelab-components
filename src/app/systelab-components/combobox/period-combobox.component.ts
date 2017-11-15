import { AbstractComboBox } from './abstract-combobox.component';
import { Component, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'period-select',
	templateUrl: './abstract-combobox.component.html'
})

export class PeriodComboBox extends AbstractComboBox {
	constructor(public myRenderer: Renderer2, public i18nService: I18nService) {
		super(myRenderer);
		this.values = new Array<Element>();
		this.values.push(new Element(this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED'), this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED')));
		this.values.push(new Element(this.i18nService.instant('COMMON_CURRENT_MONTH'), this.i18nService.instant('COMMON_CURRENT_MONTH')));
		this.values.push(new Element(this.i18nService.instant('COMMON_ONE_MONTH_AGO'), this.i18nService.instant('COMMON_ONE_MONTH_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_TWO_MONTHS_AGO'), this.i18nService.instant('COMMON_TWO_MONTHS_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_THREE_MONTHS_AGO'), this.i18nService.instant('COMMON_THREE_MONTHS_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_CURRENT_YEAR'), this.i18nService.instant('COMMON_CURRENT_YEAR')));
		this.values.push(new Element(this.i18nService.instant('COMMON_ONE_YEAR_AGO'), this.i18nService.instant('COMMON_ONE_YEAR_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_TWO_YEARS_AGO'), this.i18nService.instant('COMMON_TWO_YEARS_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_THREE_YEARS_AGO'), this.i18nService.instant('COMMON_THREE_YEARS_AGO')));
		this.values.push(new Element(this.i18nService.instant('COMMON_ALL'), this.i18nService.instant('COMMON_ALL')));
		this._id = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
		this._description = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
	}

	public afterSettingId(value: number | string) {
		if (value) {
			this.description = value + '';
		} else {
			this.id = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
			this.description = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');
		}
	}
}
