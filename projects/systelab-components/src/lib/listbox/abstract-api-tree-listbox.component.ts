import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractTreeListboxRendererComponent } from './renderer/abstract-tree-listbox-renderer.component';
import { StylesUtilService } from '../utilities/styles.util.service';
import { AbstractListBox } from './abstract-listbox.component';
import { Observable } from 'rxjs';
import { GetRowIdParams, RowSelectionOptions } from 'ag-grid-community';

export class TreeListBoxElement<T> {
	public nodeData: T;
	public level: number;
	public selected: boolean;

	constructor(pNodeData?: T, pLevel?: number, pSelected?: boolean) {
		this.nodeData = pNodeData;
		this.level = pLevel;
		this.selected = pSelected;
	}
}

@Directive()
export abstract class AbstractApiTreeListBox<T> extends AbstractListBox<TreeListBoxElement<T>> implements OnInit {
	@ViewChild('hidden', {static: true}) public override hiddenElement: ElementRef;

	@Input() public isParentSelectable = true;
	@Input() public updateHierarchy = true;
	@Output() public selectedTreeItemChange = new EventEmitter<TreeListBoxElement<T>>();
	@Output() public selectedIDListChange = new EventEmitter<string>();

	public columnDefs: Array<any>;
	public treeValues: Array<TreeListBoxElement<T>> = [];
	public _selectedTreeItem: TreeListBoxElement<T>;
	public paddingSingleSelection = 0;

	@Input()
	set selectedTreeItem(value: TreeListBoxElement<T>) {
		this._selectedTreeItem = value;
		this.selectTreeItemInGrid();
	}

	get selectedTreeItem(): TreeListBoxElement<T> {
		return this._selectedTreeItem;
	}

	@Input()
	set selectedIDList(value: string) {
		this._selectedIDList = value;
		if (!value) {
			this.initSelectionList();
		}
		this.selectedIDListChange.emit(this._selectedIDList);
	}

	get selectedIDList(): string {
		this._selectedIDList = '';
		for (const selectedItem of this.multipleSelectedItemList) {
			if (this._selectedIDList && this._selectedIDList !== '') {
				this._selectedIDList += ',';
			}
			const level = selectedItem['level'] === 0 ? 0 : 1;
			this._selectedIDList += this.getSelectionPrefix(level) + selectedItem.nodeData[this.getIdField(level)];
		}
		return this._selectedIDList;
	}

	protected _selectedIDList: string;

	protected constructor() {
		super();
	}

	public override ngOnInit(): void {
		this.configGrid();
	}

	public override doGridReady(event: any) {
		super.doGridReady(event);
		this.getRows();
	}

