import { Component } from '@angular/core';
import { ShowcaseApplicationFrameDialog } from './application-frame-dialog/showcase-application-frame-dialog.component';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';

@Component({
	selector:    'showcase-application-frame',
	templateUrl: 'showcase-application-frame.component.html'
})
export class ShowcaseApplicationFrameComponent {

	constructor(protected dialogService: DialogService) {
	}

	public showApplicationFrame() {
		this.dialogService.showDialog(ShowcaseApplicationFrameDialog, ShowcaseApplicationFrameDialog.getParameters());

	}
}
