import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	selector: 'systelab-input-cell',
	templateUrl: 'input-cell-renderer.component.html',
	styleUrls: ['input-cell-renderer.component.scss']
})
export class InputCellRendererComponent implements AgRendererComponent {
	public params: any;
	public isEditable = true;

	public agInit(params: any): void {
		this.params = params;
		this.checkIsEditable();
	}

	public refresh(params: any): boolean {
		return true;
	}

	public modifyValue(): void {
		this.params.data[this.params.colDef.field] = this.params.value;
	}

	protected checkIsEditable(): void {
		if (this.params.colDef.isEditable) {
			this.isEditable = this.params.colDef.isEditable(this.params.data);
		}
	}
}
