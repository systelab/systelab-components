import { Component, ViewEncapsulation } from '@angular/core';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { NavbarItem } from '../systelab-components/navbar/navbar.component';

@Component({
	selector:      'app-root',
	templateUrl:   'showcase.component.html',
	styleUrls:     ['showcase.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent {

	public currentTab = 1;
	public items1: NavbarItem[] = [];

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService) {
		this.items1.push(new NavbarItem(1, 'Option 1', '', false, true, true, () => this.action1()));
		this.items1.push(new NavbarItem(2, 'Option 2', '', false, true, true, () => this.action2()));
		this.items1.push(new NavbarItem(3, 'Option 3', '', false, false, false, () => this.action3()));



		i18nService.use('en-US')
			.subscribe(() => {
				console.log(i18nService.getCurrentLanguage());
			});
	}

	public selectTab(tabNum: number) {
		this.currentTab = tabNum;
	}

	public action1() {
	}

	public action2() {
	}

	public action3() {
	}
}



