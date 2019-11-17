import { AfterViewInit, Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../../modal';
import { TwoListItem } from '../../twolist/two-list.component';
import { GridColumnsOptions } from './grid-column-options';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';

export class GridColumnOptionsDialogParameters extends SystelabModalContext {
	public width = 800;
	public height = 500;
	public columnOptions: GridColumnsOptions;
}

@Component({
	selector:    'grid-column-options-dialog',
	templateUrl: 'grid-column-options-dialog.component.html',
})
export class GridColumnOptionsDialog implements ModalComponent<GridColumnOptionsDialogParameters>, AfterViewInit {

	public gridColumnOptionsDialogParameters: GridColumnOptionsDialogParameters;

	public orderType = 'orderDateNumber';
	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];
	public initialAvailableColumns: Array<TwoListItem> = [];

	constructor(public dialog: DialogRef<GridColumnOptionsDialogParameters>, protected i18nService: I18nService, protected preferencesService: PreferencesService) {
		this.gridColumnOptionsDialogParameters = dialog.context;

		this.availableColumns = this.gridColumnOptionsDialogParameters.columnOptions.available;
		this.visibleColumns = this.gridColumnOptionsDialogParameters.columnOptions.visible;
		this.initialAvailableColumns = this.gridColumnOptionsDialogParameters.columnOptions.initialAvailableColumns;
	}

	public submit(): void {
		const tlp: GridColumnsOptions = new GridColumnsOptions();
		tlp.visible = this.visibleColumns;
		this.dialog.close(tlp);
	}

	public close(): void {
		this.dialog.close();
	}

	public static getParameters(): GridColumnOptionsDialogParameters {
		return new GridColumnOptionsDialogParameters();
	}

	public getTabTitle(code: string): string {
		return this.i18nService.instant(code);
	}

	public ngAfterViewInit(): void {
		setTimeout(() => document.getElementById('ID_optionsSubmitButton').focus());
	}

}
