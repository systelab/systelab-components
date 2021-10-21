# systelab-tree-cdk

Class that lets you create a Tree component without PrimeNG

## Using the class

You must create your own components and extend from the class AbstractSystelabTree.
Inside the class you must convert your array of datas to a tree.
You can do it with some functions inside the abstract component.
After creating the structure you must call the 'setDataSource' function to generate the tree.
You must create a method to define the 'data' you will have in your tree. These 'DataInfo' objects have to be defined the id-attribute, the name-attribute and the inner-data-attribute from the data.

In order define a tree, you must create your own component and extend from the abstract class AbstractSystelabTree, implementing the following methods:

```
protected abstract createTree(): void;
protected abstract setIconInNode(data: any): string;
protected abstract setTextClassInNode(data: any): string;
protected abstract getAttributesInData(data: any): TreeDataFieldsName;
```
- createTree
  - It forces the user to define the tree and call the setDataSource function
- setIconInNode
  - With this funcion, the node will check if has to define an icon for the current node
- setTextClassInNode
  - With this function, the node will check if has to define a class style for the text
- getAttributesInData
  - Used to get the attributes that will create the node in each data in the tree. Retrieves an object with the id-attribute, name-attribute and inner-data-attribute.



Example of use:

```
@Component({
	selector: 'example-cdk-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-cdk/abstract-systelab-tree.component.html',
})
export class ExampleTreeComponent extends AbstractSystelabTree {

    private dataList: Array<ExampleData>;

	constructor() {
		super();
	}

	public ngOnInit(): void {
		this.createTree();
	}

	protected createTree(): void {
	    // function to create an Example Tree for this demo
		const newTree = this.createExampleTree();
		this.treeData = this.convertToTreeStructure(newTree, 0);
		this.setDataSource();
	}

}
```
TreeElementNode interface

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
|expandable | boolean | |Defines if the node has children.|
|name | string | |Label of the node.|
|level   | number | | The deeper level of the node. |
|isExpanded   | boolean | | Boolean to notify if the node is open. |
|id   | number | | The id of the node. |
|data | any | | Data represented by the node.|
|icon | string | | Icon of the node to display next to content. Could be a icon from FontAwesome|
|textClass	|string | | Style for the text.|
|expanded |boolean | | Whether the node is in an expanded or collapsed state.|
|isNodeSelected | boolean | | Used to know if the node is selected.|




## Using your component
Once you have your component, you can use it in your templates.


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| nodeSelected | TreeNode | Emits the node selected|
