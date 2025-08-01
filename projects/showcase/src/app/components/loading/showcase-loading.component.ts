import { Component } from '@angular/core';
import { DialogService } from 'systelab-components';
import { ShowcaseLoadingDialog, ShowcaseLoadingDialogParameters } from './loading-dialog/showcase-loading-dialog.component';

@Component({
    selector: 'showcase-loading',
    templateUrl: 'showcase-loading.component.html',
    standalone: false
})
export class ShowcaseLoadingComponent {

	constructor(protected dialogService: DialogService) {
	}

	public showLoadingDialog() {
		const parameters: ShowcaseLoadingDialogParameters = ShowcaseLoadingDialog.getParameters();
		parameters.widthRelative = '50%';
		parameters.heightRelative = '25%';
		this.dialogService.showDialog(ShowcaseLoadingDialog, parameters);
	}

}
