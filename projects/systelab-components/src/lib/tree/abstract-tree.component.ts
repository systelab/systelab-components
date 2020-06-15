import { Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Tree } from 'primeng';
import { TreeNode } from 'primeng';

@Directive()
export abstract class AbstractTree implements OnInit {

	@ViewChild('expandingTree', {static: false}) protected currentTree: Tree;

	@Input() public withModal: boolean = true;
	@Output() public nodeSelected = new EventEmitter();

	@Input() public isDropabble: boolean = false;
	@Input() public isDragabble: boolean = false;

	public selectedNode: TreeNode;

	public tree: TreeNode[] = [];

	constructor() {
	}

	public ngOnInit() {
	}

	public nodeSelect(evt: any) {
		evt.node.expanded = !evt.node.expanded;
		this.nodeSelected.emit(evt.node);
	}
}
