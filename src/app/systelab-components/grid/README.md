# systelab-grid

Abstract classes that lets you create grid components.

## Using the class

This are not components by itself, they are Abstract classes that lets you define your own grids.

In order to do that, you must create your own components and extend from the abstract classes AbstractGrid&lt;T&gt; and AbstractApiGrid&lt;T&gt;.

## Using AbstractGrid&lt;T&gt;

Extend AbstractGrid&lt;T&gt; and define:
```
protected abstract getColumnDefs(): Array<any>;
```

For example:
```
protected getColumnDefs(): Array<any> {
  // TODO Translate column names
  const columnDefs: Array<any> = [
    {colId: 'name', headerName: 'Name', field: 'name', width: 300},
    {colId: 'surname', headerName: 'Surname', field: 'surname', width: 300},
    {colId: 'email', headerName: 'Mail', field: 'email', width: 200}];
  return columnDefs;
}
```

Ag-grid documentation of column properties: https://www.ag-grid.com/javascript-grid-column-properties/

We can add custom-cells/custom-editors as cellRendererFramework/cellEditorFramework in our column definition. At this moment, we have four generic cellRenderers/cellEditors for the table:
 
 - Input 
 - Decimal Input
 - Checkbox
 - Spinner
 
To use these renderers/editors you need to set the following column properties:

 - cellRendererFramework
 - cellEditorFramework
 - editable: true
 
Input
```
{
    colId:               'input',
    headerName:          'Cell with Input',
    field:               'inputValue',
    width:               200,
    cellEditorFramework: InputCellEditorComponent,
    editable:            true,
    onCellValueChanged:  e => console.log('input', e)
}
```

Decimal Input
```
{
    colId:               'input',
    headerName:          'Cell with Decimal Input',
    field:               'decimalValue',
    width:               200,
    cellEditorFramework: DecimalInputCellEditorComponent,
    editable:            true,
    onCellValueChanged:  e => console.log('input', e)
}
```

CheckBox

To use the checkbox we need to send a parameter that has to be searched in the data to get a unique id. By this way we can have all the checkbox working independent from the other.
```
{
    colId:                 'checkbox',
    headerName:            'Cell with Checkbox',
    field:                 'checkboxValue',
    width:                 200,
    cellRendererFramework: CheckboxCellRendererComponent,
    cellEditorFramework:   CheckboxCellEditorComponent,
    onCellValueChanged:    e => console.log('checkbox', e),
    editable:              true,
    elementID: 		        'checkboxID',
    suppressResize:         true
}
```

Spinner
```
{
    colId:                 'spinner',
    headerName:            'Cell with Spinner',
    field:                 'spinnerValues',
    width:                 200,
    editable:              true,
    cellRendererFramework: SpinnerCellRendererComponent,
    cellEditorFramework:   SpinnerCellEditorComponent,
    onCellValueChanged:    e => console.log('test', e),
    suppressResize:         true
}
```

Take in mind that if you add a custom-cell that can be clicked by the user (checkboxes, spinners, inputs, ...) we have to avoid the click over the row to open other dialogs or realize some action over the table. For this reason it's needed to rewrite the doClick function in each table detailing the columns that must not execute some kind of action.

You can use your own renderers and editors. Ag-grid documentation about rendering and editing:

- Cell rendering: 

    https://www.ag-grid.com/javascript-grid-cell-rendering/
    
    https://www.ag-grid.com/javascript-grid-cell-rendering-components/#angular-cell-render-components

- Cell editing: 

    https://www.ag-grid.com/javascript-grid-cell-editing/
    
    https://www.ag-grid.com/javascript-grid-cell-editor/#angular-cell-editing

- Consider these performance advices: https://www.ag-grid.com/javascript-grid-performance/


## Using AbstractApiGrid&lt;T&gt;

Extend AbstractApiGrid&lt;T&gt; and define:
```
protected abstract getColumnDefs(): Array<any>;
protected abstract getTotalItems(): number;
protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;
```
Usually you will get the information to provide to getTotalItems and getData from your api:

