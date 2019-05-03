import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, OnInit, Renderer2} from '@angular/core';
import {I18nService} from 'systelab-translate/lib/i18n.service';

class Element {
	constructor(public id: string, public description: string) {
	}
}

@Component({
	selector:    'systelab-all-yes-no-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class AllYesNoSelect extends AbstractComboBox<Element> implements OnInit {

	private readonly descriptionAll: string;
	private readonly descriptionYes: string;
	private readonly descriptionNo: string;

	constructor(myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
		this.descriptionAll = this.i18nService.instant('COMMON_ALL');
		this.descriptionYes = this.i18nService.instant('COMMON_YES');
		this.descriptionNo = this.i18nService.instant('COMMON_NO');
	}

	public ngOnInit(): void {
		const elements = new Array<Element>();
		this.defaultDescription = this.descriptionAll;
		this.defaultIdValue = '';
		elements.push(new Element('', this.descriptionAll));
		elements.push(new Element('Y', this.descriptionYes));
		elements.push(new Element('N', this.descriptionNo));
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
