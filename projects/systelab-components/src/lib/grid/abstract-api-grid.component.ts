import { Directive, OnInit } from '@angular/core';
import { AbstractGrid } from './abstract-grid.component';
import { Observable } from 'rxjs';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { DialogService } from '../modal/dialog/dialog.service';

@Directive()
export abstract class AbstractApiGrid<T> extends AbstractGrid<T> implements IDatasource {

	constructor(protected override preferencesService: PreferencesService, protected override i18nService: I18nService,
				protected override dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
		this.allowRowManaged = false;
	}

	protected override getInitialGridOptions(): GridOptions {
		const options: GridOptions = {
			...super.getInitialGridOptions(),
			rowModelType: 'infinite',
			paginationPageSize: 50,
			cacheBlockSize: 50,
			cacheOverflowSize: 2,
			maxConcurrentDatasourceRequests: 4,
			maxBlocksInCache: 15,
			datasource: this,
			loading: false
		};
		return options;
	}

	public abstract getTotalItems(): number;

	public override doGridReady(event: any) {
		super.doGridReady(event);
	}

	protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;

	public getRows(params: IGetRowsParams): void {
		this.gridApi.updateGridOptions({loading: true});
		this.getData(params.endRow / this.gridOptions.paginationPageSize, this.gridOptions.paginationPageSize)
			.subscribe({
				next:  (page: Array<T>) => this.putPage(page, this.getTotalItems(), params),
				error: () => this.putPage([], 0, params)
			});
	}

	protected putPage(page: Array<T>, totalItems: number, params: IGetRowsParams): void {
		params.successCallback(page, totalItems);
		if (page.length === 0) {
			this.gridApi.updateGridOptions({loading: false});
			this.gridApi.showNoRowsOverlay();
		}
		this.gridApi.updateGridOptions({loading: false});
	}

	public refresh(): void {
		// the ? is to avoid errors in tests
		this.gridApi?.updateGridOptions({datasource: this });
	}
}
