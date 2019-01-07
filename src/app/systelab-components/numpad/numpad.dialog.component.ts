import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../modal';

export class NumPadDialogParameters extends SystelabModalContext {
	public value: string;
	public width = 300;
	public height = 450;
	public isPassword: boolean;
}

@Component({
	templateUrl: 'numpad.dialog.component.html'
})
export class NumPadDialog implements ModalComponent<NumPadDialogParameters> {

	@ViewChild('inputElement') protected inputElement: ElementRef;
	public value = '';
	public dialogParameters: NumPadDialogParameters;
	public searchingValue: string;

	public titleForDialog: string;
	public showClose = true;
	public isPassword = false;

	public static getParameters(): NumPadDialogParameters {
		return new NumPadDialogParameters();
	}

	constructor(public dialog: DialogRef<NumPadDialogParameters>) {
		this.dialogParameters = dialog.context;
		this.isPassword = this.dialogParameters.isPassword;
		this.value = this.dialogParameters.value;
	}

	public close(): void {
		this.dialog.close(null);
	}

	public accept() {
		this.dialog.close(this.value);
	}

	public pushButton(value: string) {
		if (this.value) {
			this.value += value;
		} else {
			this.value = value;
		}

		this.inputElement.nativeElement.focus();
	}

	public deleteNumber() {
		this.value = this.value.substring(0, this.value.length - 1);
	}

	public cleanInput() {
		this.value = '';
	}

	public doKeyPress(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.dialog.close(this.value);
		}
	}
}


