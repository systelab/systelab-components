import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../../../../systelab-components/modal';

export class LowerFlexDialogParameters extends SystelabModalContext {
	public index: number;
	public language: string;
}

@Component({
	templateUrl: 'showcase-lower-flex-dialog.component.html',
})
export class ShowcaseLowerFlexDialog implements ModalComponent<LowerFlexDialogParameters> {

	public parameters: LowerFlexDialogParameters;

	constructor(public dialog: DialogRef<LowerFlexDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {

		this.dialog.close('This is a test');
	}

	public static getParameters(): LowerFlexDialogParameters {
		return new LowerFlexDialogParameters();
	}

}



