import { Directive, OnInit } from '@angular/core';
import { AbstractGrid } from './abstract-grid.component';
import { Observable } from 'rxjs';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { DialogService } from '../modal/dialog/dialog.service';

@Directive()
export abstract class AbstractApiGrid<T> extends AbstractGrid<T> implements IDatasource, OnInit {

	constructor(protected override preferencesService: PreferencesService, protected override i18nService: I18nService,
				protected override dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	protected override getInitialGridOptions(): GridOptions {
		const options = super.getInitialGridOptions();
		options.rowModelType = 'infinite';
		options.paginationPageSize = 50;
		options.cacheBlockSize = 50;
		options.cacheOverflowSize = 2;
		options.maxConcurrentDatasourceRequests = 4;
		options.maxBlocksInCache = 15;
		options.infiniteInitialRowCount = 0;
		options.datasource = this;
		return options;
	}

	public abstract getTotalItems(): number;

	protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;

	public getRows(params: IGetRowsParams): void {
		this.gridOptions.api.showLoadingOverlay();
		this.getData(params.endRow / this.gridOptions.paginationPageSize, this.gridOptions.paginationPageSize)
			.subscribe({
				next:  (page: Array<T>) => this.putPage(page, this.getTotalItems(), params),
				error: () => this.putPage([], 0, params)
			});
	}

	protected putPage(page: Array<T>, totalItems: number, params: IGetRowsParams): void {
		this.gridOptions.api.hideOverlay();
		params.successCallback(page, totalItems);
		if (page.length === 0) {
			this.gridOptions.api.showNoRowsOverlay();
		}
	}

	public refresh(): void {
		this.gridOptions.api.setDatasource(this);
	}
}
