import {ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {StylesUtilService} from '../utilities/styles.util.service';
import {ColDef, GridOptions} from 'ag-grid';

export abstract class AbstractListBox<T> implements OnInit {

	public gridOptions: GridOptions;
	@ViewChild('hidden') public hiddenElement: ElementRef;
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

	@Input() public selectFirstItem = false;
	@Input() public multipleSelection = false;
	@Input() public showAll = false;

	protected _multipleSelectedItemList: Array<T>;

	@Input()
	set multipleSelectedItemList(value: Array<T>) {
		this._multipleSelectedItemList = value;
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
		this.multipleSelectedIDListChange.emit(this.selectionItemListToIDList());
	}

	get multipleSelectedItemList(): Array<T> {
		return this._multipleSelectedItemList;
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();

	protected hideChecks = false;

	protected constructor() {
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
			this.gridOptions.icons = {
				checkboxUnchecked: this.getCheckboxUnchecked(),
				checkboxChecked: this.getCheckboxChecked(),

			};

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
		this.gridOptions.suppressCellSelection = true;
		this.gridOptions.enableRangeSelection = !this.isDisabled;
		this.gridOptions.enableColResize = false;
		this.gridOptions.rowSelection = this.multipleSelection ? 'multiple' : 'single';
		this.gridOptions.rowDeselection = !this.isDisabled;

		this.gridOptions.context = {componentParent: this};

		this.gridOptions.headerHeight = 0;
		this.gridOptions.getRowNodeId =
			(item) => {
				if (item[this.getIdField()]) {
					return item[this.getIdField()];
				} else {
					return null;
				}
			};

		this.gridOptions.rowData = this.values;
	}

	protected getColumnDefsWithOptions(): Array<any> {

		const colDefs: Array<any> = [
			{
				colId: this.getIdField(),
				field: this.getDescriptionField(),
			}
		];

		if (this.multipleSelection && !this.hideChecks) {
			colDefs.unshift({
				colId: 'selectCol',
				headerName: '',
				checkboxSelection: true,
				width: this.getCheckColumnWidth(),
				suppressSizeToFit: true,
				suppressResize: true,
				suppressMovable: true
			});
		}

		this.addSuppressSizeToFitToColumnsWithWidthDefined(colDefs);

		return colDefs;
	}

	protected getCheckColumnWidth(): number {
		return 28;
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
		colDefs.forEach(function (columnDef: ColDef) {
			if (columnDef.width) {
				columnDef.suppressSizeToFit = true;
			}
		});
	}

	public doGridReady(event: any) {
		this.gridOptions.api.sizeColumnsToFit();
		this.gridOptions.api.doLayout();
	}

	public doGridSizeChanged(event: any) {
		if (this.gridOptions.api) {
			this.gridOptions.api.sizeColumnsToFit();
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
		if (!this.multipleSelection) {
		} else if (!this.isDisabled && event.node && event.node.data && event.node.data[this.getIdField()] !== undefined) {
			const newElement: T = this.getInstance();
			if (this.multipleSelectedItemList && this.multipleSelectedItemList !== undefined) {
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

	public onModelUpdated(pEvent: any) {
		this.gridOptions.api.sizeColumnsToFit();
		this.selectItemInGrid();
		return pEvent;
	}

	protected selectItemInGrid() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (this.multipleSelection) {
					if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
						if (this.multipleSelectedItemList
							.filter((selectedItem) => {
								return (selectedItem !== undefined && selectedItem[this.getIdField()] === node.id);
							}).length > 0) {
							node.selectThisNode(true);
						}
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
						if (node.data[this.getIdField()] === this.selectedItem[this.getIdField()]) {
							node.setSelected(true);
							return;
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
				if (node && node.id !== this.getAllFieldID()) {
					node.selectThisNode(false);
				}
			});
		}
	}

	private unselectNodeAll() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (node && node.id === this.getAllFieldID()) {
					node.selectThisNode(false);
				}
			});
		}
	}

	private getCheckboxUnchecked(): string {
		return `<span class='slab-grid-checkbox-unchecked'/>`;
	}

	private getCheckboxChecked(): string {
		return `<span class='slab-grid-checkbox'/>`;
	}
}
