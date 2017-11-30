import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { ModulabModalContext } from '../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../systelab-components/modal/message-popup/message-popup-view.component';

export class ProgressbarDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component({
	selector:    'progressbar-dialog',
	templateUrl: 'progressbar-dialog.component.html',
})
export class ProgressbarDialog extends DefaultModalActions implements ModalComponent<ProgressbarDialogParameters> {

	protected progressbarDialogParameters: ProgressbarDialogParameters;

	constructor(public dialog: DialogRef<ProgressbarDialogParameters>) {
		super(dialog);
		this.progressbarDialogParameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('Esto es una prueba');
	}

	public static getParameters(): ProgressbarDialogParameters {
		return new ProgressbarDialogParameters();
	}
}

