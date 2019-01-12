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
	private readonly descriptionAll;
	private readonly descriptionUnknown;


	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.descriptionAll =  this.i18nService.instant('COMMON_ALL');
		this.descriptionUnknown = this.i18nService.instant('COMMON_UNKNOWN');
	}

	public ngAfterViewInit(): void {
		this.defaultIdValue = 'U';
		this.defaultDescription = this.descriptionUnknown;
		const elements = new Array<Element>();
		if (this.showAll) {
			this.defaultIdValue = 'A';
			this.defaultDescription = this.descriptionAll;
			elements.push(new Element('A', this.descriptionAll));
		}
		elements.push(new Element('U', this.descriptionUnknown));
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
