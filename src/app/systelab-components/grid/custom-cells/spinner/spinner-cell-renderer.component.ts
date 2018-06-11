import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';


@Component({
	selector: 'systelab-input-cell',
	template: `<span class="w-100 text-align-center">{{this.params.data.spinnerValues.value}}</span>`
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
