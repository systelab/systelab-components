import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DialogService } from '../modal/dialog/dialog.service';
import { NumPadDialog, NumPadDialogParameters } from './numpad.dialog.component';

@Component({
	selector: 'systelab-numpad',
	templateUrl: 'numpad.component.html'
})
export class NumPadComponent  {
	@Input()
	public numpadValue = '';
	@Input()
	isPassword = false;
	@Input()
	public autofocus = false;

	@Output() public numpadValueEmitter = new EventEmitter();

	constructor(public dialogService: DialogService) {

	}

	public openNumPadDialog() {
		const parameters: NumPadDialogParameters = NumPadDialog.getParameters();
		parameters.numpadValue = this.numpadValue;
		parameters.isPassword =  this.isPassword;
		this.dialogService.showDialog(NumPadDialog, parameters)
			.subscribe( response => {
				if ( response != null ) {
					this.numpadValue = response;
					this.doEnter();
				}
			});
	}

	public doEnter() {
		if (this.numpadValue && this.numpadValue.trim() !== '') {
			this.numpadValueEmitter.emit(this.numpadValue);
		}
	}

	public doKeyPress(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.doEnter();
		}
	}
}
