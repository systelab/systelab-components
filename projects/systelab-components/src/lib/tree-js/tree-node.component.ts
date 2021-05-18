import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TreeElement} from './tree-element';



@Component({
	selector: 'tree-node',
	templateUrl: 'tree-node.component.html'
})
export class TreeNode {

	@Input() public node: TreeElement;
	@Input() public withCheckboxes = false;
	@Output() public nodeSelected = new EventEmitter();

	constructor() {
	}
	public doExpand(node: TreeElement): void {
		node.expanded = true;
	}

	public doCollapse(node: TreeElement): void {
		node.expanded = false;
	}

	public nodeSelect(node: TreeElement) {
		this.node.isSelected = true;
		this.nodeSelected.emit(node);
	}

	public childNodeSelect(node: TreeElement) {
		this.nodeSelected.emit(node);
	}
}
