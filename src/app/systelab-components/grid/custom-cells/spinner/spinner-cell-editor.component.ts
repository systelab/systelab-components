import {Component} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular';

@Component({
	selector: 'systelab-spinner-cell',
	templateUrl: 'spinner-cell-editor.component.html'
})
export class SpinnerCellEditorComponent implements AgEditorComponent {
	public params: any;

	public id: string;

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
