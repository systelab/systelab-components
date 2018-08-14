import {Component, Input} from '@angular/core';
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

	/*set numpadValue(numpadValue: string) {
		if (this._numpadValue !== numpadValue) {
			this._numpadValue = numpadValue;
		}
	}*/

	constructor(public dialogService: DialogService) {

	}

	public openNumPadDialog() {
		const parameters: NumPadDialogParameters = NumPadDialog.getParameters();
		parameters.containerLabel = this.numpadValue;
		parameters.isPassword =  this.isPassword;
		this.dialogService.showDialog(NumPadDialog, parameters)
			.subscribe( response => {
					this.numpadValue = response;
				});
	}

	updateContainerLabel(containerLabel: string) {
		this.numpadValue = containerLabel;
	}
}
