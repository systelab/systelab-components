import { browser, by, element } from 'protractor';

export class ShowcasePage {

	public navigateTo() {
		return browser.get('/');
	}

	public takeScreenshot() {
		return browser.takeScreenshot();
	}

	public getTitle() {
		return browser.getTitle();
	}

	public getNavItem(i: number) {
		return element(by.id('nav-' + i));
	}
}
