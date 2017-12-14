import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { TwoListItem } from '../systelab-components/twolist/two-list.component';
import { MessagePopupService } from '../systelab-components/modal/message-popup/message-popup.service';
import { DialogService } from '../systelab-components/modal/dialog/dialog.service';
import { PieElement } from '../systelab-components/piechart/pie.component';

@Component({
	selector:      'app-root',
	templateUrl:   'showcase.component.html',
	styleUrls:     ['showcase.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent implements OnInit {

	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];

	public currentTab = 1;

	public data: PieElement[] = [];

	constructor(protected preferencesService: PreferencesService, protected languageService: I18nService, protected messagePopupService: MessagePopupService, protected dialogService: DialogService) {

		languageService.use('en_US')
			.subscribe(() => {
				console.log(languageService.getCurrentLanguage());
			});

		this.availableColumns = preferencesService.get('showcase.twolist.availablecolumns');
		this.visibleColumns = preferencesService.get('showcase.twolist.visiblecolumns');

		if (!this.availableColumns || this.availableColumns.length === 0) {
			this.availableColumns = this.getDefaultShowcaseColumns();
		}
		if (!this.visibleColumns || this.visibleColumns.length === 0) {
			this.visibleColumns = [];
		}
	}

	public doSelect(action: string) {
		console.log(action);
	}

	public ngOnInit() {
		this.data.push(new PieElement('id1', 150, '#FFDAB9', 'ACTION1'));
		this.data.push(new PieElement('id2', 150, '#E6E6FA', 'ACTION2'));
		this.data.push(new PieElement('id3', 300, '#E0FFFF', 'ACTION3'));

	}

	public selectTab(tabNum: number) {
		this.currentTab = tabNum;
	}

	public showError() {
		this.messagePopupService.showErrorPopup('Test', 'Error message popup example', null, 800, 600)
			.subscribe((v) => {
				console.log('Observable returned to showcase', v);
			});
	}

	public showWarning() {
		this.messagePopupService.showWarningPopup('Test', 'Warning message popup example', 'w-33 h-33');

	}

	public showInfo() {
		this.messagePopupService.showInformationPopup('Test', 'Info message popup example');

	}

	public showQuestion() {
		// window.alert('Hall!!!!!');
		this.messagePopupService.showQuestionPopup('Test', 'Are you sure?')
			.subscribe((v) => {
				console.log('closing');
			});
	}

	public showQuestionYN() {

	}

	public closeDialog() {

	}

	public inline() {

	}

	public getDefaultShowcaseColumns(): Array<TwoListItem> {
		const defaultColumns = [
			new TwoListItem('Laboratorios', false, true),
			new TwoListItem('Muestra', false, true),
			new TwoListItem('Contenedores', false, true),
			new TwoListItem('Diágnostico', false, true),
			new TwoListItem('Número de petición', false, true),
			new TwoListItem('Urgente', false, true),
			new TwoListItem('Fecha de petición', false, true),
			new TwoListItem('Fecha de nacimiento', false, true),
			new TwoListItem('Nombre de paciente', false, true),
			new TwoListItem('Centro de Extracción', false, true),
			new TwoListItem('Género', false, true),
			new TwoListItem('Edad', false, true),
			new TwoListItem('Teléfono', false, true),
			new TwoListItem('Tipo de paciente', false, true),
			new TwoListItem('Centro', false, true),
			new TwoListItem('Servicio', false, true),
			new TwoListItem('Doctor', false, true)];
		return defaultColumns;
	}

	public saveTwoListPreferences() {

		this.preferencesService.remove('showcase.twolist.availablecolumns');
		this.preferencesService.remove('showcase.twolist.visiblecolumns');

		this.preferencesService.put('showcase.twolist.availablecolumns', this.availableColumns);
		this.preferencesService.put('showcase.twolist.visiblecolumns', this.visibleColumns);

	}

}
