import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { Component, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-all-yes-no-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class AllYesNoSelect extends AbstractComboBox {
	constructor(myRenderer: Renderer2, public i18nService: I18nService) {
		super(myRenderer);
		this.values = new Array<Element>();
		this.values.push(new Element('A', this.i18nService.instant('COMMON_ALL')));
		this.values.push(new Element('Y', this.i18nService.instant('COMMON_YES')));
		this.values.push(new Element('N', this.i18nService.instant('COMMON_NO')));
		this._id = 'A';
		this._description = this.i18nService.instant('COMMON_ALL');
	}

	public afterSettingId(value: number | string) {
		switch (value) {
			case 'Y':
				this.description = this.i18nService.instant('COMMON_YES');
				break;
			case 'N':
				this.description = this.i18nService.instant('COMMON_NO');
				break;
			case 'A':
				this.description = this.i18nService.instant('COMMON_ALL');
				break;
			default:
				break;
		}
	}
}