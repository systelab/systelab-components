import { Component, OnInit } from '@angular/core';
import { AbstractGrid } from 'systelab-components';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseData } from './showcase-grid.model';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { DialogService } from 'systelab-components';

@Component({
    selector: 'showcase-inner-group-column-grid',
    // templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
    templateUrl: '../../../../../systelab-components/src/lib/grid/abstract-grid.component.html',
    standalone: false
})
export class ShowcaseInnerGroupColumnsGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
	            protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellFocus = false;
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getGroupColumnDefs();
	}

}
