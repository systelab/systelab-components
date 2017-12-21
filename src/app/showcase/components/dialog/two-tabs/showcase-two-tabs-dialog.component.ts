import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../../systelab-components/modal/message-popup/message-popup-view.component';

export class ShowcaseTwoTabsDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
	templateUrl: 'showcase-two-tabs-dialog.component.html',
} )
export class ShowcaseTwoTabsDialog extends DefaultModalActions implements ModalComponent<ShowcaseTwoTabsDialogParameters> {

	protected parameters: ShowcaseTwoTabsDialogParameters;

	constructor( public dialog: DialogRef<ShowcaseTwoTabsDialogParameters> ) {
		super( dialog );
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): ShowcaseTwoTabsDialogParameters {
		return new ShowcaseTwoTabsDialogParameters();
	}

}



