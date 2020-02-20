import { Component, OnInit } from '@angular/core';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from '../../../systelab-components/modal';
import { ShowcaseInnerGridComponent } from './showcase-inner-grid.component';

@Component({
	selector:    'showcase-inner-bars-grid',
	// templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
	templateUrl: '../../../systelab-components/grid/abstract-grid.component.html'
})
export class ShowcaseBarsGridComponent extends ShowcaseInnerGridComponent implements OnInit {

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnBarsDefs();
	}

}
