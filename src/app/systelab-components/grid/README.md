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
    return this.api.totalItems;
  }

  protected getData(page: number, itemsPerPage: number): Observable<Array<PatientData>> {
    return this.api.getPatientList(page, itemsPerPage);
  }
}

```

