import { Injectable } from '@angular/core';
import { I18nService } from 'systelab-translate';
import { TranslationHelper } from './translation-helper';



@Injectable({
	providedIn: 'root'
})
export class NumberHelper {

	constructor(private i18nService: I18nService,
				private translationHelper: TranslationHelper) {
	}


	public getStringFromNumber(numberToString: number): string {
		if (numberToString || numberToString === 0) {
			return numberToString.toLocaleString(this.translationHelper.getLanguageFromLocale(this.i18nService.getLocale()));
		}
		return '';
	}


}
