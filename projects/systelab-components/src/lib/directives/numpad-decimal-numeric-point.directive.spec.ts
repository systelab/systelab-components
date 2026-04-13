import { Component, provideZoneChangeDetection } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { I18nService } from 'systelab-translate';
import { NumpadDecimalNumericDirective } from './numpad-decimal-numeric.directive';
import { UnitTestHelper } from '../helper/unit.test-helper';


@Component({
    template: `
      <input name="number" id="number" type="text"  systelabNumPadDecimalNumericDirective />
  `,
    standalone: false
})

class TestComponent {
	public value: string;
}

export class USMockI18nService {
	public getLocale(): string {
		return 'en-US';
	}
}

const englishNumPadScenarios = [
	{description: 'Use NumPadDecimal', code: 'NumpadDecimal', key: '.', expected: '.'},
	{description: 'Use NumPadDecimal but not numLock', code: 'NumpadDecimal', key: 'Delete', expected: ''},
	{description: 'Use Period not processed', code: 'Period', key: '.', expected: ''},
	{description: 'Use Comma not processed', code: 'Comma', key: ',', expected: ''},
	{description: 'Use Number not processed', code: 'Digit8', key: '8', expected: ''},
];

const setup = () => {
	const fixture = TestBed.createComponent(TestComponent);
	fixture.detectChanges();
	return {fixture};
};

describe('Verify numPadDecimalNumericDirective english', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [
				NumpadDecimalNumericDirective,
				TestComponent,
			],
			providers: [
				{provide: I18nService, useClass: USMockI18nService},
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	englishNumPadScenarios.forEach((parameter) => {
		it(parameter.description, waitForAsync( () => {
			const {fixture} = setup();
			UnitTestHelper.dispatchEventKeyAndVerifyExpectedText(fixture, '#number', 'keyup', parameter);
		}));
	});
});
