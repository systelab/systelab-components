import { CheckboxCellEditorComponent, CheckboxCellRendererComponent, DecimalInputCellEditorComponent, GridHeaderContextMenuComponent, InputCellEditorComponent, IStackedBar, SpinnerCellEditorComponent, SpinnerCellRendererComponent, StackedBarCellRendererComponent, TouchSpinValues } from 'systelab-components';
import { ShowcaseData } from './showcase-grid.model';

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
		return [
			{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true, pinned: 'left'},
			{
				colId:                 'flags',
				headerName:            'Flags',
				field:                 'flag',
				width:                 220,
				headerComponent:       GridHeaderContextMenuComponent,
				headerComponentParams: {headerName: 'Flags', headerData: 'flags'}
			}, {
				colId:               'decimal-input',
				headerName:          'Cell with Decimal Input',
				field:               'decimalValue',
				width:               200,
				cellEditorFramework: DecimalInputCellEditorComponent,
				editable:            true,
				sortable:            true,
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
				colId:               'checkbox',
				headerName:          'Cell with Checkbox',
				field:               'checkboxValue',
				width:               200,
				cellRenderer:        CheckboxCellRendererComponent,
				cellEditorFramework: CheckboxCellEditorComponent,
				onCellValueChanged:  e => console.log('checkbox', e),
				editable:            true,
				elementID:           'checkboxID',
				resizable:           false
			}, {
				colId:               'spinner',
				headerName:          'Cell with Spinner',
				field:               'spinnerValues',
				width:               200,
				editable:            true,
				cellRenderer:        SpinnerCellRendererComponent,
				cellEditorFramework: SpinnerCellEditorComponent,
				onCellValueChanged:  e => console.log('test', e),
				resizable:           false
			}];
	}

	public static getGroupColumnDefs(): Array<any> {
		// TODO Translate column names
		return [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true, pinned: 'left'},
			{
				colId:      'group1',
				headerName: 'Group 1',
				width:      220,
				children:   [
					{
						colId:      'decimal-input',
						headerName: 'Column 1a',
						field:      'decimalValue',
						width:      200
					}, {
						colId:      'input',
						headerName: 'Column 1b',
						field:      'inputValue',
						width:      200
					}
				]
			},
			{
				colId:      'group2',
				headerName: 'Group 2',
				width:      220,
				children:   [
					{
						colId:      'checkbox',
						headerName: 'Column 2a',
						field:      'checkboxValue',
						width:      200,
						elementID:  'checkboxID',
					}, {
						colId:      'spinner',
						headerName: 'Column 2b',
						field:      'checkboxValue',
						elementID:  'checkboxID',
						width:      200,
					}
				]
			}
		];
	}

	public static getColumnBarsDefs(): Array<any> {
		return [{colId: 'date', headerName: 'Date', field: 'eventDate', width: 300, rowDrag: true},
			{colId: 'value', headerName: 'Value (%)', field: 'value', width: 120},
			{
				colId:              'status',
				valueGetter:        (params: any) => {
					return params.data.stackedBarValues;
				},
				headerName:         'Status',
				getMaxValue:        () => {
					return ShowcaseGridUtil.getMaxValue();
				},
				cellRenderer:       StackedBarCellRendererComponent,
				cellRendererParams: {
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
