import {Component} from '@angular/core';
import {AgEditorComponent} from 'ag-grid-angular';

@Component({
	selector: 'systelab-input-cell-editor',
	templateUrl: 'input-cell-editor.component.html'
})
export class InputCellEditorComponent implements AgEditorComponent {
	public params: any;

	public id: string;
	public isEditable = true;

	public agInit(params: any): void {
		this.params = params;
		this.checkIsEditable();
	}

	public getValue(): any {
		return this.params.value;
	}

	public refresh(params: any): boolean {
		return true;
	}

	protected checkIsEditable(): void {
		if (this.params.context.componentParent.isInputEditable) {
			this.isEditable = this.params.context.componentParent.isInputEditable(this.params.node.data);
		}
	}
}
