import { Component } from '@angular/core';
import { AgEditorComponent } from 'ag-grid-angular';

@Component({
	selector: 'systelab-positive-integer-input-cell-editor',
	templateUrl: 'positive-integer-input-cell-editor.component.html',
})
export class PositiveIntegerInputCellEditorComponent implements AgEditorComponent {
	public value: string;
	public isEditable = true;
	public params: any;

	public agInit(params: any): void {
		this.params = params;
		this.value = this.params.value;
	}

	public getValue(): any {
		return this.value;
	}

	// Only digits and some keys are allowed to enter a positive number
	public onKeyDown(event: KeyboardEvent): void {
		const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Enter'];
		if (allowedKeys.includes(event.key)) {
			return;
		}

		if (!/^\d+$/.test(event.key)) {
			event.preventDefault();
		}
	}

	public refresh(params: any): boolean {
		return true;
	}
}
