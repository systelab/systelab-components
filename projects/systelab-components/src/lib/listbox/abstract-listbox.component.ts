import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { StylesUtilService } from '../utilities/styles.util.service';
import { ColDef, Column, GetRowIdParams, GridApi, GridOptions, RowSelectedEvent, RowSelectionOptions } from 'ag-grid-community';
import { AutosizeGridHelper, CalculatedGridState, initializeCalculatedGridState } from '../helper/autosize-grid-helper';

@Directive()
export abstract class AbstractListBox<T> implements OnInit {
	@Input() public rowData
	public gridOptions: GridOptions;
	public gridApi: GridApi;
	@ViewChild('hidden', {static: true}) public hiddenElement: ElementRef;
	public _values: Array<T>;
	@Input()
	set values(newValues: Array<T>) {
		this._values = newValues;
		this.rowData = this._values;
	}

	get values() {
		return this._values;
	}

	@Input() public rowDrag = false;
	@Input() public isDisabled: boolean;

	public _selectedItem: T;

	@Input()
	set selectedItem(value: T) {
		this._selectedItem = value;
		this.selectItemInGrid();
	}

	get selectedItem() {
		return this._selectedItem;
	}

	@Output() selectedItemChange = new EventEmitter<T>();
	@Output() public multipleSelectedIDListChange = new EventEmitter();
	@Output() public rowDragEnd = new EventEmitter();

	@Input() public selectFirstItem = false;
	@Input() public multipleSelection = false;
	@Input() public showAll = false;
	@Input() public hideChecks = false;

	protected _multipleSelectedItemList: Array<T>;

	private calculatedGridState : CalculatedGridState = initializeCalculatedGridState();
	private scrollTimeout;

	@Input()
	set multipleSelectedItemList(value: Array<T>) {
		this._multipleSelectedItemList = value;
		this.selectItemInGrid();
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
		this.multipleSelectedIDListChange.emit(this.selectionItemListToIDList());
	}

	get multipleSelectedItemList(): Array<T> {
		return this._multipleSelectedItemList;
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();

	protected constructor() {
		// This is intentional
	}

	protected abstract getIdField(level?: number): string;

	protected abstract getDescriptionField(level?: number): string;

	public abstract getInstance(): T;

	public ngOnInit() {
		this.gridOptions = this.getInitialGridOptions();
	}

	protected getInitialGridOptions(): GridOptions {
		const rowHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		const options: GridOptions = {};
		options.columnDefs = this.getColumnDefsWithOptions();
		if (this.multipleSelection && !this.hideChecks) {
			options.selectionColumnDef = this.getSelectionColumnDefs();
			options.rowSelection = {enableClickSelection: false, checkboxes: true, headerCheckbox: this.showAll, selectAll: 'all'} as RowSelectionOptions;
			options.rowClassRules = {
				'ag-row-disabled': (params) => {
					return this.isDisabled;
				},
			};
		} else {
			options.rowSelection = {enableClickSelection: !this.isDisabled, checkboxes: false, headerCheckbox: false} as RowSelectionOptions;
		}

		options.rowHeight = Number(rowHeight);
		options.suppressDragLeaveHidesColumns = true;
		options.suppressCellFocus = true;
		options.defaultColDef = {};
		options.defaultColDef.resizable = false;
		(options.rowSelection as RowSelectionOptions).mode = this.multipleSelection ? 'multiRow' : 'singleRow';
		(options.rowSelection as RowSelectionOptions).enableClickSelection = !this.isDisabled;
		options.context = {componentParent: this};

		options.headerHeight = 0;
		options.getRowId = (item: GetRowIdParams) => this.getRowNodeId(item)
			?.toString();

		options.enableBrowserTooltips = true;
		return options;
	}

	protected getRowNodeId(item: GetRowIdParams): string | number | undefined {
		if (item) {
			if (item[this.getIdField()] != null) {
				return item[this.getIdField()];
			}
			return item?.data[this.getIdField()] ?? '';
		}
		return '';
	}

	private getSelectionColumnDefs(): ColDef {

		return {
			type: 		   'selection',
			headerName:        '',
			width:             this.getCheckColumnWidth(),
			suppressSizeToFit: true,
			resizable:         false,
			suppressMovable:   true,
			pinned:            'left',
			cellStyle: this.isDisabled ? {'pointer-events': 'none'} : ''
		} as ColDef;

	}

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = [
			{
				rowDrag: this.rowDrag,
				colId:   this.getIdField(),
				field:   this.getDescriptionField(),
				tooltipField: this.getDescriptionField()
			}
		];
		this.addSuppressSizeToFitToColumnsWithWidthDefined(colDefs);

		return colDefs;
	}

