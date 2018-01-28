import { browser, by, element, ElementFinder } from 'protractor';

export class ShowcasePage {

	public navigateTo() {
		return browser.get('/');
	}

	public getTitle() {
		return browser.getTitle();
	}
}