For example:
```
@Component({
  selector:    'patient-grid',
  templateUrl: '../../../../../../node_modules/systelab-components/html/abstract-grid.component.html'
})
export class PatientGrid extends AbstractApiGrid<PatientData> {

  private totalItems=0;

  constructor(protected api: PatientApi,protected preferencesService: PreferencesService,
    protected i18nService: I18nService, protected dialogService: DialogService) {
    super(preferencesService, i18nService, dialogService);
  }

  protected getColumnDefs(): Array<any> {
    // TODO Translate column names
    const columnDefs: Array<any> = [
      {colId: 'patientId', headerName: 'Id', field: 'patientId', width: 200},
      {colId: 'patientDescription', headerName: 'Description', field: 'patientDescription', width: 200}
    ];
    return columnDefs;
  }
  protected getTotalItems() {
    return this.totalItems;
  }

  protected getData(page: number, itemsPerPage: number): Observable<Array<PatientData>> {
    return this.api.getPatientList(page, itemsPerPage).pipe(map((value) => {
        this.totalItems = value.totalElements;
        return value.content;
    }));
  }
}
```

Be aware that the first page will be page 1.

AbstractApiGrid&lt;T&gt; uses Ag-grid Infinite scroll model with the following properties by default:

```
public ngOnInit() {

    super.ngOnInit();

    this.gridOptions.rowModelType = 'infinite';
    this.gridOptions.paginationPageSize = 50;
    this.gridOptions.cacheBlockSize = 50;
    this.gridOptions.cacheOverflowSize = 2;
    this.gridOptions.maxConcurrentDatasourceRequests = 4;
    this.gridOptions.maxBlocksInCache = 15;
    this.gridOptions.infiniteInitialRowCount = 0;

    this.gridOptions.datasource = this;

}
```

You can change these properties overriding method ngOnInit in your own component. More information in: https://www.ag-grid.com/javascript-grid-infinite-scrolling/ 


## Using your component
Once you have your component, you can use it in your templates.

```
<patient-grid #grid [menu]="getMenu()" (action)="doMenuAction($event)" (clickRow)="doSelect($event)">
...
</patient-grid>
```

You will have the option to automatize a submenu for each row, by defining the menu and the action. And you can be updated with the user selection with the output clickRow.
```
public doSelect(patientData: PatientData): void {
  ...
}
public getMenu(): Array<GridContextMenuOption<PatientData>> {
  return [
    new GridContextMenuOption('action1', 'Action 1'),
    new GridContextMenuOption('action2', 'Action 2'),
    new GridContextMenuOption('action3', 'Action 3')
  ];
}
public doMenuAction(action: GridContextMenuActionData<PatientData>): void {
  if (action.actionId === 'action1') {
    ...
  } else if (action.actionId === 'action2') {
    ...
  } else if (action.actionId === 'action3') {
    ...
  }
}

```

GridContextMenuOption is a class that represent a menu item. The different properties and its meaning are:

| Name | Type | Description |
| ---- |:----------:| ------------|
| actionId | string | Unique ID |
| actionText | string | Text to display |
| action | GridContextMenuActionFunction | Function to execute|
| isActionEnabled | GridContextMenuIsEnabledFunction | Function returns true is menu option is enabled |
| isDivider | boolean | Display a divider line |

Property action is a function ( data: GridContextMenuActionData&lt;T&gt; ) =&gt; void. If property action is defined when the option menu is clicked executes the function. If action is not defined then a grid output called "action" will be emitted with GridContextMenuActionData&lt;T&gt;

Property isActionEnabled is a function ( data: T ) =&gt; boolean. This function is executed when the button to open the context menu is clicked. If property isActionEnabled is defined the function is excuted in order to know if the option should be shown or not. If properrty isActionEnabled is not defined then the option is always shown.

You will have the option to automatize a header column menu adding a headerComponentFramework and headerComponentParams

```
{
    colId:                    'flags',
    headerName:               'Flags',
    field:                    'flag',
    width:                    220,
    headerComponentFramework: GridHeaderContextMenuComponent,
    headerComponentParams:    {headerName: 'Flags', headerData: 'flags'}
}
```

headerComponentFramework is a component of type GridHeaderContextMenuComponent, headerComponentParams needs two properties, headerName (string) and headerData (Object).

You can define the options of the menu adding property headerMenu of type Array&lt;GridContextMenuOption&lt;Object&gt;&gt; in the template or overriding method getHeaderContextMenuOptions(): Array&lt;GridContextMenuOption&lt;Object&gt;&gt; in your grid component

