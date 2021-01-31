import {Component, OnInit} from '@angular/core';
import {ShowcaseInnerGridComponent} from './showcase-inner-grid.component';
import {CodeBarCellRendererComponent} from './codebar-cell-renderer.component';

@Component({
	selector: 'showcase-inner-codebar-grid',
	templateUrl: '../../../../../systelab-components/src/lib/grid/abstract-grid.component.html'
})
export class ShowcaseCodeBarGridComponent extends ShowcaseInnerGridComponent implements OnInit {

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.rowHeight = 200;
	}

	protected getColumnDefs(): Array<any> {
		return [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true},
			{colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
			{
				colId: 'status',
				valueGetter: (params: any) => {
					return params.data.stackedBarValues;
				},
				headerName: 'Status',
				cellRendererFramework: CodeBarCellRendererComponent,
			}];
	}

}
