import { TestBed } from '@angular/core/testing';
import { I18nService } from 'systelab-translate';
import { TranslationHelper } from './translation-helper';

export class ESMockI18nService {

	public getLocale(): string {
		return 'es-ES';
	}
}


describe('Translation Helper Test', () => {
	let service: TranslationHelper;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TranslationHelper,
				{provide: I18nService, useClass: ESMockI18nService}]
		});
		service = TestBed.inject(TranslationHelper);
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('Given a locale get the language' , () => {
		const testLocale = 'en-us';
		expect(service.getLanguageFromLocale(testLocale)).toBe('en');
	});

});
