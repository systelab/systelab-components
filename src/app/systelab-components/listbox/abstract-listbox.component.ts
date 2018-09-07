import {
	EventEmitter, Input, OnInit, Output, ElementRef, ViewChild
} from '@angular/core';
import {GridOptions} from 'ag-grid';
import {AbstractListboxRendererComponent} from './renderer/abstract-listbox-renderer.component';
import {Observable} from 'rxjs/Observable';
import {StylesUtilService} from '../utilities/styles.util.service';

export class ListBoxElement {
	constructor(public id, public description, public level, public selected) {
	}
}

export class TreeListBoxElement {
	constructor(public id, public parentID, public description, public level, public selected) {
	}
}

export abstract class AbstractListBox<T> implements OnInit {

	@Input() public isDisabled: boolean;
	@Input() public multipleSelection = false;
	@Input() public emptySelection = true;
	@Input() public prefixID = '';
	@Input() public values: Array<ListBoxElement | TreeListBoxElement> = [];
	@ViewChild('hidden') public hiddenElement: ElementRef;

	public gridOptions: GridOptions;
	public columnDefs: Array<any>;
	public paddingSingleSelection = 0;

	protected _multipleSelectedItemList: Array<any>;

	@Input()
	set multipleSelectedItemList(value: Array<ListBoxElement | TreeListBoxElement>) {
		this._multipleSelectedItemList = value;
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
	}

