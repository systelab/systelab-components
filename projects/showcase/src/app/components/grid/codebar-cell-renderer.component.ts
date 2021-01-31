import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';

@Component({
	selector: 'codebar-cell',
	templateUrl: 'codebar-cell-renderer.component.html'
})
export class CodeBarCellRendererComponent implements AgRendererComponent {
	public params: any;


	public agInit(params: any): void {
		this.params = params;
		if (params.data) {
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

}
