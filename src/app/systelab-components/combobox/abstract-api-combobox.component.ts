import { ChangeDetectorRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IGetRowsParams } from 'ag-grid';
import { AbstractComboBox } from './abstract-combobox.component';
import { Observable } from 'rxjs';

export abstract class AbstractApiComboBox<T> extends AbstractComboBox<T> implements AgRendererComponent, OnInit, OnDestroy {

	public startsWith = '';

	public params: any;

	public totalItemsLoaded = false;

	constructor( public myRenderer: Renderer2, public chref: ChangeDetectorRef ) {
		super( myRenderer, chref );
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

	public abstract getData( page: number, itemsPerPage: number, startsWithParameter: string ): Observable<Array<T>>;

	public abstract getTotalItems(): number;

	public refresh( params: any ): boolean {
		if ( this.gridOptions && this.gridOptions.api ) {
			this.gridOptions.api.setDatasource( this );
		}
		return true;
	}


	// override
	public loop(): void {
		let result = true;

		if ( this.isDropDownOpen() ) {
			// First time opened we load the table
			if ( this.gridOptions.datasource === null ) {
				this.gridOptions.datasource = this;
				this.refresh( null );
			}
			if ( this.totalItemsLoaded ) {
				this.setDropdownHeight();
				this.setDropdownPosition();
				result = false;
			}
		}
		if ( result && this.isDropdownOpened ) {
			setTimeout( () => this.loop(), 10 );
		} else {
			return;
		}
	}


	// override
	protected getTotalItemsForDropdownHeight(): number {
		let totalItems = Number( this.getTotalItems());
		if ( this.emptyElement ) {
			totalItems += 1;
		}
		return totalItems;
	}

	public doSearch( event: any ) {
		if ( event.shiftKey || event.ctrlKey ) {
			return;
		}
		this.startsWith = event.target.value;
		this.refresh( null );
	}

	public getRows( params: IGetRowsParams ): void {

		const page: number = params.endRow / this.gridOptions.paginationPageSize;
		const pageSize: number = this.gridOptions.paginationPageSize;

		const emptyElemNumber: number = this.emptyElement ? 1 : 0;
		const totalItems: number = this.getTotalItems() + emptyElemNumber;
		const modulus: number = totalItems % pageSize;

		if ( page === 1 || page <= totalItems / pageSize || modulus > 1 || (modulus === 1 && !this.emptyElement) ) {
			this.getElements( page, pageSize, emptyElemNumber, params );
		} else {
			this.totalItemsLoaded = false;
			this.getData( page - 1, this.gridOptions.paginationPageSize, this.startsWith )
				.subscribe(
					( previousPage: Array<T> ) => {
						const itemArray: Array<T> = new Array<T>();
						const totItems: number = Number( this.getTotalItems() + emptyElemNumber );

						const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
						itemArray.push( lastItemFromPreviousPage );

						this.totalItemsLoaded = true;
						params.successCallback( itemArray, totItems );

					},
					() => {
						params.failCallback();
					}
				);
		}
	}

	private getElements( page: number, pageSize: number, emptyElemNumber: number, params: IGetRowsParams ) {
		this.totalItemsLoaded = false;
		this.getData( page, pageSize, this.startsWith )
			.subscribe(
				( v: Array<T> ) => {
					const itemArray: Array<T> = new Array<T>();
					const totalItems: number = Number( this.getTotalItems() + emptyElemNumber );

					if ( this.emptyElement === true ) {

						if ( page === 1 ) {
							const newElement: T = this.getInstance();
							itemArray.push( newElement );

							for ( const originalElement of v ) {
								itemArray.push( originalElement );
							}
							params.successCallback( itemArray, totalItems );
							this.totalItemsLoaded = true;

						} else {
							this.getData( page - 1, this.gridOptions.paginationPageSize, this.startsWith )
								.subscribe(
									( previousPage: Array<T> ) => {
										const lastItemFromPreviousPage = previousPage[this.gridOptions.paginationPageSize - 1];
										itemArray.push( lastItemFromPreviousPage );

										for ( const originalElement of v ) {
											itemArray.push( originalElement );
										}
										this.totalItemsLoaded = true;
										params.successCallback( itemArray, totalItems );
									},
									() => {
										params.failCallback();
									}
								);
						}
					} else {
						for ( const originalElement of v ) {
							itemArray.push( originalElement );
						}
						this.totalItemsLoaded = true;
						params.successCallback( itemArray, totalItems );
					}
				},
				error => {
					params.failCallback();
				}
			);
	}



}
