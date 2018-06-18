import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {InputCellRendererComponent} from '../input/input-cell-renderer.component';

@Component({
	selector: 'systelab-decimal-input-cell',
	templateUrl: 'decimal-input-cell-renderer.component.html'
})
export class DecimalInputCellRendererComponent extends InputCellRendererComponent implements AgRendererComponent {
	public params: any;
	public isEditable = true;

	public agInit(params: any): void {
		this.params = params;
		this.checkIsEditable();
	}

	public refresh(params: any): boolean {
		return true;
	}

	public modifyValue(): void {
		this.params.data[this.params.colDef.field] = this.params.value;
	}
}
