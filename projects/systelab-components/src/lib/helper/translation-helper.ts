import { I18nService } from 'systelab-translate';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class TranslationHelper {
	constructor(public i18nService: I18nService) {
	}

	public getLanguageFromLocale(locale: string): string {
		return locale.substring(0, 2);
	}


}
