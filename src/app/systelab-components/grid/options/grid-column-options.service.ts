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

	constructor(private preferencesService: PreferencesService) {
	}

	public getGridColumnOptions(columnApi: ColumnApi, columnDefs: Array<any>): GridColumnsOptions {

		const options: GridColumnsOptions = new GridColumnsOptions();

		// initial & available
		columnApi.getAllColumns()
			.forEach((column) => {
				const item: TwoListItem = new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false);
				if (!columnApi.getColumn(column.getColDef().colId)
					.isVisible()) {
					options.available.push(item);
				}
				options.initialAvailableColumns.push(item);
			});

		// visible
		columnApi.getAllDisplayedColumns()
			.forEach((column) => {
				if (column.getColId() !== 'contextMenu') {
					const item: TwoListItem = new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, true);
					options.visible.push(item);
				}
			});

		// default columns
		columnDefs
			.forEach(column => {
				if (!column.hide) {
					const item: TwoListItem = new TwoListItem(column.headerName, column.colId, false, true);
					options.defaultVisibleColumns.push(item);
				} else {
					const item: TwoListItem = new TwoListItem(column.headerName, column.colId, false, false);
					options.defaultHiddenColumns.push(item);
				}
			});

		return options;

	}

	public applyGridColumnOptions(columnApi: ColumnApi, columnOptions: GridColumnsOptions) {

		let numberOfFixedInitialColumns = 0;

		if (columnApi.getColumn('contextMenu') !== null) {
			numberOfFixedInitialColumns = 1;
		}

		columnOptions.visible.forEach((tlp, index) => {
			const col: Column = columnApi.getAllColumns()
				.find((column: Column) => column.getColDef().colId === tlp.colId);
			col.setVisible(true);
			columnApi.moveColumn(col.getColId(), index + numberOfFixedInitialColumns);
		});

		columnApi.getAllColumns()
			.forEach((column) => {
				if (column.getColId() !== 'contextMenu') {
					if (!columnOptions.visible.find(tlp => tlp.colId === column.getColDef().colId)) {
						columnApi.setColumnVisible(column.getColId(), false);
					}
				}
			});
	}

	public saveColumnsState(prefix: string, columnApi: ColumnApi) {
		this.preferencesService.put(prefix, columnApi.getColumnState());
	}

	public loadColumnsState(prefix: string, columnApi: ColumnApi) {

		if (this.preferencesService.get(prefix)) {

			const gridOptionsPreferences: Array<any> = this.preferencesService.get(prefix);

			// Filtered preferences columns that are not in the current columnDef.
			const filteredGridOptionsPreferences: Array<any> = [];
			gridOptionsPreferences
				.forEach((colPref) => {
					if (columnApi.getAllColumns()
						.find((column: any) => colPref.colId === column.getColId())) {
						filteredGridOptionsPreferences.push(colPref);
					}
				});

			// Show new added columns
			columnApi.getAllColumns()
				.forEach((column) => {
					if (!filteredGridOptionsPreferences.find(colPref => colPref.colId === column.getColId())) {

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
					}
				});

			// Set to null width of preferences of columns without supressSizeToFit
			// If not set to null these columns are not sizedtofit
			columnApi.getAllColumns()
				.forEach((column) => {
					if (!column.getColDef().suppressSizeToFit) {
						const columnPref: any = filteredGridOptionsPreferences.find(colPref => colPref.colId === column.getColId());
						columnPref.width = null;
					}
				});

			columnApi.setColumnState(filteredGridOptionsPreferences);
		}
	}

	public  getContextMenuColumnWidth(): number {
		return 40;
	}

	public getCheckColumnWidth(): number {
		return 35;
	}

	public getContextMenuColumnDef() {
		return {
			colId:                 GridColumnOptionsService.contextMenuColId,
			headerName:            '',
			width:                 this.getContextMenuColumnWidth(),
			suppressSizeToFit:     true,
			resizable:             false,
			suppressMovable:       true,
			cellRendererFramework: GridContextMenuCellRendererComponent
		};
	}

	public getCheckColumnDef() {
		return {
			colId:             GridColumnOptionsService.selectionColId,
			headerName:        '',
			checkboxSelection: true,
			width:             this.getCheckColumnWidth(),
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true
		};
	}

}
