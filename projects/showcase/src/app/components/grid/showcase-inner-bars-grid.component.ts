import { Component, OnInit } from '@angular/core';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseData } from './showcase-grid.model';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { AbstractGrid, DialogService } from 'systelab-components';

@Component({
    selector: 'showcase-inner-bars-grid',
    // templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
    templateUrl: '../../../../../systelab-components/src/lib/grid/abstract-grid.component.html',
    standalone: false
})
export class ShowcaseBarsGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
				protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnBarsDefs();
	}

}
