import { Input } from '@angular/core';

export class ComboBoxInputRenderer {

	public _id: number | string;
	@Input()
	set id( value: number | string ) {
		this._id = value;
	}

	get id() {
		return this._id;
	}

	public _description: string;
	@Input()
	set description( value: string ) {
		this._description = value;
	}

	get description() {
		return this._description;
	}

	@Input() componentData: any;
	@Input() initialParams: any;

	constructor() {
	}
}
