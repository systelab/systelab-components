# systelab-tree

This component will be DEPRECATED in next versions.

Abstract class that lets you create a Tree component

## Using the class

This is not a component by itself, this is an Abstract class that lets you define your own trees.

In order to do that, you must create your own components and extend from the abstract class AbstractTree. Inside the class you must create a tree data structure extending TreeNode interface. You can do it in the constructor or in a public method that can be called from parent component.
After creating the structure you must assign it to tree variable.


For example:

```
@Component({
	selector: 'example-tree',
	templateUrl: '../../../systelab-components/tree/abstract-tree.component.html'
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
|data | any | | Data represented by the node.|
|icon | string | | Icon of the node to display next to content.|
|expandedIcon | string | | Icon to use in expanded state.|
|collapsedIcon | string | | Icon to use in collapsed state.|
|children |	TreeNode[] | | An array of treenodes as children.|
|styleClass	|string | | Style class of the node.|
|expanded |boolean | | Whether the node is in an expanded or collapsed state.|
|parent	|TreeNode | |Parent of the node.|
|selectable | boolean | | Used to disable selection of a particular node.|

## Using your component
Once you have your component, you can use it in your templates.

```
<example-tree  (nodeSelected)="nodeSelected($event)"></example-tree>
```

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| nodeSelected | TreeNode | Emits the node selected|
