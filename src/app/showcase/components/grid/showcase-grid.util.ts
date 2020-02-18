import { GridHeaderContextMenuComponent } from '../../../systelab-components/grid/contextmenu/grid-header-context-menu.component';
import { DecimalInputCellEditorComponent } from '../../../systelab-components/grid/custom-cells/decimal-input/decimal-input-cell-editor.component';
import { InputCellEditorComponent } from '../../../systelab-components/grid/custom-cells/input/input-cell-editor.component';
import { CheckboxCellRendererComponent } from '../../../systelab-components/grid/custom-cells/checkbox/checkbox-cell-renderer.component';
import { CheckboxCellEditorComponent } from '../../../systelab-components/grid/custom-cells/checkbox/checkbox-cell-editor.component';
import { SpinnerCellRendererComponent } from '../../../systelab-components/grid/custom-cells/spinner/spinner-cell-renderer.component';
import { SpinnerCellEditorComponent } from '../../../systelab-components/grid/custom-cells/spinner/spinner-cell-editor.component';
import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';
import { ShowcaseData } from './showcase-grid.model';
import { IStackedBar, StackedBarCellRendererComponent } from '../../../systelab-components/grid/custom-cells/stacked-bar/stacked-bar-cell-renderer.component';

export class ShowcaseGridUtil {

	public static stackedBars: Array<Array<IStackedBar>> = [
		[
			{id: 0, value: 5, colorClass: 'bg-primary', tooltipText: '5 Orders'},
			{id: 1, value: 30, colorClass: 'bg-success', tooltipText: '30 Orders'},
			{id: 2, value: 20, colorClass: 'bg-info', tooltipText: '20 Orders'}],
		[
			{id: 0, value: 50, colorClass: 'bg-primary', tooltipText: '50 Orders'},
			{id: 1, value: 10, colorClass: 'bg-success', tooltipText: '10 Orders'},
			{id: 2, value: 10, colorClass: 'bg-danger', tooltipText: '10 Orders'},
			{id: 3, value: 20, colorClass: 'bg-info', tooltipText: '20 Orders'}],
		[
			{id: 0, value: 20, colorClass: 'bg-primary', tooltipText: '20 Orders'},
			{id: 1, value: 40, colorClass: 'bg-success', tooltipText: '40 Orders'},
			{id: 2, value: 10, colorClass: 'bg-info', tooltipText: '10 Orders'}],
		[
			{id: 0, value: 20, colorClass: 'bg-primary', tooltipText: '20 Orders'},
			{id: 1, value: 40, colorClass: 'bg-success', tooltipText: '40 Orders'},
			{id: 2, value: 5, colorClass: 'bg-warning', tooltipText: '5 Orders'},
			{id: 3, value: 10, colorClass: 'bg-info', tooltipText: '10 Orders'}
		]
	];

	public static getColumnDefs(): Array<any> {
		// TODO Translate column names
		return [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true},
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
				elementID:             'checkboxID',
				resizable:             false
			}, {
				colId:                 'spinner',
				headerName:            'Cell with Spinner',
				field:                 'spinnerValues',
				width:                 200,
				editable:              true,
				cellRendererFramework: SpinnerCellRendererComponent,
				cellEditorFramework:   SpinnerCellEditorComponent,
				onCellValueChanged:    e => console.log('test', e),
				resizable:             false
			}];
	}

	public static getColumnBarsDefs(): Array<any> {
		return [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true},
			{colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
			{
				colId:                 'status',
				valueGetter:           (params: any) => {
					console.log(params.data.stackedBarValues);
					return params.data.stackedBarValues;
				},
				headerName:            'Status',
				getMaxValue:           () => {
					return ShowcaseGridUtil.getMaxValue();
				},
				cellRendererFramework: StackedBarCellRendererComponent,
				cellRendererParams:    {
					barClick: ShowcaseGridUtil.doBarClick,
				},
			}];
	}

	public static getGridData(): ShowcaseData[] {
		const values: ShowcaseData[] = [];
		for (let i = 0; i < 10; i++) {
			values.push(new ShowcaseData('12/12/2017', i + '', '10x', 26, 10,
				false, i, new TouchSpinValues(5, 0, 100, 1), this.stackedBars[i % 4]));
		}
		return values;
	}

	private static getMaxValue(): number {
		return 100;
	}

	private static doBarClick(rowClicked: ShowcaseData, stackedBarId: number | string) {
		console.log('Status Bar Row Clicked', rowClicked);
		console.log('Status Bar Cell Clicked', stackedBarId);
	}
}
