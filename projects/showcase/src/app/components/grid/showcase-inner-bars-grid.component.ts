import { Component, OnInit } from '@angular/core';
import { ShowcaseGridUtil } from './showcase-grid.util';
import { ShowcaseInnerGridComponent } from './showcase-inner-grid.component';

@Component({
    selector: 'showcase-inner-bars-grid',
    // templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
    templateUrl: '../../../../../systelab-components/src/lib/grid/abstract-grid.component.html',
    standalone: false
})
export class ShowcaseBarsGridComponent extends ShowcaseInnerGridComponent implements OnInit {

	protected getColumnDefs(): Array<any> {
		return ShowcaseGridUtil.getColumnBarsDefs();
	}

}
