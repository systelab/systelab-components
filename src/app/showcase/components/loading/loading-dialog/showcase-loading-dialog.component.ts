import { Component, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { SystelabModalContext } from '../../../../systelab-components/modal/modal-context';
import { DialogHeaderComponent } from '../../../../systelab-components/modal/header/dialog-header.component';
import { Observable } from 'rxjs/Observable';

export class ShowcaseLoadingDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-loading-dialog.component.html',
})
export class ShowcaseLoadingDialog implements ModalComponent<ShowcaseLoadingDialogParameters> {

	@ViewChild('header') header: DialogHeaderComponent;
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
		Observable.interval(5000)
			.subscribe(data => {
				this.isLoading = false;
			});
	}

	public static getParameters(): ShowcaseLoadingDialogParameters {
		return new ShowcaseLoadingDialogParameters();
	}
}

