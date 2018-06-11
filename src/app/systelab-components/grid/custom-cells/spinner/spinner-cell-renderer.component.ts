import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {TouchSpinValues} from '../../../spinner/touch.spin-values';

@Component({
	selector: 'systelab-spinner-cell',
	templateUrl: 'spinner-cell-renderer.component.html'
})
export class SpinnerCellRendererComponent implements AgRendererComponent {
	public params: any;

	public isSpinnerEnabled: boolean;
	public id: string;
	public isActive = false;

	public agInit(params: any): void {
		this.params = params;
	}

	public refresh(params: any): boolean {
		return true;
	}

	public modifyValue(): void {
		if (this.params.context.componentParent.modifyValueAction) {
			this.params.context.componentParent.modifyValueAction();
		}
	}

	public onFocus(): void {
		this.isActive = true;
	}
}
