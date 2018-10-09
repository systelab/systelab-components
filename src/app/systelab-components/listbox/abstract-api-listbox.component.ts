import { OnInit } from '@angular/core';
import { IDatasource, IGetRowsParams } from 'ag-grid';
import { Observable } from 'rxjs/index';
import { AbstractListBox } from './abstract-listbox.component';

export abstract class AbstractApiListBox<T> extends AbstractListBox<T> implements IDatasource, OnInit {

	public abstract getInstance(): T;

	protected constructor() {
		super();
	}

	public ngOnInit() {

		super.ngOnInit();

		this.gridOptions.rowModelType = 'infinite';
		this.gridOptions.paginationPageSize = 50;
		this.gridOptions.cacheBlockSize = 50;
		this.gridOptions.cacheOverflowSize = 2;
		this.gridOptions.maxConcurrentDatasourceRequests = 4;
		this.gridOptions.maxBlocksInCache = 15;
		// this.gridOptions.paginationInitialRowCount = 0;
		this.gridOptions.infiniteInitialRowCount = 0;

		this.gridOptions.datasource = this;
	}

	public abstract getTotalItems(): number;

	protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;

	public getRows(params: IGetRowsParams): void {

		this.gridOptions.api.showLoadingOverlay();
		const page: number = params.endRow / this.gridOptions.paginationPageSize;
		const pageSize: number = this.gridOptions.paginationPageSize;

		const showAllElementNumber: number = this.showAll ? 1 : 0;
		const totalItems: number = this.getTotalItems() + showAllElementNumber;
		const modulus: number = totalItems % pageSize;

		if (page === 1 || page <= totalItems / pageSize || modulus > 1 || (modulus === 1 && !this.showAll)) {
			this.getElements(page, pageSize, showAllElementNumber, params);
		} else {
			this.getData(page - 1, this.gridOptions.paginationPageSize)
				.subscribe(
					(previousPage: Array<T>) => {
						this.gridOptions.api.hideOverlay();
						const itemArray: Array<T> = [];
						const totItems: number = Number(this.getTotalItems() + showAllElementNumber);

						const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
						itemArray.push(lastItemFromPreviousPage);

						params.successCallback(itemArray, totItems);

					},
					() => {
						this.gridOptions.api.hideOverlay();
						params.failCallback();
					}
				);
		}
	}

	private getElements(page: number, pageSize: number, emptyElemNumber: number, params: IGetRowsParams) {
		this.getData(page, pageSize)
			.subscribe(
				(v: Array<T>) => {
					this.gridOptions.api.hideOverlay();
					const itemArray: Array<T> = [];
					const totalItems: number = Number(this.getTotalItems() + emptyElemNumber);

					if (this.showAll === true) {

						if (page === 1) {
							const newElement: T = this.getInstance();
							newElement[this.getIdField()] = this.getAllFieldID();
							newElement[this.getDescriptionField()] = this.getAllFieldDescription();
							itemArray.push(newElement);

							for (const originalElement of v) {
								itemArray.push(originalElement);
							}
							params.successCallback(itemArray, totalItems);

						} else {
							this.getData(page - 1, this.gridOptions.paginationPageSize)
								.subscribe(
									(previousPage: Array<T>) => {
										const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
										itemArray.push(lastItemFromPreviousPage);

										for (const originalElement of v) {
											itemArray.push(originalElement);
										}
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
						params.successCallback(itemArray, totalItems);
					}
				},
				() => {
					this.gridOptions.api.hideOverlay();
					params.failCallback();
				}
			);
	}

	public refresh() {
		this.gridOptions.api.setDatasource(this);
	}

}
