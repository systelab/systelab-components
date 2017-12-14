import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../systelab-components/modal/message-popup/message-popup-view.component';

export class ShowcaseTwoColumnsDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	templateUrl: 'showcase-two-columns-dialog.component.html',
} )
export class ShowcaseTwoColumnsDialog extends DefaultModalActions implements ModalComponent<ShowcaseTwoColumnsDialogParameters> {

	protected parameters: ShowcaseTwoColumnsDialogParameters;

	constructor( public dialog: DialogRef<ShowcaseTwoColumnsDialogParameters> ) {
		super( dialog );
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): ShowcaseTwoColumnsDialogParameters {
		return new ShowcaseTwoColumnsDialogParameters();
	}

}



