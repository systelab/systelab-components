import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { StylesUtilService } from '../utilities/styles.util.service';
import { ColDef, GetRowIdParams, GridOptions } from 'ag-grid-community';
import { AutosizeGridHelper, CalculatedGridState, initializeCalculatedGridState } from '../helper/autosize-grid-helper';

@Directive()
export abstract class AbstractListBox<T> implements OnInit {

	public gridOptions: GridOptions;
	@ViewChild('hidden', {static: true}) public hiddenElement: ElementRef;
	public _values: Array<T>;
	@Input()
	set values(newValues: Array<T>) {
		this._values = newValues;
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.setRowData(this._values);
		}
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

		const rowHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');

		this.gridOptions = {};

		this.gridOptions.columnDefs = this.getColumnDefsWithOptions();

		if (this.multipleSelection && !this.hideChecks) {
			this.gridOptions.suppressRowClickSelection = true;
			this.gridOptions.rowClassRules = {
				'ag-row-disabled': (params) => {
					return this.isDisabled;
				},
			};
		} else {
			this.gridOptions.suppressRowClickSelection = this.isDisabled;
		}

		this.gridOptions.rowHeight = Number(rowHeight);
		this.gridOptions.suppressDragLeaveHidesColumns = true;
		this.gridOptions.suppressCellFocus = true;
		this.gridOptions.enableRangeSelection = !this.isDisabled;
		this.gridOptions.defaultColDef = {};
		this.gridOptions.defaultColDef.resizable = false;
		this.gridOptions.rowSelection = this.multipleSelection ? 'multiple' : 'single';
		this.gridOptions.suppressRowDeselection = this.isDisabled;

		this.gridOptions.context = {componentParent: this};

		this.gridOptions.headerHeight = 0;
		this.gridOptions.getRowId = (item: GetRowIdParams) => this.getRowNodeId(item)
			?.toString();

		this.gridOptions.rowData = this.values;

		this.gridOptions.enableBrowserTooltips = true;
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

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = [
			{
				rowDrag: this.rowDrag,
				colId:   this.getIdField(),
				field:   this.getDescriptionField(),
				tooltipField: this.getDescriptionField()
			}
		];

		if (this.multipleSelection && !this.hideChecks) {
			colDefs.unshift({
				colId:             'selectCol',
				headerName:        '',
				checkboxSelection: true,
				width:             this.getCheckColumnWidth(),
				suppressSizeToFit: true,
				resizable:         false,
				suppressMovable:   true,
				pinned:            'left',
				cellStyle: this.isDisabled ? {'pointer-events': 'none'} : ''
			});
		}
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
		this.gridOptions.api.addEventListener('bodyScroll', this.onBodyScroll.bind(this));
	}

	private onBodyScroll(event: any): void {
		clearTimeout(this.scrollTimeout);
		this.scrollTimeout = setTimeout(() => {
			this.doAutoSizeManagement(event);
		}, 150);
	}

	protected doAutoSizeManagement(event?: any) {
		AutosizeGridHelper.doAutoSizeManagement(this.calculatedGridState, this.gridOptions, event);
	}

	public doGridSizeChanged(event: any) {
		if (this.gridOptions.api) {
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
	public onRowSelected(event: any) {
		if (this.multipleSelection) {
			if (!this.isDisabled && event.node && event.node.data && event.node.data[this.getIdField()] != null) {
				if (this.multipleSelectedItemList) {
					const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
						return item[this.getIdField()] === event.node.data[this.getIdField()];
					});
					if (event.node.selected) {
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
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (node.data) {
					if (this.multipleSelection) {
						if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
							if (this.multipleSelectedItemList
								.filter((selectedItem) => {
									return (selectedItem !== undefined && selectedItem[this.getIdField()] === this.getRowNodeId(node.data));
								}).length > 0) {
								node.selectThisNode(true);
							} else {
								node.selectThisNode(false);
							}
						} else {
							node.selectThisNode(false);
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
	}

	private selectionItemListToIDList(): Array<string | number> {
		const idList = new Array<string | number>();
		for (const item of this.multipleSelectedItemList) {
			idList.push(item[this.getIdField()]);
		}
		return idList;
	}

	private unselectAllNodes() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (node && this.getRowNodeId(node.data) !== this.getAllFieldID()) {
					node.selectThisNode(false);
				}
			});
		}
	}

	private unselectNodeAll() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (node && this.getRowNodeId(node.data) === this.getAllFieldID()) {
					node.selectThisNode(false);
				}
			});
		}
	}

	public onRowDragEnd(event: any) {
		this.rowDragEnd.emit(event);
	}

}
