import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColDef, Column, GridApi, GridOptions, IsFullWidthRowParams, RowSelectionOptions } from 'ag-grid-community';
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
import { TwoListItem } from '../twolist/two-list-utilities';
import { GridHeaderContextMenu, GridHeaderMenuActionHandler } from './contextmenu/grid-header-context-menu.component';
import { AutosizeGridHelper, CalculatedGridState, initializeCalculatedGridState } from '../helper/autosize-grid-helper';

export type rowSelectionType = 'single' | 'multiple';

@Directive()
export abstract class AbstractGrid<T> implements OnInit, GridRowMenuActionHandler, GridHeaderMenuActionHandler {

	public static readonly contextMenuColId = 'contextMenu';
	public static readonly selectionColId = 'ag-Grid-SelectionColumn';
	public gridOptions: GridOptions;
	public gridApi: GridApi;
	public overlayNoRowsTemplate;
	public overlayLoadingTemplate;
	public startCellEditorWithTab = false;

	@Input() public headerMenu: Array<GridContextMenuOption<Object>>;
	@Input() public menu: Array<GridContextMenuOption<T>>;

	@Input() public preferenceName: string;
	@Input() public multipleSelection = false;
	@Input() public showChecks = false;
	@Input() public headerCheckboxSelection = false;
	@Input()
	set rowData(value: Array<T>) {
		if(value) {
			this._rowData = [...value];
		}
	}

	get rowData(): Array<T> {
		return this._rowData;
	}
	@Input() public noRowsText;
	@Input() public loadingText;
	@Input() public removeSelectionOnOpenContextMenu = false;
	@Input() public autoSizeColumnsToContent = false;

	@Output() public action = new EventEmitter();
	@Output() public clickRow = new EventEmitter();
	@Output() public rowDragEnd = new EventEmitter();
	@Output() public viewportChanged = new EventEmitter();
	@Output() public rowSelected = new EventEmitter();

	@ViewChild('hidden', {static: true}) public hiddenElement: ElementRef;
	@ViewChild('popupmenu', {static: false}) public popupmenu: GridContextMenuComponent<T>;
	@ViewChild('headerpopupmenu', {static: false}) public headerPopupMenu: GridHeaderContextMenu<Object>;

	protected firstSizeToFitExecuted = false;
	private calculatedGridState: CalculatedGridState;
	private scrollTimeout;
	private _rowData: Array<T>;

