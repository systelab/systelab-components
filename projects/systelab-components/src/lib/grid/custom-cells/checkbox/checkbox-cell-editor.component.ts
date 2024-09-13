import { AfterViewInit, Component } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
	selector:    'systelab-checkbox-cell',
	templateUrl: 'checkbox-cell-editor.component.html'
})
export class CheckboxCellEditorComponent implements AgEditorComponent, AfterViewInit {
	private params: any;

	public isCheckboxActive: boolean;
	public id: string;
	private singleClickEdit = false;

	public ngAfterViewInit() {
		if (this.singleClickEdit) {
			this.isCheckboxActive = !this.isCheckboxActive;
			setTimeout(() => {
				this.params.stopEditing();
			}, 0);
		}
	}

	public agInit(params: any): void {
		this.params = params;
		if (this.params.column.colDef['elementID']) {
			this.id = this.params.node.data[this.params.column.colDef['elementID']];
		}
		this.isCheckboxActive = this.params.value;
		this.singleClickEdit = this.params.column.colDef['singleClickEdit'];
	}

	public getValue(): any {
		this.params.value = this.isCheckboxActive;
		return this.isCheckboxActive;
	}

	public doOnChange() {
		this.isCheckboxActive = !this.isCheckboxActive;
	}

}
