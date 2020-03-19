import { Component, ViewChild } from '@angular/core';
import { DialogHeaderComponent, DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export class ShowcaseProgressBarDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-progressbar-dialog.component.html',
})
export class ShowcaseProgressBarDialog implements ModalComponent<ShowcaseProgressBarDialogParameters> {

	@ViewChild('header', {static: false}) header: DialogHeaderComponent;

	protected parameters: ShowcaseProgressBarDialogParameters;
	private progress = 0;

	public static getParameters(): ShowcaseProgressBarDialogParameters {
		return new ShowcaseProgressBarDialogParameters();
	}

	constructor(public dialog: DialogRef<ShowcaseProgressBarDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public submit(): void {
		this.dialog.disable();
		this.progress = 0;
		interval(500)
			.pipe(
				takeWhile(() => this.progress < 100)
			)
			.subscribe(() => {
					if (this.progress < 100) {
						this.progress = this.progress + 10;
						this.header.go(this.progress);
					}
				}, () => {
				},
				() => {
					this.dialog.enable();
				}
			);
	}
}

