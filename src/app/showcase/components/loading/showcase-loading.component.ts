import { Component } from '@angular/core';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';
import { ShowcaseLoadingDialog, ShowcaseLoadingDialogParameters } from './loading-dialog/showcase-loading-dialog.component';

@Component({
	selector:    'showcase-loading',
	templateUrl: 'showcase-loading.component.html'
})
export class ShowcaseLoadingComponent {


	constructor(protected dialogService: DialogService) {
	}

	public showLoadingDialog() {
		const parameters: ShowcaseLoadingDialogParameters = ShowcaseLoadingDialog.getParameters();
		parameters.dialogClass = 'w-50 h-25';
		this.dialogService.showDialog(ShowcaseLoadingDialog, parameters);
	}

}
