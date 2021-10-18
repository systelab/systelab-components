import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, EventEmitter, Output} from '@angular/core';
import {TreeElementNode} from './tree-element';

@Component({
	selector: 'systelab-tree',
	templateUrl: 'systelab-tree.component.html'
})
export class SystelabTree<T> {

	@Output() public nodeSelected: EventEmitter<TreeElementNode<T>> = new EventEmitter<TreeElementNode<T>>();

	public readonly ExpandedIcon = 'fas fa-chevron-down';
	public readonly CollapsedIcon = 'fas fa-chevron-right';

	public treeData: Array<TreeElementNode<T>> = [];

	public treeControl = new FlatTreeControl<TreeElementNode<T>>(
		node => node.level, node => node.expandable);

	public dataSource = new ArrayDataSource(this.treeData);

	constructor() {}

	public doClick(node: TreeElementNode<T>): void {
		this.dataSource.connect().forEach( connection => connection.forEach( element => element.isNodeSelected = false));
		node.isNodeSelected = !node.isNodeSelected;
		this.nodeSelected.emit(node);
	}

	public hasChild = (_: number, node: TreeElementNode<T>) => node.expandable;

	public getParentNode(node: TreeElementNode<T>) {
		const nodeIndex = this.treeData.indexOf(node);

		for (let i = nodeIndex - 1; i >= 0; i--) {
			if (this.treeData[i].level === node.level - 1) {
				return this.treeData[i];
			}
		}
		return null;
	}

	public shouldRender(node: TreeElementNode<T>) {
		let parent = this.getParentNode(node);
		while (parent) {
			if (!parent.isExpanded) {
				return false;
			}
			parent = this.getParentNode(parent);
		}
		return true;
	}

	protected setDataSource(): void {
		this.treeData.filter(node => !node.expandedIcon).forEach(node => node.expandedIcon = this.ExpandedIcon);
		this.treeData.filter(node => !node.collapsedIcon).forEach(node => node.collapsedIcon = this.CollapsedIcon);
		this.dataSource = new ArrayDataSource(this.treeData);
	}
}
