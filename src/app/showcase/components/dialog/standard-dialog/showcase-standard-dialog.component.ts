import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';

export class ShowcaseStandardDialogParameters extends ModulabModalContext {
	public index: number;
	public width = 1000;
	public height = 600;
}

@Component({
	templateUrl: 'showcase-standard-dialog.component.html',
})
export class ShowcaseStandardDialog implements ModalComponent<ShowcaseStandardDialogParameters> {

	protected parameters: ShowcaseStandardDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseStandardDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseStandardDialogParameters {
		return new ShowcaseStandardDialogParameters();
	}
}

