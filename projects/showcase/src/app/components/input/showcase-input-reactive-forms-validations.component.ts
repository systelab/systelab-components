import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder } from '@angular/forms';
import { emailValidator, phoneValidator, urlValidator } from 'systelab-components';

@Component({
  selector: 'showcase-input-reactive-forms-validations',
  templateUrl: './showcase-input-reactive-forms-validations.component.html'
})
export class ShowcaseInputReactiveFormsValidationsComponent implements OnInit {

  inputValidationForm = this.formBuilder.group({
    email :['', emailValidator],
    phone :['', phoneValidator],
    url :['', urlValidator],

  });
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.inputValidationForm.get('email');
  }
  get phone(): AbstractControl {
    return this.inputValidationForm.get('phone');
  }
  get url(): AbstractControl {
    return this.inputValidationForm.get('url');
  }

  onFormSubmit(): void{
    if (this.inputValidationForm.invalid) {
      return;
    }
    this.inputValidationForm.reset();
  }
}
