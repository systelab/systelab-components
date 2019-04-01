import { Component, ElementRef, ViewChild } from '@angular/core';
import { LowerFlexDialogParameters, ShowcaseLowerFlexDialog } from './lower-flex/showcase-lower-flex-dialog.component';
import { ShowcaseSplitDialog, SplitShowcaseDialogParameters } from './split/showcase-split-dialog.component';
import { CalendarDialog, CalendarDialogParameters } from '../../../systelab-components/calendar/calendar-dialog.component';
import { ShowcaseFullFlexDialog, ShowcaseFullFlexDialogParameters } from './full-flex/showcase-full-flex-dialog.component';
import { ShowcaseTwoColumnsDialog, ShowcaseTwoColumnsDialogParameters } from './two-columns/showcase-two-columns-dialog.component';
import { ShowcaseTwoTabsDialog, ShowcaseTwoTabsDialogParameters } from './two-tabs/showcase-two-tabs-dialog.component';
import { ShowcaseStandardDialog } from './standard-dialog/showcase-standard-dialog.component';
import { DialogService } from '../../../systelab-components/modal';

@Component({
	selector: 'showcase-dialog',
	templateUrl: 'showcase-dialog.component.html',
})
export class ShowcaseDialogComponent {
	@ViewChild('btnContextModal') btnContextModal: ElementRef;

	constructor(protected dialogService: DialogService) {
	}

	public showLowerFlexDialog() {
		const parameters: LowerFlexDialogParameters = ShowcaseLowerFlexDialog.getParameters();
		parameters.width = 960;
		parameters.heightRelative = '95%';
		parameters.maxHeight = 900;
		parameters.index = 4;
		this.dialogService.showDialog(ShowcaseLowerFlexDialog, parameters);
	}

	public showSplitDialog() {
		const parameters: SplitShowcaseDialogParameters = ShowcaseSplitDialog.getParameters();
		parameters.heightRelative = '75%';
		parameters.widthRelative = '75%';
		this.dialogService.showDialog(ShowcaseSplitDialog, parameters);
	}

	public showCalendarDialog(event) {
		const parameters: CalendarDialogParameters = CalendarDialog.getParameters();
		this.dialogService.showDialog(CalendarDialog, parameters);
	}

	public showCalendarWithPositionDialog(event) {
		const parameters: CalendarDialogParameters = CalendarDialog.getParameters();
		parameters.width = 800;
		parameters.positionX = this.btnContextModal.nativeElement.offsetLeft;
		parameters.positionY = this.btnContextModal.nativeElement.offsetTop;
		parameters.isBlocking = false;
		parameters.isContextDialog = true;
		this.dialogService.showDialog(CalendarDialog, parameters);
	}

	public showTwoTabsDialog() {
		const parameters: ShowcaseTwoTabsDialogParameters = ShowcaseTwoTabsDialog.getParameters();
		parameters.heightRelative = '95vh';
		parameters.widthRelative = '60vw';
		parameters.index = 4;
		this.dialogService.showDialog(ShowcaseTwoTabsDialog, parameters);
	}

	public showFullFlexDialog() {
		const parameters: ShowcaseFullFlexDialogParameters = ShowcaseFullFlexDialog.getParameters();
		parameters.index = 4;
		parameters.widthRelative = '66%';
		parameters.heightRelative = '66%';
		this.dialogService.showDialog(ShowcaseFullFlexDialog, parameters);
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
