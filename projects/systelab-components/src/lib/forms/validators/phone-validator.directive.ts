import {FormControl, NG_VALIDATORS,ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

export const phoneValidator = (control: FormControl): ValidationErrors | null => {
  const phonePattern: string = '(([+][(]?[0-9]{1,3}[)]?)|([(]?([0]{2})?[0-9]{1,3}[)]?)|\s*)\s*[)]?[-\s\.]?[(]?[0-9]{0,4}[)]' + 
    '?([-\s\.]?[0-9]{2,3})([-\s\.]?[0-9]{2,3})([-\s\.]?[0-9]{2,3})';
  
  const regExp = new RegExp(phonePattern);
    
  return regExp.test(control.value) ? null : {
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
  validate(control: FormControl): ValidationErrors | null {
      return phoneValidator(control);
  }
}



