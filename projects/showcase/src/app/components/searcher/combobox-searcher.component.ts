import { Component, Input, OnInit } from '@angular/core';
import { InnerSearcher } from './inner-searcher';
import { I18nService } from 'systelab-translate';
import { DialogService } from 'systelab-components';
import { AbstractGenericSearcherComponent } from 'systelab-components';
import { ShowcaseSearcherData } from './showcase-searcher-data.model';

@Component({
	selector:    'showcase-combobox-searcher',
	templateUrl: '../../../../../systelab-components/src/lib/searcher/abstract-generic-searcher.component.html'
})
export class ComboboxSearcherComponent extends AbstractGenericSearcherComponent<ShowcaseSearcherData> implements OnInit {
	@Input() treeSearcher: boolean;
	@Input() parentSelectable: boolean;
	constructor(public i18nService: I18nService, public dialogService: DialogService) {
		super(dialogService, new InnerSearcher(i18nService));
	}

	public ngOnInit() {
		super.ngOnInit();
		(this.abstractSearcher as InnerSearcher).treeSearcher = this.treeSearcher;
		(this.abstractSearcher as InnerSearcher).parentSelectable = this.parentSelectable;
	}
}