import { SearcherDialogParameters } from './searcher.dialog.component';
import { Observable } from 'rxjs/Observable';
import { RowNode } from 'ag-grid';

export abstract class AbstractSearcher<T> {

	public id: number | string;
	public multipleSelectedItemList: Array<T>;
	public multipleSelection: boolean = false;

	constructor() {

	}

	public abstract getDialogParameters(): SearcherDialogParameters<T>;

	public abstract getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<T>>;

	public abstract getTotalItems(): number;


	public abstract getColumnDefs(): Array<any>;

	public hideHeader(): boolean {
		return false;
	}

	public  getPropertyToShow(): string {
		return this.getDescriptionField();
	}

	public abstract getIdField(): string;

	public abstract getCodeField(): string;

	public abstract getDescriptionField(): string;

	public abstract getTextForSearcherLabel(): string;

	public abstract getTitleForDialog(): string;

	public abstract getGridOptionsPreferencesPrefix(): string;

	public getIsFullWidthCell(rowNode: RowNode): boolean {
		return false;
	}

	public getFullWidthCellRenderer(): any {
		return undefined;
	}

}