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
	private _descriptionAll;
	private _descriptionUnknown;


	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
	}

	public ngAfterViewInit(): void {
		this._descriptionAll =  this.i18nService.instant('COMMON_ALL');
		this._descriptionUnknown = this.i18nService.instant('COMMON_UNKNOWN');
		const elements = new Array<Element>();
		if (this.showAll) {
			elements.push(new Element('A', this._descriptionAll));
		}
		elements.push(new Element('U', this._descriptionUnknown));
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


	deleteValueSelected(event: MouseEvent): void {
		event.stopPropagation();
		if (this.showAll) {
			this._id = 'A';
			this.description = this._descriptionAll;
		} else {
			this._id = 'U';
			this.description = this._descriptionUnknown;
		}

	}
}
