import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractGrid} from '../../../systelab-components/grid/abstract-grid.component';
import {DialogService} from '../../../systelab-components/modal/dialog/dialog.service';
import {I18nService} from 'systelab-translate/lib/i18n.service';
import {PreferencesService} from 'systelab-preferences/lib/preferences.service';
import {InputCellRendererComponent} from '../../../systelab-components/grid/custom-cells/input/input-cell-renderer.component';
import {CheckboxCellRendererComponent} from '../../../systelab-components/grid/custom-cells/checkbox/checkbox-cell-renderer.component';
import {SpinnerCellRendererComponent} from '../../../systelab-components/grid/custom-cells/spinner/spinner-cell-renderer.component';
import {TouchSpinValues} from '../../../systelab-components/spinner/touch.spin-values';

export class ShowcaseData {

	constructor(public eventDate: string, public value: string, public flag: string, public inputValue: number, public checkboxValue: boolean,
	            public checkboxID: number, public spinnerValues: TouchSpinValues) {

	}
}

@Component({
	selector: 'showcase-inner-grid',
	template: `
        <div #hidden class="height-hidden"></div>
        <ag-grid-angular id="agGrid" #agGrid
                         style="position:absolute; top:0; bottom:0; left:0; right:0; overflow: hidden;"
                         class="ag-fresh"
                         [gridOptions]="gridOptions"
                         (gridReady)="doGridReady($event)"
                         (gridSizeChanged)="doGridSizeChanged($event)"
                         (cellClicked)="doClick($event)"
                         (columnResized)="doColumnResized($event)"
                         (viewportChanged)="doViewportChanged()"
                         (modelUpdated)="onModelUpdated($event)">
        </ag-grid-angular>`
})
export class ShowcaseInnerGridComponent extends AbstractGrid<ShowcaseData> implements AfterViewInit {

	public values: ShowcaseData[] = [];

	public _disableRefreshButton = false;
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
		for (let i = 0; i < 10; i++) {
			this.values.push(new ShowcaseData('12/12/2017', i + '', '10x', 10, false, i, new TouchSpinValues(5, 0, 100, 1)));
		}
	}

	public ngAfterViewInit() {
		this.gridOptions.api.setRowData(this.values);
	}

	protected getColumnDefs(): Array<any> {

		// TODO Translate column names
		const columnDefs: Array<any> = [
			{
				colId: 'date', headerName: 'Date', field: 'eventDate', width: 300
			},
			{colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
			{colId: 'flags', headerName: 'Flags', field: 'flag', width: 220},
			{
				colId: 'input',
				headerName: 'Cell with Input',
				field: 'inputValue',
				width: 200,
				cellRendererFramework: InputCellRendererComponent
			},
			{
				colId: 'checkbox',
				headerName: 'Cell with Checkbox',
				field: 'checkboxValue',
				width: 200,
				cellRendererFramework: CheckboxCellRendererComponent,
				elementID: 'checkboxID',
				supressResize: true
			}, {
				colId: 'spinner',
				headerName: 'Cell with Spinner',
				width: 200,
				cellRendererFramework: SpinnerCellRendererComponent,
				supressResize: true
			},
			{
				colId: 'spinner disabled',
				headerName: 'Cell with Spinner Disabled',
				width: 200,
				cellRendererFramework: SpinnerCellRendererComponent,
				supressResize: true
			}];
		return columnDefs;
	}

	public doViewportChanged() {
		if (!this.firstViewportChanged) {
			this.disableRefreshButton = false;
		} else {
			this.firstViewportChanged = false;
		}
	}

	public modifyValueAction(): void {
		console.log(this.values);
	}
}
