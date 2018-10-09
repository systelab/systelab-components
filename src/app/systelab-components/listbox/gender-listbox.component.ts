import { AfterViewInit, Component, Input } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { AbstractListBox } from './abstract-listbox.component';

class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-gender-listbox',
	templateUrl: 'abstract-listbox.component.html'

})
export class SystelabGenderListBox extends AbstractListBox<Element> implements AfterViewInit {

	@Input() showAll = false;

	constructor(public i18nService: I18nService) {
		super();
	}

	public getAllFieldID(): number | string {
		return 'A';
	}

	public getAllFieldDescription(): string {
		return this.i18nService.instant('COMMON_ALL');
	}

	public getIdField(): string {
		return 'id';
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getInstance() {
		return new Element('', '');
	}

	public ngAfterViewInit() {
		const data: Array<Element> = [];
		if (this.showAll) {
			data.push(new Element('A', this.i18nService.instant('COMMON_ALL')));
		}
		data.push(new Element('U', this.getDescriptionForGender('U')));
		data.push(new Element('F', this.getDescriptionForGender('F')));
		data.push(new Element('M', this.getDescriptionForGender('M')));
		this.gridOptions.api.setRowData(data);
	}

	public getDescriptionForGender(gender: string): string {
		switch (gender) {
			case 'U':
				return this.i18nService.instant('COMMON_UNKNOWN');
			case 'M':
				return this.i18nService.instant('COMMON_MALE');
			case 'F':
				return this.i18nService.instant('COMMON_FEMALE');
			default:
				return this.i18nService.instant('COMMON_UNKNOWN');
		}
	}
}
