import { Component, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { ModulabModalContext } from '../../../../systelab-components/modal/plugin/modulab/modal-context';
import { DefaultModalActions } from '../../../../systelab-components/modal/message-popup/message-popup-view.component';
import { DialogHeaderComponent } from '../../../../systelab-components/modal/header/dialog-header.component';
import { Observable } from 'rxjs/Observable';

export class ShowcaseProgressBarDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-progressbar-dialog.component.html',
})
export class ShowcaseProgressBarDialog extends DefaultModalActions implements ModalComponent<ShowcaseProgressBarDialogParameters> {

	@ViewChild('header') header: DialogHeaderComponent;

	protected parameters: ShowcaseProgressBarDialogParameters;
	private progress = 0;

	constructor(public dialog: DialogRef<ShowcaseProgressBarDialogParameters>) {
		super(dialog);
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public submit(): void {
		this.progress = 0;
		Observable.interval(500)
			.subscribe(data => {
				if (this.progress < 100) {
					this.progress = this.progress + 10;
					this.header.go(this.progress);
				}
			});
	}

	public static getParameters(): ShowcaseProgressBarDialogParameters {
		return new ShowcaseProgressBarDialogParameters();
	}
}

