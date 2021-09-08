import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { MessagePopupService } from '../modal/message-popup/message-popup.service';

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

	private lastValue: ChipButtonItem;

	constructor(protected messagePopupService: MessagePopupService, protected i18nService: I18nService) {
	}

	public onClick(item: ChipButtonItem): void {
		this.selectItem(item);
	}

	public selectItem(item: ChipButtonItem): void {
		item.isChecked = true;
		this.buttonList.filter(btn => btn !== item)
			.forEach(btn =>
				btn.isChecked = false
			);
		this.selectButton.emit(item);
		this.lastValue = item;
	}

	public removeButtonItem(item: ChipButtonItem, event: Event): void {
		event.stopPropagation();
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

	public addButtonITem(): void {
		const maxID = Math.max(...this.buttonList.map(o => o.id), 0);
		const item = {name: this.i18nService.instant('COMMON_NEW'), id: maxID + 1, isChecked: false};
		this.buttonList.push(item);
		this.selectItem(item);
		this.buttonAdded.emit(item);
	}

	public changeButtonItem(item: ChipButtonItem): void {
		if (!this.disabled) {
			this.changeButton.emit(item);
		}
	}

	private removeElement(item: ChipButtonItem): void {
		let index = this.buttonList.findIndex(it => it === item);
		if (index !== -1) {
			this.buttonList.splice(index, 1);
		}
		this.buttonRemoved.emit(item);
		let last;
		if (this.lastValue.id !== item.id) {
			index = this.buttonList.findIndex(it => it === this.lastValue);
			last = this.buttonList[index];
		} else if (index === this.buttonList.length) {
			last = this.buttonList[this.buttonList.length - 1];
		} else {
			last = this.buttonList[index];
		}
		if (last) {
			this.selectItem(last);
		}
	}
}

