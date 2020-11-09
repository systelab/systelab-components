import { Component } from '@angular/core';
import { PreferencesService, StorageType } from 'systelab-preferences';
import { I18nService } from 'systelab-translate';
import { NavbarItem } from 'systelab-components';

@Component({
	selector:    'app-root',
	templateUrl: 'showcase.component.html'
})
export class ShowcaseComponent {

	public currentTab = 1;
	public itemsNav: NavbarItem[] = [];
	public currentNav = 0;

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService) {
		this.itemsNav.push(new NavbarItem(0, 'Form Components', '', false, true, true, () => this.selectNav(0)));
		this.itemsNav.push(new NavbarItem(1, 'Modals', '', false, false, true, () => this.selectNav(1)));
		this.itemsNav.push(new NavbarItem(2, 'Navigation', '', false, false, true, () => this.selectNav(2)));
		this.itemsNav.push(new NavbarItem(3, 'Tables', '', false, false, true, () => this.selectNav(3)));
		this.itemsNav.push(new NavbarItem(4, 'Utils', '', false, false, true, () => this.selectNav(4)));
		this.itemsNav.push(new NavbarItem(5, 'Icons', '', false, false, true, () => this.selectNav(5)));
		this.itemsNav.push(new NavbarItem(6, 'Styles', '', false, false, true, () => this.selectNav(6)));

		i18nService.use('en-US')
			.subscribe(() => {
				console.log(i18nService.getCurrentLanguage());
			});
		preferencesService.setStorage(StorageType.SESSION_STORAGE);
	}

	public selectTab(tabNum: number) {
		this.currentTab = tabNum;
	}

	public selectNav(navNum: number) {
		this.currentNav = navNum;
		this.itemsNav[navNum].isSelected = true;
		for (let i = 0; i < this.itemsNav.length; i++) {
			if (this.itemsNav[i].id !== navNum) {
				this.itemsNav[i].isSelected = false;
			}
		}
	}
}
