import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractTreeListboxRendererComponent } from './renderer/abstract-tree-listbox-renderer.component';
import { StylesUtilService } from '../utilities/styles.util.service';
import { AbstractListBox } from './abstract-listbox.component';
import { Observable } from 'rxjs';

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
export abstract class AbstractApiTreeListBox<T> extends AbstractListBox<TreeListBoxElement<T>> implements OnInit, AfterViewInit {

	public columnDefs: Array<any>;
	public treeValues: Array<TreeListBoxElement<T>> = [];
	@ViewChild('hidden', {static: true}) public override hiddenElement: ElementRef;

	@Input() public updateHierarchy = true;

	public _selectedTreeItem: TreeListBoxElement<T>;

	@Input()
	set selectedTreeItem(value: TreeListBoxElement<T>) {
		this._selectedTreeItem = value;
		this.selectTreeItemInGrid();
	}

	get selectedTreeItem() {
		return this._selectedTreeItem;
	}

	@Output() selectedTreeItemChange = new EventEmitter<TreeListBoxElement<T>>();

	protected _selectedIDList: string;

	@Input()
	set selectedIDList(value: string) {
		this._selectedIDList = value;
		if (!value) {
			this.initSelectionList();
		}
		this.selectedIDListChange.emit(this._selectedIDList);
	}