	protected constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
						  protected dialogService: DialogService) {
	}

	public ngOnInit(): void {

		this.gridOptions = this.getInitialGridOptions();

		if (this.noRowsText) {
			this.overlayNoRowsTemplate = this.noRowsText;
			this.overlayLoadingTemplate = this.loadingText;
		}
		this.calculatedGridState = initializeCalculatedGridState(this.autoSizeColumnsToContent);
	}

	protected getInitialGridOptions(): GridOptions {
		const rowHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		const headerHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'height');

		const options: GridOptions = {};
		options.columnDefs = this.getColumnDefsWithOptions();
		options.selectionColumnDef = this.getCheckColumnDef(this.getCheckColumnWidth());
		options.rowSelection = this.getRowSelectionType();
		options.rowHeight = Number(rowHeight);
		options.headerHeight = Number(headerHeight);
		options.suppressDragLeaveHidesColumns = true;
		options.suppressCellFocus = true;
		options.stopEditingWhenCellsLoseFocus = true;
		options.singleClickEdit = true;
		options.defaultColDef = {
			resizable: this.isColResizeEnabled()
		};
		options.localeText = {
			noRowsToShow: this.i18nService.instant('COMMON_NO_ROWS_TO_SHOW'),
			loadingOoo:   this.i18nService.instant('COMMON_LOADING')
		};

		if (this.hideHeader()) {
			options.headerHeight = 0;
		}

		options.isFullWidthRow = (isFullWidthRowParams: IsFullWidthRowParams) => this.getIsFullWidthRow(isFullWidthRowParams);
		options.fullWidthCellRenderer = this.getFullWidthCellRenderer();
		options.context = {componentParent: this};
		options.onCellEditingStarted = (event) => this.onCellEditingStarted(event);

		return options;
	}

	protected onCellEditingStarted(event: any): void {
		this.startCellEditorWithTab = event.event?.key === 'Tab';
		if (this.gridApi?.getEditingCells().length > 1) {
			this.gridApi.stopEditing();
			event.api.startEditingCell({rowIndex: event.rowIndex, colKey: event.column});
		}
	}

	public onModelUpdated(event: any) {
		if(this.gridApi) {
			this.doAutoSizeManagement();
		}
		return event;
	}

	public doGridReady(event: any): void {
		this.gridApi = event.api;
		this.loadColumnsStateFromPreferences();

		if(this.autoSizeColumnsToContent) {
			this.gridApi.addEventListener('bodyScroll', this.onBodyScroll.bind(this));
		} else {
			this.doAutoSizeManagement();
		}
		this.gridApi.addEventListener('columnMoved', this.saveColumnsStateInPreferences.bind(this));
	}

	protected saveColumnsStateInPreferences(): void {
		if (this.firstSizeToFitExecuted) {
			this.preferencesService.put(this.getGridOptionsPreferencesPrefix(), this.gridApi.getColumnState());
		}
	}

	protected loadColumnsStateFromPreferences(): void {
		this.loadColumnsState(this.getGridOptionsPreferencesPrefix(), this.gridApi);
	}

	public onSortChanged(): void {
		this.saveColumnsStateInPreferences();
	}

	private loadColumnsState(prefix: string, gridApi: GridApi): void {

		if (this.preferencesService.get(prefix)) {

			const gridOptionsPreferences: Array<any> = this.preferencesService.get(prefix);

			// Filtered preferences columns that are not in the current columnDef.
			const filteredGridOptionsPreferences: Array<any> = gridOptionsPreferences
				.filter(colPref => gridApi.getColumns()
					.some(column => colPref.colId === column.getColId()));

			// Show new added columns
			gridApi.getColumns()
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

			this.setColumnWidthToFitContent(gridApi, filteredGridOptionsPreferences);

			// Override pinned property saved in preferences
			const pinnedCol = filteredGridOptionsPreferences.find(column => column.colId === AbstractGrid.contextMenuColId || column.colId === AbstractGrid.selectionColId);
			if (pinnedCol) {
				pinnedCol['pinned'] = 'left';
			}
			gridApi.applyColumnState({state: filteredGridOptionsPreferences, applyOrder: true});
		}
	}

	private setColumnWidthToFitContent(gridApi: GridApi, filteredGridOptionsPreferences: Array<any>) {
		// Set to null width of preferences of columns without supressSizeToFit
		// If not set to null these columns are not sizedtofit
		gridApi.getColumns()
			.filter(column => !column.getColDef().suppressSizeToFit)
			.forEach(column => {
				const columnPref: any = filteredGridOptionsPreferences.find(colPref => colPref.colId === column.getColId());
				columnPref.width = null;
			});
	}

	private getContextMenuColumnDef(width: number): ColDef {
		return {
			colId:             AbstractGrid.contextMenuColId,
			headerName:        '',
			pinned:            'left',
			width:             width,
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true,
			cellRenderer:      GridContextMenuCellRendererComponent
		} as ColDef;
	}

	private getCheckColumnDef(width: number): ColDef {
		return {
			type: 'selection',
			cellClass: 'checkbox-cell',
			headerName:        '',
			pinned:            'left',
			maxWidth: width,
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true
		} as ColDef;
	}

	protected abstract getColumnDefs(): Array<any>;

	protected getColumnDefsWithOptions(): Array<ColDef> {
		const colDefs: Array<any> = this.getColumnDefs();

		if (this.menu && this.menu.length > 0) {
			colDefs.unshift(this.getContextMenuColumnDef(this.getContextMenuColumnWidth()));
		}

		colDefs.forEach((colDef: ColDef) => this.suppressColumnSizeToFit(colDef));

		return colDefs;
	}

	protected hideHeader(): boolean {
		return false;
	}

	protected getIsFullWidthRow(isFullWidthRowParams: IsFullWidthRowParams): boolean {
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
		const data: T = this.gridApi.getDisplayedRowAtIndex(rowId).data;
		const rowsSelected: Array<T> = this.gridApi.getSelectedRows();

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
		const data: T = this.gridApi.getDisplayedRowAtIndex(rowId).data;

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

	public onRowSelected(event: any): void {
		this.rowSelected.emit(event.data);
	}

	protected getRowSelectionType(): RowSelectionOptions {
		return {
			mode: this.multipleSelection ? 'multiRow' : 'singleRow',
			checkboxes: this.showChecks,
			headerCheckbox: this.headerCheckboxSelection,
			enableClickSelection: !(this.showChecks && this.multipleSelection),
		} as RowSelectionOptions;
	}

	public getSelectedRows(): Array<T> {
		return this.gridApi.getSelectedRows();
	}

	public getSelectedRow(): T {
		const selected = this.getSelectedRows();
		return selected.length > 0 ? selected[0] : null;
	}

	public selectRow(index: number): void {
		this.gridApi.ensureIndexVisible(index);
		timer(200)
			.subscribe(() => this.gridApi.getDisplayedRowAtIndex(index).setSelected(true));
	}

	public doClick(event: any): void {
		if (event.column.colId === 'contextMenu' && !(event.event.ctrlKey && this.showChecks)) {
			event.node.setSelected(true);
		} else {
			if (event.column.colId === AbstractGrid.selectionColId) {
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
		if (this.gridApi) {
			this.doAutoSizeManagement();
		}
	}

	public showOptions(canHideAllColumns?: boolean): void {
		const parameters: GridColumnOptionsDialogParameters = GridColumnOptionsDialog.getParameters();

		parameters.columnOptions = this.getGridColumnOptions(this.gridApi, this.getColumnDefs());
		parameters.canHideAllColumns = canHideAllColumns;

		this.dialogService.showDialog(GridColumnOptionsDialog, parameters)
			.subscribe(
				(columnsOptions: GridColumnsOptions) => {
					if (columnsOptions) {
						this.applyGridColumnOptions(this.gridApi, columnsOptions);
						this.doAutoSizeManagement();
						this.saveColumnsStateInPreferences();
					}
				}
			);
	}

	protected getGridColumnOptions(gridApi: GridApi, columnDefs: Array<any>): GridColumnsOptions {
		const options = new GridColumnsOptions();

		options.available = gridApi.getColumns()
			.filter(column => !gridApi.getColumn(column.getColDef().colId)
				.isVisible())
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false));

		options.initialAvailableColumns = gridApi.getColumns()
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, false));

		options.visible = gridApi.getAllDisplayedColumns()
			.filter(column => column.getColId() !== 'contextMenu' && column.getColId() !== AbstractGrid.selectionColId)
			.map(column => new TwoListItem(column.getColDef().headerName, column.getColDef().colId, false, true));

		options.defaultVisibleColumns = columnDefs.filter(column => !column.hide)
			.map(column => new TwoListItem(column.headerName, column.colId, false, true));

		options.defaultHiddenColumns = columnDefs.filter(column => column.hide)
			.map(column => new TwoListItem(column.headerName, column.colId, false, false));
		return options;
	}

	protected applyGridColumnOptions(gridApi: GridApi, columnOptions: GridColumnsOptions): void {
		let numberOfFixedInitialColumns = (gridApi.getColumn('contextMenu') !== null) ? 1 : 0;
		numberOfFixedInitialColumns += this.showChecks ? 1 : 0;
		const columns: Map<string, Column> = new Map<string, Column>(gridApi.getColumns().map(col => [col.getColId(), col]));
		const colsToApplyGridOptions: Column[] = [];
		columnOptions.visible.forEach((tlp, index) => {
			const col: Column = columns.get(tlp.colId)
			if(col) {
				colsToApplyGridOptions.push(col);
				gridApi.moveColumns([col], index + numberOfFixedInitialColumns);
			}
		});
		gridApi.setColumnsVisible(colsToApplyGridOptions, true);
		gridApi.setColumnsVisible(gridApi.getColumns()
			.filter(col => col.getColId() !== 'contextMenu' && col.getColId() !== AbstractGrid.selectionColId)
			.filter(col => !columnOptions.visible.some(tlp => tlp.colId === col.getColDef().colId)), false);
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

	private onBodyScroll(event: any): void {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(() => {
			this.doAutoSizeManagement(event);
		}, 150);
	}

	private doAutoSizeManagement(event?: any) {
		this.firstSizeToFitExecuted = true; 
		AutosizeGridHelper.doAutoSizeManagement(this.calculatedGridState, this.gridApi, event);
	}
}
