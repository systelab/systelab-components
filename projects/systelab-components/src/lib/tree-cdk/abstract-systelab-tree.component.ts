import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Directive, EventEmitter, OnInit, Output} from '@angular/core';
import {TreeElementNode} from './tree-element';

export class TreeDataFieldsName {
	constructor(public idField: string, public descriptionField: string, public childrenField?: string){}
}

@Directive()
export abstract class AbstractSystelabTree<T> implements OnInit {

	@Output() public nodeSelected: EventEmitter<TreeElementNode> = new EventEmitter<TreeElementNode>();

	public ExpandedIcon = 'fas fa-chevron-down';
	public CollapsedIcon = 'fas fa-chevron-right';

	public treeData: Array<TreeElementNode> = [];

	public treeControl = new FlatTreeControl<TreeElementNode>(
		node => node.level, node => node.expandable);

	public dataSource = new ArrayDataSource(this.treeData);

	protected currentNodeSelected: TreeElementNode;
	protected treeDataFieldsMap: Map<string, TreeDataFieldsName> = new Map<string, TreeDataFieldsName>();

	public ngOnInit(): void {
		this.treeDataFieldsMap = this.getTreeDataFieldsMap();
		this.refresh();
	}

	public doClick(node: TreeElementNode): void {
		if (this.currentNodeSelected) {
			this.currentNodeSelected.isNodeSelected = false;
		}
		this.currentNodeSelected = node;
		node.isNodeSelected = !node.isNodeSelected;
		this.nodeSelected.emit(node);
	}

	public hasChild = (_: number, node: TreeElementNode) => node.expandable;

	protected getParentNode(node: TreeElementNode) {
		const nodeIndex = this.treeData.indexOf(node);

		for (let i = nodeIndex - 1; i >= 0; i--) {
			if (this.treeData[i].level === node.level - 1) {
				return this.treeData[i];
			}
		}
		return null;
	}

	public shouldRender(node: TreeElementNode) {
		let parent = this.getParentNode(node);
		while (parent) {
			if (!parent.isExpanded) {
				return false;
			}
			parent = this.getParentNode(parent);
		}
		return true;
	}

	protected convertDataToTreeElementNodes(dataList: Array<any>, level: number): Array<TreeElementNode> {
		const treeElementNodeList: Array<TreeElementNode> = [];
		dataList.forEach(data => {
			const treeDataFields = this.treeDataFieldsMap.get(data.constructor.name);
			treeElementNodeList.push(this.createTreeElementNode(data, level, treeDataFields));
			if ( data[treeDataFields.childrenField]) {
				treeElementNodeList.push(...this.convertDataToTreeElementNodes(data[treeDataFields.childrenField], level + 1));
			}
		});
		return treeElementNodeList;
	}

	protected createTreeElementNode(data: any, level: number, treeDataFields: TreeDataFieldsName): TreeElementNode {
		const node: TreeElementNode = {
			data: data,
			expandable: !!data[treeDataFields.childrenField],
			id: data[treeDataFields.idField],
			level: level,
			name: data[treeDataFields.descriptionField]
		};
		node.icon = this.getNodeIcon(data, level);
		node.nodeClass = this.getNodeClass(data, level);
		return node;
	}

	protected abstract getData(): Array<T>;

	protected abstract getNodeIcon(data: any, level: number): string;

	protected abstract getNodeClass(data: any, level: number): string;

	protected abstract getTreeDataFieldsMap(): Map<string, TreeDataFieldsName>;

	protected setDataSource(): void {
		this.dataSource = new ArrayDataSource(this.treeData);
	}

	protected refresh(): void {
		this.treeData = this.convertDataToTreeElementNodes(this.getData(), 0);
		this.setDataSource();
	}
}
