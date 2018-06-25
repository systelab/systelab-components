import {Component} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular';

@Component({
	selector: 'systelab-decimal-input-cell-editor',
	templateUrl: 'decimal-input-cell-editor.component.html'
})
export class DecimalInputCellEditorComponent implements AgEditorComponent {
	public params: any;

	public id: string;
	public isEditable = true;

	public agInit(params: any): void {
		this.params = params;
	}

	public getValue(): any {
		return this.params.value;
	}

	public refresh(params: any): boolean {
		return true;
	}
}
