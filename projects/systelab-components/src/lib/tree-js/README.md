# systelab-tree-js

Class that lets you create a Tree component without PrimeNG

## Using the class

You must create your own components and extend from the class SystelabTree.
Inside the class you must convert your array of datas to a tree.
You can do it with a service 'SystelabTreeConverter' that you have to provide to the component.
You need to create an array of structures, 'DataInfo', to allow the service to convert the data array in a tree structure automatically.
After creating the structure you must call the 'setDataSource' function to generate the tree.
In the 'DataInfo' object must be defined the id-attribute, the name-attribute and the inner-data-attribute from the data.


Example of use:

```
@Component({
	selector: 'example-js-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-js/systelab-tree.component.html',
	providers: [SystelabTreeConverter]
})
@Component({
	selector: 'example-tree',
	templateUrl: '../../../systelab-components/tree/abstract-tree-status.component.html'
})
export class ExampleTreeComponent extends SystelabTree<ExampleData> {

    private dataList: Array<ExampleData>;

	constructor(private readonly systelabTreeConverter: SystelabTreeConverter) {
		super();
	}

	public ngOnInit(): void {
	    const treeDataInfoList = this.createTreeDataInfoList();
	    this.treeData = this.systelabTreeConverter.convertToTreeStructure(dataList, 0, treeDataInfoList);
	    this.setDataSource();
	}
	
	private createTreeDataInfoList(): Array<TreeDataInfo> {
		const dataInfoList: Array<TreeDataInfo> = new Array<TreeDataInfo>();
		dataInfoList.push(this.systelabTreeConverter.createDataInfo('firstLevelName', 'firstLevelID', 'innerSecondLevel'));
		dataInfoList.push(this.systelabTreeConverter.createDataInfo('secondLevelName', 'secondLevelID', 'innerThirdLevel'));
		dataInfoList.push(this.systelabTreeConverter.createDataInfo('thirdLevelName', 'thirdLevelID'));
		return dataInfoList;
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
|expandedIcon | string | 'fa fa-chevron-down' | Icon to use in expanded state.|
|collapsedIcon | string | 'fa fa-chevron-right' | Icon to use in collapsed state.|
|collapsedIcon | string | 'fa fa-chevron-right' | Icon to use in collapsed state.|
|textClass	|string | | Style for the text.|
|expanded |boolean | | Whether the node is in an expanded or collapsed state.|
|isNodeSelected | boolean | | Used to know if the node is selected.|




## Using your component
Once you have your component, you can use it in your templates.


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| nodeSelected | TreeNode | Emits the node selected|
