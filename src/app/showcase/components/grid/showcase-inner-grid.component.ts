import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { PreferencesService } from 'systelab-preferences/lib/preferences.service';
import { CheckboxCellRendererComponent } from '../../../systelab-components/grid/custom-cells/checkbox/checkbox-cell-renderer.component';
import { SpinnerCellEditorComponent } from '../../../systelab-components/grid/custom-cells/spinner/spinner-cell-editor.component';
import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';
import { SpinnerCellRendererComponent } from '../../../systelab-components/grid/custom-cells/spinner/spinner-cell-renderer.component';
import { InputCellEditorComponent } from '../../../systelab-components/grid/custom-cells/input/input-cell-editor.component';
import { DialogService } from '../../../systelab-components/modal';
import { DecimalInputCellEditorComponent } from '../../../systelab-components/grid/custom-cells/decimal-input/decimal-input-cell-editor.component';
import { CheckboxCellEditorComponent } from '../../../systelab-components/grid/custom-cells/checkbox/checkbox-cell-editor.component';
import { AbstractApiGrid } from '../../../systelab-components/grid/abstract-api-grid.component';
import { Observable, of } from 'rxjs';
import { GridHeaderContextMenuComponent } from '../../../systelab-components/grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuOption } from '../../../systelab-components/grid/contextmenu/grid-context-menu-option';

export class ShowcaseData {

	constructor(public eventDate: string, public value: string, public flag: string, public decimalValue: number, public inputValue: number,
	            public checkboxValue: boolean, public checkboxID: number, public spinnerValues: TouchSpinValues) {
	}
}

@Component({
	selector:    'showcase-inner-grid',
	//templateUrl: '../../../../../node_modules/systelab-components/html/abstract-grid.component.html' *This is the template path to be used in your project*
	templateUrl: '../../..//systelab-components/grid/abstract-grid.component.html'
})
export class ShowcaseInnerGridComponent extends AbstractApiGrid<ShowcaseData> implements OnInit {

	private totalItems = 10;
	private _disableRefreshButton = false;
	private firstViewportChanged = true;

	@Output() public disableRefreshButtonChange = new EventEmitter();

	@Input()
	get disableRefreshButton() {
		return this._disableRefreshButton;
	}

	set disableRefreshButton(pDisableRefreshButton: boolean) {
		this._disableRefreshButton = pDisableRefreshButton;
		this.disableRefreshButtonChange.emit(pDisableRefreshButton);
	}

	constructor(protected preferencesService: PreferencesService, protected i18nService: I18nService, protected dialogService: DialogService) {
		super(preferencesService, i18nService, dialogService);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.gridOptions.suppressCellSelection = false;
	}

	protected getColumnDefs(): Array<any> {

		// TODO Translate column names
		const columnDefs: Array<any> = [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300},
			{colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
			{
				colId:                    'flags',
				headerName:               'Flags',
				field:                    'flag',
				width:                    220,
				headerComponentFramework: GridHeaderContextMenuComponent,
				headerComponentParams:    {headerName: 'Flags', headerData: 'flags'}
			}, {
				colId:               'input',
				headerName:          'Cell with Decimal Input',
				field:               'decimalValue',
				width:               200,
				cellEditorFramework: DecimalInputCellEditorComponent,
				editable:            true,
				onCellValueChanged:  e => console.log('input', e)
			}, {
				colId:               'input',
				headerName:          'Cell with Input',
				field:               'inputValue',
				width:               200,
				cellEditorFramework: InputCellEditorComponent,
				editable:            true,
				onCellValueChanged:  e => console.log('input', e)
			}, {
				colId:                 'checkbox',
				headerName:            'Cell with Checkbox',
				field:                 'checkboxValue',
				width:                 200,
				cellRendererFramework: CheckboxCellRendererComponent,
				cellEditorFramework:   CheckboxCellEditorComponent,
				onCellValueChanged:    e => console.log('checkbox', e),
				editable:              true,
				suppressResize:         true
			}, {
				colId:                 'spinner',
				headerName:            'Cell with Spinner',
				field:                 'spinnerValues',
				width:                 200,
				editable:              true,
				cellRendererFramework: SpinnerCellRendererComponent,
				cellEditorFramework:   SpinnerCellEditorComponent,
				onCellValueChanged:    e => console.log('test', e),
				suppressResize:         true
			}];
		return columnDefs;
	}

	public getTotalItems(): number {
		return this.totalItems;
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<ShowcaseData>> {
		const values: ShowcaseData[] = []
		for (let i = 0; i < 10; i++) {
			values.push(new ShowcaseData('12/12/2017', i + '', '10x', 26, 10, false, i, new TouchSpinValues(5, 0, 100, 1)));
		}
		this.totalItems = 10;
		//  On a real scenario the data will be retrieved from a API
		//	return this.api.getData(page, itemsPerPage);
		return of(values);
	}

	public doViewportChanged() {
		if (!this.firstViewportChanged) {
			this.disableRefreshButton = false;
		} else {
			this.firstViewportChanged = false;
		}
	}

	public isInputEditable(data: ShowcaseData): boolean {
		console.log(data);
		return true;
	}

	protected getHeaderContextMenuOptions(): Array<GridContextMenuOption<string>> {
		return [
			new GridContextMenuOption('headeraction1', 'Header Action 1'),
			new GridContextMenuOption('headeraction2', 'Header Action 2'),
			new GridContextMenuOption('headeraction3', 'Header Action 3'),
			new GridContextMenuOption('headeraction4', 'Header Action 4')
		];
	}
}
