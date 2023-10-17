import { Component } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { I18nService } from 'systelab-translate';
import { NumpadDecimalNumericDirective } from './numpad-decimal-numeric.directive';
import { UnitTestHelper } from '../helper/unit.test-helper';


@Component({
	template: `
      <input name="number" id="number" type="text" systelabNumPadDecimalNumericDirective />
  `
})
class TestComponent {
	public value: string;
}

export class ESMockI18nService {
	public getLocale(): string {
		return 'es-ES';
	}
}

export class ITMockI18nService {
	public getLocale(): string {
		return 'it-IT';
	}
}

export class PTMockI18nService {
	public getLocale(): string {
		return 'pt-PT';
	}
}


const nonEnglishNumPadScenarios = [
	{description: 'Use NumPadDecimal', code: 'NumpadDecimal', key: '.', expected: ','},
	{description: 'Use NumPadDecimal but not numLock', code: 'NumpadDecimal', key: 'Delete', expected: ''},
	{description: 'Use Period not processed', code: 'Period', key: '.', expected: ''},
	{description: 'Use Comma not processed', code: 'Comma', key: ',', expected: ''},
	{description: 'Use Number not processed', code: 'Digit8', key: '8', expected: ''},
];

function setup() {
	const fixture = TestBed.createComponent(TestComponent);
	fixture.detectChanges();
	return {fixture};
}

describe('Verify numPadDecimalNumericDirective Spanish', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [NumpadDecimalNumericDirective, TestComponent],
			providers: [{provide: I18nService, useClass: ESMockI18nService}]
		}).compileComponents();
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	nonEnglishNumPadScenarios.forEach((parameter) => {
		it(parameter.description, waitForAsync ( () => {
			const {fixture} = setup();
			UnitTestHelper.dispatchEventKeyAndVerifyExpectedText(fixture, '#number', 'keyup', parameter);
		}));
	});
});

describe('Verify numPadDecimalNumericDirective Italian', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [NumpadDecimalNumericDirective, TestComponent],
			providers: [{provide: I18nService, useClass: ITMockI18nService}]
		}).compileComponents();
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	nonEnglishNumPadScenarios.forEach((parameter) => {
		it(parameter.description, waitForAsync(() => {
			const {fixture} = setup();
			UnitTestHelper.dispatchEventKeyAndVerifyExpectedText(fixture, '#number', 'keyup', parameter);
		}));
	});
});

describe('Verify numPadDecimalNumericDirective Portuguese', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [NumpadDecimalNumericDirective, TestComponent],
			providers: [{provide: I18nService, useClass: PTMockI18nService}]
		}).compileComponents();
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	nonEnglishNumPadScenarios.forEach((parameter) => {
		it(parameter.description, waitForAsync(() => {
			const {fixture} = setup();
			UnitTestHelper.dispatchEventKeyAndVerifyExpectedText(fixture, '#number', 'keyup', parameter);
		}));
	});
});
