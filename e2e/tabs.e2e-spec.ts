import { ShowcasePage } from './tabs.po';

describe('systelab-components: systelab-tabs', () => {
	let page: ShowcasePage;

	beforeEach(() => {
		page = new ShowcasePage();
	});
	it('should the content of a tab clicked be visible', () => {
		page.getTab(3).click();
		expect(page.getContentForTab(3).isDisplayed()).toBe(true);
	});

	it('should the content of a tab not clicked not visible', () => {
		page.getTab(0).click();
		page.getTab(3).click();
		expect(page.getContentForTab(0).isDisplayed()).toBe(false);
		expect(page.getContentForTab(1).isDisplayed()).toBe(false);
		expect(page.getContentForTab(2).isDisplayed()).toBe(false);
	});
});