	// Override
	public override cleanSelection(): void {
		this.treeValues = this.treeValues.map(treeValue => {
			treeValue.selected = false;
			return treeValue;
		});
		this.gridApi?.redrawRows();
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	public override doClick(row: any): void {
		if (!this.multipleSelection && !this.isDisabled) {
			const selectionLevel = row.node.data.level;
			if ((selectionLevel === 0 && this.isParentSelectable) || selectionLevel > 0) {
				this.selectedTreeItem = row.node.data;
				this.selectedTreeItemChange.emit(row.node.data);
			}
		}
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	public changeValues(event: any): void {
		if (this.multipleSelection) {
			this.addRemoveToMultipleSelectedItem(event);
			if (this.updateHierarchy) {
				if (event.level === 0) {
					this.selectUnselectChildTree(event);
				} else {
					this.selectUnselectParentTree(event);
				}
			}
			this.selectedIDListChange.emit(this.selectedIDList);
		}
		if (this.gridApi) {
			this.doAutoSizeManagement();
		}
	}

	public addSelectedItem(selected: TreeListBoxElement<T>): void {
		if (this.containsElement(selected)) {
			this.removeElement(selected);
		} else {
			if (!this.multipleSelectedItemList) {
				this.multipleSelectedItemList = [selected];
			} else {
				this.multipleSelectedItemList.push(selected);
			}
		}
	}

	public removeElement(seleccionado: TreeListBoxElement<T>): void {
		for (let i = 0; i < this.multipleSelectedItemList.length; i++) {
			const element = this.multipleSelectedItemList[i];
			if (element.nodeData[this.getIdField(1)] === seleccionado.nodeData[this.getIdField(1)]
				&& element['level'] === seleccionado['level']) {
				this.multipleSelectedItemList.splice(i, 1);
				return;
			}
		}
	}

	public containsElement(seleccionado: TreeListBoxElement<T>): boolean {
		if (this.multipleSelectedItemList) {
			for (const element of this.multipleSelectedItemList) {
				if (element.nodeData[this.getIdField(1)] === seleccionado.nodeData[this.getIdField(1)]
					&& element['level'] === seleccionado['level']) {
					return true;
				}
			}
		}
		return false;
	}

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	public override onModelUpdated(pEvent: any): void {
	}

	protected configGrid(): void {
		this.paddingSingleSelection = this.multipleSelection ? 0 : 2;
		this.gridOptions = {};
		this.gridOptions.headerHeight = 0;
		this.gridOptions.rowSelection = {
			mode: 'singleRow',
			checkboxes: false
		} as RowSelectionOptions;
		const lineHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		if (lineHeight) {
			this.gridOptions.rowHeight = Number(lineHeight);
		} else {
			this.gridOptions.rowHeight = Number(26);
		}
		this.gridOptions.suppressCellFocus = true;

		if (this.multipleSelection) {
			this.gridOptions.rowSelection.enableClickSelection = false;
		} else {
			this.gridOptions.rowSelection.enableClickSelection = !this.isDisabled;
		}

		this.columnDefs = [
			{
				colId:              'id',
				cellRenderer:       AbstractTreeListboxRendererComponent,
				cellRendererParams: {
					changeFunction:         (e) => {
						this.changeValues(e);
					},
					level0IDField:          this.getIdField(0),
					level0DescriptionField: this.getDescriptionField(0),
					level1IDField:          this.getIdField(1),
					level1DescriptionField: this.getDescriptionField(1),
					isDisabled:             this.isDisabled,
					isMultipleSelection:    this.multipleSelection
				}
			}
		];

		this.gridOptions.getRowId = (item: GetRowIdParams) => this.getRowNodeId(item)
			?.toString();

		this.gridOptions.columnDefs = this.columnDefs;

	}

	protected override getRowNodeId(item: GetRowIdParams): string | number | undefined {
		if (item?.data?.nodeData[this.getIdField(1)]) {
			return item.level + '-' + item.data.nodeData[this.getIdField(1)];
		} else {
			return null;
		}
	}

	protected getRows(): void {
		this.getData()
			.subscribe({
				next:  (dataVector: Array<T>) => {
					this.loadValues(dataVector);
					this.gridApi.hideOverlay();
					this.rowData = this.treeValues;
					this.gridApi.redrawRows();
					if (this.multipleSelection) {
						this.initSelectionList();
					} else if (this.selectedTreeItem) {
						this.selectTreeItemInGrid();
					}
					this.doAutoSizeManagement();
				},
				error: () => {
					this.gridApi.hideOverlay();
				}
			});
	}

	protected loadValues(dataVector: Array<T>): void {
		this.treeValues = [];
		let previousParent: number | string;

		dataVector.forEach(element => {
			if (!previousParent || element[this.getIdField(0)] !== previousParent) {
				previousParent = element[this.getIdField(0)];
				const parentNode = new TreeListBoxElement(element, 0, false);
				this.treeValues.push(parentNode);
			}
			const node = new TreeListBoxElement(element, 1, false);
			this.treeValues.push(node);
		});
	}

	protected initSelectionList(): void {
		if (this.multipleSelection) {
			if (this._selectedIDList) {
				const selectedIDStringList: Array<string> = this._selectedIDList.split(',');
				selectedIDStringList.forEach(selectedID => {
					if (selectedID.startsWith(this.getSelectionPrefix(0))) {
						this.treeValues.forEach(element => {
							if (element.level === 0
								&& ((element.nodeData[this.getIdField(0)] + '') === selectedID.substring(1, selectedID.length))) {
								element.selected = true;
								this.addSelectedItem(element);
							}
						});
					}
					if (selectedID.startsWith(this.getSelectionPrefix(1))) {
						this.treeValues.forEach(element => {
							if (element.level === 1
								&& ((element.nodeData[this.getIdField(1)] + '') === selectedID.substring(1, selectedID.length))) {
								element.selected = true;
								this.addSelectedItem(element);
							}
						});
					}
				});
			} else {
				this.multipleSelectedItemList = [];
				this.cleanSelection();
			}
		}
	}

	protected selectTreeItemInGrid(): void {
		this.gridApi?.forEachNode(node => {
			if (!this.multipleSelection) {
				if (!this.selectedTreeItem && this.selectFirstItem) {
					if (node.rowIndex === 0) {
						node.setSelected(true);
						this.selectedTreeItem = node.data;
						this.selectedTreeItemChange.emit(node.data);
						return;
					}
				} else if (this.selectedTreeItem && this.selectedTreeItem.nodeData) {
					const level = this.getIdField(this.selectedTreeItem.level);
					if (node.data.nodeData[level] === this.selectedTreeItem.nodeData[level]
						&& node.data.level === this.selectedTreeItem.level) {
						node.setSelected(true);
						return;
					}
				}
			}
		});
	}

	protected selectUnselectChildTree(event: any) {
		this.treeValues.forEach((value: TreeListBoxElement<T>) => {
			if (value.nodeData[this.getIdField(0)] === event.nodeData[this.getIdField(0)]) {
				value.selected = event.selected;
				this.addRemoveToMultipleSelectedItem(value);
			}
		});
	}

	protected selectUnselectParentTree(event: any) {
		const parentID = event.nodeData[this.getIdField(0)];
		let allChildSelected = true;
		let anyNode = false;
		this.treeValues.forEach((value: TreeListBoxElement<T>) => {
			if (value.nodeData[this.getIdField(0)] === parentID) {
				anyNode = true;
				if (!value.selected && value.level === 1) {
					allChildSelected = false;
				}
			}
		});
		if (anyNode) {
			this.treeValues.forEach((value: TreeListBoxElement<T>) => {
				if (value.level === 0 && value.nodeData[this.getIdField(0)] === parentID) {
					value.selected = allChildSelected;
					this.addRemoveToMultipleSelectedItem(value);
				}
			});
		}
	}

	protected addRemoveToMultipleSelectedItem(event: any) {
		if (this.multipleSelectedItemList) {
			const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) =>
				(item.nodeData[this.getIdField(1)] === event.nodeData[this.getIdField(1)] && item['level'] === event['level'])
			);
			if (elementIndexInSelectedList < 0 && event.selected) {
				const newElement = new TreeListBoxElement(event.nodeData, event['level'], event['selected']);
				this.multipleSelectedItemList.push(newElement);
			} else {
				if (elementIndexInSelectedList !== -1 && !event.selected) {
					this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
					this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
				}
			}
		} else {
			this.multipleSelectedItemList = [];
			const newElement = new TreeListBoxElement(event.nodeData, event['level'], event['selected']);
			this.multipleSelectedItemList.push(newElement);
		}
	}

	protected abstract getData(): Observable<Array<T>>;

	protected abstract getSelectionPrefix(level: number): string;
}
