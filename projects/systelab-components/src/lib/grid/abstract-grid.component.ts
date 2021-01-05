import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColDef, Column, ColumnApi, GridOptions, RowNode } from 'ag-grid-community';
import { GridContextMenuOption } from './contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from './contextmenu/grid-context-menu-action-data';
import { DialogService } from '../modal/dialog/dialog.service';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { StylesUtilService } from '../utilities/styles.util.service';
import { GridContextMenuComponent, GridRowMenuActionHandler } from './contextmenu/grid-context-menu-component';
import { timer } from 'rxjs';
import { GridColumnsOptions } from './options/grid-column-options';
import { GridColumnOptionsDialog, GridColumnOptionsDialogParameters } from './options/grid-column-options-dialog.component';
import { GridContextMenuCellRendererComponent } from './contextmenu/grid-context-menu-cell-renderer.component';
import { TwoListItem } from '../twolist/two-list.component';
import { GridHeaderContextMenu, GridHeaderMenuActionHandler } from './contextmenu/grid-header-context-menu.component';

export type rowSelectionType = 'single' | 'multiple';

@Directive()
export abstract class AbstractGrid<T> implements OnInit, GridRowMenuActionHandler, GridHeaderMenuActionHandler {

	public static readonly contextMenuColId = 'contextMenu';
	public static readonly selectionColId = 'selectCol';

	public gridOptions: GridOptions;
	public overlayNoRowsTemplate;
	public overlayLoadingTemplate;

	@Input() public headerMenu: Array<GridContextMenuOption<Object>>;
	@Input() public menu: Array<GridContextMenuOption<T>>;

	@Input() public preferenceName: string;
	@Input() public multipleSelection = false;
	@Input() public showChecks = false;
	@Input() public rowData: Array<T> = [];
	@Input() public noRowsText;
	@Input() public loadingText;

	@Output() public action = new EventEmitter();
	@Output() public clickRow = new EventEmitter();
	@Output() public rowDragEnd = new EventEmitter();
	@Output() public viewportChanged = new EventEmitter();

	@ViewChild('hidden', {static: true}) public hiddenElement: ElementRef;
	@ViewChild('popupmenu', {static: false}) public popupmenu: GridContextMenuComponent<T>;
	@ViewChild('headerpopupmenu', {static: false}) public headerPopupMenu: GridHeaderContextMenu<Object>;

