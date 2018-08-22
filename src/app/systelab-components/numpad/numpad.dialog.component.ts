import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../modal';

export class NumPadDialogParameters extends SystelabModalContext {
	public numpadValue: string;
	public width = 300;
	public height = 450;
	public isPassword: boolean;
}

@Component({
	templateUrl: 'numpad.dialog.component.html'
})
export class NumPadDialog implements ModalComponent<NumPadDialogParameters> {

	@ViewChild('inputElement') protected inputElement: ElementRef;
	public numpadValue = '';
	public dialogParameters: NumPadDialogParameters;
	public searchingValue: string;

	public titleForDialog: string;
	public showClose  = true;
	public isPassword = false;

	public static getParameters(): NumPadDialogParameters {
		return new NumPadDialogParameters();
	}

	constructor(public dialog: DialogRef<NumPadDialogParameters>) {
		this.dialogParameters = dialog.context;
		this.isPassword =  this.dialogParameters.isPassword;
		this.numpadValue  = this.dialogParameters.numpadValue;
	}

	public close(): void {
		this.dialog.close(null);
	}

	public accept() {
		this.dialog.close(this.numpadValue);
	}

	public pushButton($event) {
		this.numpadValue = this.numpadValue + $event;
	}

	public deleteNumber() {
		this.numpadValue = this.numpadValue.substring(0, this.numpadValue.length - 1);
	}

	public cleanInput() {
		this.numpadValue = '';
	}
}


