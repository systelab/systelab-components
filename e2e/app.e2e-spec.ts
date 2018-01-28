import { ShowcasePage } from './app.po';

describe('systelab-components: showcase', () => {
	let page: ShowcasePage;

	beforeEach(() => {
		page = new ShowcasePage();
	});

	it('should display a title', () => {
		page.navigateTo();
		expect(page.getTitle()).toEqual('Systelab Components Library');
	});
});
