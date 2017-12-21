import { Component } from '@angular/core';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';
import { LowerFlexDialogParameters, ShowcaseLowerFlexDialog } from './lower-flex/showcase-lower-flex-dialog.component';
import { ShowcaseSplitDialog, SplitShowcaseDialogParameters } from './split/showcase-split-dialog.component';
import { CalendarDialog, CalendarDialogParameters } from '../../../systelab-components/calendar/calendar-dialog.component';
import { ShowcaseFullFlexDialog, ShowcaseFullFlexDialogParameters } from './full-flex/showcase-full-flex-dialog.component';
import { ShowcaseProgressBarDialog, ShowcaseProgressBarDialogParameters } from './progressbar-dialog/showcase-progressbar-dialog.component';
import { ShowcaseTwoColumnsDialog, ShowcaseTwoColumnsDialogParameters } from './two-columns/showcase-two-columns-dialog.component';
import { ShowcaseTwoTabsDialog, ShowcaseTwoTabsDialogParameters } from './two-tabs/showcase-two-tabs-dialog.component';
import { ShowcaseStandardDialog } from './standard-dialog/showcase-standard-dialog.component';

@Component({
	selector:    'showcase-dialog',
	templateUrl: 'showcase-dialog.component.html',
})
export class ShowcaseDialogComponent {

	constructor(protected dialogService: DialogService) {
	}

	public showLowerFlexDialog() {
		const parameters: LowerFlexDialogParameters = ShowcaseLowerFlexDialog.getParameters();
		parameters.width = 960;
		parameters.height = 600;
		parameters.index = 4;
		this.dialogService.showDialog(ShowcaseLowerFlexDialog, parameters);
	}

	public showSplitDialog() {
		const parameters: SplitShowcaseDialogParameters = ShowcaseSplitDialog.getParameters();
		this.dialogService.showDialog(ShowcaseSplitDialog, parameters);
	}

	public showCalendarDialog() {
		const parameters: CalendarDialogParameters = CalendarDialog.getParameters();
		this.dialogService.showDialog(CalendarDialog, parameters);
	}

	public showTwoTabsDialog() {
		const parameters: ShowcaseTwoTabsDialogParameters = ShowcaseTwoTabsDialog.getParameters();
		parameters.width = 960;
		parameters.height = 600;
		parameters.index = 4;
		this.dialogService.showDialog(ShowcaseTwoTabsDialog, parameters);
	}

	public showFullFlexDialog() {
		const parameters: ShowcaseFullFlexDialogParameters = ShowcaseFullFlexDialog.getParameters();
		parameters.index = 4;
		parameters.dialogClass = 'w-66 h-66';
		this.dialogService.showDialog(ShowcaseFullFlexDialog, parameters);
	}

	public showProgressBarDialog() {
		const parameters: ShowcaseProgressBarDialogParameters = ShowcaseProgressBarDialog.getParameters();
		parameters.dialogClass = 'w-50 h-25';
		this.dialogService.showDialog(ShowcaseProgressBarDialog, parameters);
	}

	public showTwoColumnsDialog() {
		const parameters: ShowcaseTwoColumnsDialogParameters = ShowcaseTwoColumnsDialog.getParameters();
		parameters.width = 960;
		parameters.height = 600;
		parameters.index = 4;
		this.dialogService.showDialog(ShowcaseTwoColumnsDialog, parameters);
	}

	public showStandardDialog() {
		this.dialogService.showDialog(ShowcaseStandardDialog, ShowcaseStandardDialog.getParameters());
	}

}
