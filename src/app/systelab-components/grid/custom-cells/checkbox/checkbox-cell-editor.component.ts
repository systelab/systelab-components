import { Component } from '@angular/core';
import { AgEditorComponent, AgRendererComponent } from 'ag-grid-angular';

@Component( {
	selector:    'systelab-checkbox-cell',
	templateUrl: 'checkbox-cell-editor.component.html'
} )
export class CheckboxCellEditorComponent implements AgEditorComponent {
	private params: any;

	public isCheckboxActive: boolean;
	public id: string;

	public agInit( params: any ): void {
		this.params = params;
		this.isCheckboxActive = this.params.value;
	}

	public getValue(): any {
		return this.isCheckboxActive;
	}


}
