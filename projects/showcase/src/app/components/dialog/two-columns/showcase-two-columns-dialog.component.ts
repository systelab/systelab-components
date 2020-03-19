import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';

export class ShowcaseTwoColumnsDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-two-columns-dialog.component.html',
})
export class ShowcaseTwoColumnsDialog implements ModalComponent<ShowcaseTwoColumnsDialogParameters> {

	protected parameters: ShowcaseTwoColumnsDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseTwoColumnsDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseTwoColumnsDialogParameters {
		return new ShowcaseTwoColumnsDialogParameters();
	}

}



