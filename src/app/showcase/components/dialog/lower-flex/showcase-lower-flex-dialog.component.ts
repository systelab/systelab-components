import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../../systelab-components/modal/message-popup/message-popup-view.component';

export class LowerFlexDialogParameters extends ModulabModalContext {
	public index: number;
	public language: string;
}

@Component( {
	templateUrl: 'showcase-lower-flex-dialog.component.html',
} )
export class ShowcaseLowerFlexDialog extends DefaultModalActions implements ModalComponent<LowerFlexDialogParameters> {

	public parameters: LowerFlexDialogParameters;

	constructor( public dialog: DialogRef<LowerFlexDialogParameters> ) {
		super( dialog );
		this.parameters = dialog.context;
	}

	public close(): void {

		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): LowerFlexDialogParameters {
		return new LowerFlexDialogParameters();
	}

}



