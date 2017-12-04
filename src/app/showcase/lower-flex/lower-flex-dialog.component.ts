import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../systelab-components/modal/message-popup/message-popup-view.component';

export class LowerFlexDialogParameters extends ModulabModalContext {
	public index: number;
	public language: string;
}

@Component( {
	selector:    'lower-flex-dialog',
	templateUrl: 'lower-flex-dialog.component.html',
} )
export class LowerFlexDialog extends DefaultModalActions implements ModalComponent<LowerFlexDialogParameters> {

	public lowerFlexDialogParameters: LowerFlexDialogParameters;

	constructor( public dialog: DialogRef<LowerFlexDialogParameters> ) {
		super( dialog );
		this.lowerFlexDialogParameters = dialog.context;
	}

	public close(): void {

		this.dialog.close( 'test' );
	}

	public static getParameters(): LowerFlexDialogParameters {
		return new LowerFlexDialogParameters();
	}

}



