import { ShowcasePage } from './app.po';

describe('systelab-components: Showcase Snapshot Testing', () => {
	let page: ShowcasePage;

	beforeEach(async() => {
		page = new ShowcasePage();
	});

	it('Check the Form Components Tab', async() => {
		await page.navigateTo();
		const result = await page.checkNavigationItem(0);
		expect(result).toBeTruthy();
	});

	it('Check the Modals Tab', async() => {
		const result = await page.checkNavigationItem(1);
		expect(result).toBeTruthy();
	});

	it('Check the Navigation Tab', async() => {
		const result = await page.checkNavigationItem(2);
		expect(result).toBeTruthy();
	});

	it('Check the Tables Tab', async() => {
		const result = await page.checkNavigationItem(3);
		expect(result).toBeTruthy();
	});

	it('Check the Utils Tab', async() => {
		const result = await page.checkNavigationItem(4);
		expect(result).toBeTruthy();
	});

	it('Check the Icons Tab', async() => {
		const result = await page.checkNavigationItem(5);
		expect(result).toBeTruthy();
	});

	it('Check the Styles Tab', async() => {
		const result = await page.checkNavigationItem(6);
		expect(result).toBeTruthy();
	});
});
