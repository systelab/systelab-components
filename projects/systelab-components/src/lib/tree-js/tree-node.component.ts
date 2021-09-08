import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TreeElement} from './tree-element';
import {AbstractTreeObservable} from './abstract-tree-js-observable.service';



@Component({
	selector: 'tree-node',
	templateUrl: 'tree-node.component.html'
})
export class TreeNode {

	@Input() public node: TreeElement;
	@Input() public withCheckboxes = false;
	@Output() public childChange = new EventEmitter();

	constructor(protected readonly abstractTreeObservable: AbstractTreeObservable) {
	}
	public doExpand(node: TreeElement): void {
		node.expanded = true;
	}

	public doCollapse(node: TreeElement): void {
		node.expanded = false;
	}

	public nodeSelect(node: TreeElement) {
		node.isSelected = !node.isSelected;
		this.selectAllChilds(node.children, node.isSelected);
		this.abstractTreeObservable.selectNode(this.node);
		this.childChange.emit(node.isSelected);
	}

	public doOnChildChange(childNodeValue: boolean): void {
		if ( !childNodeValue && this.node.isSelected ) {
			this.node.isSelected = false;
			this.childChange.emit(childNodeValue);
		}
	}

	private selectAllChilds( childList: Array<TreeElement>, value: boolean): void {
		if ( childList?.length ) {
			childList.forEach(child => {
				child.isSelected = value;
				this.selectAllChilds(child.children, value);
			});
		}
	}
}
