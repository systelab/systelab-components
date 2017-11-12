import { Component, OnInit } from '@angular/core';
import { ModulabModalContext } from '../../modal/plugin/modulab/modal-context';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { TwoListItem } from '../../twolist/two-list.component';
import { DefaultModalActions } from '../../modal/message-popup/message-popup-view.component';
import { GridColumnsOptions } from '../grid-column-options';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';

export class GridOptionsDialogParameters extends ModulabModalContext {
	public width = 800;
	public height = 500;
	public columnOptions: GridColumnsOptions;
}

@Component({
	selector:    'grid-options-dialog',
	templateUrl: 'grid-options-dialog.component.html',
})
export class GridOptionsDialog extends DefaultModalActions implements ModalComponent<GridOptionsDialogParameters> {

	public gridOptionsDialogParameters: GridOptionsDialogParameters;

	public orderType = 'orderDateNumber';
	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];
	public initialAvailableColumns: Array<TwoListItem> = [];

	constructor(public dialog: DialogRef<GridOptionsDialogParameters> , protected i18nService: I18nService,  protected preferencesService: PreferencesService) {
		super(dialog);
		this.gridOptionsDialogParameters = dialog.context;

		this.availableColumns = this.gridOptionsDialogParameters.columnOptions.available;
		this.visibleColumns = this.gridOptionsDialogParameters.columnOptions.visible;
		this.initialAvailableColumns = this.gridOptionsDialogParameters.columnOptions.initialAvailableColumns;
	}

	public submit(): void {
		const tlp: GridColumnsOptions = new GridColumnsOptions();
		tlp.visible = this.visibleColumns;
		this.dialog.close(tlp);
	}

	public cancel(): void {
		this.dialog.close();
	}

	public static getParameters(): GridOptionsDialogParameters {
		return new GridOptionsDialogParameters();
	}
}
