import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';

export class ShowcaseFullFlexDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-full-flex-dialog.component.html',
})
export class ShowcaseFullFlexDialog implements ModalComponent<ShowcaseFullFlexDialogParameters> {

	protected parameters: ShowcaseFullFlexDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseFullFlexDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseFullFlexDialogParameters {
		return new ShowcaseFullFlexDialogParameters();
	}

}
