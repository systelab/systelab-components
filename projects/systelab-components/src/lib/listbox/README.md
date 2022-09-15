# systelab-listbox

Abstract classes that lets you create a Listbox component.

## Using the classes

This is not a component by itself, they are some Abstract classes that lets you define your own listboxes.

In order to do that, you must create your own components and extend from the abstract classes AbstractListBox&lt;T&gt;, AbstractApiListBox&lt;T&gt; and AbstractApiTreeListBox&lt;TreeListBoxElement&lt;T&gt;&gt;.

## Using AbstractListBox&lt;T&gt;

In order define a simple listbox, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing the following methods:

```
public abstract getIdField(): string;
protected abstract getDescriptionField(): string;
public abstract getInstance(): T;
public getAllFieldID(): number | string; (optional)
public getAllFieldDescription(): string; (optional)
```

T class must have at least the following properties:

| Name | Type | Description |
| ---- |:----:| ----------- |
| id | number &#124; string | Identifier |
| description | string |Description or name that will be show in the listbox |


For example:

```javascript

@Component({
	selector:    'systelab-gender-listbox',
	templateUrl: 'abstract-listbox.component.html'

})
export class SystelabGenderListBox extends AbstractListBox<Element> implements AfterViewInit {

	@Input() showAll = false;

	constructor(public i18nService: I18nService) {
		super();
	}

	public ngAfterViewInit(): void {
		const elements = [];
		if (this.showAll) {
			elements.push(new Element('A', this.i18nService.instant('COMMON_ALL')));
		}
		elements.push(new Element('U', this.getDescriptionForGender('U')));
		elements.push(new Element('F', this.getDescriptionForGender('F')));
		elements.push(new Element('M', this.getDescriptionForGender('M')));

		this.values = elements;
	}

	public getAllFieldID(): number | string {
		return 'A';
	}

	public getAllFieldDescription(): string {
		return this.i18nService.instant('COMMON_ALL');
	}

	public getIdField(): string {
		return 'id';
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getInstance() {
		return new Element('', '');
	}

	public getDescriptionForGender(gender: string): string {
		switch (gender) {
			case 'U':
				return this.i18nService.instant('COMMON_UNKNOWN');
			case 'M':
				return this.i18nService.instant('COMMON_MALE');
			case 'F':
				return this.i18nService.instant('COMMON_FEMALE');
			default:
				return this.i18nService.instant('COMMON_UNKNOWN');
		}
	}
}
```


## Using AbstractApiListBox&lt;T&gt;

In order to create a listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing methods from AbstractListBox&lt;T&gt; and the following methods:

```
public abstract getTotalItems(): number;
protected abstract getData(page: number, itemsPerPage: number): Observable<Array<T>>;
```

For example:

```
@Component({
	selector:    'example-api-listbox',
	templateUrl: '../../../systelab-components/listbox/abstract-listbox.component.html'
})

export class ExampleApiListBox extends AbstractApiListBox<ServiceData> {

	private totalItems=0;

	constructor(public serviceApi: ServiceApi) {
		super();
	}

	public getInstance(): ServiceData {
		return new ServiceData();
	}

	public getDescriptionField(): string {
		return 'serviceDescription';
	}

	public getIdField(): string {
		return 'serviceID';
	}

	protected getData(page: number, itemsPerPage: number): Observable<Array<ServiceData>>
		const serviceListParameters = new ServiceListFilter();
		serviceListParameters.page = page;
		serviceListParameters.itemsPerPage = itemsPerPage;
		return this.serviceApi.getServicesList(this.serviceListParameters, false).pipe(
		    map((value) => {
                        this.totalItems = value.totalElements;
                        return value.content;
                }));
	}

	public getTotalItems(): number
	{
	    return this.totalItems;
	}
}
```

> Be aware that the first page will be page 1.

## Using AbstractApiTreeListBox&lt;TreeListBoxElement&lt;T&gt;&gt;

In order to create a tree-listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiTreeListBox&lt;T&gt;, implementing methods from AbstractListBox&lt;T&gt; and the following methods:

```
//methods from AbstractListBox<T>
protected abstract getIdField(level?: number): string;
protected abstract getDescriptionField(level?: number): string;
public abstract getInstance(): T;

//methods from AbstractApiTreeListBox<TreeListBoxElement<T>>
protected abstract getData(): Observable<Array<T>>;
protected abstract getSelectionPrefix(level: number): string;
```

