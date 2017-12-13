import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UpperFlexDialog, UpperFlexDialogParameters } from './showcase/upper-flex/upper-flex-dialog.component';
import { TwoColumnsDialog, TwoColumnsDialogParameters } from './showcase/two-columns/two-columns-dialog.component';
import { ProgressbarDialog, ProgressbarDialogParameters } from './showcase/progressbar-dialog/progressbar-dialog.component';
import { LowerFlexDialog, LowerFlexDialogParameters } from './showcase/lower-flex/lower-flex-dialog.component';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { FullFlexDialog, FullFlexDialogParameters } from './showcase/full-flex/full-flex-dialog.component';
import { I18nService } from 'systelab-translate/lib/i18n.service';

import { SplitShowcaseDialog, SplitShowcaseDialogParameters } from './showcase/split/split-showcase-dialog.component';
import { TouchSpinValues } from './systelab-components/spinner/touch.spin-values';
import { TwoListItem } from './systelab-components/twolist/two-list.component';
import { MessagePopupService } from './systelab-components/modal/message-popup/message-popup.service';
import { DialogService } from './systelab-components/modal/dialog/dialog.service';
import { PieElement } from './systelab-components/piechart/pie.component';
import { CalendarDialog, CalendarDialogParameters } from './systelab-components/calendar/calendar-dialog.component';
import { BootstrapDialog } from './showcase/bootstrap-dialog/bootstrap-dialog.component';

@Component({
	selector:      'app-root',
	templateUrl:   './showcase.component.html',
	styleUrls:     ['showcase.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent implements OnInit {

	public dateValue = '02/01/2015';

	public check1 = false;
	public check2 = false;
	public check3 = true;

	public _disableRefreshButton = false;
	private firstViewportChanged = true;

	public colorId: any;
	public colorValue: any;

	@Input()
	get disableRefreshButton() {
		return this._disableRefreshButton;
	}

	set disableRefreshButton(pDisableRefreshButton: boolean) {
		this._disableRefreshButton = pDisableRefreshButton;
		this.disableRefreshButtonChange.emit(pDisableRefreshButton);
	}

	@Output() public disableRefreshButtonChange = new EventEmitter();

	public myDate = new Date();

	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;
	public touchSpinValues3: TouchSpinValues;

	public availableColumns: Array<TwoListItem> = [];
	public visibleColumns: Array<TwoListItem> = [];

	public comboOptionList: Array<Object> = [];

	public sliderValue = 100;

	public currentTab = 1;

	public data: PieElement[] = [];

	constructor(protected preferencesService: PreferencesService, protected languageService: I18nService, protected messagePopupService: MessagePopupService, protected dialogService: DialogService) {

		languageService.use('en_US')
			.subscribe(() => {
				console.log(languageService.getCurrentLanguage());
			});

		this.touchSpinValues1 = new TouchSpinValues(1, 1, 10);
		this.touchSpinValues2 = new TouchSpinValues(5, 1, 20, 2);
		this.touchSpinValues3 = new TouchSpinValues(0, -10, 10, 1);

		this.availableColumns = preferencesService.get('showcase.twolist.availablecolumns');
		this.visibleColumns = preferencesService.get('showcase.twolist.visiblecolumns');

		if (!this.availableColumns || this.availableColumns.length === 0) {
			this.availableColumns = this.getDefaultShowcaseColumns();
		}
		if (!this.visibleColumns || this.visibleColumns.length === 0) {
			this.visibleColumns = [];
		}

		this.comboOptionList = [
			{description: 'New York', id: 1},
			{description: 'Rome', id: 2},
			{description: 'London', id: 3},
			{description: 'Barcelona', id: 4},
			{description: 'París', id: 5},
			{description: 'Berlín', id: 6},
			{description: 'Oslo', id: 7},
			{description: 'Atenas', id: 8},
			{description: 'Lisboa', id: 9},
			{description: 'Amsterdam', id: 10},
			{description: 'St Petersburgo', id: 11}
		];



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
				console.log('Promise returned to showcase', v);
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
		this.messagePopupService.showQuestionPopup('Test', 'Estás seguro?')
			.subscribe((v) => {
				console.log('closing');
			});
	}

	public showQuestionYN() {

	}

	public closeDialog() {

	}

	public subFlex() {
		const lowerFlexDialogParameters: LowerFlexDialogParameters = LowerFlexDialog.getParameters();

		lowerFlexDialogParameters.width = 960;
		lowerFlexDialogParameters.height = 600;
		lowerFlexDialogParameters.index = 4;

		this.dialogService.showDialog(LowerFlexDialog, lowerFlexDialogParameters);
	}

	public splitShowcase() {
		const parameters: SplitShowcaseDialogParameters = SplitShowcaseDialog.getParameters();
		this.dialogService.showDialog(SplitShowcaseDialog, parameters);
	}

	public calendarShowcase() {
		const parametersC: CalendarDialogParameters = CalendarDialog.getParameters();
		this.dialogService.showDialog(CalendarDialog, parametersC);
	}


	public upperFlex() {
		const upperFlexDialogParameters: UpperFlexDialogParameters = UpperFlexDialog.getParameters();

		upperFlexDialogParameters.width = 960;
		upperFlexDialogParameters.height = 600;
		upperFlexDialogParameters.index = 4;

		this.dialogService.showDialog(UpperFlexDialog, upperFlexDialogParameters);
	}

	public fullFlex() {
		const fullFlexDialogParameters: FullFlexDialogParameters = FullFlexDialog.getParameters();

		fullFlexDialogParameters.index = 4;
		fullFlexDialogParameters.dialogClass = 'w-66 h-66';

		this.dialogService.showDialog(FullFlexDialog, fullFlexDialogParameters);
	}

	public progressBar() {
		
		const progressbarDialogParameters: ProgressbarDialogParameters = ProgressbarDialog.getParameters();

		progressbarDialogParameters.dialogClass = 'w-33 h-25';

		this.dialogService.showDialog(ProgressbarDialog, progressbarDialogParameters);
	}

	public inline() {

	}

	public twoColumns() {
		const twoColumnsDialogParameters: TwoColumnsDialogParameters = TwoColumnsDialog.getParameters();

		twoColumnsDialogParameters.width = 960;
		twoColumnsDialogParameters.height = 600;
		twoColumnsDialogParameters.index = 4;

		this.dialogService.showDialog(TwoColumnsDialog, twoColumnsDialogParameters);
	}

	public bootstrap() {
		this.dialogService.showDialog(BootstrapDialog, BootstrapDialog.getParameters());
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

	public doViewportChanged() {
		if (!this.firstViewportChanged) {
			this.disableRefreshButton = false;
		} else {
			this.firstViewportChanged = false;
		}
	}

	public comboChangeEvent(event: any): void {
		console.log('comboValue ', event);
		console.log(this.colorId);
		console.log(this.colorValue);

	}
}
