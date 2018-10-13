# systelab-add-remove-list

Abstract classes that extends sortable-list with Add/Remove buttons to add or remove elements to the sortable list.

## Using the classes

This is not a component by itself, this  is an abstract class that lets you define your own add/remove lists.

In order to do that, you must create your own component and extend from the abstract class AbstractAddRemoveList&lt;T&gt;.

## Using AbstractAddRemoveList&lt;T&gt;

In order define an add/remove list, you must create your own component and extend from the abstract class AbstractAddRemoveList&lt;T&gt;, implementing the following methods:

```
public add(): void;
public remove(): void;
```
As this is a class that extends from AbstractSortableListComponent&lt;T&gt; you must implemnent the following methods ([sortable list](../sortable-list)):
```
public abstract getDescriptionField(element?: T): string;
public abstract getSelectionField(element?: T): string;
public abstract getIcon(element?: T): string;
```

For example:

```
export class ShowcaseAddRemoveListData {
	public id: number;
	public description: string;
	public isSelected: boolean;

	constructor(id: number, description: string) {
		this.id = id;
		this.description = description;
		this.isSelected = false;
	}
}

@Component({
	selector: 'systelab-inner-add-remove-list',
	templateUrl: '../../../systelab-components/add-remove-list/abstract-add-remove-list.component.html'
})
export class ShowcaseInnerAddRemoveListComponent extends AbstractAddRemoveList<ShowcaseAddRemoveListData> {

	constructor() {
		super();
		this.showIcon = true;
	}

	public getDescriptionField(element: ShowcaseAddRemoveListData): string {
		return 'description';
	}

	public getSelectionField(element: ShowcaseAddRemoveListData): string {
		return 'isSelected';
	}

	public getIcon(): string {
		return 'icon-clock';
	}

	public add(): void {
		this.elementsList.push(new ShowcaseAddRemoveListData(this.elementsList.length, 'New Added'));
	}

	public remove(): void {
		const selectedRows = this.getSelectedRows();
		selectedRows.forEach(selectedElement => {
			this.elementsList.splice(this.elementsList.indexOf(selectedElement), 1);
		});
	}
}
```

## Using your component
Once you have your component, you can use it in your templates.

```
<systelab-inner-add-remove-list [elementsList]="dataList" [buttonsOnBottom]="true">
</systelab-inner-add-remove-list>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| elementsList | Array<T> | | Array list with the elements of the list |
| buttonsOnBottom | boolean | false | If true Add/Remove buttons are shown in the bottom of the list. If false buttons are shown in the right side of the list. |
| isDisabled | boolean | false | If true Add/Remove buttons are not shown |

In black the Two-Way Data Binding properties.

