import {TestBed} from '@angular/core/testing';

import {I18nService, SystelabTranslateModule} from 'systelab-translate';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { NumberHelper } from './number-helper';


const Number_to_String_Scenarios_For_US = [
	{description: 'Integer number', NumberValue: 2, expected: '2'},
	{description: 'Decimal number', NumberValue: 2.81 , expected: '2.81'},
	{description: 'Big decimal number', NumberValue: 2000.81 , expected: '2,000.81'},
	{description: 'Number 0', NumberValue: 0 , expected: '0'},
	{description: 'Undefined number', NumberValue: undefined , expected: ''},
];

export class USMockI18nService {
	public getLocale(): string {
		return 'en-US';
	}
}


describe('Number Helper from String English Test', () => {
	let service: NumberHelper;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule,
				RouterTestingModule
			],
			providers: [NumberHelper,
				{provide: I18nService, useClass: USMockI18nService},
				//AppLoadService,
				//AuthenticationService,
				//{provide: JwtHelperService, useValue: JWT_OPTIONS}
			]
		});
		service = TestBed.inject(NumberHelper);

	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});


	Number_to_String_Scenarios_For_US.forEach((parameter) => {
		it(parameter.description, () => {
			const result = service.getStringFromNumber(parameter.NumberValue);
			expect (result).toBe(parameter.expected);
		});
	});

});

