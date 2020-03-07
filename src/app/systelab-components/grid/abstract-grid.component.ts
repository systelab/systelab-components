import { ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColDef, ColumnApi, GridOptions, RowNode } from 'ag-grid-community';
import { GridContextMenuOption } from './contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from './contextmenu/grid-context-menu-action-data';
import { DialogService } from '../modal/dialog/dialog.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { StylesUtilService } from '../utilities/styles.util.service';
import { GridContextMenuComponent, GridRowMenuActionHandler } from './contextmenu/grid-context-menu-component';
import { timer } from 'rxjs/index';
import { GridColumnOptionsService } from './options/grid-column-options.service';
import { GridColumnsOptions } from './options/grid-column-options';
import { GridColumnOptionsDialog, GridColumnOptionsDialogParameters } from './options/grid-column-options-dialog.component';
import { GridHeaderMenuActionHandler } from './contextmenu/grid-header-context-menu.component';

export type rowSelectionType = 'single' | 'multiple';

export abstract class AbstractGrid<T> implements OnInit, GridRowMenuActionHandler, GridHeaderMenuActionHandler {

	public gridOptions: GridOptions;
	public overlayNoRowsTemplate;
	public overlayLoadingTemplate;

	@Input() protected headerMenu: Array<GridContextMenuOption<Object>>;
	@Input() public menu: Array<GridContextMenuOption<T>>;

	@Input() protected preferenceName: string;
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

	protected firstSizeToFitExecuted = false;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
	            protected dialogService: DialogService, protected gridColumnOptionsService: GridColumnOptionsService) {
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
		options.rowDeselection = true;
		options.localeText = {
			noRowsToShow: this.i18nService.instant('COMMON_NO_ROWS_TO_SHOW'),
			loadingOoo:   this.i18nService.instant('COMMON_LOADING')
		};

		if (this.hideHeader()) {
			options.headerHeight = 0;
		}
		if (this.showChecks) {
			options.icons = {
				checkboxUnchecked: this.getCheckboxUnchecked(),
				checkboxChecked:   this.getCheckboxChecked()
			};
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
			this.gridColumnOptionsService.saveColumnsState(this.getGridOptionsPreferencesPrefix(), this.gridOptions.columnApi);
		}
	}

	protected loadColumnsStateFromPreferences(): void {
		this.gridColumnOptionsService.loadColumnsState(this.getGridOptionsPreferencesPrefix(), this.gridOptions.columnApi);
	}

	protected abstract getColumnDefs(): Array<any>;

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = this.getColumnDefs();

		if (this.menu && this.menu.length > 0) {
			colDefs.unshift(this.gridColumnOptionsService.getContextMenuColumnDef(this.getContextMenuColumnWidth()));
		}
		if (this.showChecks) {
			colDefs.unshift(this.gridColumnOptionsService.getCheckColumnDef(this.getCheckColumnWidth()));
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
		const rowId = Number(elementId.substr(elementId.indexOf('row')).replace('row', ''));
		const data: T = this.gridOptions.api.getModel().getRow(rowId).data;
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
		const rowId = Number(elementId.substr(elementId.indexOf('row')).replace('row', ''));
		const data: T = this.gridOptions.api.getModel().getRow(rowId).data;

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
			const actionData: GridContextMenuActionData<T> = new GridContextMenuActionData(elementId, actionId, headerData, this.gridOptions);
			this.action.emit(actionData);
		}
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
			if (!event.column.isCellEditable(event.node)) {
				const value = (event.event.ctrlKey && this.multipleSelection && !this.showChecks) ? event.event : event.data;
				this.clickRow.emit(value);
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
		return this.gridColumnOptionsService.getGridColumnOptions(columnApi, columnDefs);
	}

	protected applyGridColumnOptions(columnApi: ColumnApi, columnOptions: GridColumnsOptions): void {
		this.gridColumnOptionsService.applyGridColumnOptions(columnApi, columnOptions);
	}

	private getCheckboxUnchecked(): string {
		return `<span class='slab-grid-checkbox-unchecked'/>`;
	}

	private getCheckboxChecked(): string {
		return `<span class='slab-grid-checkbox'/>`;
	}

	public dotsClicked(rowIndex: number, data: T | Array<T>, event: MouseEvent): void {
		this.popupmenu.setActionManager(this);
		this.popupmenu.setRowIndex(rowIndex);
		if (this.existsAtLeastOneActionEnabled(data)) {
			timer(200).subscribe(() => this.popupmenu.openWithOptions(event, this.menu));
		} else {
			event.stopPropagation();
		}
	}

	protected existsAtLeastOneActionEnabled(data: T | Array<T>): boolean {
		if (this.menu) {
			return this.menu.some(menuOption => this.isMenuOptionEnabled(menuOption, data));
		} else {
			return false;
		}
	}

	private isMenuOptionEnabled(menuOption: GridContextMenuOption<T>, data: T | Array<T>): boolean {
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
