import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	selector:    'systelab-checkbox-cell',
	templateUrl: 'checkbox-cell-renderer.component.html'
})
export class CheckboxCellRendererComponent implements AgRendererComponent {
	private params: any;

	public isCheckboxActive: boolean;
	public hideCheckbox = false;
	public id: string;

	public agInit(params: any): void {
		this.params = params;
		if (params.data) {
			this.id = params.data[params.colDef.elementID];
			this.isCheckboxActive = params.data[this.params.colDef.field];
			if (this.params.colDef.hideCheckbox) {
				this.hideCheckbox = this.params.colDef.hideCheckbox(this.params.data);
			}
		}
	}

	public refresh(params: any): boolean {
		if (params.value != null) {
			this.isCheckboxActive = params.value;
		}
		return true;
	}
}
