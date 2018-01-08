import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { SystelabModalContext } from '../../../../systelab-components/modal/modal-context';


export class ShowcaseTwoTabsDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component( {
	templateUrl: 'showcase-two-tabs-dialog.component.html',
} )
export class ShowcaseTwoTabsDialog implements ModalComponent<ShowcaseTwoTabsDialogParameters> {

	protected parameters: ShowcaseTwoTabsDialogParameters;

	constructor( public dialog: DialogRef<ShowcaseTwoTabsDialogParameters> ) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): ShowcaseTwoTabsDialogParameters {
		return new ShowcaseTwoTabsDialogParameters();
	}

}



