import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { AfterViewInit, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-time-unit-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})

export class TimeUnitSelectComponent extends AbstractComboBox<Element> implements AfterViewInit {

	@Input() public showEmptyOption = false;
	@Input() public showMinutesOption = false;
	@Input() public showHoursOption = false;
	@Input() public showWeeksOption = false;

	constructor(public override myRenderer: Renderer2, public override chRef: ChangeDetectorRef, public i18nService: I18nService) {
		super(myRenderer, chRef);
	}

	public ngAfterViewInit(): void {
		const elements = new Array<Element>();
		if (this.showEmptyOption) {
			elements.push(new Element('', ''));
		}
		if (this.showMinutesOption) {
			elements.push(new Element(this.i18nService.instant('COMMON_MINUTES'), this.i18nService.instant('COMMON_MINUTES')));
		}
		if (this.showHoursOption) {
			elements.push(new Element(this.i18nService.instant('COMMON_HOURS'), this.i18nService.instant('COMMON_HOURS')));
		}
		elements.push(new Element(this.i18nService.instant('COMMON_DAYS'), this.i18nService.instant('COMMON_DAYS')));
		if (this.showWeeksOption) {
			elements.push(new Element(this.i18nService.instant('COMMON_WEEKS'), this.i18nService.instant('COMMON_WEEKS')));
		}
		elements.push(new Element(this.i18nService.instant('COMMON_MONTHS'), this.i18nService.instant('COMMON_MONTHS')));
		elements.push(new Element(this.i18nService.instant('COMMON_YEARS'), this.i18nService.instant('COMMON_YEARS')));

		if (!this.id) {
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
