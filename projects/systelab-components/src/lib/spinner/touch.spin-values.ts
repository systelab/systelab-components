export class TouchSpinValues {

	constructor(
		public value: number,
		public min: number,
		public max: number,
		public step: number = 1,
		public isDecimal: boolean = true,
		public precision = 2 ) {
	}

	public getPrecision(): number {
		return (this.isDecimal) ? this.precision : 0;
	}
}
