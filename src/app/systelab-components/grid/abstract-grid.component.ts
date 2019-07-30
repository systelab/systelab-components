import { ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColDef, Column, GridOptions, RowNode } from 'ag-grid-community';
import { GridContextMenuCellRendererComponent } from './contextmenu/grid-context-menu-cell-renderer.component';
import { GridContextMenuOption } from './contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from './contextmenu/grid-context-menu-action-data';
import { TwoListItem } from '../twolist/two-list.component';
import { DialogService } from '../modal/dialog/dialog.service';
import { GridOptionsDialog, GridOptionsDialogParameters } from './options/grid-options-dialog.component';
import { GridColumnsOptions } from './grid-column-options';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { StylesUtilService } from '../utilities/styles.util.service';
import { GridContextMenuComponent } from './contextmenu/grid-context-menu-component';
import { timer } from 'rxjs/index';

export type rowSelectionType = 'single' | 'multiple';

export abstract class AbstractGrid<T> implements OnInit {

	protected static contextMenuColId = 'contextMenu';

	public gridOptions: GridOptions;
	protected forcedIndexSelection: number;
	public overlayNoRowsTemplate;
	public overlayLoadingTemplate;

	@Output() public viewportChanged = new EventEmitter();

	@Input() public menu: Array<GridContextMenuOption<T>>;

	@Input() protected headerMenu: Array<GridContextMenuOption<Object>>;
	@Input() protected preferenceName: string;
	@Input() public multipleSelection = false;
	@Input() public showChecks = false;
	@Input() public rowData: Array<T> = [];
	@Input() public noRowsText;
	@Input() public loadingText;
	@Output() public action = new EventEmitter();

	@Output() public clickRow = new EventEmitter();
	@Output() public rowDragEnd = new EventEmitter();

	@ViewChild('hidden') public hiddenElement: ElementRef;
	@ViewChild('popupmenu') public popupmenu: GridContextMenuComponent<T>;

	protected firstSizeToFitExecuted = false;

