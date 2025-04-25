import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { AfterViewInit, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
    selector: 'systelab-period-select',
    templateUrl: '../combobox/abstract-combobox.component.html',
    standalone: false
})

export class PeriodSelect extends AbstractComboBox<Element> implements AfterViewInit {

	constructor(public override  myRenderer: Renderer2, public override chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
	}

	public ngAfterViewInit(): void {
		const elements = new Array<Element>();
		elements.push(new Element(this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED'), this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED')));
		elements.push(new Element(this.i18nService.instant('COMMON_CURRENT_MONTH'), this.i18nService.instant('COMMON_CURRENT_MONTH')));
		elements.push(new Element(this.i18nService.instant('COMMON_ONE_MONTH_AGO'), this.i18nService.instant('COMMON_ONE_MONTH_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_TWO_MONTHS_AGO'), this.i18nService.instant('COMMON_TWO_MONTHS_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_THREE_MONTHS_AGO'), this.i18nService.instant('COMMON_THREE_MONTHS_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_CURRENT_YEAR'), this.i18nService.instant('COMMON_CURRENT_YEAR')));
		elements.push(new Element(this.i18nService.instant('COMMON_ONE_YEAR_AGO'), this.i18nService.instant('COMMON_ONE_YEAR_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_TWO_YEARS_AGO'), this.i18nService.instant('COMMON_TWO_YEARS_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_THREE_YEARS_AGO'), this.i18nService.instant('COMMON_THREE_YEARS_AGO')));
		elements.push(new Element(this.i18nService.instant('COMMON_ALL'), this.i18nService.instant('COMMON_ALL')));
		this._id = this.i18nService.instant('COMMON_PERIOD_WILL_BE_SPECIFIED');

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
