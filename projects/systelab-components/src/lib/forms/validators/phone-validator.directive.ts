import {UntypedFormControl, NG_VALIDATORS,ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

export const phoneValidator = (control: UntypedFormControl): ValidationErrors | null => {
  const phoneRegex: RegExp =/^(([+][(]?[0-9]{1,3}[)]?)|([(]?([0]{2})?[0-9]{1,3}[)]?)|\s*)\s*[)]?[-\s\.]?[(]?[0-9]{0,4}[)]?([-\s\.]?[0-9]{2,3})([-\s\.]?[0-9]{2,3})([-\s\.]?[0-9]{2,3})$/;
  
  return  phoneRegex.test(control.value) ? null : {
    phone: control.value
  };
};

@Directive({
  selector: '[systelab-phoneValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true
  }]
})
export class PhoneValidatorDirective implements Validator {
  validate(control: UntypedFormControl): ValidationErrors | null {
      return phoneValidator(control);
  }
}