	protected getCheckColumnWidth(): number {
		return 32;
	}

	public getAllFieldID(): number | string {
		return 0;
	}

	public getAllFieldDescription(): string {
		return 'All';
	}

	public cleanSelection() {
		this.unselectAllNodes();
	}

	protected addSuppressSizeToFitToColumnsWithWidthDefined(colDefs: ColDef[]) {
		colDefs.forEach(function(columnDef: ColDef) {
			if (columnDef.width) {
				columnDef.suppressSizeToFit = true;
			}
		});
	}

	public doGridReady(event: any) {
		this.gridApi = event.api;
		this.gridApi.addEventListener('bodyScroll', this.onBodyScroll.bind(this));
	}

	private onBodyScroll(event: any): void {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(() => {
			this.doAutoSizeManagement(event);
		}, 150);
	}

	protected doAutoSizeManagement(event?: any) {
		AutosizeGridHelper.doAutoSizeManagement(this.calculatedGridState, this.gridApi, event);
	}

	public doGridSizeChanged(event: any) {
		if (this.gridApi) {
			this.doAutoSizeManagement();
		}
	}

	public doClick(row: any) {
		if (!this.multipleSelection && !this.isDisabled) {
			this.selectedItem = row.node.data;
			this.selectedItemChange.emit(row.node.data);
		}
	}

	// overrides
	public onRowSelected(event: RowSelectedEvent) {
		if (this.multipleSelection) {
			if (!this.isDisabled && event.node && event.node.data && event.node.data[this.getIdField()] != null) {
				if (this.multipleSelectedItemList) {
					const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
						return item[this.getIdField()] === event.node.data[this.getIdField()];
					});
					if (event.node.isSelected()) {
						if (elementIndexInSelectedList < 0) {
							if (this.showAll) {
								if (event.node.data[this.getIdField()] === this.getAllFieldID()) {
									this.multipleSelectedItemList.push(event.node.data);
									this.unselectAllNodes();
								} else {
									const elementAllInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
										return item[this.getIdField()] === this.getAllFieldID();
									});
									if (elementAllInSelectedList !== -1) {
										this.unselectNodeAll();
										this.multipleSelectedItemList = [];

									}
									this.multipleSelectedItemList.push(event.node.data);
									this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
								}
							} else {
								this.multipleSelectedItemList.push(event.node.data);
								this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
							}
						}
					} else {
						if (elementIndexInSelectedList !== -1) {
							this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
							this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
						}
					}
				} else {
					if (this.showAll && (event.node.data[this.getIdField()] === this.getAllFieldID())) {
						this.multipleSelectedItemList.push(event.node.data);
						this.unselectAllNodes();
					} else {
						this.multipleSelectedItemList = [];
						this.multipleSelectedItemList.push(event.node.data);
						this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
					}
				}
			}
		}
	}

	public onModelUpdated(pEvent: any) {
		this.doAutoSizeManagement();
		this.selectItemInGrid();
		return pEvent;
	}

	protected selectItemInGrid(): void {
		this.gridApi?.forEachNode(node => {
			if (node.data) {
				if (this.multipleSelection) {
					if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
						if (this.multipleSelectedItemList
							.filter((selectedItem) => {
								return (selectedItem !== undefined && selectedItem[this.getIdField()] === this.getRowNodeId(node.data));
							}).length > 0) {
							node.setSelected(true);
						} else {
							node.setSelected(false);
						}
					} else {
						node.setSelected(false);
					}
				} else {
					if (!this.selectedItem && this.selectFirstItem) {
						if (node.rowIndex === 0) {
							node.setSelected(true);
							this.selectedItem = node.data;
							this.selectedItemChange.emit(node.data);
							return;
						}
					} else if (this.selectedItem) {
						if (this.getRowNodeId(node.data) === this.selectedItem[this.getIdField()]) {
							node.setSelected(true);
							return;
						}
					}
				}
			}
		});

	}

	private selectionItemListToIDList(): Array<string | number> {
		const idList = new Array<string | number>();
		for (const item of this.multipleSelectedItemList) {
			idList.push(item[this.getIdField()]);
		}
		return idList;
	}

	private unselectAllNodes() {
		this.gridApi?.forEachNode(node => {
			if (node && this.getRowNodeId(node.data) !== this.getAllFieldID()) {
				node.setSelected(false);
			}
		});
	}

	private unselectNodeAll() {
		this.gridApi?.forEachNode(node => {
			if (node && this.getRowNodeId(node.data) === this.getAllFieldID()) {
				node.setSelected(false);
			}
		});
	}

	public onRowDragEnd(event: any) {
		this.rowDragEnd.emit(event);
	}

}
