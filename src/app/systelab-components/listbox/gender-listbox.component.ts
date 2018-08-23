import { AfterViewInit, Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { Observable, of } from 'rxjs/index';
import { AbstractListBox, ListBoxElement } from './abstract-listbox.component';

@Component({
	selector:    'systelab-gender-listbox',
	templateUrl: 'abstract-listbox.component.html'

})
export class SystelabGenderListBox extends AbstractListBox<ListBoxElement> implements OnInit, AfterViewInit {

	constructor(public i18nService: I18nService) {
		super(false);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.setSelectionList(this.selectedIDList);
	}

	public ngAfterViewInit() {
		this.setSelectionList(this.selectedIDList);
	}

	protected getData(): Observable<Array<ListBoxElement>> {
		const data: Array<ListBoxElement> = [];
		data.push(new ListBoxElement('U', this.getDescriptionForGender('U'), 1, false));
		data.push(new ListBoxElement('F', this.getDescriptionForGender('F'), 1, false));
		data.push(new ListBoxElement('M', this.getDescriptionForGender('M'), 1, false));
		return of(data);
	}

	public getIdField(): string {
		return 'id';
	}

	public getDescriptionField(): string {
		return 'description';

	}

	public setSelectionList(selectedIDList: string) {
		this.multipleSelectedItemList = [];
		if (selectedIDList) {
			const selectedIDStringList: Array<string> = selectedIDList.split(',');
			selectedIDStringList.forEach(selectedID => {
				this.addSelectedItem(new ListBoxElement(selectedID, this.getDescriptionForGender(selectedID), 1, true));
				this.values.filter(element => {
					if (element.id === selectedID) {
						console.log('element.selected = true');
						element.selected = true;
					}
				});
			});
		}
	}

	public getSelectionList(): string {
		let selection = '';
		let first = true;
		for (const selectedItem of this.multipleSelectedItemList) {
			if (first) {
				selection = selectedItem[this.getIdField()];
				first = false;
			} else {
				selection += ',' + selectedItem[this.getIdField()];
			}

		}
		return selection;
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
