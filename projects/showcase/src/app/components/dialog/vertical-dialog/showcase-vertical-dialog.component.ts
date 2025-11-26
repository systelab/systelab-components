import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';
import { ShowcaseData } from '../../grid/showcase-grid.model';

export class ShowcaseVerticaldDialogParameters extends SystelabModalContext {
	public index: number;
	public width = 600;
	public height = 700;
}

@Component({
    templateUrl: 'showcase-vertical-dialog.component.html',
    standalone: false
})
export class ShowcaseVerticaldDialog implements ModalComponent<ShowcaseVerticaldDialogParameters> {

	protected parameters: ShowcaseVerticaldDialogParameters;

	public static getParameters(): ShowcaseVerticaldDialogParameters {
		return new ShowcaseVerticaldDialogParameters();
	}

	constructor(public dialog: DialogRef<ShowcaseVerticaldDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public doSelect(compareProfileData: ShowcaseData): void {
		console.log(compareProfileData);
	}

	public doSomething(): void {

	}

}

