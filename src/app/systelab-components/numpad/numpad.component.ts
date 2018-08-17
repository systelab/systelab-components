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

	constructor(public dialogService: DialogService) {

	}

	public openNumPadDialog() {
		const parameters: NumPadDialogParameters = NumPadDialog.getParameters();
		parameters.numpadValue = this.numpadValue;
		parameters.isPassword =  this.isPassword;
		this.dialogService.showDialog(NumPadDialog, parameters)
			.subscribe( response => {
					if(response)
						this.numpadValue = response;
				});
	}
}
