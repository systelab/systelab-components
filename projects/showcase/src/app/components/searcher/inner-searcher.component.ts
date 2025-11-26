import { Component } from '@angular/core';

import { InnerSearcher } from './inner-searcher';
import { I18nService } from 'systelab-translate';
import { DialogService } from 'systelab-components';
import { AbstractSearcherComponent } from 'systelab-components';
import { ShowcaseSearcherData } from './showcase-searcher-data.model';

@Component({
    selector: 'showcase-inner-searcher',
    templateUrl: '../../../../../systelab-components/src/lib/searcher/abstract-searcher.component.html',
    standalone: false
})
export class InnerSearcherComponent extends AbstractSearcherComponent<ShowcaseSearcherData> {

	constructor(public i18nService: I18nService, public dialogService: DialogService) {
		super(dialogService, new InnerSearcher(i18nService));
	}

}
