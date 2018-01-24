import {Component, Input} from '@angular/core';
import {PreferencesService} from 'systelab-preferences/lib/preferences.service';
import {I18nService} from 'systelab-translate/lib/i18n.service';
import {RowNode} from 'ag-grid';
import {AbstractSearcher} from './abstract-searcher';
import {AbstractApiGrid} from '../grid/abstract-api-grid.component';
import {DialogService} from '../modal/dialog/dialog.service';
import {Observable} from 'rxjs/Observable';


@Component({
	selector: 'systelab-internal-searcher-table',
	templateUrl: '../grid/abstract-grid.component.html'

})
export class SearcherTableComponent<T> extends AbstractApiGrid<T> {

	@Input('valueForSearch') public valueForSearch: string;
	@Input('contains') public searchForContain: number;
	@Input() public searcher: AbstractSearcher<T>;

	constructor(protected preferencesService: PreferencesService,
				protected i18nService: I18nService,
				protected dialogService: DialogService) {

		super(preferencesService, i18nService, dialogService);

	}

	protected getColumnDefs(): Array<any> {
		const columnsDef: Array<any> = this.searcher.getColumnDefs();
		return columnsDef;
	}

	protected hideHeader(): boolean {
		return this.searcher.hideHeader();
	}

	protected getIsFullWidthCell(rowNode: RowNode): boolean {
		return this.searcher.getIsFullWidthCell(rowNode);
	}

	public getFullWidthCellRenderer(): any {
		return this.searcher.getFullWidthCellRenderer();
	}

	protected getContextMenuOptions(): Array<any> {
		return new Array<any>();
	}

	public getTotalItems() {
		return this.searcher.getTotalItems();
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<T>> {
		let searchText: string;
		if (this.valueForSearch) {
			searchText = (this.searchForContain === 2) ? '%' + this.valueForSearch : this.valueForSearch;
		}
		return this.searcher.getData(searchText, page, itemsPerPage);
	}

	public refreshTable(): void {
		this.refresh();
	}

	public getSelectedElements(): Array<T> {
		return this.gridOptions.api.getSelectedRows();
	}

	protected getGridOptionsPreferencesPrefix(): string {
		return this.searcher.getGridOptionsPreferencesPrefix();
	}

	public onModelUpdated(event: any) {
		super.onModelUpdated(event);
		if (this.multipleSelection) {

			if (this.searcher && this.searcher.multipleSelectedItemList && this.searcher.multipleSelectedItemList.length > 0) {
				this.gridOptions.api.forEachNode(node => {
					if (this.searcher.multipleSelectedItemList
							.filter((selectedItem) => {
								return (selectedItem && node.data && selectedItem[this.searcher.getCodeField()] === node.data[this.searcher.getCodeField()]);
							}).length > 0) {
						node.selectThisNode(true);
					}
				});
			}
		} else if (this.searcher && this.searcher.id && this.searcher.id !== undefined) {
			this.gridOptions.api.forEachNode(node => {
				if (node.data && node.data[this.searcher.getIdField()] === this.searcher.id) {
					node.selectThisNode(true);
				}
			});
		}
	}

}
