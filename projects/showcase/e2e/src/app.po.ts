import {BasePage} from "systelab-components-wdio-test";

export class ShowcasePage extends BasePage {

	public async navigateTo() {
		return await browser.url('/');
	}

	public getNavItem(i: number) {
		return this.byId(`nav-${i}`);
	}

	public async checkNavigationItem(i: number) {
		await this.getNavItem(i).click();
		return true;
	}
}
