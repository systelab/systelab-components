import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';


export class FullFlexDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	selector:    'full-flex-dialog',
	templateUrl: 'full-flex-dialog.component.html',
} )
export class FullFlexDialog extends DefaultModalActions implements ModalComponent<FullFlexDialogParameters> {

	protected fullFlexDialogParameters: FullFlexDialogParameters;

	constructor( public dialog: DialogRef<FullFlexDialogParameters> ) {
		super( dialog );
		this.fullFlexDialogParameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'Esto es una prueba' );
	}

	public static getParameters(): FullFlexDialogParameters {
		return new FullFlexDialogParameters();
	}

}
