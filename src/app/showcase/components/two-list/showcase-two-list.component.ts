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
			new TwoListItem('Laboratorios', 'lab', false, true),
			new TwoListItem('Muestra', 'sample', false, true),
			new TwoListItem('Contenedores', 'containers', false, true),
			new TwoListItem('Diágnostico', 'diagnostic', false, true),
			new TwoListItem('Número de petición', 'requestLabel', false, true),
			new TwoListItem('Urgente', 'isUrgent', false, true),
			new TwoListItem('Fecha de petición', 'requestDate', false, true),
			new TwoListItem('Fecha de nacimiento', 'dOB', false, true),
			new TwoListItem('Nombre de paciente',  'patientName',false, true),
			new TwoListItem('Centro de Extracción', 'collectionCenter', false, true),
			new TwoListItem('Género', 'genre',false, true),
			new TwoListItem('Edad', 'age', false, true),
			new TwoListItem('Teléfono', 'phone', false, true),
			new TwoListItem('Tipo de paciente', 'patientType', false, true),
			new TwoListItem('Centro', 'center', false, true),
			new TwoListItem('Servicio', 'service', false, true),
			new TwoListItem('Doctor', 'doctor', false, true)];
		return defaultColumns;
	}

	public savePreferences() {

		this.preferencesService.remove('showcase.twolist.availablecolumns');
		this.preferencesService.remove('showcase.twolist.visiblecolumns');

		this.preferencesService.put('showcase.twolist.availablecolumns', this.availableColumns);
		this.preferencesService.put('showcase.twolist.visiblecolumns', this.visibleColumns);

	}
}
