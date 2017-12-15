import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class ShowcaseProgressBarDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-progressbar-dialog.component.html',
})
export class ShowcaseProgressBarDialog extends DefaultModalActions implements ModalComponent<ShowcaseProgressBarDialogParameters> {

	protected parameters: ShowcaseProgressBarDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseProgressBarDialogParameters>) {
		super(dialog);
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseProgressBarDialogParameters {
		return new ShowcaseProgressBarDialogParameters();
	}
}

