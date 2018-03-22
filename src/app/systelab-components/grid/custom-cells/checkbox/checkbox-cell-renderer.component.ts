import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';

@Component({
	selector: 'systelab-checkbox-cell',
	templateUrl: 'checkbox-cell-renderer.component.html'
})
export class CheckboxCellRendererComponent implements AgRendererComponent {
	private params: any;

	public isCheckboxActive: boolean;
	public id: string;

	public agInit(params: any): void {
		this.params = params;

		if (params.data) {
			console.log(params.data);
			this.id = params.data[params.colDef.elementID];
			this.isCheckboxActive = params.data.active;
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

	public modifyValue(): void {
		this.params.data[this.params.colDef.field] = this.isCheckboxActive;
	}
}
