import { Component } from '@angular/core';
import { TwoListItem } from '../../../systelab-components/twolist/two-list.component';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';

@Component({
	selector:    'showcase-two-list',
	templateUrl: 'showcase-two-list.component.html'
})
export class ShowcaseTwoListComponent {

	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];

	constructor(protected preferencesService: PreferencesService) {
		this.availableColumns = preferencesService.get('showcase.twolist.availablecolumns');
		this.visibleColumns = preferencesService.get('showcase.twolist.visiblecolumns');

		if (!this.availableColumns || this.availableColumns.length === 0) {
			this.availableColumns = this.getDefaultShowcaseColumns();
		}
		if (!this.visibleColumns || this.visibleColumns.length === 0) {
			this.visibleColumns = [];
		}
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

	public savePreferences() {

		this.preferencesService.remove('showcase.twolist.availablecolumns');
		this.preferencesService.remove('showcase.twolist.visiblecolumns');

		this.preferencesService.put('showcase.twolist.availablecolumns', this.availableColumns);
		this.preferencesService.put('showcase.twolist.visiblecolumns', this.visibleColumns);

	}
}
