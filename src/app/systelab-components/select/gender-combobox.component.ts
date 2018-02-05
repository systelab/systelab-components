import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import {Component, Renderer2, EventEmitter, Output, Input, ChangeDetectorRef} from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-gender-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class GenderSelect extends AbstractComboBox {

	@Input() genderValue = '';
	@Output() genderValueChange: EventEmitter<string|number> = new EventEmitter<string|number>();

	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.values = new Array<Element>();
		this.values.push(new Element('U', this.i18nService.instant('COMMON_UNKNOWN')));
		this.values.push(new Element('M', this.i18nService.instant('COMMON_MALE')));
		this.values.push(new Element('F', this.i18nService.instant('COMMON_FEMALE')));

		this._id = 'U';
		this._description = this.i18nService.instant('COMMON_UNKNOWN');
	}

	public afterSettingId(value: number | string) {
		this.genderValueChange.emit(value);
		switch (value) {
			case 'U':
				this.description = this.i18nService.instant('COMMON_UNKNOWN');
				break;
			case 'M':
				this.description = this.i18nService.instant('COMMON_MALE');
				break;
			case 'F':
				this.description = this.i18nService.instant('COMMON_FEMALE');
				break;
			default:
				break;
		}
	}
}
