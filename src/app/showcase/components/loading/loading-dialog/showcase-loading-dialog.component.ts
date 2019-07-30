import { Component, ViewChild } from '@angular/core';
import { DialogHeaderComponent, DialogRef, ModalComponent, SystelabModalContext } from '../../../../systelab-components/modal';
import { interval } from 'rxjs';

export class ShowcaseLoadingDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-loading-dialog.component.html',
})
export class ShowcaseLoadingDialog implements ModalComponent<ShowcaseLoadingDialogParameters> {

	@ViewChild('header', {static: false}) header: DialogHeaderComponent;
	public isLoading = false;

	public useClassic = false;

	protected parameters: ShowcaseLoadingDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseLoadingDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public modern() {
		this.useClassic = false;
		this.submit();
	}

	public classic() {
		this.useClassic = true;
		this.submit();
	}

	private submit(): void {
		this.isLoading = true;
		interval(5000)
			.subscribe(data => {
				this.isLoading = false;
			});
	}

	public static getParameters(): ShowcaseLoadingDialogParameters {
		return new ShowcaseLoadingDialogParameters();
	}
}

