# systelab-tree-js

Abstract class that lets you create a Tree component without PrimeNG

## Using the class

This is not a component by itself, this is an Abstract class that lets you define your own trees.

In order to do that, you must create your own components and extend from the abstract class AbstractTree. Inside the class you must create a tree data structure extending TreeNode interface. You can do it in the constructor or in a public method that can be called from parent component.
After creating the structure you must assign it to tree variable.

## Attributes

The abstract component has a bunch of input attributes to configure the tree.

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
|showCollapseExpandButtons | boolean | false |To hide or show the buttons to expand and collapse all the tree.|
|buttonsPosition | string | top |To define the position of the collapse-expand buttons. The values could be: top, bottom, left, right.|
|withCheckboxes | boolean | false |Defines if the tree is shown with checkboxes and has multiple selection.|

##Buttons

There are the possibility to use two buttons to expand and collapse all the nodes in the tree.

---


Example of use:

```
@Component({
	selector: 'example-tree',
	templateUrl: '../../../systelab-components/tree/abstract-tree-status.component.html'
})
export class ExampleTreeComponent extends AbstractTree  {

	constructor() {
		super();

		const myTree: any[] = [];

		myTree.push({
			label: 'Documents',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			children: [
				{
					label: 'Work',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down'},
				{
					label: 'Home',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down'}
			]
		});


		myTree.push({
			label: 'Films',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
		});
		myTree.push({
			label: 'Images',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			expanded : true,
			children: [
				{
					label: 'photo1.jpg'},
				{
					label: 'photo2.jpg'}
			]
		});

		this.tree = myTree;
	}

}
```
TreeNode interface

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
|label | string | |Label of the node.|
|id   | number | | Id of the node, used in the checkbox. |
|data | any | | Data represented by the node.|
|icon | string | | Icon of the node to display next to content. Could be a icon from FontAwesome|
|expandedIcon | string | | Icon to use in expanded state.|
|collapsedIcon | string | | Icon to use in collapsed state.|
|children |	TreeNode[] | | An array of treenodes as children.|
|textClass	|string | | Style for the text.|
|expanded |boolean | | Whether the node is in an expanded or collapsed state.|
|isSelected | boolean | | Used to know if the node is selected.|

## Using your component
Once you have your component, you can use it in your templates.


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| nodeSelected | TreeNode | Emits the node selected|
