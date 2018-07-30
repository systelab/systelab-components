import {Component} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular';
import {DecimalPipe} from '@angular/common';

@Component({
	selector: 'systelab-decimal-input-cell-editor',
	templateUrl: 'decimal-input-cell-editor.component.html'
})
export class DecimalInputCellEditorComponent implements AgEditorComponent {
	public params: any;

	public decimalValue: number;
	public id: string;
	public isEditable = true;

	constructor(protected decimalFormat: DecimalPipe) {
	}

	public agInit(params: any): void {
		this.params = params;
		this.decimalValue = this.params.value;
		if (this.params.value !== null && typeof(this.params.value) === 'string') {
			this.decimalValue = parseInt(this.params.value.replace(',', ''), 10);
		}
	}

	public getValue(): any {
		const transformedValue = this.decimalFormat.transform(this.decimalValue, '1.1-5');
		return transformedValue ? transformedValue.replace(/,/g, '') : null;
	}

	public refresh(params: any): boolean {
		return true;
	}
}
