import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TreeElement} from './tree-element';


@Directive()
export abstract class AbstractTreeJS implements OnInit {

	@Input() public isDropabble = false;
	@Input() public isDragabble = false;
	@Input() public showCollapseExpandButtons = false;
	@Input() public buttonsOnBottom = false;
	@Input() public withCheckboxes = false;
	@Output() public nodeSelected = new EventEmitter();

	public selectedNode: TreeElement;

	public tree: TreeElement[] = [];

	constructor() {
	}

	public ngOnInit() {
	}

	public doExpand(node: TreeElement): void {
		node.expanded = true;
	}

	public doCollapse(node: TreeElement): void {
		node.expanded = false;
	}

	public nodeSelect(node: TreeElement) {
		this.markAllSelected(this.tree, false);
		node.isSelected = true;
		this.nodeSelected.emit(node);
	}

	public doExpandAllNodes(): void {
		this.expandCollapseNodes(this.tree, true);
	}

	public doCollapseAllNodes(): void {
		this.expandCollapseNodes(this.tree, false);
	}

	private expandCollapseNodes(tree: Array<TreeElement>, expandedValue: boolean): void {
		tree.forEach( node => {
			node.expanded = expandedValue;
			if ( node.children?.length ) {
				this.expandCollapseNodes(node.children, expandedValue);
			}
		});
	}

	private markAllSelected(tree: Array<TreeElement>, selectedValue: boolean): void {
		tree.forEach( node => {
			node.isSelected = selectedValue;
			if ( node.children?.length) {
				this.markAllSelected(node.children, selectedValue);
			}
		});
	}
}

