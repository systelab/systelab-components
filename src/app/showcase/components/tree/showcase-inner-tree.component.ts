import { Component } from '@angular/core';
import { AbstractTree } from '../../../systelab-components/tree/abstract-tree.component';

@Component({
	selector: 'showcase-inner-tree',
	templateUrl: '../../../systelab-components/tree/abstract-tree-status.component.html'
})
export class ShowcaseInnerTreeComponent extends AbstractTree  {

	constructor() {
		super();

		const myTree: any[] = [];

		myTree.push({
			label: 'Hello',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			status : 'mlab-qc-status mlab-qc-status-ko',
			expanded : true,
			children: [
				{
					label: 'First',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko',
					expanded : true},
				{
					label: 'Second',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko',
					expanded : true}
			]
		});


		myTree.push({
			label: 'Bye',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			status : 'mlab-qc-status mlab-qc-status-ko',
			expanded : true
		});

		this.tree = myTree;
	}

	public nodeSelect(evt: any) {
		this.nodeSelected.emit(evt.node);
	}

	public selectTest(testID: number) {
		for (let i = 0; i < this.tree.length; i++) {
			const node: any = this.tree[i];
			if (node.testID && node.testID === testID) {
				this.selectedNode = node;
				console.log('select node ' + node.testID);
				return;
			}
		}
	}
}