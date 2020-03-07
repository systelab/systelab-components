import { Component, OnInit } from '@angular/core';
import { AbstractGrid } from '../../../systelab-components/grid/abstract-grid.component';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseData } from './showcase-grid.model';

@Component({
	selector:    'showcase-inner-grid',
	// templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
	templateUrl: '../../../systelab-components/grid/abstract-grid.component.html'
})
export class ShowcaseInnerGridComponent extends AbstractGrid<ShowcaseData> implements OnInit {

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnDefs();
	}

}
