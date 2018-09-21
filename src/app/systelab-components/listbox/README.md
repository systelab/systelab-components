# systelab-listbox

Abstract classes that lets you create a Listbox component.

## Using the classes

This is not a component by itself, they are some Abstract classes that lets you define your own listboxes.

In order to do that, you must create your own components and extend from the abstract classes AbstractListBox&lt;T&gt;, AbstractApiListBox&lt;T&gt; and AbstractApiTreeListBox&lt;T&gt;.

## Using AbstractListBox&lt;T&gt;

In order define a simple combobox, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing the following methods:

```
protected abstract getData(): Observable<Array<T>>;
public abstract setSelectionList(selectedIDList: string);
public abstract getSelectionList(): string;
protected abstract getDescriptionField(level?: number): string;
protected abstract getIdField(level?: number): string;
```


For example:

```javascript

@Component({
	selector:    'marital-status-listbox',
	templateUrl: '../../../../node_modules/systelab-components/html/abstract-listbox.component.html'

})
export class MaritalStatusListBox extends AbstractListBox<ListBoxElement> implements OnInit {

	constructor(public i18nService: I18nService) {
		super(false);
	}

	public ngOnInit() {
		super.ngOnInit();
		this.setSelectionList(this.selectedIDList);
	}

	protected getData(): Observable<Array<ListBoxElement>> {
		const data: Array<ListBoxElement> = [];
		data.push(new ListBoxElement('1', 'Single', 1, false));
		data.push(new ListBoxElement('2', 'Married', 1, false));
		data.push(new ListBoxElement('3', 'Widowed', 1, false));
		data.push(new ListBoxElement('4', 'Divorced', 1, false));
		data.push(new ListBoxElement('5', 'Separated', 1, false));
		data.push(new ListBoxElement('6', 'Registered partnership', 1, false));
		return of(data);
	}

	public getIdField(): string {
		return 'id';
	}

	public getDescriptionField(): string {
		return 'description';

	}

	public setSelectionList(selectedIDList: string) {
		this.multipleSelectedItemList = [];
		if (selectedIDList) {
			const selectedIDStringList: Array<string> = selectedIDList.split(',');
			selectedIDStringList.forEach(selectedID => {
				this.addSelectedItem(new ListBoxElement(selectedID, this.getDescriptionForCultureTypeCode(selectedID), 1, true));
				this.values.filter(element => {
					if (element.id === selectedID) {
						element.selected = true;
					}
				});
			});
		}
	}

	public getSelectionList(): string {
		let selection = '';
		let first = true;
		for (const selectedItem of this.multipleSelectedItemList) {
			if (first) {
				selection = selectedItem[this.getIdField()];
				first = false;
			} else {
				selection += ',' + selectedItem[this.getIdField()];
			}

		}
		return selection;
	}
}


```

ListBoxElement is a class with the following properties:

| Name | Type | Description |
| ---- |:----:| ----------- |
| **id** | string || Identifier |
| **description** | string || Description or name that will be show in the listbox |
| level | number || Level for indentation |
| selected | boolean || A boolean value to define if the element is selected |


## Using AbstractApiListBox&lt;T&gt;

In order to create a listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiListBox&lt;T&gt;, implementing the following methods:

```


```

For example:

```



```

> Be aware that the first page will be page 1.

## Using AbstractApiTreeListBox&lt;T&gt;

In order to create a tree-listbox with data coming from a Server API, you must create your own component and extend from the abstract class AbstractApiTreeListBox&lt;T&gt;, implementing the following methods:

```


```

## Using your component
Once you have your component, you can use it in your templates.

```


```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **id** | string || Identifier |
| **description** | string || Description or name that will be show in the listbox |
| values | Array&lt;ListBoxElement or TreeListBoxElement&gt; |||
| prefixID | string ||  |
| **multipleSelectedItemList** | Array&lt;ListBoxElement or TreeListBoxElement&gt; ||  |
| **selectedIDList** | string ||  |
| isDisabled | boolean ||  |
| multipleSelection | boolean |false|  |
| emptySelection | boolean |true|  |


In black the Two-Way Data Binding properties.
