import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogRef, ModalComponent, SystelabModalContext } from '../modal';

export class NumPadDialogParameters extends SystelabModalContext {
	public containerLabel: string;
	public width = 300;
	public height = 450;
	public isPassword: boolean;
}

@Component({
	templateUrl: 'numpad.dialog.component.html',
	styleUrls:   ['numpad.dialog.component.scss']
})
export class NumPadDialog implements ModalComponent<NumPadDialogParameters> {

	public containerDialogLabel = '';
	public containerDialogLabelOld = '';
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
		this.containerDialogLabel  = this.dialogParameters.containerLabel;
		this.containerDialogLabelOld = this.dialogParameters.containerLabel;
	}

	public close(): void {
		this.dialog.close(this.containerDialogLabelOld);
	}

	public accept() {
		this.dialog.close(this.containerDialogLabel);
	}

	public pushButton($event) {
		this.containerDialogLabel = this.containerDialogLabel + $event.target.text;
	}

	public deleteNumber() {
		this.containerDialogLabel = this.containerDialogLabel.substring(0, this.containerDialogLabel.length - 1);
	}

	public cleanInput() {
		this.containerDialogLabel = '';
	}
}


