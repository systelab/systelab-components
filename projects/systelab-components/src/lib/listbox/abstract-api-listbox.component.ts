import { Directive, OnInit } from '@angular/core';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AbstractListBox } from './abstract-listbox.component';

@Directive()
export abstract class AbstractApiListBox<T> extends AbstractListBox<T> implements IDatasource {

	public abstract override getInstance(): T;

	protected constructor() {
		super();
		this.values = null;
		this.rowData = null;
	}

	protected override getInitialGridOptions(): GridOptions {
		const options = super.getInitialGridOptions();
		options.rowModelType= 'infinite';
		options.paginationPageSize= 50;
		options.cacheBlockSize= 50;
		options.cacheOverflowSize= 2;
		options.maxConcurrentDatasourceRequests= 4;
		options.maxBlocksInCache= 15;
		options.datasource = this;
		options.loading = false;
		return options;
	}

	public abstract getTotalItems(): number;

	protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;

	public getRows(params: IGetRowsParams): void {
		this.gridApi.updateGridOptions({ loading: true });
		const page: number = params.endRow / this.gridOptions.paginationPageSize;
		const pageSize: number = this.gridOptions.paginationPageSize;
		const showAllElementNumber: number = this.showAll ? 1 : 0;
		const totalItems: number = this.getTotalItems() + showAllElementNumber;
		const modulus: number = totalItems % pageSize;
		if (page === 1 || page <= totalItems / pageSize || modulus > 1 || (modulus === 1 && !this.showAll)) {
			this.getElements(page, pageSize, showAllElementNumber, params);
		} else {
			this.getData(page - 1, this.gridOptions.paginationPageSize)
				.subscribe({
						next:  (previousPage: Array<T>) => {
							this.gridApi.updateGridOptions({ loading: false });
							this.gridApi.hideOverlay();
							const itemArray: Array<T> = [];
							const totItems: number = Number(this.getTotalItems() + showAllElementNumber);

							const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
							itemArray.push(lastItemFromPreviousPage);

							params.successCallback(itemArray, totItems);
						},
						error: () => {
							this.gridApi.updateGridOptions({loading: false});
							this.gridApi.hideOverlay();
							params.failCallback();
						}
					}
				);
		}
	}

	private getElements(page: number, pageSize: number, emptyElemNumber: number, params: IGetRowsParams) {
		this.getData(page, pageSize)
			.subscribe(
				{
					next:  (v: Array<T>) => {
						this.gridApi.updateGridOptions({ loading: false });
						this.gridApi.hideOverlay();
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
					error: () => {
						this.gridApi.updateGridOptions({ loading: false });
						this.gridApi.hideOverlay();
						params.failCallback();
					}
				}
			);
	}

	public refresh() {
		this.gridApi?.updateGridOptions({datasource: this});
	}

}
