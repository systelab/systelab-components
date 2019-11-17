import { Component, OnInit } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { DialogService } from '../../../systelab-components/modal';
import { AbstractGrid } from '../../../systelab-components/grid/abstract-grid.component';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseData } from './showcase-grid.model';
import { GridColumnOptionsService } from '../../../systelab-components/grid/options/grid-column-options.service';

@Component({
	selector:    'showcase-inner-grid',
	// templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
	templateUrl: '../../../systelab-components/grid/abstract-grid.component.html'
})
export class ShowcaseInnerGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService,
	            protected gridColumnOptionsService: GridColumnOptionsService) {
		super(preferencesService, i18nService, dialogService, gridColumnOptionsService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnDefs();
	}

}
