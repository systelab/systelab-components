import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';
import { IStackedBar } from '../../../systelab-components/grid/custom-cells/stacked-bar/stacked-bar-cell-renderer.component';

export class ShowcaseData {

	constructor(public eventDate: string, public value: string, public flag: string, public decimalValue: number, public inputValue: number,
				public checkboxValue: boolean, public checkboxID: number, public spinnerValues: TouchSpinValues, public stackedBarValues?: Array<IStackedBar>) {
	}
}
