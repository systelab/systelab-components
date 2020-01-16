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
	@Output() public selectButton = new EventEmitter();
	@Output() public buttonRemoved = new EventEmitter();
	@Output() public buttonAdded = new EventEmitter();

	@Input()
	public buttonList: ChipButtonItem[];

	@Input()
	public deleteConfirmationTitle: string;

	@Input()
	public deleteConfirmationMessage: string;

	@Input()
	public showAddButton = true;

	@Input()
	public isRemoveEnabled = true;

	@Input()
	public disabled = false;

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
		this.selectButton.emit(item);
	}

	public removeButtonItem(item: ChipButtonItem) {
		if (this.deleteConfirmationMessage) {
			this.messagePopupService.showYesNoQuestionPopup(this.deleteConfirmationTitle, this.deleteConfirmationMessage)
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
		let maxID = 0;
		if (this.buttonList.length > 0) {
			maxID = Math.max.apply(Math, this.buttonList.map(function(o) {
				return o.id;
			}));
		}
		this.buttonList.push({name: this.i18nService.instant('COMMON_NEW'), id: maxID + 1, isChecked: false});
		const item = this.buttonList[this.buttonList.length - 1];
		this.selectItem(item);
		this.buttonAdded.emit(item);
	}

	public changeButtonItem(item: ChipButtonItem) {
		if (!this.disabled) {
			this.changeButton.emit(item);
		}
	}

	private removeElement(item: ChipButtonItem) {
		const index = this.buttonList.findIndex(it => it === item);
		if (index !== -1) {
			this.buttonList.splice(index, 1);
			this.buttonList = this.buttonList;
		}
		this.buttonRemoved.emit(item);
		const last = this.buttonList[this.buttonList.length - 1];
		this.selectItem(last);
	}
}

