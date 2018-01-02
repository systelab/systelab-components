import { Component } from '@angular/core';
import { ModalComponent, DialogRef } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';

export class LowerFlexDialogParameters extends ModulabModalContext {
	public index: number;
	public language: string;
}

@Component( {
	templateUrl: 'showcase-lower-flex-dialog.component.html',
} )
export class ShowcaseLowerFlexDialog implements ModalComponent<LowerFlexDialogParameters> {

	public parameters: LowerFlexDialogParameters;

	constructor( public dialog: DialogRef<LowerFlexDialogParameters> ) {
		this.parameters = dialog.context;
	}

	public close(): void {

		this.dialog.close( 'This is a test' );
	}

	public static getParameters(): LowerFlexDialogParameters {
		return new LowerFlexDialogParameters();
	}

}



