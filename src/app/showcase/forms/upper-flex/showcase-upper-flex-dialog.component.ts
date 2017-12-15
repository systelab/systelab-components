import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class ShowcaseUpperFlexDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	templateUrl: 'showcase-upper-flex-dialog.component.html',
} )
export class ShowcaseUpperFlexDialog extends DefaultModalActions implements ModalComponent<ShowcaseUpperFlexDialogParameters> {

	protected parameters: ShowcaseUpperFlexDialogParameters;

	constructor( public dialog: DialogRef<ShowcaseUpperFlexDialogParameters> ) {
		super( dialog );
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): ShowcaseUpperFlexDialogParameters {
		return new ShowcaseUpperFlexDialogParameters();
	}

}



