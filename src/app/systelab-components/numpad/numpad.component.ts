import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../modal/dialog/dialog.service';
import { NumPadDialog, NumPadDialogParameters } from './numpad.dialog.component';

@Component({
	selector:    'systelab-numpad',
	templateUrl: 'numpad.component.html'
})
export class NumPadComponent {
	protected _value: string;
	@Input()
	isPassword = false;
	@Input()
	public autofocus = false;

	@Output() public valueChange = new EventEmitter<string>();
	@Output() public change = new EventEmitter<string>();

	@Input()
	get value(): string {
		return this._value;
	}

	set value(value: string) {
		this._value = value;
		this.valueChange.emit(this._value);
	}

	constructor(public dialogService: DialogService) {

	}

	public openNumPadDialog() {
		const parameters: NumPadDialogParameters = NumPadDialog.getParameters();
		parameters.value = this.value;
		parameters.isPassword = this.isPassword;
		this.dialogService.showDialog(NumPadDialog, parameters)
			.subscribe(response => {
				if (response != null) {
					this.value = response;
					this.doEnter();
				}
			});
	}

	public doEnter() {
		if (this.value && this.value.trim() !== '') {
			this.change.emit(this.value);
		}
	}

	public doKeyPress(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.doEnter();
		}
	}
}
