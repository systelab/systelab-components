import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { DialogService } from '../../../systelab-components/modal';
import { AbstractApiGrid } from '../../../systelab-components/grid/abstract-api-grid.component';
import { Observable, of } from 'rxjs';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseData } from './showcase-grid.model';

@Component({
	selector:    'showcase-inner-api-grid',
	// templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
	templateUrl: '../../..//systelab-components/grid/abstract-grid.component.html'
})
export class ShowcaseInnerApiGridComponent extends AbstractApiGrid<ShowcaseData> implements OnInit {

	private totalItems = 10;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnDefs();
	}

	public getTotalItems(): number {
		return this.totalItems;
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<ShowcaseData>> {
		const values: ShowcaseData[] = ShowcaseGridUtil.getGridData();
		this.totalItems = values.length;
		// On a real scenario the data will be retrieved from a API
		// return this.api.getData(page, itemsPerPage);
		return of(values);
	}

}