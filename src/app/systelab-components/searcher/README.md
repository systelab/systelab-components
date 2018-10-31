# systelab-searcher

Abstract classes that lets you create a Searcher component. A Searcher compoment is an input field where an user can type a code. After onblur from the input and if the code exists in the list of elements, the description of the element appears at the right side of the input field. If user does not know the code can click the ? button and a dialog with a table appears helping in the element selection.

## Using the classes

This is not a component by itself, there are some Abstract classes that lets you define your own searchers.

In order to do that, you must create your own components and extend from the abstract classes AbstractSearcherComponent&lt;T&gt;, AbstractSearcher&lt;T&gt;.

First you need to create a class extending from AbstractSearcher<T> implementing the following methods:

```
public abstract getDialogParameters(): SearcherDialogParameters<T>;
public abstract getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<T>>;
public abstract getTotalItems(): number;
public abstract getColumnDefs(): Array<any>;
public abstract getIdField(): string;
public abstract getCodeField(): string;
public abstract getDescriptionField(): string;
public abstract getTextForSearcherLabel(): string;
public abstract getTitleForDialog(): string;
public abstract getGridOptionsPreferencesPrefix(): string;
```

For example:

```
export class ExampleSearcherData {
	constructor(public id: string, public code: string, public description: string) {

	}

}

export class ExampleSearcher extends AbstractSearcher<ExampleSearcherData> {

	private totalItems=0;
	
	constructor(public i18nService: I18nService) {
		super();
	}

	public getDialogParameters(): SearcherDialogParameters<ExampleSearcherData> {
		const searcherDialogParameters: SearcherDialogParameters<ExampleSearcherData> = new SearcherDialogParameters<ExampleSearcherData>();
		searcherDialogParameters.dialogClass = 'w-66 h-66';
		return searcherDialogParameters;
	}

	public getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<ExampleSearcherData>> {
        const aCode = (useCode) ? valueToSearch : undefined;
        const aSearch = (useCode) ? undefined : valueToSearch;
        
        return this.api.getExampleSearcherList(aCode, aSearch, page,itemsPerPage).pipe(map((value) => {
            this.totalItems = value.totalElements;
            return value.content;
        }));
	}

	public getTotalItems(): number {
		return this.totalItems;
	}

	public getColumnDefs(): Array<any> {
		return [
			{
				colId:      'code',
				headerName: this.i18nService.instant('COMMON_CODE'),
				field:      'code',
				width:      300
			},
			{
				colId:      'description',
				headerName: this.i18nService.instant('COMMON_DESCRIPTION'),
				field:      'description',
			}
		];

	}

	public getIdField(): string {
		return 'id';
	}

	public getCodeField(): string {
		return 'code';
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getTextForSearcherLabel(): string {
		return this.i18nService.instant('COMMON_DATA');
	}

	public getTitleForDialog(): string {
		return this.i18nService.instant('COMMON_DATA');
	}

	public getGridOptionsPreferencesPrefix(): string {
		return 'ExampleGridSearcher';
	}
}
```

Second you need to create a class extending from AbstractSearcherComponent<T> implementing constructor like this: 

```
@Component({
	selector:    'example-searcher',
	templateUrl: '../../../systelab-components/searcher/abstract-searcher.component.html'
})
export class ExampleSearcherComponent extends AbstractSearcherComponent<ExampleSearcherData> {

	constructor(public i18nService: I18nService, public dialogService: DialogService) {
		super(dialogService, new ExampleSearcher(i18nService));
	}

}
```

In the constructor the previous class created extending AbstractSearcher<T> is created and passed to super() method.

## Using your component
Once you have your component, you can use it in your templates.

```
<example-searcher></example-searcher>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **id** | string | | Identifier of selected item |
| **description** | string | | Description or name of selected item that will be shown in the label of the searcher |
| **code** | string | | Short code of selected item that will be shown in the input of the searcher  |
| **multipleSelectedItemList** | Array<T> | | Array with selected elements for searchers with multiple selection|
| multipleSelection | boolean | false | Enable to select multiple elements. A checkbox will be rendered in front of each element. |
| fontFamily | string | | Font Family |
| fontSize | string | | Font size in pixels |
| fontWeight | string | | normal, bold, bolder, lighter, number, initial or inherit |
| fontStyle | string | | normal, italic, oblique, initial or inherit |
| isDisabled | boolean | false | If true the combo is disabled|
| withButton | boolean | true | Shows or not ? button|
| height | number | | Height of the form component in px|

In black the Two-Way Data Binding properties.

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| selectedHasChanged | any | Emits the id field of element of type <T>. Only when multipleSelection=false.|
| multipleSelectedItemListChange | Array<T> | Emits an array with selected elements of type <T>. Only when multipleSelection=true|
