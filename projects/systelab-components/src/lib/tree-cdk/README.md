# systelab-tree-cdk

Class that lets you create a Tree component without PrimeNG

## Using the class

You must create your own components and extend from the class AbstractSystelabTree.
Inside the class you must convert your array of datas to a tree.
You can do it with some functions inside the abstract component.
After creating the structure you must call the 'setDataSource' function to generate the tree.
You must create a method to define the 'data' you will have in your tree. These 'TreeDataFieldsName' objects have to be defined the id-attribute, the name-attribute and the inner-data-attribute from the data.

In order define a tree, you must create your own component and extend from the abstract class AbstractSystelabTree, implementing the following methods:

```
protected abstract getData(): Array<T>;
protected abstract getNodeIcon(data: any, level: number): string;
protected abstract getNodeClass(data: any, level: number): string;
protected abstract getTreeDataFieldsMap(data: any): Map<string, TreeDataFieldsName>;
```
- getData
  - Returns an array with the data that will be represented in the tree
- getNodeIcon
  - With this function, the node will check if has to define an icon for the current node
- getNodeClass
  - With this function, the node will check if has to define a class style for the node
- getTreeDataFieldsMap
  - Creates a map with the className and the attributes that will be used to retrieve the info for each node.



Example of use:

```
@Component({
	selector: 'example-cdk-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-cdk/abstract-systelab-tree.component.html',
})
export class ExampleTreeComponent extends AbstractSystelabTree<FirstLevelData> {

    private exampleTree: Array<FirstLevelData> = [];

	constructor() {
		super();
	}

	protected getData(): Array<FirstLevelData> {
		return this.exampleTree;
	}

	protected getTreeDataFieldsMap(): Map<string, TreeDataFieldsName> {
		const treeDataFieldsMap: Map<string, TreeDataFieldsName> = new Map<string, TreeDataFieldsName>();
		treeDataFieldsMap.set(FirstLevelData.name, new TreeDataFieldsName('firstLevelID', 'firstLevelName', 'innerSecondLevel'))
		treeDataFieldsMap.set(SecondLevelData.name, new TreeDataFieldsName('secondLevelID', 'secondLevelName', 'innerThirdLevel'))
		treeDataFieldsMap.set(ThirdLevelData.name, new TreeDataFieldsName('thirdLevelID', 'thirdLevelName', 'innerFourthLevel'))
		treeDataFieldsMap.set(FourthLevelData.name, new TreeDataFieldsName('fourthLevelID', 'fourthLevelName'))
		return treeDataFieldsMap;
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
|nodeClass	|string | | Style for the text.|
|expanded |boolean | | Whether the node is in an expanded or collapsed state.|
|isNodeSelected | boolean | | Used to know if the node is selected.|




## Using your component
Once you have your component, you can use it in your templates.


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| nodeSelected | TreeNode | Emits the node selected|
