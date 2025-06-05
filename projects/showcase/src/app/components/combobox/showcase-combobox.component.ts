import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'showcase-combobox',
	templateUrl: 'showcase-combobox.component.html'
})
export class ShowcaseComboboxComponent {

	public colorId: any;
	public colorValue: any;
	public listSelectedValues = true;
	public multiple = true;

	public comboOptionList: Array<Object> = [];

	public selectedComboOptionList: Array<Object> = [];
	public myForm: FormGroup;

	constructor(private fb: FormBuilder) {

		this.comboOptionList = [
			{description: 'New York', id: 1},
			{description: 'Rome', id: 2},
			{description: 'London', id: 3},
			{description: 'Barcelona', id: 4},
			{description: 'París', id: 5},
			{description: 'Berlín', id: 6},
			{description: 'Oslo', id: 7},
			{description: 'Atenas', id: 8},
			{description: 'Lisboa', id: 9},
			{description: 'Amsterdam', id: 10},
			{description: 'St Petersburgo', id: 11}
		];

		this.selectedComboOptionList = [
			{description: 'New York', id: 1},
			{description: 'Rome', id: 2},
			{description: 'St Petersburgo', id: 11}
		];

		this.myForm = this.fb.group({
			mySelectField: [{id: null, description: ''}]
		});

		this.myForm.patchValue({
			mySelectField: { id: 4 }
		});
	}

	submit() {
		console.log(this.myForm.value);
	}

	public comboChangeEvent(event: any): void {
		console.log(this.colorId);
		console.log(this.colorValue);
	}
}
