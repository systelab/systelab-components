import { Component, ViewEncapsulation } from '@angular/core';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:      'app-root',
	templateUrl:   'showcase.component.html',
	styleUrls:     ['showcase.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent {

	public currentTab = 1;

	constructor(protected preferencesService: PreferencesService, protected languageService: I18nService) {

		languageService.use('en_US')
			.subscribe(() => {
				console.log(languageService.getCurrentLanguage());
			});

	}

	public selectTab(tabNum: number) {
		this.currentTab = tabNum;
	}

	public closeDialog() {
	}

}