	get multipleSelectedItemList(): Array<ListBoxElement | TreeListBoxElement> {
		return this._multipleSelectedItemList;
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();

	protected _selectedIDList: string;

	@Input()
	set selectedIDList(value: string) {
		this._selectedIDList = value;
		this.selectedIDListChange.emit(this._selectedIDList);
	}

	get selectedIDList() {
		return this._selectedIDList;
	}

	protected _id: string | number;

	@Input()
	set id(value: string | number) {
		this._id = value;
		this.idChange.emit(this._id);
	}

	get id() {
		return this._id;
	}

	protected _description: string;

	@Input()
	set description(value: string) {
		this._description = value;
		this.descriptionChange.emit(this._description);
	}

	get description() {
		return this._description;
	}

	@Output() public selectedIDListChange = new EventEmitter<string>();
	@Output() public idChange = new EventEmitter<string | number>();
	@Output() public descriptionChange = new EventEmitter<string | number>();

	constructor(public isTree: boolean) {
	}

	protected abstract getData(): Observable<Array<T>>;

	public abstract setSelectionList(selectedIDList: string);

	public abstract getSelectionList(): string;

	protected abstract getDescriptionField(level?: number): string;

	protected abstract getIdField(level?: number): string;

	public ngOnInit() {
		this.configGrid();
		this.getRows();
	}

	protected getRows(): void {
		this.getData()
			.subscribe(
				(dataVector: Array<T>) => {
					this.loadValues(dataVector);

					if (this.gridOptions.api) {
						this.gridOptions.api.hideOverlay();
						this.gridOptions.api.setRowData(this.values);
						this.gridOptions.api.redrawRows();
					} else {
						this.gridOptions.rowData = this.values;
					}

					this.setSelectionList(this.selectedIDList);
				},
				() => {
					this.gridOptions.api.hideOverlay();
				}
			);
	}

	protected loadValues(dataVector: Array<T>) {
		this.values = [];
		dataVector.forEach((element: T) => {
			const node = new ListBoxElement(element[this.getIdField()].toString(), element[this.getDescriptionField()].toString(), 1, false);
			this.values.push(node);
		});

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

		if (this.multipleSelection || this.isTree) {
			this.columnDefs = [
				{
					colID: 'id',
					cellRendererFramework: AbstractListboxRendererComponent,
					cellRendererParams: {
						changeFunction: (e) => {
							this.changeValues(e);
						},
						isTree: this.isTree,
						prefix: this.prefixID,
						isDisabled: this.isDisabled,
						isMultipleSelection: this.multipleSelection
					}
				}
			];
		} else {
			this.columnDefs = [
				{
					colID: 'id',
					field: 'description',
				}
			];
		}

		this.gridOptions.getRowNodeId =
			(item) => {
				if (item[this.getIdField()]) {
					return item[this.getIdField()];
				} else {
					return null;
				}
			};

		this.gridOptions.columnDefs = this.columnDefs;

	}

	public changeValues(event: any) {
		if (this.multipleSelection) {
			this.addRemoveToMultipleSelectedItem(event);
		}

		if (this.isTree) {
			if (this.multipleSelection) {
				if (event.level === 0) {
					this.values.filter((value: TreeListBoxElement) => {
						if (value.parentID === event.id) {
							value.selected = event.selected;
							this.addRemoveToMultipleSelectedItem(value);
						}
					});
				} else {
					const parentID = event.parentID;
					let allChildSelected = true;
					let anyNode = false;
					this.values.filter((value: TreeListBoxElement) => {
						if (value.parentID === parentID) {
							anyNode = true;
							if (!value.selected) {
								allChildSelected = false;
							}
						}
					});
					if (anyNode) {
						this.values.filter((value: TreeListBoxElement) => {
							if (value.level === 0 && value.id === parentID) {
								value.selected = allChildSelected;
								this.addRemoveToMultipleSelectedItem(value);
							}
						});
					}
				}
			} else {
				// this.multipleSelectedItemList = new Array();
				this._multipleSelectedItemList = new Array();
				this.gridOptions.api.deselectAll();
				const newElement: TreeListBoxElement = new TreeListBoxElement(event['id'], event['parentID'], event['description'], event['level'], event['selected']);
				this.multipleSelectedItemList.push(newElement);
				this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
			}
		}
		if (this.gridOptions.api) {
			this.gridOptions.api.sizeColumnsToFit();
		}
		this.selectedIDList = this.getSelectionList();
	}

	private addRemoveToMultipleSelectedItem(event: any) {
		if (this.multipleSelectedItemList && this.multipleSelectedItemList !== undefined) {
			const elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
				return (item['id'] === event['id'] && item['level'] === event['level']);
			});
			if (elementIndexInSelectedList < 0 && event.selected) {
				let newElement: ListBoxElement | TreeListBoxElement;
				if (this.isTree) {
					newElement = new TreeListBoxElement(event['id'], event['parentID'], event['description'], event['level'], event['selected']);
				} else {
					newElement = new ListBoxElement(event['id'], event['description'], event.level, event.selected);
				}
				this.multipleSelectedItemList.push(newElement);
			} else {
				if (elementIndexInSelectedList !== -1 && !event.selected) {
					this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
					this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
				}
			}
		} else {
			this.multipleSelectedItemList = new Array();
			let newElement: ListBoxElement | TreeListBoxElement;
			if (this.isTree) {
				newElement = new TreeListBoxElement(event['id'], event['parentID'], event['description'], event['level'], event['selected']);
			} else {
				newElement = new ListBoxElement(event['id'], event['description'], event['level'], event['selected']);
			}

			this.multipleSelectedItemList.push(newElement);
		}
	}

	public resizeColumn(event: any) {
		this.gridOptions.api.doLayout();
		this.gridOptions.api.sizeColumnsToFit();
	}

	public addSelectedItem(seleccionado: any) {
		if (this.containsElement(seleccionado)) {
			this.removeElement(seleccionado);
		} else {
			this.multipleSelectedItemList.push(seleccionado);
		}

	}

	public onModelUpdated() {
		if (!this.multipleSelection) {
			if (this.id && this.id !== undefined) {
				this.gridOptions.api.forEachNode(node => {
					if (node.id === this.id) {
						node.selectThisNode(true);
						this.description = node.data[this.getDescriptionField()];
					}
				});
			} else if (!this.emptySelection) {
				this.selectFirstRow();
			}
		}
	}

	public onSelectionChanged() {
		if (!this.multipleSelection) {
			const selectedRow = this.getSelectedRow();
			if (selectedRow && selectedRow !== undefined) {
				this.selectedIDList = selectedRow[this.getIdField()];
				this.id = selectedRow[this.getIdField()];
				this.description = selectedRow[this.getDescriptionField()];
			}
		}
	}

	public removeElement(seleccionado: any) {

		for (let i = 0; i < this.multipleSelectedItemList.length; i++) {
			const element = this.multipleSelectedItemList[i];
			if (element['id'] === seleccionado['id'] && element['level'] === seleccionado['level']) {
				this.multipleSelectedItemList.splice(i, 1);
				return;
			}
		}
	}

	public getSelectedRow(): any {
		if (this.gridOptions && this.gridOptions.api) {
			const selectedRows: any = this.gridOptions.api.getSelectedRows();
			if (selectedRows !== null && this.multipleSelection === false) {
				return selectedRows[0];
			} else if (selectedRows !== null && this.multipleSelection === true) {
				return selectedRows;
			}
		}
		return undefined;
	}

	public containsElement(seleccionado: any) {
		for (const element of this.multipleSelectedItemList) {
			if ((element['id'] === seleccionado['id'] && element['level'] === seleccionado['level'])) {
				return true;
			}
		}
		return false;
	}

	protected selectFirstRow() {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.selectIndex(0, this.multipleSelection, false);
		}
	}
}
