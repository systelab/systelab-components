# systelab-sortable-list

Abstract class that lets you create a Listbox with sortable elements.

## Using the class

This is not a component by itself, it is an abstract class that lets you define your own listboxes.

In order to do that, you must create your own components and extend from the abstract classes AbstractSortableListComponent&lt;T&gt;.

## Using AbstractSortableListComponent&lt;T&gt;

In order define a simple listbox, you must create your own component and extend from the abstract class AbstractSortableListComponent&lt;T&gt;, implementing the following methods:

```
public abstract getDescriptionField(element?: T): string;
public abstract getSelectionField(element?: T): string;
public abstract getIcon(element?: T): string;
```

For example:

```javascript

@Component({
	selector: 'elements-sortable-list',
	templateUrl: '../../../../../node_modules/systelab-components/html/abstract-sortable-list.component.html'
})
export class ElementsSortableListComponent extends AbstractSortableListComponent<ElementData> {

	constructor() {
		super();
		this.deleteWithSupr = true;
		this.showIcon = true;
	}

	public getDescriptionField(element: ElementData): string {
		return 'description';
	}

	public getSelectionField(): string {
		return 'isSelected';
	}

	public getIcon(element: IsolationData): string {
    		return 'icon-culture';
	}
}

```

## Properties AbstractSortableListComponent&lt;T&gt;
| Name             |      Type      | Default | Description              |
|------------------|:--------------:|:-------:|--------------------------|
| elementsList     | Array&lt;T&gt; |         | The elements of the list |
| secondListSearch |     string     |         | Filter for the elements  |
## Events
| Name               | Parameters | Description                                                                     |
|--------------------|:----------:|---------------------------------------------------------------------------------|
| elementsListChange |     T      | Emits elements list of type &lt;T&gt; when list elements are removed or ordered |
