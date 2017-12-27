import { Component } from '@angular/core';
import { ShowcaseProgressBarDialog, ShowcaseProgressBarDialogParameters } from './progressbar-dialog/showcase-progressbar-dialog.component';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';

@Component({
	selector:    'showcase-progress-bar',
	templateUrl: 'showcase-progress-bar.component.html'
})
export class ShowcaseProgressBarComponent {


	constructor(protected dialogService: DialogService) {
	}

	public showProgressBarDialog() {
		const parameters: ShowcaseProgressBarDialogParameters = ShowcaseProgressBarDialog.getParameters();
		parameters.dialogClass = 'w-50 h-25';
		this.dialogService.showDialog(ShowcaseProgressBarDialog, parameters);
	}

}
