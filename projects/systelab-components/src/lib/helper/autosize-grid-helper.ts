import { Column, ColumnApi, Grid, GridApi, GridOptions } from 'ag-grid-community';

export interface CalculatedGridState {
	minRow: number;
	maxRow: number;
	top: number | undefined;
	calculatedDisplayedCols: string[];
	autoSizeColumnsToContent: boolean;
}

export function initializeCalculatedGridState(autoSizeColumnsToContent: boolean = true): CalculatedGridState {
	return {
		minRow: -1,
		maxRow: -1,
		top: undefined,
		calculatedDisplayedCols: [],
		autoSizeColumnsToContent: autoSizeColumnsToContent
	};
}

export class AutosizeGridHelper {

	private static itWasPreviouslyCalculated(event: any, gridState: CalculatedGridState, gridApi: GridApi) {
		let previouslyCalculated = false;
		if (event?.direction === 'vertical') {
			previouslyCalculated = this.itWasVerticallyCalculated(gridState, gridApi, event);
		} else if (event?.direction === 'horizontal') {
			previouslyCalculated = this.itWasHorizontallyCalculated(gridState, gridApi);
		}
		return previouslyCalculated;
	}

	private static itWasVerticallyCalculated(gridState: CalculatedGridState, gridApi: GridApi, event: any) {
		if (!event.top) {
			gridState.top = event.top;
		}

		let previouslyCalculated = false;
		//Scrolling up
		if (event.top <= gridState.top && gridState.minRow <= gridApi.getFirstDisplayedRow()) {
			previouslyCalculated = true;
		}

		//Scrolling down
		if (event.top >= gridState.top && gridState.maxRow >= gridApi.getLastDisplayedRow()) {
			previouslyCalculated = true;
		}

		gridState.top = event.top;
		gridState.minRow = gridApi.getFirstDisplayedRow();
		gridState.maxRow = gridApi.getLastDisplayedRow();

		return previouslyCalculated;
	}

	private static itWasHorizontallyCalculated(gridState: CalculatedGridState, gridApi: GridApi) {
		const displayedColumns: Column[] = gridApi.getAllDisplayedColumns();
		const newColumnOnDisplay: Column = displayedColumns.find(col => !gridState.calculatedDisplayedCols.includes(col.getColId()));

		gridState.calculatedDisplayedCols = displayedColumns.map(col => col.getColId());
		return !newColumnOnDisplay;
	}

	public static doAutoSizeManagement(calculatedGridState: CalculatedGridState, gridApi: GridApi, event?: any) {
		if(!gridApi) {
			return
		}
		if(!event || !calculatedGridState) {
			calculatedGridState = initializeCalculatedGridState(calculatedGridState?.autoSizeColumnsToContent);
		}

		if(calculatedGridState.autoSizeColumnsToContent) {
			const previouslyCalculated = this.itWasPreviouslyCalculated(event, calculatedGridState, gridApi);
			if (!previouslyCalculated) {
				gridApi.autoSizeColumns(gridApi.getColumns().filter(col => !col.getColDef().suppressSizeToFit), true);
			}
		} else {
			this.sizeColumnsToFit(gridApi);
		}
	}

	//This is to reduce the size of the last autosized column by 1 pixel.
	// 	This is necessary because some browsers do not correctly calculate
	// 	the available grid size when it is not an integer.
	//	For example, if the actual available size is 99.6, some browsers return 99.6
	//	for the parent size (viewport) and 100 for the grid size (container). And now,
	//	since the container is bigger than its viewport, an horizontal scrollbar appears.
	//	Additionally, as the size in difference is less than 1 (caused because of
	//	rounding), the scrollbar is empty, having no bar handle.
	//This is only necessary for sizeColumnsToFit, autoSizeColumns does it correctly.
	public static sizeColumnsToFit(gridApi: GridApi) {
		gridApi.sizeColumnsToFit();

		const cols: Column[] = gridApi.getColumns();
		for(let i: number = cols.length - 1; i >= 0; i--) {
			const col: Column = cols[i];
			if(!col.getColDef().suppressSizeToFit && col.getActualWidth() > 1) {
				gridApi.setColumnWidths([{key:col, newWidth: col.getActualWidth() - 1}])
				break;
			}
		}
	}
}
