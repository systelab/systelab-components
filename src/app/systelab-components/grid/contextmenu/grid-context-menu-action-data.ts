import {GridOptions} from 'ag-grid';

export class GridContextMenuActionData<T> {

	constructor(public elementId: string, public actionId: string, public data: T, public gridOptions: GridOptions, public multipleSelectedData?: Array<T>) {

	}

}

