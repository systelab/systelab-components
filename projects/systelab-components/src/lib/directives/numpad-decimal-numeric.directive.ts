import { Directive, ElementRef, HostListener } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { NumberHelper } from '../helper/number-helper';


@Directive({
	selector: '[systelabNumPadDecimalNumericDirective]'
})

export class NumpadDecimalNumericDirective {

	private decimalSeparator = ',';

	constructor(private el: ElementRef,
				protected i18nService: I18nService,
				private numberHelper: NumberHelper) { }

	@HostListener('keyup', ['$event']) keyup(event: KeyboardEvent): void {
		// get position
		const pos = this.el.nativeElement.selectionStart;

		let val = this.el.nativeElement.value;

		if (event.code === 'NumpadDecimal' && event.key === '.') {
			const myNumber = 2.3;
			const stringNumber = this.numberHelper.getStringFromNumber(myNumber);
			this.decimalSeparator = stringNumber.substring(1, 2);
			val = val.substring(0, pos - 1) + this.decimalSeparator + val.substring( pos) ;
			this.el.nativeElement.value = val;

			setTimeout(() => {
				this.el.nativeElement.selectionStart = pos;
				this.el.nativeElement.selectionEnd = pos;
			});
		}
	}
}
