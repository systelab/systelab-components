import {Directive, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TreeElement} from './tree-element';
import {AbstractTreeObservable} from './abstract-tree-js-observable.service';
import {Subscription} from 'rxjs';


@Directive()
export abstract class AbstractTreeJS implements OnDestroy {

	@Input() public showCollapseExpandButtons = false;
	@Input() public buttonsPositon = 'top';
	@Input() public withCheckboxes = false;
	@Output() public nodeSelected = new EventEmitter();

	public selectedNode: TreeElement;
	public tree: TreeElement[] = [];

	protected subscription: Subscription;

	constructor(protected readonly abstractTreeObservable: AbstractTreeObservable) {
		this.subscribeToAbstractTree();
	}

	public ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	protected subscribeToAbstractTree(): void {
		this.subscription = this.abstractTreeObservable.selectNodeObservable.subscribe( treeElement => {
			this.nodeSelected.emit(treeElement);
		});
	}

	public doExpand(node: TreeElement): void {
		node.expanded = true;
	}

	public doCollapse(node: TreeElement): void {
		node.expanded = false;
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
}

