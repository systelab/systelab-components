import { Directive, Input } from '@angular/core';

@Directive()
export class ComboBoxInputRenderer {

	private _id: number | string;
	@Input()
	set id( value: number | string ) {
		this._id = value;
	}

	get id() {
		return this._id;
	}

	private _description: string;
	@Input()
	set description( value: string ) {
		this._description = value;
	}

	get description() {
		return this._description;
	}

	@Input() selectedData: any;
	@Input() initialParams: any;

	constructor() {
	}
}
