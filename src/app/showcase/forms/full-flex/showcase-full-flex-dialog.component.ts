import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class ShowcaseFullFlexDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-full-flex-dialog.component.html',
})
export class ShowcaseFullFlexDialog extends DefaultModalActions implements ModalComponent<ShowcaseFullFlexDialogParameters> {

	protected parameters: ShowcaseFullFlexDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseFullFlexDialogParameters>) {
		super(dialog);
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseFullFlexDialogParameters {
		return new ShowcaseFullFlexDialogParameters();
	}

}
