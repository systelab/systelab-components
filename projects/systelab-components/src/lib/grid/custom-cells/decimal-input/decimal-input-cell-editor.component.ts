import {Component} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular';

@Component({
    selector: 'systelab-decimal-input-cell-editor',
    templateUrl: 'decimal-input-cell-editor.component.html',
    standalone: false
})
export class DecimalInputCellEditorComponent implements AgEditorComponent {
	public params: any;

	public decimalValue: number;
	public id: string;
	public isEditable = true;

	public agInit(params: any): void {
		this.params = params;
		this.decimalValue = this.params.value;
	}

	public getValue(): any {
		return this.decimalValue;
	}

	public refresh(params: any): boolean {
		return true;
	}
}
