import { UntypedFormControl } from '@angular/forms';
import { phoneValidator } from './phone-validator.directive';

describe('Phone validation', () => {
	[	{description: 'Number with 9 digits', text: '939999999', expected: true},
		{description: 'International prefix with 00', text: '0034939999999', expected: true},
		{description: 'International prefix with 00 and spaces', text: '0034 93 999 99 99', expected: true},
		{description: 'International prefix with ()', text: '(34)939999999', expected: true},
		{description: 'International prefix with () and space after )', text: '(34) 939999999', expected: true},
		{description: 'International prefix with () and 00', text: '(0034)939999999', expected: true},
		{description: 'International prefix with () and 00 and separator after )', text: '(0034)-939999999', expected: true},
		{description: 'International prefix with +', text: '+34939999999', expected: true},
		{description: 'Number with - separator', text: '93-9999999', expected: true},
		{description: 'Number with . separator', text: '93.9999999', expected: true},
		{description: 'Number with more than one . separator', text: '93.999.99.99', expected: true},
		{description: 'Number with space separator', text: '93 9999999', expected: true},
		{description: 'Number with more than one space separator', text: '93 999 99 99', expected: true},
		{description: 'Italian short number', text: '0225221', expected: true},
		{description: 'Italian international short number', text: '+39 0225221', expected: true},
		{description: 'Italian mobile number', text: '335 784 5058', expected: true},
		{description: 'Italian international mobile number', text: '+39 335 784 5058', expected: true},
		{description: 'Spanish mobile number with spaces', text: '695 21 81 54', expected: true},
		{description: 'Spanish mobile number groups of three', text: '695 218 154', expected: true},
		{description: 'Spanish mobile number no spaces', text: '695218154', expected: true},
		{description: 'Eight digit number', text: '69521815', expected: true},
		{description: 'International with just one number and no parentesis', text: '1-800-955-9525', expected: true},
		{description: 'International with just one number and +', text: '+1 800 955 9525', expected: true},
		{description: 'International with just one number and 00', text: '001 800 955 9525', expected: true},
		{description: 'International with just one number and separators', text: '+1 858-586-9900', expected: true},
		{description: 'International with three number', text: '(351) 93 393 66 26', expected: true},
		{description: 'International with three number and +', text: '+351 93 393 66 26', expected: true},
		{description: 'International with three number and 00', text: '00351 93 393 66 26', expected: true},
	].forEach((test) => {
		it(test.description + ' "' + test.text + '" is valid', () => {
			expect(phoneValidator(new UntypedFormControl(test.text))).toBeNull();
		});
	});

	[	{description: 'International prefix with () and +', text: '(+34)939999999', expected: false},
		{description: 'Strange characters number', text: '@/()*345678', expected: false},
		{description: 'Separators for each number', text: '93 3 9 3 6 6 2 6', expected: false},
		{description: 'Group with only one number', text: '93 393 66 2 6', expected: false},
		{description: 'Alphabetical phone', text: 'textphone', expected: false},
		{description: 'Alphanumeric phone', text: '888sometext888', expected: false},
	].forEach((test) => {
		it(test.description + '"' + test.text + '" is not valid', () => {
			expect(phoneValidator(new UntypedFormControl(test.text))).not.toBeNull();
		});
	});
});
