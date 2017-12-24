import { Component } from '@angular/core';
import { ShowcaseStandardDialog } from '../dialog/standard-dialog/showcase-standard-dialog.component';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';

@Component({
	selector:    'showcase-tabs',
	templateUrl: 'showcase-tabs.component.html'
})
export class ShowcaseTabsComponent {

	constructor(protected dialogService: DialogService) {
	}

	public tabsDialog() {
		this.dialogService.showDialog(ShowcaseStandardDialog, ShowcaseStandardDialog.getParameters());
	}
}
