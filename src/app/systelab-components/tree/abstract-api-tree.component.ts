import { EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Tree } from 'primeng/components/tree/tree';
import { AbstractTree } from './abstract-tree.component';
import { Observable } from 'rxjs';

export abstract class AbstractApiTree<N> extends AbstractTree implements OnInit {

	@ViewChild('expandingTree') public currentTree: Tree;

	@Input() public withModal = true;
	@Output() public nodeSelected = new EventEmitter<N>();

	public tree: N[] = [];

	public params: any = {
		page:         1,
		itemsPerPage: 20
	};

	constructor() {
		super();
	}

	protected abstract callApiList(params: any): Observable<Array<any>>;

	protected abstract dataToNode(data: any): N;

	protected abstract onSelectNode(evt: any): Observable<Array<any>>;

	public ngOnInit() {
		this.callApiList(this.params)
			.subscribe(
				(v: Array<any>) => {
					v.forEach(current => this.tree.push(this.dataToNode(current)));
				},
				error => {
				}
			);
	}

	public nodeSelect(evt: any) {
		super.nodeSelect(evt);
		this.onSelectNode(evt)
			.subscribe(
				(v: Array<any>) => {
					const childrenList: N[] = [];
					v.forEach(current => childrenList.push(this.dataToNode(current)));
					evt.node.children = childrenList;
				});
	}
}
