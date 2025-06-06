import { SearcherDialogParameters } from './searcher.dialog.parameters';
import { Observable } from 'rxjs';
import { IsFullWidthRowParams } from 'ag-grid-community';
import { Directive } from '@angular/core';

@Directive()
export abstract class AbstractSearcher<T> {

	public id: number | string;
	public multipleSelectedItemList: Array<T>;
	public multipleSelection: boolean = false;
	public treeSearcher: boolean = false;
	public parentSelectable: boolean = false;
	public useIdInMultipleSelectionGrid = false

	protected constructor() {

	}

	public abstract getDialogParameters(): SearcherDialogParameters<T>;

	public abstract getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public abstract getColumnDefs(): Array<any>;

	public hideHeader(): boolean {
		return false;
	}

	public getPropertyToShow(): string {
		return this.getDescriptionField();
	}

	public abstract getIdField(): string;

	public abstract getCodeField(): string;

	public abstract getDescriptionField(): string;

	public abstract getTextForSearcherLabel(): string;

	public abstract getTitleForDialog(): string;

	public abstract getGridOptionsPreferencesPrefix(): string;

	public getIsFullWidthRow(isFullWidthRowParams: IsFullWidthRowParams): boolean {
		return false;
	}

	public getFullWidthCellRenderer(): any {
		return undefined;
	}

}
