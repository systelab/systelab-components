# systelab-combobox

Abstract class that lets you create a Combobox component.

## Using the class

This is not a component by itself, they are some Abstract class that lets you define your own comboboxes.

In order define a simple combobox, you must create your own component and extend from the abstract class AbstractApiComboBox&lt;T&gt;, and implement the following methods:

```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
```


For example:

```
class MaritalStatus {
    constructor(public id: string, public description: string) {
    }
}

@Component({
    selector:    'marital-status-combobox',
    templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class MaritalStatusComboBox extends AbstractComboBox<MaritalStatus> {

    constructor(myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService) {
        super(myRenderer, chRef);
        this.values = new Array<MaritalStatus>();
        this.values.push(new MaritalStatus('1', 'Single'));
        this.values.push(new MaritalStatus('2', 'Married'));
        this.values.push(new MaritalStatus('3', 'Widowed'));
        this.values.push(new MaritalStatus('4', 'Divorced'));
        this.values.push(new MaritalStatus('5', 'Separated'));
        this.values.push(new MaritalStatus('6', 'Registered partnership'));
    }

    getInstance(): MaritalStatus {
        return new Doctor('0', 'Unknown');
    }

    getDescriptionField(): string {
        return 'description';
    }

    getCodeField(): string {
        return '';
    }

    getIdField(): string {
        return 'id';
    }
}

```

In order to create a combobox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiComboBox&lt;T&gt;, and implement the following methods:

```
public abstract getInstance(): T;
public abstract getDescriptionField(): string;
public abstract getCodeField(): string;
public abstract getIdField(): string;
public abstract getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<T>>;
public abstract getTotalItems(): number;
```

For example:

```
class LaboratoryData {
    constructor(public id: string, public description: string) {
    }
}

@Component({
    selector: 'laboratory-combobox',
    templateUrl: '../../../../../node_modules/systelab-components/html/abstract-combobox.component.html'
})

export class LaboratoryComboBox extends AbstractApiComboBox<LaboratoryData> {

    private totalItems=0;

    constructor(myRenderer: Renderer2, public chref: ChangeDetectorRef, public api: LaboratoryApi) {
        super(myRenderer, chref);
    }

    public getInstance() {
        return new LaboratoryData('','');
    }

    public getDescriptionField(): string {
        return 'description';
    }

    public getCodeField(): string {
        return null;
    }

    public getIdField(): string {
        return 'id';
    }

    public getData(page: number, itemsPerPage: number): Observable<Array<LaboratoryData>> {
        return this.api.getLaboratoryList(page,itemsPerPage).pipe(map((value) => {
            this.totalItems = value.totalElements;
            return value.content;
        }));
    }

    public getTotalItems(): number {
        return this.totalItems;
    }
}
```

Be aware that the first page will be page 1.

## Using your component
Once you have your component, you can use it in your templates.

```
<marital-status-combobox #combo [(id)]="value" [(description)]="valueDescription">
</marital-status-combobox>
```