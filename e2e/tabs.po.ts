import { browser, by, element, ElementFinder } from 'protractor';

export class ShowcasePage {

	public navigateTo() {
		return browser.get('/');
	}

	public getContentForTab(n: number): ElementFinder {
		return element(by.css('#tab-' + n));
	}

	public getTab(n: number): ElementFinder {
		// Return the element to be clicked.
		return element.all(by.css('#tabs a')).get(n);
	}
}
