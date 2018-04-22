import { ShowcasePage } from './app.po';
import * as blueharvest from 'blue-harvest';
import * as path from 'path';

const GOLDEN_IMAGES = [1, 2, 3, 4, 5, 6, 7].map((i) => {
	return path.join(__dirname, `snapshots/snapshots_${i}.png`);
});


describe('systelab-components: Showcase Snapshot Testing', () => {
	let page: ShowcasePage;

	beforeEach(async() => {
		page = new ShowcasePage();
	});

	it('Check the Form Components Tab', async() => {
		await page.navigateTo();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[0]);
		expect(result).toBeTruthy();
	});

	it('Check the Modals Tab', async() => {
		await page.getNavItem(1).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[1]);
		expect(result).toBeTruthy();
	});

	it('Check the Navigation Tab', async() => {
		await page.getNavItem(2).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[2]);
		expect(result).toBeTruthy();
	});

	it('Check the Tables Tab', async() => {
		await page.getNavItem(3).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[3]);
		expect(result).toBeTruthy();
	});

	it('Check the Utils Tab', async() => {
		await page.getNavItem(4).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[4]);
		expect(result).toBeTruthy();
	});

	it('Check the Icons Tab', async() => {
		await page.getNavItem(5).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[5]);
		expect(result).toBeTruthy();
	});

	it('Check the Styles Tab', async() => {
		await page.getNavItem(6).click();
		let data =  await page.takeScreenshot();
		let result = await blueharvest.compareScreenshot(data,  GOLDEN_IMAGES[6]);
		expect(result).toBeTruthy();
	});
});
