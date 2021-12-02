import { FormControl } from '@angular/forms';
import { phoneValidator } from './phone-validator.directive';

describe('Phone validation', () => {
	beforeEach(() => {
	});

	[	'900 703 030',
		'111111111111111111111111',
		'938550500',
		'886787654',
		'+34 888888888',
	].forEach((phone) => {
		it('Check that ' + phone + ' is valid', () => {
			expect(phoneValidator(new FormControl(phone))).toEqual(null);
		});
	});

	[	'93.885.05.00',
		'(0034) 886708865',
		'textphone',
		'888sometext888',
		'a12332e323',
	].forEach((phone) => {
		it('Check that ' + phone + ' is valid', () => {
			expect(phoneValidator(new FormControl(phone))).toEqual({
				phone
			  });
		});
	});
});
