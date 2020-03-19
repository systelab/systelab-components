import { ChangeDetectorRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid-community';
import { AbstractComboBox } from './abstract-combobox.component';
import { Observable } from 'rxjs';
import { PreferencesService } from 'systelab-preferences';

export abstract class AbstractApiComboBox<T> extends AbstractComboBox<T> implements AgRendererComponent, OnInit, OnDestroy {

	public startsWith = '';

	public params: any;

	public totalItemsLoaded = false;

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService?: PreferencesService) {
		super(myRenderer, chref, preferencesService);
	}

	// override
	protected configGrid() {

		super.configGrid();
		this.gridOptions.rowModelType = 'infinite';
		this.gridOptions.paginationPageSize = 20;
		this.gridOptions.cacheBlockSize = 20;
		this.gridOptions.cacheOverflowSize = 2;
		this.gridOptions.maxConcurrentDatasourceRequests = 1;
		this.gridOptions.infiniteInitialRowCount = 0;
		this.gridOptions.maxBlocksInCache = 100;

	}

	protected configGridData() {
		this.gridOptions.datasource = null;
	}

	public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public refresh(params: any): boolean {
		if (this.gridOptions && this.gridOptions.api) {
			this.gridOptions.api.setDatasource(this);
		}
		return true;
	}

	// override
	public loop(): void {
		let result = true;

		if (this.isDropDownOpen()) {
			// First time opened we load the table
			if (this.gridOptions.datasource === null) {
				this.gridOptions.datasource = this;
				this.refresh(null);
			}
			if (this.totalItemsLoaded) {
				this.setDropdownHeight();
				this.setDropdownPosition();
				result = false;
			}
		}
		if (result && this.isDropdownOpened) {
			setTimeout(() => this.loop(), 10);
		} else {
			return;
		}
	}

	//override
	protected getTotalItemsInCombo(): number {
		return this.getTotalItems();
	}

	public doSearch(event: any) {
		if (event.shiftKey || event.ctrlKey) {
			return;
		}
		this.startsWith = event.target.value;
		this.refresh(null);
	}

	public getRows(params: IGetRowsParams): void {

		const page: number = params.endRow / this.gridOptions.paginationPageSize;
		const pageSize: number = this.gridOptions.paginationPageSize;

		const emptyElemNumber: number = this.emptyElement ? 1 : 0;
		const allNumber: number = this.allElement ? 1 : 0;
		const totalItems: number = this.getTotalItems() + emptyElemNumber + allNumber;
		const modulus: number = totalItems % pageSize;

		if (page === 1
			|| page <= totalItems / pageSize
			|| modulus > 1
			|| ((modulus === 1 || modulus === 2) && !this.emptyElement && !this.allElement)) {
			this.getElements(page, pageSize, emptyElemNumber, allNumber, params);
		} else {
			this.totalItemsLoaded = false;
			this.getData(page - 1, this.gridOptions.paginationPageSize, this.startsWith)
				.subscribe(
					(previousPage: Array<T>) => {
						const itemArray: Array<T> = new Array<T>();
						const totItems: number = Number(this.getTotalItems() + emptyElemNumber + allNumber);
						if (this.emptyElement === true && this.allElement === true) {
							const lastButOneItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 2];
							itemArray.push(lastButOneItemFromPreviousPage);

							const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
							itemArray.push(lastItemFromPreviousPage);
						} else {
							const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
							itemArray.push(lastItemFromPreviousPage);
						}

						this.totalItemsLoaded = true;
						params.successCallback(itemArray, totItems);

					},
					() => {
						params.failCallback();
					}
				);
		}
	}

	private getElements(page: number, pageSize: number, emptyElemNumber: number, allNumber: number, params: IGetRowsParams) {
		this.totalItemsLoaded = false;
		this.getData(page, pageSize, this.startsWith)
			.subscribe(
				(v: Array<T>) => {
					const itemArray: Array<T> = new Array<T>();
					const totalItems: number = Number(this.getTotalItems() + emptyElemNumber + allNumber);

					if (this.emptyElement === true || this.allElement === true) {

						if (page === 1) {
							if (this.emptyElement === true) {
								const newElement: T = this.getInstance();
								itemArray.push(newElement);
							}

							if (this.allElement === true) {
								const allElement: T = this.getAllInstance();
								itemArray.push(allElement);
							}

							for (const originalElement of v) {
								itemArray.push(originalElement);
							}
							params.successCallback(itemArray, totalItems);
							this.totalItemsLoaded = true;

						} else {
							this.getData(page - 1, this.gridOptions.paginationPageSize, this.startsWith)
								.subscribe(
									(previousPage: Array<T>) => {

										if (this.emptyElement === true && this.allElement === true) {
											const lastButOneItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 2];
											itemArray.push(lastButOneItemFromPreviousPage);

											const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
											itemArray.push(lastItemFromPreviousPage);
										} else {
											const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
											itemArray.push(lastItemFromPreviousPage);
										}

										for (const originalElement of v) {
											itemArray.push(originalElement);
										}
										this.totalItemsLoaded = true;
										params.successCallback(itemArray, totalItems);
									},
									() => {
										params.failCallback();
									}
								);
						}
					} else {

						for (const originalElement of v) {
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

}
