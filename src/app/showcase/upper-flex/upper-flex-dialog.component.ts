import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../systelab-components/modal/message-popup/message-popup-view.component';

export class UpperFlexDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	selector:    'upper-flex-dialog',
	templateUrl: 'upper-flex-dialog.component.html',
} )
export class UpperFlexDialog extends DefaultModalActions implements ModalComponent<UpperFlexDialogParameters> {

	protected upperFlexDialogParameters: UpperFlexDialogParameters;

	constructor( public dialog: DialogRef<UpperFlexDialogParameters> ) {
		super( dialog );
		this.upperFlexDialogParameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'Esto es una prueba' );
	}

	public static getParameters(): UpperFlexDialogParameters {
		return new UpperFlexDialogParameters();
	}

}