	protected firstSizeToFitExecuted = false;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
				protected dialogService: DialogService) {
	}

	public ngOnInit(): void {

		this.gridOptions = this.getInitialGridOptions();

		if (this.noRowsText) {
			this.overlayNoRowsTemplate = this.noRowsText;
			this.overlayLoadingTemplate = this.loadingText;
		}
	}

	protected getInitialGridOptions(): GridOptions {
		const rowHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		const headerHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'height');

		const options: GridOptions = {};

		options.columnDefs = this.getColumnDefsWithOptions();
		options.rowHeight = Number(rowHeight);
		options.headerHeight = Number(headerHeight);
		options.suppressDragLeaveHidesColumns = true;
		options.suppressCellSelection = true;
		options.enableRangeSelection = true;
		options.stopEditingWhenGridLosesFocus = true;
		options.singleClickEdit = true;
		options.defaultColDef = {
			resizable: this.isColResizeEnabled()
		};
		options.rowSelection = this.getRowSelectionType();
		options.localeText = {
			noRowsToShow: this.i18nService.instant('COMMON_NO_ROWS_TO_SHOW'),
			loadingOoo:   this.i18nService.instant('COMMON_LOADING')
		};

		if (this.hideHeader()) {
			options.headerHeight = 0;
		}
		if (this.showChecks) {
			if (this.multipleSelection) {
				options.suppressRowClickSelection = true;
			}
		}
		options.isFullWidthCell = (rowNode: RowNode) => this.getIsFullWidthCell(rowNode);
		options.fullWidthCellRendererFramework = this.getFullWidthCellRenderer();
		options.context = {componentParent: this};

		return options;
	}

	public onModelUpdated(event: any) {
		this.gridOptions.api.sizeColumnsToFit();
		return event;
	}

	public doGridReady(event: any): void {
		this.loadColumnsStateFromPreferences();
		this.firstSizeToFitExecuted = true;
		this.gridOptions.api.sizeColumnsToFit();

		this.gridOptions.api.doLayout();
		this.gridOptions.api.addEventListener('columnMoved', this.saveColumnsStateInPreferences.bind(this));
	}

	protected saveColumnsStateInPreferences(): void {
		if (this.firstSizeToFitExecuted) {
			this.preferencesService.put(this.getGridOptionsPreferencesPrefix(), this.gridOptions.columnApi.getColumnState());
		}
	}

	protected loadColumnsStateFromPreferences(): void {
		this.loadColumnsState(this.getGridOptionsPreferencesPrefix(), this.gridOptions.columnApi);
	}

	private loadColumnsState(prefix: string, columnApi: ColumnApi): void {

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

					if (column.getColId() === AbstractGrid.contextMenuColId || column.getColId() === AbstractGrid.selectionColId) {
						filteredGridOptionsPreferences.unshift(newColumn);
					} else {
						filteredGridOptionsPreferences.push(newColumn);
					}
				});

			this.setColumnWidthToFitContent(columnApi, filteredGridOptionsPreferences);

			// Override pinned property saved in preferences
			const pinnedCol = filteredGridOptionsPreferences.find(column => column.colId === AbstractGrid.contextMenuColId || column.colId === AbstractGrid.selectionColId);
			if (pinnedCol) {
				pinnedCol['pinned'] = 'left';
			}

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

	private getContextMenuColumnDef(width: number) {
		return {
			colId:                 AbstractGrid.contextMenuColId,
			headerName:            '',
			pinned:                'left',
			width:                 width,
			suppressSizeToFit:     true,
			resizable:             false,
			suppressMovable:       true,
			cellRendererFramework: GridContextMenuCellRendererComponent
		};
	}

	private getCheckColumnDef(width: number) {
		return {
			colId:             AbstractGrid.selectionColId,
			headerName:        '',
			checkboxSelection: true,
			pinned:            'left',
			width:             width,
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true
		};
	}

	protected abstract getColumnDefs(): Array<any>;

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = this.getColumnDefs();

		if (this.menu && this.menu.length > 0) {
			colDefs.unshift(this.getContextMenuColumnDef(this.getContextMenuColumnWidth()));
		}
		if (this.showChecks) {
			colDefs.unshift(this.getCheckColumnDef(this.getCheckColumnWidth()));
		}
		colDefs.forEach((colDef: ColDef) => this.suppressColumnSizeToFit(colDef));

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

	public executeContextMenuAction(elementId: string, actionId: string): void {
		const option: GridContextMenuOption<T> = this.menu.find(opt => opt.actionId === actionId);
		const rowId = Number(elementId.substr(elementId.indexOf('row'))
			.replace('row', ''));
		const data: T = this.gridOptions.api.getModel()
			.getRow(rowId).data;
		const rowsSelected: Array<T> = this.gridOptions.api.getSelectedRows();

		const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData(rowId.toString(), actionId, data, this.gridOptions, rowsSelected);
		if (option && option.action && data !== undefined) {
			option.action(actionData);
		} else {
			this.action.emit(actionData);
		}
		this.popupmenu.closeDropDown();
	}

	public isContextMenuOptionEnabled(elementId: string, actionId: string): boolean {

		const option: GridContextMenuOption<T> = this.menu.find(opt => opt.actionId === actionId);
		const rowId = Number(elementId.substr(elementId.indexOf('row'))
			.replace('row', ''));
		const data: T = this.gridOptions.api.getModel()
			.getRow(rowId).data;

		if (option && option.isActionEnabled && data !== undefined) {
			return option.isActionEnabled(data);
		}
		return true;
	}

	public executeHeaderContextMenuAction(elementId: string, actionId: string, headerData: any): void {

		const option: GridContextMenuOption<Object> = this.headerMenu.find(opt => opt.actionId === actionId);

		if (option && option.action) {
			const actionData: GridContextMenuActionData<Object> = new GridContextMenuActionData(elementId, actionId, headerData, this.gridOptions);
			return option.action(actionData);
		} else {
			const actionData: GridContextMenuActionData<Object> = new GridContextMenuActionData(elementId, actionId, headerData, this.gridOptions);
			this.action.emit(actionData);
		}
		this.headerPopupMenu.closeDropDown();
	}

	public isHeaderContextMenuOptionEnabled(elementId: string, actionId: string, headerData: any): boolean {

		const option: GridContextMenuOption<Object> = this.headerMenu.find(opt => opt.actionId === actionId);
		if (option && option.isActionEnabled) {
			return option.isActionEnabled(headerData);
		}
		return true;
	}

	protected isColResizeEnabled(): boolean {
		return true;
	}

	private suppressColumnSizeToFit(colDef: ColDef): void {
		if (colDef.width) {
			colDef.suppressSizeToFit = true;
		}
	}

	public onRowSelected(event: any) {
	}

	protected getRowSelectionType(): rowSelectionType {
		return this.multipleSelection ? 'multiple' : 'single';
	}

	public getSelectedRows(): Array<T> {
		return this.gridOptions.api.getSelectedRows();
	}

	public getSelectedRow(): T {
		const selected = this.getSelectedRows();
		return selected.length > 0 ? selected[0] : null;
	}

	public selectRow(index: number): void {
		this.gridOptions.api.ensureIndexVisible(index);
		timer(200)
			.subscribe(() => this.gridOptions.api.selectIndex(index, false, false));
	}

	public doClick(event: any): void {
		if (event.column.colId === 'contextMenu') {
			event.node.setSelected(true);
		} else {
			if (event.column.colId === 'selectCol') {
				event.node.setSelected(!event.node.isSelected());
			} else {
				if (!event.column.isCellEditable(event.node)) {
					const value = (event.event.ctrlKey && this.multipleSelection && !this.showChecks) ? event.event : event.data;
					this.clickRow.emit(value);
				}
			}
		}
	}

	public doColumnResized(event: any): void {
		this.saveColumnsStateInPreferences();
	}

	public doViewportChanged(): void {
		this.viewportChanged.emit();
	}

	public doGridSizeChanged(event: any): void {
		if (this.gridOptions.api) {
			this.gridOptions.api.sizeColumnsToFit();
		}
	}

	public showOptions(): void {
		const parameters: GridColumnOptionsDialogParameters = GridColumnOptionsDialog.getParameters();

		parameters.columnOptions = this.getGridColumnOptions(this.gridOptions.columnApi, this.getColumnDefs());

		this.dialogService.showDialog(GridColumnOptionsDialog, parameters)
			.subscribe(
				(columnsOptions: GridColumnsOptions) => {
					if (columnsOptions) {
						this.applyGridColumnOptions(this.gridOptions.columnApi, columnsOptions);
						this.gridOptions.api.sizeColumnsToFit();
						this.saveColumnsStateInPreferences();
					}
				}
			);
	}

	protected getGridColumnOptions(columnApi: ColumnApi, columnDefs: Array<any>): GridColumnsOptions {
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

	protected applyGridColumnOptions(columnApi: ColumnApi, columnOptions: GridColumnsOptions): void {
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

	public dotsClicked(rowIndex: number, data: T | Array<T>, event: MouseEvent): void {
		this.popupmenu.setActionManager(this);
		this.popupmenu.setRowIndex(rowIndex);
		if (this.existsAtLeastOneActionEnabled(data)) {
			timer(200)
				.subscribe(() => this.popupmenu.openWithOptions(event, this.menu));
		} else {
			event.stopPropagation();
		}
	}

	public headerDotsClicked(headerData: Object, event: MouseEvent): void {
		this.headerPopupMenu.setActionManager(this);
		this.headerPopupMenu.setHeaderData(headerData);
		if (this.existsAtLeastOneHeaderActionEnabled(headerData)) {
			timer(200)
				.subscribe(() => this.headerPopupMenu.openWithOptions(event, this.headerMenu,));
		} else {
			event.stopPropagation();
		}
	}

	protected existsAtLeastOneHeaderActionEnabled(data: Object | Array<Object>): boolean {
		return this.headerMenu ? this.headerMenu.some(menuOption => this.isMenuOptionEnabled(menuOption, data)) : false;
	}

	protected existsAtLeastOneActionEnabled(data: T | Array<T> | Object | Array<Object>): boolean {
		if (this.menu) {
			return this.menu.some(menuOption => this.isMenuOptionEnabled(menuOption, data));
		} else {
			return false;
		}
	}

	private isMenuOptionEnabled(menuOption: GridContextMenuOption<T>, data: T | Array<T> | Object | Array<Object>): boolean {
		if (menuOption.isActionEnabled) {
			return menuOption.isActionEnabled.apply(null, [data]);
		} else {
			return true;
		}
	}

	public onRowDragEnd(event: any): void {
		this.rowDragEnd.emit(event);
	}

	protected getContextMenuColumnWidth(): number {
		return 40;
	}

	protected getCheckColumnWidth(): number {
		return 35;
	}
}
