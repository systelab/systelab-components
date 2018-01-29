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

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService) {

		i18nService.use('en-US')
			.subscribe(() => {
				console.log(i18nService.getCurrentLanguage());
			});

	}

	public selectTab(tabNum: number) {
		this.currentTab = tabNum;
	}

	public closeDialog() {
	}

}
