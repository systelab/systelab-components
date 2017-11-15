import { OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid';
import { Observable } from 'rxjs';
import { AbstractComboBox } from './abstract-combobox.component';
import { StylesUtilService } from '../utilities/styles.util.service';

export abstract class AbstractApiComboBox<T> extends AbstractComboBox implements AgRendererComponent, OnInit {

	@Input() public emptyElement: boolean = false;
	@Input() public multipleSelection: boolean = false;

	public _multipleSelectedItemList: Array<T>;

	@Input()
	set multipleSelectedItemList(value: Array<T>) {
		this._multipleSelectedItemList = value;
		this._description = '';
		this._code = '';
		for (let selectedItem of value) {
			if (this._code !== '') {
				this._code += '; ';
			}
			this._code += selectedItem[this.getCodeField()];

			if (this._description !== '') {
				this._description += '; ';
			}
			this._description += selectedItem[this.getDescriptionField()];
		}
		this.multipleSelectedItemListChange.emit(this._multipleSelectedItemList);
	}

	get multipleSelectedItemList() {
		return this._multipleSelectedItemList;
	}

	@Output() public multipleSelectedItemListChange = new EventEmitter();

	public startsWith: string = '';

	public params: any;

	public selectionChanged: boolean = false;
	public totalItemsLoaded: boolean = false;

	constructor(public myRenderer: Renderer2) {
		super(myRenderer);
	}

	// override
	public ngOnInit() {

		var minHeight = StylesUtilService.getStyleValue(this.comboButtonElement, 'min-height');
		AbstractComboBox.ROW_HEIGHT = Number(minHeight);

		this.columnDefs = [
			{
				colID:             'itemDescription',
				field:             this.getDescriptionField(),
				checkboxSelection: this.getMultipleSelection()
			}
		];

		this.gridOptions = {};

		this.gridOptions.columnDefs = this.columnDefs;

		this.gridOptions.rowHeight = AbstractComboBox.ROW_HEIGHT;
		this.gridOptions.headerHeight = 0;
		this.gridOptions.suppressCellSelection = true;

		if (this.multipleSelection) {
			this.gridOptions.rowSelection = 'multiple';
			this.gridOptions.suppressRowClickSelection = true;
		} else {
			this.gridOptions.rowSelection = 'single';
		}

		this.gridOptions.rowModelType = 'infinite';
		this.gridOptions.paginationPageSize = 20;
		this.gridOptions.cacheBlockSize = 20;
		this.gridOptions.cacheOverflowSize = 2;
		this.gridOptions.maxConcurrentDatasourceRequests = 1;
		this.gridOptions.infiniteInitialRowCount = 0;
		this.gridOptions.maxBlocksInCache = 100;

		this.gridOptions.icons = {
			checkboxUnchecked: this.getCheckboxUnchecked(),
			checkboxChecked:   this.getCheckboxChecked()
		};

		this.gridOptions.getRowNodeId =
			(item) => {
				if (item[this.getIdField()]) {
					return item[this.getIdField()];
				} else {
					return null;
				}
			};

		this.gridOptions.datasource = null;

	}

	public abstract getInstance(): T;

	public abstract getDescriptionField(): string;

	public abstract getCodeField(): string;

	public abstract getIdField(): string;

	public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public getMultipleSelection(): boolean {
		if (this.multipleSelection) {
			return true;
		} else {
			return false;
		}
	}

	public refresh(params: any): boolean {
		if (this.gridOptions && this.gridOptions.datasource) {
			this.gridOptions.api.setDatasource(this);
		}
		return true;
	}

	// override
	public onComboClicked() {

		let isOpen: boolean = this.isDropDownOpen();

		if (!isOpen) {
			this.isDropdownOpened = true;

			super.showDropDown();

		} else {
			// close
			this.checkMultipleSelectionClosed();
		}
	}

	// override
	public closeDropDown() {
		super.closeDropDown();
		this.checkMultipleSelectionClosed();
	}

	// override
	public loop(): void {
		let result: boolean = true;
		if (this.isDropDownOpen()) {
			// First time opened we load the table
			if (this.gridOptions.datasource === null) {
				this.gridOptions.datasource = this;
				this.refresh(null);
			}

			if (this.totalItemsLoaded) {
				this.calculateDropdownHeight();

				this.setDropdownPosition();

				this.addListeners();

				result = false;
			}
		}
		if (result) {
			setTimeout(() => this.loop(), 10);
		} else {
			return;
		}
	}

	// override
	public calculateDropdownHeight() {
		let totalItems: number       = Number(this.getTotalItems()),
			calculatedHeight: number = 0;

		if (this.emptyElement) {
			totalItems += 1;
		}

		if (totalItems === 0) {
			calculatedHeight += 6 + AbstractComboBox.ROW_HEIGHT * 1;
			this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');
		} else if (totalItems < 10) {
			calculatedHeight = 6 + AbstractComboBox.ROW_HEIGHT * totalItems;
		} else {
			calculatedHeight = AbstractComboBox.ROW_HEIGHT * 10;
		}
		this.myRenderer.setStyle(this.dropdownElement.nativeElement, 'height', calculatedHeight + 'px');

		if (this.filter) {
			let agGridElement = this.dropdownElement.nativeElement.getElementsByTagName('ag-grid-angular'),
				agGridHeight  = calculatedHeight - 33;
			this.myRenderer.setStyle(agGridElement[0], 'height', agGridHeight + 'px');
		}
	}

	public doSearch(event: any) {
		if (event.shiftKey || event.ctrlKey) {
			return;
		}
		this.startsWith = event.target.value;
		this.refresh(null);
	}

	public getRows(params: IGetRowsParams): void {

		let page: number     = params.endRow / this.gridOptions.paginationPageSize,
			pageSize: number = this.gridOptions.paginationPageSize;

		const emptyElemNumber: number = this.emptyElement ? 1 : 0;
		let totalItems: number = this.getTotalItems() + emptyElemNumber;
		const modulus: number = totalItems % pageSize;

		if (page === 1 || page <= totalItems / pageSize || modulus > 1 || (modulus === 1 && !this.emptyElement)) {
			this.getElements(page, pageSize, emptyElemNumber, params);
		} else {
			this.totalItemsLoaded = false;
			this.getData(page - 1, this.gridOptions.paginationPageSize, this.startsWith)
				.subscribe(
					(previousPage: Array<T>) => {
						let itemArray: Array<T> = new Array<T>();
						let totalItems: number = Number(this.getTotalItems() + emptyElemNumber);

						let lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
						itemArray.push(lastItemFromPreviousPage);

						this.totalItemsLoaded = true;
						params.successCallback(itemArray, totalItems);

					},
					error => {
						params.failCallback();
					}
				);
		}
	}

	private getElements(page: number, pageSize: number, emptyElemNumber: number, params: IGetRowsParams) {
		this.totalItemsLoaded = false;
		this.getData(page, pageSize, this.startsWith)
			.subscribe(
				(v: Array<T>) => {
					let itemArray: Array<T> = new Array<T>();
					let totalItems: number = Number(this.getTotalItems() + emptyElemNumber);

					if (this.emptyElement === true) {

						if (page === 1) {
							let newElement: T = this.getInstance();
							itemArray.push(newElement);

							for (let originalElement of v) {
								itemArray.push(originalElement);

							}
							params.successCallback(itemArray, totalItems);
							this.totalItemsLoaded = true;

						} else {
							this.getData(page - 1, this.gridOptions.paginationPageSize, this.startsWith)
								.subscribe(
									(previousPage: Array<T>) => {
										let lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
										itemArray.push(lastItemFromPreviousPage);

										for (let originalElement of v) {
											itemArray.push(originalElement);
										}
										this.totalItemsLoaded = true;
										params.successCallback(itemArray, totalItems);

									},
									error => {
										params.failCallback();
									}
								);
						}
					} else {
						for (let originalElement of v) {
							itemArray.push(originalElement);
						}
						this.totalItemsLoaded = true;
						params.successCallback(itemArray, totalItems);

					}

				},
				error => {
					params.failCallback();
				}
			);
	}

	public getSelectedRow(): T {
		let selectedRow: Array<T> = this.gridOptions.api.getSelectedRows();
		if (selectedRow !== null) {
			return selectedRow[0];
		}
		return null;
	}

	public onSelectionChanged(event: any) {
		if (!this.multipleSelection) {
			let selectedRow = this.getSelectedRow();
			if (selectedRow !== null && selectedRow !== undefined) {
				this.id = selectedRow[this.getIdField()];
				this.code = selectedRow[this.getCodeField()];
				this.description = selectedRow[this.getDescriptionField()];
				this.change.emit(this.id);
				this.idChange.emit(this.id);
			}
		} else {
			this.selectionChanged = true;
		}
	}

	// overrides
	public onRowClicked(event: any) {
		if (!this.multipleSelection) {
			this.myRenderer.addClass(this.comboboxElement.nativeElement, 'uk-dropdown-close');
			this.myRenderer.removeClass(this.comboboxElement.nativeElement, 'uk-open');
		}
	}

	// overrides
	public onRowSelected(event: any) {
		if (!this.multipleSelection) {
		} else if (event.node && event.node.data && event.node.data[this.getIdField()] !== undefined) {
			if (this.multipleSelectedItemList && this.multipleSelectedItemList !== undefined) {
				let elementIndexInSelectedList: number = this.multipleSelectedItemList.findIndex((item) => {
					return item[this.getIdField()] === event.node.data[this.getIdField()];
				});
				if (event.node.selected) {
					if (elementIndexInSelectedList < 0) {
						let newElement: T = this.getInstance();
						newElement[this.getIdField()] = event.node.data[this.getIdField()];
						newElement[this.getDescriptionField()] = event.node.data[this.getDescriptionField()];
						newElement[this.getCodeField()] = event.node.data[this.getCodeField()];
						this.multipleSelectedItemList.push(newElement);
						this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
					}
				} else {
					if (elementIndexInSelectedList !== -1) {
						this.multipleSelectedItemList.splice(elementIndexInSelectedList, 1);
						this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
					}
				}
			} else {
				this.multipleSelectedItemList = new Array<T>();
				let newElement: T = this.getInstance();
				newElement[this.getIdField()] = event.node.data[this.getIdField()];
				newElement[this.getDescriptionField()] = event.node.data[this.getDescriptionField()];
				newElement[this.getCodeField()] = event.node.data[this.getCodeField()];
				this.multipleSelectedItemList.push(newElement);
				this.multipleSelectedItemList = this.multipleSelectedItemList.slice();
			}
			this._description = '';
			this._code = '';
			for (let selectedItem of this.multipleSelectedItemList) {
				if (this._code !== '') {
					this._code += '; ';
				}
				this._code += selectedItem[this.getCodeField()];
				if (this._description !== '') {
					this._description += '; ';
				}
				this._description += selectedItem[this.getDescriptionField()];
			}
		}
	}

	public onModelUpdated() {
		this.gridOptions.api.sizeColumnsToFit();
		if (this.multipleSelection) {
			if (this.multipleSelectedItemList && this.multipleSelectedItemList.length > 0) {
				this.gridOptions.api.forEachNode(node => {
					if (this.multipleSelectedItemList
							.filter((selectedItem) => {
								return (selectedItem !== undefined && selectedItem[this.getIdField()] === node.id);
							}).length > 0) {
						node.selectThisNode(true);
					}
				});
			}
		} else if (this._id && this._id !== undefined) {
			this.gridOptions.api.forEachNode(node => {
				if (node.id === this._id) {
					node.selectThisNode(true);
				}
			});
		}
	}

	public checkMultipleSelectionClosed() {
		if (this.selectionChanged) {
			this.change.emit(this.multipleSelectedItemList);
			this.multipleSelectedItemListChange.emit(this.multipleSelectedItemList);
		}
	}

	public getCheckboxUnchecked(): string {
		return `<div style='display: inline-block; width: 15px'><span class='checkbox-unchecked'/></div>`;
	}

	public getCheckboxChecked(): string {
		return `<div style='display: inline-block; width: 15px'><span class='checkbox'/></div>`;
	}
}