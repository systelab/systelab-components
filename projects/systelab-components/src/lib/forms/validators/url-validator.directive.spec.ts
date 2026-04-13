import { UntypedFormControl } from '@angular/forms';
import { urlValidator } from './url-validator.directive';

describe('Url validation', () => {
	[	'plainUrl',
		'https://myDomain.com',
		'http://myDomain.cat',
		'https://www.myDomain.com',
		'http://www.myDomain.cat',
		'https://www.myDomain.com:80',
		'http://www.myDomain.cat:80',
		'myDomain.com',
		'www.myDomain.com',
		'ftp://foo:host.com/',
		'ftp://host.com/',
		'ftp://foo:host.com:21',
	].forEach((url) => {
		it('Check that ' + url + ' is valid', () => {
			expect(urlValidator(new UntypedFormControl(url))).toEqual(null);
		});
	});

	[	'htt://myDomain.com',
		'http:///myDomain.com',
		'https:///myDomain.com',
		'http:/www.myDomain.com',
		'https:/www.myDomain.cat',
		'http:/www.myDomain.com:81',
		'https:/www.myDomain.cat:81',
		'http://.com',
		'https://.com',
		'http://www.urlWithLargeDomainExtension@domain.LargeExtension',
		'https://www.urlWithLargeDomainExtension@domain.LargeExtension',
		'.com',
		'myDomain.',
		'urlWithLargeDomainExtension@domain.LargeExtension',
		'ftp:/foo:host.com',
	].forEach((url) => {
		it('Check that ' + url + ' is not valid', () => {
			expect(urlValidator(new UntypedFormControl(url))).toEqual({
				url
			  });
		});
	});
});
