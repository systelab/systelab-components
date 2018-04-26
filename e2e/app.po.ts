import { browser, by, element } from 'protractor';
import * as blueharvest from 'blue-harvest';
import * as path from 'path';

export class ShowcasePage {

	public navigateTo() {
		return browser.get('/');
	}

	public takeScreenshot() {
		return browser.takeScreenshot();
	}

	public getNavItem(i: number) {
		return element(by.id('nav-' + i));
	}

	public async checkNavigationItem(i: number) {
		await this.getNavItem(i).click();
		const data = await this.takeScreenshot();
		return await blueharvest.compareScreenshot(data, path.join(__dirname, `snapshots/snapshots_${i + 1}.png`));
	}
}
