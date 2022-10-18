import {UntypedFormControl, NG_VALIDATORS,ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

export const emailValidator = (control: UntypedFormControl): ValidationErrors | null => {
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  return regExp.test(control.value) ? null : {
    email: control.value
  };
};

@Directive({
  selector: '[systelab-emailValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(control: UntypedFormControl): ValidationErrors | null {
      return emailValidator(control);
  }
}