For example:

```
@Component({
	selector:    'example-tree-listbox',
	templateUrl: '../../../systelab-components/listbox/abstract-listbox.component.html'
})

export class ExampleTreeListBox extends AbstractApiTreeListBox<TreeListBoxElement<ServiceData>> {

	constructor(public serviceApi: ServiceApi) {
		super();
	}

	public getInstance(): TreeListBoxElement<ServiceData> {
		return new TreeListBoxElement<ServiceData>();
	}

	public getDescriptionField(level: number): string {
		if (level === 1) {
			return 'serviceDescription';
		}
		return 'centerDescription';

	}

	public getIdField(level: number): string {
		if (level === 1) {
			return 'serviceID';
		}
		return 'centerID';
	}

	protected getData(): Observable<Array<ServiceData>> {
		const serviceListParameters = new ServiceListFilter();
		serviceListParameters.tree = true;
		serviceListParameters.page = 1;
		serviceListParameters.itemsPerPage = 0;
		return this.serviceApi.getServicesList(this.serviceListParameters, false);
	}

	protected getSelectionPrefix(level: number): string {
		if (level === 0) {
			return 'C';
		} else {
			return 'S';
		}
	}

}
```

## Using your component
Once you have your component, you can use it in your templates.

```
<systelab-gender-listbox [multipleSelection]="true" [(multipleSelectedItemList)]="multipleSelectedItemList" (multipleSelectedItemListChange)="onSelectedItemChange($event)"></systelab-gender-listbox>
```

## Properties AbstractListBox&lt;T&gt; and AbstractApiListBox&lt;T&gt;

| Name                         | Type | Default | Description                                                                                                   |
|------------------------------|:----:|:-------:|---------------------------------------------------------------------------------------------------------------|
| **selectedItem**             | T |         | Element selected. Only when multipleSelection=false                                                           |
| **multipleSelectedItemList** | Array&lt;T&gt; |         | Array with elements selected. Only when multipleSelection=true                                                |
| isParentSelectable           | boolean |  true   | If true the parent item is selectable **ONLY WORKS WITH SINGLE SELECTION**                                    |                                                                                      |
| isDisabled                   | boolean |  false  | If true the listbox is disabled                                                                               |
| multipleSelection            | boolean |  false  | Enable to select multiple elements. A checkbox will be rendered in front of each element.                     |
| hideChecks                   | boolean |  false  | Enable to use multiple selection without checkboxes. Selection will be done with ctrl and click.              
| selectFirstItem              | boolean |  false  | If true first item of the list is selected if there are not selected items. Only when multipleSelection=false |
| showAll                      | boolean |  false  | If true adds all element at the beginning of the list                                                         |
| rowDrag                      | boolean |  false  | If true list can be reordered by dragging rows. Only applied to non paginated listbox.                        |

In black the Two-Way Data Binding properties.

## Properties AbstractApiTreeListBox&lt;TreeListBoxElement&lt;T&gt;&gt;

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **selectedTreeItem** | TreeListBoxElement<T> | | Element selected. Only when multipleSelection=false |
| **selectedIDList** | string | | Ids of selected elements separated by comma. Each Id contains a prefix to indicate if selected element is parent or child (defined in getSelectionPrefix method). Only when multipleSelection=true |
| isDisabled | boolean | false | If true the listbox is disabled  |
| multipleSelection | boolean | false | Enable to select multiple elements. A checkbox will be rendered in front of each element. |
| updateHierarchy | boolean | true | If true, the parent/child nodes will be updated when selecting a child/parent node |

In black the Two-Way Data Binding properties.

## Events AbstractListBox&lt;T&gt; and AbstractApiListBox&lt;T&gt;

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selectedItemChange | T | Emits selected element.|
| multipleSelectedIDListChange | Array<string &#124; number> | Emits an array with the ids of selected elements.|
| multipleSelectedItemListChange | Array<T> | Emits an array with selected elements of type <T>.|
| rowDragEnd | Event | Emits ag-grid event after a row drag when rowDrag is true.|

## Events AbstractApiTreeListBox&lt;TreeListBoxElement&lt;T&gt;&gt;

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selectedTreeItemChange | TreeListBoxElement<T> | Emits selected element.|
| selectedIDListChange | string | Emits ids of selected elements separated by comma. Each Id contains a prefix to indicate if selected element is parent or child (defined in getSelectionPrefix method).|