import { Component, ViewChild } from '@angular/core';
import { DialogHeaderComponent, DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

export class ShowcaseProgressBarWithTextDialogParameters extends SystelabModalContext {
	public index: number;
}

@Component({
	templateUrl: 'showcase-progressbar-with-text-dialog.component.html',
})
export class ShowcaseProgressBarWithTextDialog implements ModalComponent<ShowcaseProgressBarWithTextDialogParameters> {

	@ViewChild('header', {static: false}) header: DialogHeaderComponent;

	protected parameters: ShowcaseProgressBarWithTextDialogParameters;
	private progress = 0;

	public static getParameters(): ShowcaseProgressBarWithTextDialogParameters {
		return new ShowcaseProgressBarWithTextDialogParameters();
	}

	constructor(public dialog: DialogRef<ShowcaseProgressBarWithTextDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close();
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
						this.header.go(this.progress, `${this.progress}%`);
					}
				}, () => {
				},
				() => {
					this.dialog.enable();
				}
			);
	}
}

