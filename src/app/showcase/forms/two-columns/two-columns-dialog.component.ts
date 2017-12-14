import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class TwoColumnsDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	selector:    'two-columns-dialog',
	templateUrl: 'two-columns-dialog.component.html',
} )
export class TwoColumnsDialog extends DefaultModalActions implements ModalComponent<TwoColumnsDialogParameters> {

	protected twoColumnsDialogParameters: TwoColumnsDialogParameters;

	constructor( public dialog: DialogRef<TwoColumnsDialogParameters> ) {
		super( dialog );
		this.twoColumnsDialogParameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): TwoColumnsDialogParameters {
		return new TwoColumnsDialogParameters();
	}

}



