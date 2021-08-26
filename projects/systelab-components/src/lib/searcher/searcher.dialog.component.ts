import { Component, ViewChild } from '@angular/core';
import { SearcherTableComponent } from './searcher.table.component';
import { I18nService } from 'systelab-translate';
import { ModalComponent } from '../modal/dialog/modal-context';
import { DialogRef } from '../modal/dialog/dialog-ref';
import { SearcherDialogParameters } from './searcher.dialog.parameters';

@Component({
	templateUrl: 'searcher.dialog.component.html'
})
export class SearcherDialog<T> implements ModalComponent<SearcherDialogParameters<T>> {

	@ViewChild(SearcherTableComponent, {static: false}) public tableComponent: SearcherTableComponent<T>;
	public parameters: SearcherDialogParameters<T>;
	public searchingValue: string;

	public searchLabel: string;
	public titleForDialog: string;
	public multipleSelection = false;
	public showClose: boolean;

	public searchByContains = false;

	constructor(public dialog: DialogRef<SearcherDialogParameters<T>>, protected i18nService: I18nService) {
		this.parameters = dialog.context;
		this.searchingValue = this.parameters.valueToSearch;

		this.showClose = this.parameters.showCloseButton;
		if (!this.parameters.showCloseButton) {
			this.parameters.isBlocking = true;
			this.parameters.keyboard = null;
		}

		if (this.parameters.searcher) {
			this.searchLabel = this.parameters.searcher.getTextForSearcherLabel();
			this.titleForDialog = this.parameters.searcher.getTitleForDialog();
			this.multipleSelection = this.parameters.searcher.multipleSelection;
		}

	}

	public getPlaceHolder() {
		if (this.searchByContains) {
			return this.i18nService.instant('COMMON_CONTAINS');
		} else {
			return this.i18nService.instant('COMMON_STARTS_WITH');
		}
	}

	public close(): void {
		this.dialog.close();
	}

	public submit(): void {
		if (this.parameters.searcher.multipleSelection) {
			this.dialog.close(this.parameters.searcher.multipleSelectedItemList);
		} else {
			this.dialog.close(this.tableComponent.getSelectedElements());
		}
	}

	public refreshSearch(): void {
		this.tableComponent.refreshTable();
	}

	public selectOnClick(data: T) {
		if (!this.multipleSelection) {
			if (data) {
				const arr: Array<T> = new Array<T>();
				arr.push(data);
				this.dialog.close(arr);
			}
		}
	}
}