```
<patient-grid #grid [headerMenu]="getHeaderMenu()" ...>
...
</patient-grid>
```

```
protected getHeaderContextMenuOptions(): Array<GridContextMenuOption<string>> {
    return [
        new GridContextMenuOption('headeraction1', 'Header Action 1'),
        new GridContextMenuOption('headeraction2', 'Header Action 2'),
        new GridContextMenuOption('headeraction3', 'Header Action 3'),
        new GridContextMenuOption('headeraction4', 'Header Action 4')
    ];
}
```




## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| preferenceName | string | | Preference prefix in order to store the columns size|
| multipleSelection | boolean | false | Set multiple selection|
| showChecks | boolean | false | Show a column with a checkbox for each element |
| rowData | Array&lt;T&gt; | | Array of the elements of type <T> displayed in the table. Only for components extending from AbstractGrid|
| menu | Array&lt;GridContextMenuOption&lt;T&gt;&gt; | | Array with the menu options. Each option is a GridContextMenuOption. If used a column is added as the first of the table having three dots button on each row to open the context menu|
| headerMenu | Array&lt;GridContextMenuOption&lt;Object&gt;&gt; | | Array with the header column menu options. Each option is a GridContextMenuOption. If used a three dots button is added in the header to open the context menu|

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| action |GridContextMenuActionData&lt;T&gt;&#124;GridContextMenuActionData&lt;Object&gt;|When an action in the popup menu (row or header) is selected, the event is fired with the selected GridContextMenuActionData |
| clickRow |T|When a row is selected, the event is fired with the element in the row.|

## Ag-grid

As the grid is based in Ag Grid, you will find useful information at https://www.ag-grid.com/documentation-main/documentation.php.

Recommended documentation to be read about properties, events and APIs: 

- Grid properties: https://www.ag-grid.com/javascript-grid-properties/

- Grid events: https://www.ag-grid.com/javascript-grid-events/

- Grid callbacks: https://www.ag-grid.com/javascript-grid-callbacks/

- Grid API: https://www.ag-grid.com/javascript-grid-api/

- Column properties: https://www.ag-grid.com/javascript-grid-column-properties/

- Column api: https://www.ag-grid.com/javascript-grid-column-api/

Recommended documentation to be read about features:

- Column resizing: https://www.ag-grid.com/javascript-grid-resizing/

- Row sorting: https://www.ag-grid.com/javascript-grid-sorting/

- Row selection: https://www.ag-grid.com/javascript-grid-selection/

- Column spanning: https://www.ag-grid.com/javascript-grid-column-spanning/

- Row spanning: https://www.ag-grid.com/javascript-grid-column-spanning/

- Column pinning: https://www.ag-grid.com/javascript-grid-pinning/

- Cell styles: https://www.ag-grid.com/javascript-grid-cell-styles/

- Row styles: https://www.ag-grid.com/javascript-grid-row-styles/

- Cell rendering: https://www.ag-grid.com/javascript-grid-cell-rendering/

- Cell editing: https://www.ag-grid.com/javascript-grid-cell-editing/

- Performance: https://www.ag-grid.com/javascript-grid-performance/

- Accessing data: https://www.ag-grid.com/javascript-grid-accessing-data/

- Updating data: https://www.ag-grid.com/javascript-grid-data-update/

- Full width rows: https://www.ag-grid.com/javascript-grid-full-width-rows/

Recommended documentation about row models:

- Infinite scroll: https://www.ag-grid.com/javascript-grid-infinite-scrolling/

Recommended documentation about components:

- CellRenderer: https://www.ag-grid.com/javascript-grid-cell-rendering-components/

- Angular CellRenderer (consider performance): https://www.ag-grid.com/javascript-grid-cell-rendering-components/#angular-cell-render-components

- CellEditor: https://www.ag-grid.com/javascript-grid-cell-editor/

- Angular CellEditor (consider performance) : https://www.ag-grid.com/javascript-grid-cell-editor/#angular-cell-editing

- Header component: https://www.ag-grid.com/javascript-grid-header-rendering/

- Angular header component (consider performance): https://www.ag-grid.com/javascript-grid-header-rendering/#angular-header-component


