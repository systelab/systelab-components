import {FormControl, NG_VALIDATORS,ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

export const urlValidator = (control: FormControl): ValidationErrors | null => {
  const urlPattern: string = '^((https|http|ftp|rtsp|mms)?://)'
    + '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp user@
    + '(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP URL- 199.194.52.184'
    + '|'
    + '([0-9a-z_!~*\'()-]+\.)*' // - www.
    + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.'
    + '[a-z]{2,6})' // first level domain- .com or .museum
    + '(:[0-9]{1,4})?' //- :80
    + '((/?)|' // a slash isn't required if there is no file name
    + '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';

    const regExp = new RegExp(urlPattern);

    return regExp.test(control.value) ? null : {
      url: control.value
  };
};

@Directive({
  selector: '[urlValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: UrlValidatorDirective,
      multi: true
  }]
})
export class UrlValidatorDirective implements Validator {

  validate(control: FormControl): ValidationErrors | null {
      return urlValidator(control);
  }
}



