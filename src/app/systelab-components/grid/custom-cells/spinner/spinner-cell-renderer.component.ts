import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {TouchSpinValues} from '../../../spinner/touch.spin-values';

@Component({
	selector: 'systelab-spinner-cell',
	templateUrl: 'spinner-cell-renderer.component.html'
})
export class SpinnerCellRendererComponent implements AgRendererComponent {
	private params: any;

	public isSpinnerEnabled: boolean;
	public id: string;

	public spinnerCellValues: TouchSpinValues; // = new TouchSpinValues(0, 0, 100, 1);

	public agInit(params: any): void {
		this.params = params;
		this.getTouchspinValues();
	}

	public refresh(params: any): boolean {
		return true;
	}

	public modifyValue(): void {
		if (this.params.colDef.modifyTouchspinValue) {
			this.params.colDef.modifyTouchspinValue(this.spinnerCellValues.value);
		}
	}

	private getTouchspinValues(): void {
		if (this.params.colDef.getTouchspinConfiguration) {
			const touchspinCellConfiguration = this.params.colDef.getTouchspinConfiguration();
			this.spinnerCellValues = touchspinCellConfiguration.touchspinValues;
			this.isSpinnerEnabled = touchspinCellConfiguration.isEnabled;
		}
	}
}
