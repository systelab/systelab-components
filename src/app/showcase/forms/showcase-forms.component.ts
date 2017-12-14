import { Component } from '@angular/core';
import { DialogService } from '../../systelab-components/modal/dialog/dialog.service';
import { LowerFlexDialog, LowerFlexDialogParameters } from './lower-flex/lower-flex-dialog.component';
import { SplitShowcaseDialog, SplitShowcaseDialogParameters } from '../split/split-showcase-dialog.component';
import { CalendarDialog, CalendarDialogParameters } from '../../systelab-components/calendar/calendar-dialog.component';
import { UpperFlexDialog, UpperFlexDialogParameters } from '../upper-flex/upper-flex-dialog.component';
import { FullFlexDialog, FullFlexDialogParameters } from './full-flex/full-flex-dialog.component';
import { ProgressbarDialog, ProgressbarDialogParameters } from './progressbar-dialog/progressbar-dialog.component';
import { TwoColumnsDialog, TwoColumnsDialogParameters } from '../two-columns/two-columns-dialog.component';
import { BootstrapDialog } from './bootstrap-dialog/bootstrap-dialog.component';

@Component({
	selector:    'showcase-forms',
	templateUrl: 'showcase-forms.component.html',
})
export class ShowcaseFormsComponent {

	constructor(protected dialogService: DialogService) {
	}

	public subFlex() {
		const lowerFlexDialogParameters: LowerFlexDialogParameters = LowerFlexDialog.getParameters();

		lowerFlexDialogParameters.width = 960;
		lowerFlexDialogParameters.height = 600;
		lowerFlexDialogParameters.index = 4;

		this.dialogService.showDialog(LowerFlexDialog, lowerFlexDialogParameters);
	}

	public splitShowcase() {
		const parameters: SplitShowcaseDialogParameters = SplitShowcaseDialog.getParameters();
		this.dialogService.showDialog(SplitShowcaseDialog, parameters);
	}

	public calendarShowcase() {
		const parametersC: CalendarDialogParameters = CalendarDialog.getParameters();
		this.dialogService.showDialog(CalendarDialog, parametersC);
	}

	public upperFlex() {
		const upperFlexDialogParameters: UpperFlexDialogParameters = UpperFlexDialog.getParameters();

		upperFlexDialogParameters.width = 960;
		upperFlexDialogParameters.height = 600;
		upperFlexDialogParameters.index = 4;

		this.dialogService.showDialog(UpperFlexDialog, upperFlexDialogParameters);
	}

	public fullFlex() {
		const fullFlexDialogParameters: FullFlexDialogParameters = FullFlexDialog.getParameters();

		fullFlexDialogParameters.index = 4;
		fullFlexDialogParameters.dialogClass = 'w-66 h-66';

		this.dialogService.showDialog(FullFlexDialog, fullFlexDialogParameters);
	}

	public progressBar() {

		const progressbarDialogParameters: ProgressbarDialogParameters = ProgressbarDialog.getParameters();

		progressbarDialogParameters.dialogClass = 'w-33 h-25';

		this.dialogService.showDialog(ProgressbarDialog, progressbarDialogParameters);
	}

	public twoColumns() {
		const twoColumnsDialogParameters: TwoColumnsDialogParameters = TwoColumnsDialog.getParameters();

		twoColumnsDialogParameters.width = 960;
		twoColumnsDialogParameters.height = 600;
		twoColumnsDialogParameters.index = 4;

		this.dialogService.showDialog(TwoColumnsDialog, twoColumnsDialogParameters);
	}

	public bootstrap() {
		this.dialogService.showDialog(BootstrapDialog, BootstrapDialog.getParameters());
	}

}
