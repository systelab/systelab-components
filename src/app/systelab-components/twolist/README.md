# systelab-two-list

Component to select a group of elements from elements list. Elements to select have an initial order and are in a list at left side and selected elements are in the right side. Selected elements are sortable by the user.

## Using the template

```html
<systelab-two-list #twoListOptions [(available)]="availableColumns"
                   [(visible)]="visibleColumns"
                   [initialAvailableColumns]="initialAvailableColumns"
                   [defaultVisibleColumns]="defaultVisibleColumns"
                   [defaultHiddenColumns]="defaultHiddenColumns"
                   displayAttr="displayName">
</systelab-two-list>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **available** | Array<TwoListItem> | | Array with available items |
| **visible** | Array<TwoListItem> | | Array ordered with selected items |
| initialAvailableColumns | Array<TwoListItem> | | Array with all available columns to know the order of the columns|
| defaultVisibleColumns | Array<TwoListItem> | | Array with default visible columns to reset component to default values|
| defaultHiddenColumns | Array<TwoListItem> | | Array with default available columns to reset component to default values|

In black the Two-Way Data Binding properties.

TwoListItem class:

```
export class TwoListItem {
	constructor(public displayName: string, public colId: string, public selected: boolean, public visible: boolean) {
	}
}
```

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| visibleChange | Array<TwoListItem> | Emits the visible elements when changes|
| availableChange | Array<TwoListItem> | Emits the avialable elements when changes|
