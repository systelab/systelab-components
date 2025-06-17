import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Info {
   constructor(public email: string, public phone: string, public url: string) { }
}

@Component({
    selector: 'showcase-input-template-driven-form-validations',
    templateUrl: 'showcase-input-template-driven-form-validations.component.html',
    standalone: false
})
export class ShowcaseInputTemplateDrivenFormValidationsComponent {

   public info = new Info('','','');
   public submitted = false;

	constructor() {
	}

	onFormSubmit(form: NgForm): void{
        this.submitted = false;

        if (form.invalid) {
           return;
        }
        this.submitted = true;
        form.resetForm();
     }
}

