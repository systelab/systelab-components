import { Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';


@Directive()
export abstract class AbstractTree implements OnInit {

	@ViewChild('expandingTree', {static: false}) protected currentTree: Tree;

	@Input() public withModal = true;
	@Output() public nodeSelected = new EventEmitter();

	@Input() public isDropabble = false;
	@Input() public isDragabble = false;

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
