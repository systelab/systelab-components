import { Component } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';
import { TouchSpinValues } from '../../../spinner/touch.spin-values';

@Component({
	selector:    'systelab-spinner-cell-editor',
	templateUrl: 'spinner-cell-editor.component.html'
})
export class SpinnerCellEditorComponent implements AgEditorComponent {
	public params: any;

	public id: string;

	public initialValue: number;

	public agInit(params: any): void {
		this.params = params;
		if (this.params && this.params.value) {
			this.initialValue = (<TouchSpinValues>this.params.value).value;
		}
	}

	public getValue(): any {
		return new TouchSpinValues((<TouchSpinValues>this.params.value).value, (<TouchSpinValues>this.params.value).min,
			(<TouchSpinValues>this.params.value).max, (<TouchSpinValues>this.params.value).step, (<TouchSpinValues>this.params.value).isDecimal);
	}

	public refresh(params: any): boolean {
		return true;
	}
}
