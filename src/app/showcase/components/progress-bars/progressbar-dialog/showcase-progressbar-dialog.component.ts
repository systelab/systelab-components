import { Component, ViewChild } from '@angular/core';
import { DialogHeaderComponent, DialogRef, ModalComponent, SystelabModalContext } from '../../../../systelab-components/modal';
import { interval } from 'rxjs';

export class ShowcaseProgressBarDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-progressbar-dialog.component.html',
})
export class ShowcaseProgressBarDialog implements ModalComponent<ShowcaseProgressBarDialogParameters> {

	@ViewChild('header') header: DialogHeaderComponent;

	protected parameters: ShowcaseProgressBarDialogParameters;
	private progress = 0;

	constructor(public dialog: DialogRef<ShowcaseProgressBarDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public submit(): void {
		this.progress = 0;
		interval(500)
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

