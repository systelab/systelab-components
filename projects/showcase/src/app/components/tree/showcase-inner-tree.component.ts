import { Component } from '@angular/core';
import { AbstractTree } from 'systelab-components';

@Component({
	selector: 'showcase-inner-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree/abstract-tree-status.component.html'
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
			children: [
				{
					label: 'First',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko'},
				{
					label: 'Second',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko'}
			]
		});


		myTree.push({
			label: 'Bye',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			status : 'mlab-qc-status mlab-qc-status-ko',
			expanded : true
		});
		myTree.push({
			label: 'Bye',
			collapsedIcon : 'icon-angle-right',
			expandedIcon : 'icon-angle-down',
			status : 'mlab-qc-status mlab-qc-status-ko',
			expanded : true,
			children: [
				{
					label: 'First',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko'},
				{
					label: 'Second',
					collapsedIcon : 'icon-angle-right',
					expandedIcon : 'icon-angle-down',
					status : 'mlab-qc-status mlab-qc-status-ko'}
			]
		});

		this.tree = myTree;
	}

	public nodeSelect(evt: any) {
		this.nodeSelected.emit(evt.node);
	}
}
