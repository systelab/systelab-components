import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'showcase-checkbox',
    templateUrl: 'showcase-checkbox.component.html',
    standalone: false
})
export class ShowcaseCheckboxComponent {

	public check1 = false;
	public check2 = false;
	public check3 = true;
	public myForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.myForm = this.fb.group({
			mySwitch: [{ value: true, disabled: false }],
			mySwitch2: [{ value: false, disabled: true }],
		});
	}
}
