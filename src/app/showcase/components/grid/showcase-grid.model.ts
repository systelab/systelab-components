import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';

export class ShowcaseData {

	constructor(public eventDate: string, public value: string, public flag: string, public decimalValue: number, public inputValue: number,
				public checkboxValue: boolean, public checkboxID: number, public spinnerValues: TouchSpinValues) {
	}
}
