import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Renderer2} from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-no-yes-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class NoYesSelect extends AbstractComboBox {
	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.values = new Array<Element>();
		this.values.push(new Element('N', this.i18nService.instant('COMMON_NO')));
		this.values.push(new Element('Y', this.i18nService.instant('COMMON_YES')));
		this._id = 'Y';
		this._description = this.i18nService.instant('COMMON_YES');
	}

	public afterSettingId(value: number | string) {
		switch (value) {
			case 'Y':
				this.description = this.i18nService.instant('COMMON_YES');
				break;
			case 'N':
				this.description = this.i18nService.instant('COMMON_NO');
				break;
			default:
				break;
		}
	}
}