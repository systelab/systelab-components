import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { AfterViewInit, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-gender-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class GenderSelect extends AbstractComboBox<Element> implements AfterViewInit {

	@Input() showAll = false;

	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
	}

	public ngAfterViewInit(): void {
		const elements = new Array<Element>();
		if (this.showAll) {
			elements.push(new Element('A', this.i18nService.instant('COMMON_ALL')));
		}
		elements.push(new Element('U', this.i18nService.instant('COMMON_UNKNOWN')));
		elements.push(new Element('M', this.i18nService.instant('COMMON_MALE')));
		elements.push(new Element('F', this.i18nService.instant('COMMON_FEMALE')));

		if (!this._id) {
			if (this.showAll) {
				this._id = 'A';
			} else {
				this._id = 'U';
			}
		}
		this.values = elements;
	}

	getInstance(): Element {
		return new Element('', '');
	}

	getDescriptionField(): string {
		return 'description';
	}

	getCodeField(): string {
		return '';
	}

	getIdField(): string {
		return 'id';
	}
}
