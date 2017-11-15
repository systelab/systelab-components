import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Tree } from 'primeng/components/tree/tree';
import { Observable } from 'rxjs';
import { AbstractTree } from './abstract-tree.component';

export abstract class AbstractApiTree<N> extends AbstractTree implements OnInit {

	@ViewChild('expandingTree') public currentTree: Tree;

	@Input() public withModal: boolean = true;
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
					let childrenList: N[] = [];
					v.forEach(current => childrenList.push(this.dataToNode(current)));
					evt.node.children = childrenList;
				});
	}
}