import { GridColumnsOptions } from './grid-column-options';
import { TwoListItem } from '../../twolist/two-list.component';
import { Column, ColumnApi } from 'ag-grid-community';
import { Injectable } from '@angular/core';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { GridContextMenuCellRendererComponent } from '../contextmenu/grid-context-menu-cell-renderer.component';

@Injectable({
	providedIn: 'root'
})
export class GridColumnOptionsService {

	public static readonly contextMenuColId = 'contextMenu';
	public static readonly selectionColId = 'selectCol';

	constructor(private readonly preferencesService: PreferencesService) {
	}

	public getGridColumnOptions(columnApi: ColumnApi, columnDefs: Array<any>): GridColumnsOptions {

		const options = new GridColumnsOptions();

		options.available = columnApi.getAllColumns()
			.filter(column => !columnApi.getColumn(column.getColDef().colId)
				.isVisible())
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false));

		options.initialAvailableColumns = columnApi.getAllColumns()
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false));

		options.visible = columnApi.getAllDisplayedColumns()
			.filter(column => column.getColId() !== 'contextMenu')
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, true));

		options.defaultVisibleColumns = columnDefs.filter(column => !column.hide)
			.map(column => new TwoListItem(column.headerName, column.colId, false, true));

		options.defaultHiddenColumns = columnDefs.filter(column => column.hide)
			.map(column => new TwoListItem(column.headerName, column.colId, false, false));
		return options;
	}

	public applyGridColumnOptions(columnApi: ColumnApi, columnOptions: GridColumnsOptions): void {

		const numberOfFixedInitialColumns = (columnApi.getColumn('contextMenu') !== null) ? 1 : 0;

		columnOptions.visible.forEach((tlp, index) => {
			const col: Column = columnApi.getAllColumns()
				.find((column: Column) => column.getColDef().colId === tlp.colId);
			col.setVisible(true);
			columnApi.moveColumn(col.getColId(), index + numberOfFixedInitialColumns);
		});

		columnApi.getAllColumns()
			.forEach((column) => {
				if (column.getColId() !== 'contextMenu') {
					if (!columnOptions.visible.some(tlp => tlp.colId === column.getColDef().colId)) {
						columnApi.setColumnVisible(column.getColId(), false);
					}
				}
			});
	}

	public saveColumnsState(prefix: string, columnApi: ColumnApi): void {
		this.preferencesService.put(prefix, columnApi.getColumnState());
	}

	public loadColumnsState(prefix: string, columnApi: ColumnApi): void {

		if (this.preferencesService.get(prefix)) {

			const gridOptionsPreferences: Array<any> = this.preferencesService.get(prefix);

			// Filtered preferences columns that are not in the current columnDef.
			const filteredGridOptionsPreferences: Array<any> = gridOptionsPreferences
				.filter(colPref => columnApi.getAllColumns()
					.some(column => colPref.colId === column.getColId()));

			// Show new added columns
			columnApi.getAllColumns()
				.filter(column => !filteredGridOptionsPreferences.some(colPref => colPref.colId === column.getColId()))
				.forEach(column => {
					const newColumn: any = {
						'colId':         column.getColId(),
						'hide':          !column.isVisible(),
						'aggFunc':       null,
						'width':         column.getActualWidth(),
						'pivotIndex':    null,
						'pinned':        null,
						'rowGroupIndex': null
					};

					if (column.getColId() === GridColumnOptionsService.contextMenuColId || column.getColId() === GridColumnOptionsService.selectionColId) {
						filteredGridOptionsPreferences.unshift(newColumn);
					} else {
						filteredGridOptionsPreferences.push(newColumn);
					}
				});

			this.setColumnWidthToFitContent(columnApi, filteredGridOptionsPreferences);

			columnApi.setColumnState(filteredGridOptionsPreferences);
		}
	}

	private setColumnWidthToFitContent(columnApi: ColumnApi, filteredGridOptionsPreferences: Array<any>) {
		// Set to null width of preferences of columns without supressSizeToFit
		// If not set to null these columns are not sizedtofit
		columnApi.getAllColumns()
			.filter(column => !column.getColDef().suppressSizeToFit)
			.forEach(column => {
				const columnPref: any = filteredGridOptionsPreferences.find(colPref => colPref.colId === column.getColId());
				columnPref.width = null;
			});
	}

	public getContextMenuColumnDef(width: number) {
		return {
			colId:                 GridColumnOptionsService.contextMenuColId,
			headerName:            '',
			width:                 width,
			suppressSizeToFit:     true,
			resizable:             false,
			suppressMovable:       true,
			cellRendererFramework: GridContextMenuCellRendererComponent
		};
	}

	public getCheckColumnDef(width: number) {
		return {
			colId:             GridColumnOptionsService.selectionColId,
			headerName:        '',
			checkboxSelection: true,
			width:             width,
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true
		};
	}

}
