import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent, SystelabModalContext } from '../modal/dialog/modal-context';
import { DialogRef } from '../modal/dialog/dialog-ref';

export class NumPadDialogParameters extends SystelabModalContext {
	public value: string;
	public override width = 300;
	public override height = 450;
	public isPassword: boolean;
}

@Component({
    templateUrl: 'numpad.dialog.component.html',
    standalone: false
})
export class NumPadDialog implements ModalComponent<NumPadDialogParameters> {

	@ViewChild('inputElement', {static: false}) protected inputElement: ElementRef;
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
		if (event.code === 'Enter') {
			this.dialog.close(this.value);
		}
	}
}


