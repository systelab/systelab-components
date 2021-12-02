import { FormControl } from '@angular/forms';
import { emailValidator } from './email-validator.directive';

describe('Email validation', () => {
	beforeEach(() => {
	});

	[	'valid@email.com',
		'valid@email.c',
		'v@email.com',
		'valid@l.com',
		'valid@email.com',
		'v@email.com',
		'firstname.lastname@example.com',
		'email@subdomain.example.com',
		'firstname+lastname@example.com',
		'1234567890@example.com',
		'email@example-one.com',
		'_______@example.com',
		'email@example.name',
		'email@example.museum',
		'email@example.co.jp',
		'firstname-lastname@example.com'
	].forEach((email) => {
		it('Check that ' + email + ' is valid', () => {
			expect(emailValidator(new FormControl(email))).toEqual(null);
		});
	});

	[	'plainaddress',
		'#@%^%#$@#$@#.com',
		'@example.com',
		'Joe Smith <email@example.com>',
		'email.example.com',
		'email@example@example.com',
		'あいうえお@example.com',
		'email@example.com (Joe Smith)',
		'email@example',
		'email@-example.com',
		'email@example..com',
	].forEach((email) => {
		it('Check that ' + email + ' is not valid', () => {
			expect(emailValidator(new FormControl(email))).toEqual({email});
			var a = true;
			jasmine.addMatchers
			expect(a).toBeFalse
		});
	});
});
