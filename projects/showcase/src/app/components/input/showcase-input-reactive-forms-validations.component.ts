import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { emailValidator, phoneValidator, urlValidator } from 'systelab-preferences';

@Component({
  selector: 'showcase-input-reactive-forms-validations',
  templateUrl: './showcase-input-reactive-forms-validations.component.html'
})
export class ShowcaseInputReactiveFormsValidationsComponent implements OnInit {

  inputValidationForm = this.formBuilder.group({
    email :['', emailValidator],
    phone :['', phoneValidator],
    url :['', urlValidator],

  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get email() {
    return this.inputValidationForm.get('email');
  }
  get phone() {
    return this.inputValidationForm.get('phone');
  }  
  get url() {
    return this.inputValidationForm.get('url');
  }    

  onFormSubmit(): void{
    if (this.inputValidationForm.invalid) {
      return;
    }
    this.inputValidationForm.reset();
  }
}
