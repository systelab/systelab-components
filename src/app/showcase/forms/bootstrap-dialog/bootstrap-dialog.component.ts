import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class BootstrapDialogParameters extends ModulabModalContext {
	public index: number;
	public width = 1000;
	public height = 600;
}

@Component({
	selector:    'bootstrap-dialog',
	templateUrl: 'bootstrap-dialog.component.html',
})
export class BootstrapDialog extends DefaultModalActions implements ModalComponent<BootstrapDialogParameters> {

	protected paramters: BootstrapDialogParameters;

	constructor(public dialog: DialogRef<BootstrapDialogParameters>) {
		super(dialog);
		this.paramters = dialog.context;
	}

	public close(): void {
		this.dialog.close('Esto es una prueba');
	}

	public static getParameters(): BootstrapDialogParameters {
		return new BootstrapDialogParameters();
	}
}

