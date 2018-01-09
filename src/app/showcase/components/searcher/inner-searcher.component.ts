import { Component } from '@angular/core';

import { InnerSearcher, ShowcaseSearcherData } from './inner-searcher';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { DialogService } from '../../../systelab-components/modal/dialog/dialog.service';
import { AbstractSearcherComponent } from '../../../systelab-components/searcher/abstract-searcher.component';

@Component({
	selector:    'showcase-inner-searcher',
	templateUrl: '../../../systelab-components/searcher/abstract-searcher.component.html'
})
export class InnerSearcherComponent extends AbstractSearcherComponent<ShowcaseSearcherData> {

	constructor(public i18nService: I18nService, public dialogService: DialogService) {
		super(dialogService, new InnerSearcher(i18nService));
	}

}
