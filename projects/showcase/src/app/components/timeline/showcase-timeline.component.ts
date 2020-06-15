import { Component } from '@angular/core';
import { DialogService } from 'systelab-components';
import { ShowcaseTimelineDialog } from './timeline-dialog/showcase-timeline-dialog.component';

@Component({
	selector:    'showcase-timeline',
	templateUrl: 'showcase-timeline.component.html'
})
export class ShowcaseTimelineComponent {

	constructor(protected dialogService: DialogService) {
	}

	public showTimeline() {
		this.dialogService.showDialog(ShowcaseTimelineDialog, ShowcaseTimelineDialog.getParameters());

	}
}
