import { Component, ViewChild } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { SearcherTableComponent } from './searcher.table.component';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { AbstractSearcher } from './abstract-searcher';
import { SystelabModalContext } from '../modal/modal-context';

export class SearcherDialogParameters<T> extends SystelabModalContext {
	public valueToSearch: string;
	public searcher: AbstractSearcher<T>;
	public showCloseButton = true;
}

@Component( {
	templateUrl: 'searcher.dialog.component.html'
} )
export class SearcherDialog<T> implements ModalComponent<SearcherDialogParameters<T>> {

	@ViewChild( SearcherTableComponent )
	public tableComponent: SearcherTableComponent<T>;
	public dialogParameters: SearcherDialogParameters<T>;
	public searchingValue: string;

	public searchLabel: string;
	public titleForDialog: string;
	public multipleSelection = false;
	public showClose: boolean;

	public searchByContains = false;

	constructor( public dialog: DialogRef<SearcherDialogParameters<T>>, protected i18nService: I18nService ) {
		this.dialogParameters = dialog.context;
		this.searchingValue = this.dialogParameters.valueToSearch;

		this.showClose = this.dialogParameters.showCloseButton;
		if ( !this.dialogParameters.showCloseButton ) {
			this.dialogParameters.isBlocking = true;
			this.dialogParameters.keyboard = null;
		}

		if ( this.dialogParameters.searcher ) {
			this.searchLabel = this.dialogParameters.searcher.getTextForSearcherLabel();
			this.titleForDialog = this.dialogParameters.searcher.getTitleForDialog();
			this.multipleSelection = this.dialogParameters.searcher.multipleSelection;
		}

	}

	public getPlaceHolder() {
		if ( this.searchByContains ) {
			return this.i18nService.instant( 'COMMON_CONTAINS' );
		} else {
			return this.i18nService.instant( 'COMMON_STARTS_WITH' );
		}
	}

	public close(): void {
		this.dialog.close( this.tableComponent.getSelectedElements() );
	}

	public submit(): void {

		this.dialog.close( this.tableComponent.getSelectedElements() );
	}

	public refreshSearch(): void {
		this.tableComponent.refreshTable();
	}

	public selectOnClick( data: T ) {
		if ( !this.multipleSelection ) {
			if ( data ) {
				const arr: Array<T> = new Array<T>();
				arr.push( data );
				this.dialog.close( arr );
			}
		}
	}
}


