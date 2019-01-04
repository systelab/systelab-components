import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../modal/dialog/dialog.service';
import { NumPadDialog, NumPadDialogParameters } from './numpad.dialog.component';

@Component({
	selector:    'systelab-numpad',
	templateUrl: 'numpad.component.html'
})
export class NumPadComponent {
	protected _numpadValue: string;
	@Input()
	isPassword = false;
	@Input()
	public autofocus = false;

	@Output() public numpadValueChange = new EventEmitter<string>();
	@Output() public numpadValueEnter = new EventEmitter<string>();

	@Input()
	get numpadValue(): string {
		return this._numpadValue;
	}

	set numpadValue(value: string) {
		this._numpadValue = value;
		this.numpadValueChange.emit(this._numpadValue);
	}

	constructor(public dialogService: DialogService) {

	}

	public openNumPadDialog() {
		const parameters: NumPadDialogParameters = NumPadDialog.getParameters();
		parameters.numpadValue = this.numpadValue;
		parameters.isPassword = this.isPassword;
		this.dialogService.showDialog(NumPadDialog, parameters)
			.subscribe(response => {
				if (response != null) {
					this.numpadValue = response;
					this.doEnter();
				}
			});
	}

	public doEnter() {
		if (this.numpadValue && this.numpadValue.trim() !== '') {
			this.numpadValueEnter.emit(this.numpadValue);
		}
	}

	public doKeyPress(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.doEnter();
		}
	}
}
