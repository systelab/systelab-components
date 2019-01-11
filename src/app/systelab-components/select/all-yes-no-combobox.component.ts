import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { AfterViewInit, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector:    'systelab-all-yes-no-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class AllYesNoSelect extends AbstractComboBox<Element> implements AfterViewInit {

	private readonly descriptionAll: string;

	constructor(myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.descriptionAll = this.i18nService.instant('COMMON_ALL');
	}

	public ngAfterViewInit(): void {
		const elements = new Array<Element>();
		this.defaultDescription = this.descriptionAll;
		this.defaultIdValue = '';
		elements.push(new Element('', this.descriptionAll));
		elements.push(new Element('Y', this.i18nService.instant('COMMON_YES')));
		elements.push(new Element('N', this.i18nService.instant('COMMON_NO')));
		if (!this._id) {
			this._id = '';
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