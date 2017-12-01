import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../systelab-components/modal/message-popup/message-popup-view.component';

export class EmptyDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component({
	selector:    'empty-dialog',
	templateUrl: 'empty-dialog.component.html',
})
export class EmptyDialog extends DefaultModalActions implements ModalComponent<EmptyDialogParameters> {

	protected emptyDialogParameters: EmptyDialogParameters;

	constructor(public dialog: DialogRef<EmptyDialogParameters>) {
		super(dialog);
		this.emptyDialogParameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('Esto es una prueba');
	}

	public static getParameters(): EmptyDialogParameters {
		return new EmptyDialogParameters();
	}
}