	get selectedIDList() {
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

	@Output() public selectedIDListChange = new EventEmitter<string>();

	public paddingSingleSelection = 0;

	protected constructor() {
		super();
	}

	protected abstract getData(): Observable<Array<T>>;

	protected abstract getSelectionPrefix(level: number): string;

	public override ngOnInit() {
		this.configGrid();
	}

	protected configGrid() {
		this.paddingSingleSelection = this.multipleSelection ? 0 : 2;
		this.gridOptions = {};
		this.gridOptions.headerHeight = 0;
		this.gridOptions.rowSelection = 'single';
		const lineHeight = StylesUtilService.getStyleValue(this.hiddenElement, 'line-height');
		if (lineHeight) {
			this.gridOptions.rowHeight = Number(lineHeight);
		} else {
			this.gridOptions.rowHeight = Number(26);
		}
		this.gridOptions.suppressCellSelection = true;

		if (this.multipleSelection) {
			this.gridOptions.suppressRowClickSelection = true;
		} else {
			this.gridOptions.suppressRowClickSelection = this.isDisabled;
		}

		this.columnDefs = [
			{
				colId:                 'id',
				cellRendererFramework: AbstractTreeListboxRendererComponent,
				cellRendererParams:    {
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

		this.gridOptions.getRowNodeId = (item) => this.getRowNodeId(item)
			?.toString();

		this.gridOptions.columnDefs = this.columnDefs;

	}

	protected override getRowNodeId(item:TreeListBoxElement<T>): string | number | undefined {
		if (item.nodeData[this.getIdField(1)]) {
			return item.level + '-' + item.nodeData[this.getIdField(1)];
		} else {
			return null;
		}
	}

	public ngAfterViewInit() {
		this.getRows();
	}

	protected getRows(): void {
		this.getData()
			.subscribe(
				(dataVector: Array<T>) => {
					this.loadValues(dataVector);
					this.gridOptions.api.hideOverlay();
					this.gridOptions.api.setRowData(this.treeValues);
					this.gridOptions.api.redrawRows();
					if (this.multipleSelection) {
						this.initSelectionList();
					} else if (this.selectedTreeItem) {
						this.selectTreeItemInGrid();
					}
					this.gridOptions.api.doLayout();
					this.gridOptions.api.sizeColumnsToFit();
				},
				() => {
					this.gridOptions.api.hideOverlay();
				}
			);
	}

	protected loadValues(dataVector: Array<T>) {
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
							if (element.level === 0 && ((element.nodeData[this.getIdField(0)] + '') === selectedID.substring(1, selectedID.length))) {
								element.selected = true;
								this.addSelectedItem(element);
							}
						});
					}
					if (selectedID.startsWith(this.getSelectionPrefix(1))) {
						this.treeValues.forEach(element => {
							if (element.level === 1 && ((element.nodeData[this.getIdField(1)] + '') === selectedID.substring(1, selectedID.length))) {
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

	// Override
	public override cleanSelection(): void {
		this.treeValues = this.treeValues.map(treeValue => {
			treeValue.selected = false;
			return treeValue;
		});
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.redrawRows();
		}
	}

	public override doClick(row: any) {
		if (!this.multipleSelection && !this.isDisabled) {
			this.selectedTreeItem = row.node.data;
			this.selectedTreeItemChange.emit(row.node.data);
		}
	}

	public changeValues(event: any) {
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
		if (this.gridOptions.api) {
			this.gridOptions.api.doLayout();
			this.gridOptions.api.sizeColumnsToFit();
		}
	}

	private selectUnselectChildTree(event: any) {
		this.treeValues.forEach((value: TreeListBoxElement<T>) => {
			if (value.nodeData[this.getIdField(0)] === event.nodeData[this.getIdField(0)]) {
				value.selected = event.selected;
				this.addRemoveToMultipleSelectedItem(value);
			}
		});
	}

	private selectUnselectParentTree(event: any) {
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

	private addRemoveToMultipleSelectedItem(event: any) {
		if (this.multipleSelectedItemList && this.multipleSelectedItemList !== undefined) {
			const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
				return (item.nodeData[this.getIdField(1)] === event.nodeData[this.getIdField(1)] && item['level'] === event['level']);
			});
			if (elementIndexInSelectedList < 0 && event.selected) {
				let newElement: TreeListBoxElement<T>;
				newElement = new TreeListBoxElement(event.nodeData, event['level'], event['selected']);
				this.multipleSelectedItemList.push(newElement);
			} else {
				if (elementIndexInSelectedList !== -1 && !event.selected) {
					this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
					this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
				}
			}
		} else {
			this.multipleSelectedItemList = [];
			let newElement: TreeListBoxElement<T>;
			newElement = new TreeListBoxElement(event.nodeData, event['level'], event['selected']);
			this.multipleSelectedItemList.push(newElement);
		}
	}

	public addSelectedItem(selected: TreeListBoxElement<T>) {
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

	protected selectTreeItemInGrid() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.forEachNode(node => {
				if (!this.multipleSelection) {
					if (!this.selectedTreeItem && this.selectFirstItem) {
						if (node.rowIndex === 0) {
							node.setSelected(true);
							this.selectedTreeItem = node.data;
							this.selectedTreeItemChange.emit(node.data);
							return;
						}
					} else if (this.selectedTreeItem && this.selectedTreeItem.nodeData) {
						if (node.data.nodeData[this.getIdField(this.selectedTreeItem.level)] === this.selectedTreeItem.nodeData[this.getIdField(this.selectedTreeItem.level)] && node.data.level === this.selectedTreeItem.level) {
							node.setSelected(true);
							return;
						}
					}
				}
			});
		}
	}

	public override onModelUpdated(pEvent: any) {
	}

	public removeElement(seleccionado: TreeListBoxElement<T>) {

		for (let i = 0; i < this.multipleSelectedItemList.length; i++) {
			const element = this.multipleSelectedItemList[i];
			if (element.nodeData[this.getIdField(1)] === seleccionado.nodeData[this.getIdField(1)] && element['level'] === seleccionado['level']) {
				this.multipleSelectedItemList.splice(i, 1);
				return;
			}
		}
	}

	public containsElement(seleccionado: TreeListBoxElement<T>) {
		if (this.multipleSelectedItemList) {
			for (const element of this.multipleSelectedItemList) {
				if (element.nodeData[this.getIdField(1)] === seleccionado.nodeData[this.getIdField(1)] && element['level'] === seleccionado['level']) {
					return true;
				}
			}
		}
		return false;
	}

}
