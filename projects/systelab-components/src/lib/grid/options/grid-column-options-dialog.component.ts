import { AfterViewInit, Component } from '@angular/core';
import { TwoListItem } from '../../twolist/two-list-utilities';
import { GridColumnsOptions } from './grid-column-options';
import { I18nService } from 'systelab-translate';
import { ModalComponent, SystelabModalContext } from '../../modal/dialog/modal-context';
import { DialogRef } from '../../modal/dialog/dialog-ref';

export class GridColumnOptionsDialogParameters extends SystelabModalContext {
	public override width = 800;
	public override height = 500;
	public columnOptions: GridColumnsOptions;
	public canHideAllColumns: boolean = false;
}

@Component({
	selector:    'grid-column-options-dialog',
	templateUrl: 'grid-column-options-dialog.component.html',
})
export class GridColumnOptionsDialog implements ModalComponent<GridColumnOptionsDialogParameters>, AfterViewInit {

	public gridColumnOptionsDialogParameters: GridColumnOptionsDialogParameters;

	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];
	public initialAvailableColumns: Array<TwoListItem> = [];

	private readonly canHideAllColumns: boolean = false;

	constructor(public dialog: DialogRef<GridColumnOptionsDialogParameters>, protected i18nService: I18nService) {
		this.gridColumnOptionsDialogParameters = dialog.context;

		this.availableColumns = this.gridColumnOptionsDialogParameters.columnOptions.available;
		this.visibleColumns = this.gridColumnOptionsDialogParameters.columnOptions.visible;
		this.initialAvailableColumns = this.gridColumnOptionsDialogParameters.columnOptions.initialAvailableColumns;
		this.canHideAllColumns = this.gridColumnOptionsDialogParameters.canHideAllColumns;
	}

	public isSubmitDisabled(): boolean {
		return this.canHideAllColumns ? false : this.visibleColumns.length === 0;
	}

	public submit(): void {
		const options = new GridColumnsOptions();
		options.visible = this.visibleColumns;
		this.dialog.close(options);
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
