import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { IAfterGuiAttachedParams } from 'ag-grid';

@Component( {
	selector:    'systelab-checkbox-cell',
	templateUrl: 'checkbox-cell-editor.component.html'
} )
export class CheckboxCellEditorComponent implements AgRendererComponent {

	afterGuiAttached(params?: IAfterGuiAttachedParams): void {
	}
	private params: any;

	public id: string;

	public agInit( params: any ): void {
		this.params = params;
		if (this.params.column.colDef['elementID']) {
			this.id = this.params.node.data[this.params.column.colDef['elementID']];
		}
	}

	public refresh(params: any): boolean {
		if (this.params.column.colDef['elementID']) {
			this.params.node.data.checkboxValue = params.value;
		}
		params.api.refreshCells(params);
		return false;
	}


}
