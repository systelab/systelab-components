import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Input, Renderer2} from '@angular/core';
import {I18nService} from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector: 'systelab-time-unit-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class TimeUnitSelectComponent extends AbstractComboBox {

	@Input() public showEmptyOption = false;
	@Input() public showMinutesOption = false;
	@Input() public showHoursOption = false;


	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.values = new Array<Element>();
		if (this.showEmptyOption) {
			this.values.push(new Element('', ''));
		}
		if (this.showMinutesOption) {
			this.values.push(new Element(this.i18nService.instant('COMMON_MINUTES'), this.i18nService.instant('COMMON_MINUTES')));
		}
		if (this.showHoursOption) {
			this.values.push(new Element(this.i18nService.instant('COMMON_HOURS'), this.i18nService.instant('COMMON_HOURS')));
		}
		this.values.push(new Element(this.i18nService.instant('COMMON_DAYS'), this.i18nService.instant('COMMON_DAYS')));
		this.values.push(new Element(this.i18nService.instant('COMMON_MONTHS'), this.i18nService.instant('COMMON_MONTHS')));
		this.values.push(new Element(this.i18nService.instant('COMMON_YEARS'), this.i18nService.instant('COMMON_YEARS')));
		this._id = '';
		this._description = '';
	}

	public afterSettingId(value: string) {
		if (value) {
			this.description = value;
		}
	}
}
