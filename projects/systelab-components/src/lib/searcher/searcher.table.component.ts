import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { IsFullWidthRowParams } from 'ag-grid-community';
import { AbstractSearcher } from './abstract-searcher';
import { AbstractApiGrid } from '../grid/abstract-api-grid.component';
import { DialogService } from '../modal/dialog/dialog.service';
import { Observable } from 'rxjs';

@Component({
	selector:    'systelab-internal-searcher-table',
	templateUrl: '../grid/abstract-grid.component.html'

})
export class SearcherTableComponent<T> extends AbstractApiGrid<T> implements OnInit {

	@Input() public valueForSearch: string;
	@Input('contains') public searchForContain: boolean;
	@Input() public searcher: AbstractSearcher<T>;

	constructor(protected override preferencesService: PreferencesService, protected override i18nService: I18nService,
				protected override dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public override ngOnInit(): void {
		super.ngOnInit();
		this.gridOptions.enableBrowserTooltips = true;
	}

	protected getColumnDefs(): Array<any> {
		return this.searcher.getColumnDefs();
	}

	protected override hideHeader(): boolean {
		return this.searcher.hideHeader();
	}

	protected override getIsFullWidthRow(isFullWidthRowParams: IsFullWidthRowParams): boolean {
		return this.searcher.getIsFullWidthRow(isFullWidthRowParams);
	}

	public override getFullWidthCellRenderer(): any {
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
			searchText = (this.searchForContain) ? '%' + this.valueForSearch : this.valueForSearch;
		}
		return this.searcher.getData(searchText, page, itemsPerPage);
	}

	public refreshTable(): void {
		this.refresh();
	}

	public getSelectedElements(): Array<T> {
		return this.gridOptions.api.getSelectedRows();
	}

	protected override getGridOptionsPreferencesPrefix(): string {
		return this.searcher.getGridOptionsPreferencesPrefix();
	}

	public override onModelUpdated(event: any) {
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

	// overrides
	public override onRowSelected(event: any): void {
		if (this.multipleSelection) {
			if (event.node && event.node.data && event.node.data[this.searcher.getIdField()] !== undefined) {
				if (this.searcher.multipleSelectedItemList) {
					const element = this.searcher.multipleSelectedItemList.find((item) => {
						return item[this.searcher.getCodeField()] === event.node.data[this.searcher.getCodeField()];
					});
					if (event.node.selected && !element) {
						this.addElementToMultipleSelectedItemList(event.node.data);
					} else if (!event.node.selected && element) {
						this.searcher.multipleSelectedItemList = this.searcher.multipleSelectedItemList
							.filter((item) => item[this.searcher.getCodeField()] !== element[this.searcher.getCodeField()]);
					}
				} else {
					this.addElementToMultipleSelectedItemList(event.node.data);
				}
			}
		}
	}

	private addElementToMultipleSelectedItemList(element: T): void {
		if (!this.searcher.multipleSelectedItemList) {
			this.searcher.multipleSelectedItemList = [];
		}
		this.searcher.multipleSelectedItemList.push(element);
		this.searcher.multipleSelectedItemList = this.searcher.multipleSelectedItemList.slice();
	}

}
