import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';


@Component({
	selector: 'systelab-spinner-cell-renderer',
	template: `<span class="slab-flex-1 text-center">{{params.value.value}}</span>`
})
export class SpinnerCellRendererComponent implements AgRendererComponent {
	public params: any;

	public agInit(params: any): void {
		this.params = params;
	}

	public refresh(params: any): boolean {
		return true;
	}
}
