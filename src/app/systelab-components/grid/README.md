# systelab-grid

Abstract classes that lets you create grid components.

## Using the class

This are not components by itself, they are Abstract classes that lets you define your own grids.

In order to do that, you must create your own components and extend from the abstract classes AbstractGrid&lt;T&gt; and AbstractApiGrid&lt;T&gt;. The following methods have to be implemented:

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
As the grid is based in Ag Grid, you will find usefull information at https://www.ag-grid.com/best-angular-2-data-grid.

We can add custom-cells as cellRendererFramework in our column definition. At this moment, we have two generic cellRenderers for the table, with an input and a checkbox.
To use the checkbox we need to send a parameter that has to be searched in the data to get a unique id. By this way we can have all the checkbox working independent from the other.

Take in mind that if you add a custom-cell that can be clicked by the user (checkboxes, spinners, inputs, ...) we have to avoid the click over the row to open other dialogs or realize some action over the table. For this reason it's needed to rewrite the doClick function in each table detailing the columns that must not execute some kind of action.

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


## Using your component
Once you have your component, you can use it in your templates.

```
<patient-grid #grid [menu]="getMenu()" (action)="doMenuAction($event)" (clickRow)="doSelect($event)">
...
</patient-grid>
```

You will have the option to automatize a submenu for each row, by defining the menu and the action. And you can be updated with the user selection with the output clickRow.
```
public doSelect(compareProfileData: PatientData): void {
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
