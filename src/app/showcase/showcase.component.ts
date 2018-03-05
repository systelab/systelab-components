import { Component, ViewEncapsulation } from '@angular/core';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { NavbarItem } from '../systelab-components/navbar/navbar.component';

@Component({
	selector: 'app-root',
	templateUrl: 'showcase.component.html',
	styleUrls: ['showcase.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent {

	public currentTab = 1;
	public itemsNav: NavbarItem[] = [];
	public currentNav = 0;
	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService) {
		this.itemsNav.push(new NavbarItem(0, 'Form Components', '', false, true, true, () => this.selectNav(0)));
		this.itemsNav.push(new NavbarItem(1, 'Modals', '', false, false, true, () => this.selectNav(1)));
		this.itemsNav.push(new NavbarItem(2, 'Charts', '', false, false, true, () => this.selectNav(2)));
		this.itemsNav.push(new NavbarItem(3, 'Navegation', '', false, false, true, () => this.selectNav(3)));
		this.itemsNav.push(new NavbarItem(4, 'Tables', '', false, false, true, () => this.selectNav(4)));
		this.itemsNav.push(new NavbarItem(5, 'Utils', '', false, false, true, () => this.selectNav(5)));
		this.itemsNav.push(new NavbarItem(6, 'Icons', '', false, false, true, () => this.selectNav(6)));
		this.itemsNav.push(new NavbarItem(7, 'Styles', '', false, false, true, () => this.selectNav(7)));

		i18nService.use('en-US')
			.subscribe(() => {
				console.log(i18nService.getCurrentLanguage());
			});
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
