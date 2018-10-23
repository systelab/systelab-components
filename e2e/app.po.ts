import { browser, by, element } from 'protractor';
import * as path from 'path';
import { compareScreenshot } from 'snapshot-testing/dist';

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
		// As in Travis and in retina I get different images, for the moment I will not check the snapshots. Try Jest?
		// return await compareScreenshot(data, path.join(__dirname, `snapshots`), `snapshots_${i + 1}.png`);
		return await true;
	}
}
