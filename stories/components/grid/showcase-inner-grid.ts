import { Component, Input, OnInit } from '@angular/core';
import { AbstractGrid } from '../../../projects/systelab-components/src/lib/grid/abstract-grid.component';
import { PreferencesService } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { DialogService } from '../../../projects/systelab-components/src/lib/modal/dialog/dialog.service';

export class ShowcaseData {
	constructor(public colOne: string, public colTwo: string, public colThree: string, public colFour: string) {
	}
}

@Component({
	selector:    'showcase-inner-grid',
	templateUrl: '../../../projects/systelab-components/src/lib/grid/abstract-grid.component.html'
})
export class ShowcaseInnerGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	@Input() public columns: Array<any>;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService,
	            protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return this.columns;
	}

}
