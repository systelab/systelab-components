import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Tree } from 'primeng/components/tree/tree';
import { TreeNode } from 'primeng/components/common/api';

export abstract class AbstractTree implements OnInit {

	@ViewChild('expandingTree') protected currentTree: Tree;

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