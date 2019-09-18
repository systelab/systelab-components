import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessagePopupService } from '../modal';
import { I18nService } from 'systelab-translate/lib/i18n.service';

export class ChipButtonItem {
	constructor(public id: number, public name: string, public isChecked = false) {
	}
}

@Component({
	selector:    'systelab-chip-button',
	templateUrl: 'chip-button.component.html',
})
export class ChipButtonComponent {

	@Output() public changeButton = new EventEmitter();
	@Output() public selectedButton = new EventEmitter();

	@Input()
	public buttonList: ChipButtonItem[];

	@Input()
	public titleDescription: string;

	@Input()
	public messageDescription: string;

	@Input()
	public showAddButton = true;

	@Input()
	public showRemoveButton = true;

	@Input()
	public isDisabled = false;

	constructor(protected messagePopupService: MessagePopupService, protected i18nService: I18nService) {
	}

	public onClick(item: ChipButtonItem) {
		this.selectItem(item);
	}

	public selectItem(item: ChipButtonItem) {
		item.isChecked = true;
		this.buttonList.filter(btn => btn !== item)
			.forEach(btn =>
				btn.isChecked = false
			);
		this.selectedButton.emit(item);
	}

	public removeButtonItem(item: ChipButtonItem) {
		if (this.messageDescription) {
			this.messagePopupService.showYesNoQuestionPopup(this.titleDescription, this.messageDescription)
				.subscribe((res) => {
					if (res) {
						this.removeElement(item);
					}
				});
		} else {
			this.removeElement(item);
		}
	}

	public addButtonITem() {
		this.buttonList.push({name: this.i18nService.instant('COMMON_NEW'), id: this.buttonList.length + 1, isChecked: false});
		this.selectItem(this.buttonList[this.buttonList.length - 1]);

	}

	public changeButtonItem(item: ChipButtonItem) {
		this.changeButton.emit(item);
	}

	private removeElement(item: ChipButtonItem) {
		const index = this.buttonList.findIndex(it => it === item);
		if (index !== -1) {
			this.buttonList.splice(index, 1);
			this.buttonList = this.buttonList;
		}
	}
}