	protected constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
						  protected dialogService: DialogService) {
	}

	public ngOnInit() {

		const rowHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		const headerHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'height');

		this.gridOptions = {};

		this.gridOptions.columnDefs = this.getColumnDefsWithOptions();

		if (this.multipleSelection && this.showChecks) {
			this.gridOptions.suppressRowClickSelection = true;
			this.gridOptions.icons = {
				checkboxUnchecked: this.getCheckboxUnchecked(),
				checkboxChecked:   this.getCheckboxChecked()
			};
		} else if (this.showChecks) {
			this.gridOptions.icons = {
				checkboxUnchecked: this.getCheckboxUnchecked(),
				checkboxChecked:   this.getCheckboxChecked()
			};
		}
		this.menu = this.getContextMenuOptions();
		this.headerMenu = this.getHeaderContextMenuOptions();

		this.gridOptions.rowHeight = Number(rowHeight);
		this.gridOptions.headerHeight = Number(headerHeight);
		this.gridOptions.suppressDragLeaveHidesColumns = true;
		this.gridOptions.suppressRowDrag = true;
		this.gridOptions.suppressCellSelection = true;
		this.gridOptions.enableRangeSelection = true;
		this.gridOptions.stopEditingWhenGridLosesFocus = true;
		this.gridOptions.singleClickEdit = true;
		this.gridOptions.defaultColDef = {};
		this.gridOptions.defaultColDef.resizable = this.isColResizeEnabled();
		this.gridOptions.rowSelection = this.getRowSelectionType();
		this.gridOptions.rowDeselection = true;
		if (this.hideHeader()) {
			this.gridOptions.headerHeight = 0;
		}
		this.gridOptions.isFullWidthCell = (rowNode: RowNode) => {
			return this.getIsFullWidthCell(rowNode);
		};
		this.gridOptions.fullWidthCellRendererFramework = this.getFullWidthCellRenderer();
		this.gridOptions.context = {componentParent: this};

		if (this.noRowsText) {
			this.overlayNoRowsTemplate = this.noRowsText;
		}
		if (this.noRowsText) {
			this.overlayLoadingTemplate = this.loadingText;
		}
	}

	public onModelUpdated(event: any) {
		this.gridOptions.api.sizeColumnsToFit();
		return event;
	}

	public doGridReady(event: any) {
		this.loadColumnsStateFromPreferences();
		this.firstSizeToFitExecuted = true;
		this.gridOptions.api.sizeColumnsToFit();

		this.gridOptions.api.doLayout();
		this.gridOptions.api.addEventListener('columnMoved', this.saveColumnsStateInPreferences.bind(this));
	}

	protected saveColumnsStateInPreferences() {

		if (this.firstSizeToFitExecuted) {
			this.preferencesService.put(
				this.getGridOptionsPreferencesPrefix(),
				this.gridOptions.columnApi.getColumnState()
			);
		}
	}

	protected loadColumnsStateFromPreferences() {

		if (this.preferencesService.get(this.getGridOptionsPreferencesPrefix())) {

			const gridOptionsPreferences: Array<any> = this.preferencesService.get(
				this.getGridOptionsPreferencesPrefix()
			);

			// Filtered preferences columns that are not in the current columnDef.
			const gridOptions = this.gridOptions;
			const filteredGridOptionsPreferences: Array<any> = [];
			gridOptionsPreferences
				.forEach((colPref) => {
					if (gridOptions.columnApi.getAllColumns()
						.find((column: any) => colPref.colId === column.getColId())) {
						filteredGridOptionsPreferences.push(colPref);
					}
				});

			// Show new added columns
			this.gridOptions.columnApi.getAllColumns()
				.forEach(function(column) {
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

						if (column.getColId() === AbstractGrid.contextMenuColId || column.getColId() === 'selectCol') {
							filteredGridOptionsPreferences.unshift(newColumn);
						} else {
							filteredGridOptionsPreferences.push(newColumn);
						}
					}
				});

			// Set to null width of preferences of columns without supressSizeToFit
			// If not set to null these columns are not sizedtofit
			this.gridOptions.columnApi.getAllColumns()
				.forEach((column) => {
					if (!column.getColDef().suppressSizeToFit) {
						const columnPref: any = filteredGridOptionsPreferences.find(colPref => colPref.colId === column.getColId());
						columnPref.width = null;
					}
				});

			this.gridOptions.columnApi.setColumnState(filteredGridOptionsPreferences);
		}
	}

	protected abstract getColumnDefs(): Array<any>;

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = this.getColumnDefs();

		if (this.getContextMenuOptions() && this.getContextMenuOptions().length > 0) {
			colDefs.unshift({
				colId:                 AbstractGrid.contextMenuColId,
				headerName:            '',
				width:                 this.getContextMenuColumnWidth(),
				suppressSizeToFit:     true,
				resizable:             false,
				suppressMovable:       true,
				cellRendererFramework: GridContextMenuCellRendererComponent
			});
		}
		if (this.showChecks) {
			// .headerCheckboxSelection is not supported for 'infinite' rowModelType
			colDefs.unshift({
				colId:             'selectCol',
				headerName:        '',
				checkboxSelection: true,
				width:             this.getCheckColumnWidth(),
				suppressSizeToFit: true,
				resizable:         false,
				suppressMovable:   true
			});
		}

		this.addSuppressSizeToFitToColumnsWithWidthDefined(colDefs);

		return colDefs;
	}

	protected hideHeader(): boolean {
		return false;
	}

	protected getIsFullWidthCell(rowNode: RowNode): boolean {
		return false;
	}

	public getFullWidthCellRenderer(): any {
		return undefined;
	}

	protected getGridOptionsPreferencesPrefix(): string {
		return this.preferenceName || this.constructor.name;
	}

	protected getContextMenuOptions(): Array<GridContextMenuOption<T>> {
		return this.menu;
	}

	public executeContextMenuAction(elementId: string, actionId: string): void {
		const option: GridContextMenuOption<T> = this.menu.find(opt => opt.actionId === actionId);
		const rowId: number = Number(elementId.substr(elementId.indexOf('row'))
			.replace('row', ''));
		const data: T = this.gridOptions.api.getModel()
			.getRow(rowId).data;
		const rowSelecteds: Array<T> = this.gridOptions.api.getSelectedRows();

		if (option && option.action !== null && option.action !== undefined && data !== undefined) {
			// const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData('' + rowId, actionId, data, this.gridOptions);
			const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData('' + rowId, actionId, data, this.gridOptions, rowSelecteds);
			option.action(actionData);
		} else {
			// const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData('' + rowId, actionId, data, this.gridOptions);
			const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData('' + rowId, actionId, data, this.gridOptions, rowSelecteds);
			this.action.emit(actionData);
		}
		this.popupmenu.closeDropDown();
	}

	public isContextMenuOptionEnabled(elementId: string, actionId: string): boolean {

		const option: GridContextMenuOption<T> = this.menu.find(opt => opt.actionId === actionId);
		const rowId: number = Number(elementId.substr(elementId.indexOf('row'))
			.replace('row', ''));
		const data: T = this.gridOptions.api.getModel()
			.getRow(rowId).data;

		if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined && data !== undefined) {
			return option.isActionEnabled(data);
		}
		return true;
	}

	protected getHeaderContextMenuOptions(): Array<GridContextMenuOption<Object>> {
		return this.headerMenu;
	}

	public executeHeaderContextMenuAction(elementId: string, actionId: string, headerData: any): void {

		const option: GridContextMenuOption<Object> = this.headerMenu.find(opt => opt.actionId === actionId);

		if (option && option.action !== null && option.action !== undefined) {
			const actionData: GridContextMenuActionData<Object> = new GridContextMenuActionData(elementId, actionId, headerData, this.gridOptions);
			return option.action(actionData);
		} else {
			const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData(elementId, actionId, headerData, this.gridOptions);
			this.action.emit(actionData);
		}
	}

	public isHeaderContextMenuOptionEnabled(elementId: string, actionId: string, headerData: any): boolean {

		const option: GridContextMenuOption<Object> = this.headerMenu.find(opt => opt.actionId === actionId);
		if (option && option.isActionEnabled !== null && option.isActionEnabled !== undefined) {
			return option.isActionEnabled(headerData);
		}
		return true;

	}

	protected getRowSelectionType(): rowSelectionType {
		return this.multipleSelection ? 'multiple' : 'single';
	}

	protected isColResizeEnabled(): boolean {
		return true;
	}

	protected getContextMenuColumnWidth(): number {
		return 40;
	}

	protected getCheckColumnWidth(): number {
		return 28;
	}

	protected addSuppressSizeToFitToColumnsWithWidthDefined(colDefs: ColDef[]) {
		colDefs.forEach(function(columnDef: ColDef) {
			if (columnDef.width) {
				columnDef.suppressSizeToFit = true;
			}
		});
	}

	public getSelectedRows(): Array<T> {
		return this.gridOptions.api.getSelectedRows();
	}

	public getSelectedRow(): T {
		if (this.gridOptions.api.getSelectedRows().length > 0) {
			return this.gridOptions.api.getSelectedRows()[0];
		} else {
			return null;
		}
	}

	public selectRow(index: number) {
		this.forcedIndexSelection = index;
		this.gridOptions.api.ensureIndexVisible(index);
		this.gridOptions.api.selectIndex(this.forcedIndexSelection, false, false);

	}

	public doClick(event: any) {
		if (event.column.colId === 'contextMenu') {
			event.node.setSelected(true);
		}
		if (event.column.colId !== 'contextMenu' && !event.column.isCellEditable(event.node)) {
			this.clickRow.emit((event.event.ctrlKey && !this.showChecks) ? event.event : event.data);
		}
	}

	public doColumnResized(event: any) {
		this.saveColumnsStateInPreferences();
	}

	public doViewportChanged() {
		this.viewportChanged.emit();
	}

	public doGridSizeChanged(event: any) {
		if (this.gridOptions.api) {
			this.gridOptions.api.sizeColumnsToFit();
		}
	}

	// --------------------------------
	// Two List Grid Options Columns
	// --------------------------------

	public getGridColumnOptions(): GridColumnsOptions {

		const options: GridColumnsOptions = new GridColumnsOptions();

		// initial & available
		this.gridOptions.columnApi.getAllColumns()
			.forEach((column) => {
				const item: TwoListItem = new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false);
				if (!this.gridOptions.columnApi.getColumn(column.getColDef().colId)
					.isVisible()) {
					options.available.push(item);
				}
				options.initialAvailableColumns.push(item);
			});

		// visible
		this.gridOptions.columnApi.getAllDisplayedColumns()
			.forEach((column) => {
				if (column.getColId() !== 'contextMenu') {
					const item: TwoListItem = new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, true);
					options.visible.push(item);
				}
			});

		// default columns
		this.getColumnDefs()
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

	public applyGridColumnOptions(options: GridColumnsOptions) {

		let numberOfFixedInitialColumns = 0;

		if (this.gridOptions.columnApi.getColumn('contextMenu') !== null) {
			numberOfFixedInitialColumns = 1;
		}

		options.visible.forEach((tlp, index) => {
			const col: Column = this.gridOptions.columnApi.getAllColumns()
				.find((column: Column) => column.getColDef().colId === tlp.colId);
			col.setVisible(true);
			this.gridOptions.columnApi.moveColumn(col.getColId(), index + numberOfFixedInitialColumns);
		});

		this.gridOptions.columnApi.getAllColumns()
			.forEach((column) => {
				if (column.getColId() !== 'contextMenu') {
					if (!options.visible.find(tlp => tlp.colId === column.getColDef().colId)) {
						this.gridOptions.columnApi.setColumnVisible(column.getColId(), false);
					}
				}
			});

		this.gridOptions.api.sizeColumnsToFit();
		this.saveColumnsStateInPreferences();

	}

	public showOptions(): void {
		const parameters: GridOptionsDialogParameters = GridOptionsDialog.getParameters();

		parameters.columnOptions = this.getGridColumnOptions();

		this.dialogService.showDialog(GridOptionsDialog, parameters)
			.subscribe(
				(response: GridColumnsOptions) => {
					if (response) {
						this.applyGridColumnOptions(response);
					}
				}
			);
	}

	private getCheckboxUnchecked(): string {
		return `<span class='slab-grid-checkbox-unchecked'/>`;
	}

	private getCheckboxChecked(): string {
		return `<span class='slab-grid-checkbox'/>`;
	}

	public dotsClicked(rowIndex: number, data: T | Array<T>, event: MouseEvent) {
		this.popupmenu.setContainer(this);
		this.popupmenu.setRowIndex(rowIndex);
		if (this.existsAtLeastOneActionEnabled(data)) {
			timer(200)
				.subscribe(() => this.popupmenu.openWithOptions(event, this.menu));
		} else {
			event.stopPropagation();
		}
	}

	protected existsAtLeastOneActionEnabled(data: T | Array<T>): boolean {
		if (this.menu) {
			const optionEnabled: GridContextMenuOption<T> = this.menu.find((menuOption: GridContextMenuOption<T>) => {
				if (menuOption.isActionEnabled) {
					return menuOption.isActionEnabled.apply(null, [data]);
				} else {
					return true;
				}
			});
			return (optionEnabled != null);
		}
	}

	public onRowDragEnd(event: any) {
		this.rowDragEnd.emit(event);
	}

}
