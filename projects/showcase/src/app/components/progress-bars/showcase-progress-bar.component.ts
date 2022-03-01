import { Component } from '@angular/core';
import { ShowcaseProgressBarDialog, ShowcaseProgressBarDialogParameters } from './progressbar-dialog/showcase-progressbar-dialog.component';
import { DialogService } from 'systelab-components';
import { ShowcaseProgressBarWithTextDialog, ShowcaseProgressBarWithTextDialogParameters } from './progressbar-with-text-dialog/showcase-progressbar-with-text-dialog.component';

@Component({
	selector:    'showcase-progress-bar',
	templateUrl: 'showcase-progress-bar.component.html'
})
export class ShowcaseProgressBarComponent {

	constructor(protected dialogService: DialogService) {
	}

	public showProgressBarDialog() {
		const parameters: ShowcaseProgressBarDialogParameters = ShowcaseProgressBarDialog.getParameters();
		parameters.widthRelative = '50%';
		parameters.heightRelative = '50%';
		this.dialogService.showDialog(ShowcaseProgressBarDialog, parameters);
	}
	public 	showProgressBarWithTextDialog() {
		const parameters: ShowcaseProgressBarWithTextDialogParameters = ShowcaseProgressBarWithTextDialog.getParameters();
		parameters.widthRelative = '50%';
		parameters.heightRelative = '50%';
		this.dialogService.showDialog(ShowcaseProgressBarWithTextDialog, parameters);
	}
}
