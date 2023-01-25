import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { TreeNode } from './tree-node';

@Directive()
export abstract class AbstractTree implements OnInit {

	@Output() public nodeSelected = new EventEmitter<TreeNode>();

	public defaultExpandedIcon = 'icon-angle-down';
	public defaultCollapsedIcon = 'icon-angle-right';

	public _tree: TreeNode[] = [];
	public dataSource = new ArrayDataSource(this._tree);

	public treeControl = new NestedTreeControl<TreeNode>(node => node.children);

	public selectedNode: TreeNode;

	@Input()
	public get tree(): TreeNode[]  {
		return this._tree;
	}

	public set tree(newTree: Array<TreeNode>) {
		this._tree = newTree;
		this.dataSource = new ArrayDataSource(this._processData(this._tree, null));
	}

	constructor() {
		this.treeControl.isExpanded = (node) => node.expanded;
		this.treeControl.toggle = (node) => {
			node.expanded = !node.expanded;
		};
	}

	public ngOnInit() {
		if (this._tree) {
			this.dataSource = new ArrayDataSource(this._processData(this._tree, null));
		}
	}

	public hasChild = (_: number, node: TreeNode): boolean => !!node.children?.length;

	public doClick(node: TreeNode): void {
		if (node.selectable !== false) {
			if (this.selectedNode) {
				this.selectedNode.isNodeSelected = false;
			}
			this.selectedNode = node;
			node.isNodeSelected = !node.isNodeSelected;
			this.nodeSelected.emit(node);
		}
	}

	private _processData(data, parent = null) {
		data.forEach(item => {
			if (parent !== null) {
				item.parent = parent;
			} else {
				item.parent = null;
			}
			if (item.children?.length) {
				this._processData(item.children, item);
			}
		});
		return data;
	}
}
