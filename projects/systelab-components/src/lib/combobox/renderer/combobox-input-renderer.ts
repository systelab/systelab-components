import { Directive, Input } from '@angular/core';

@Directive()
export class ComboBoxInputRenderer {
	@Input() selectedData: any;
	@Input() initialParams: any;

	private _id: number | string;
	@Input()
	set id( value: number | string ) {
		this._id = value;
	}

	get id(): number | string {
		return this._id;
	}

	private _description: string;
	@Input()
	set description( value: string ) {
		this._description = value;
	}

	get description(): string {
		return this._description;
	}

	constructor() {
	}
}
