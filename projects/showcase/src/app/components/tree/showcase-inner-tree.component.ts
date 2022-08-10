import {Component} from '@angular/core';
import {AbstractTree} from 'systelab-components';

@Component({
	selector: 'showcase-inner-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree/abstract-tree.component.html'
})
export class ShowcaseInnerTreeComponent extends AbstractTree {

	constructor() {
		super();
	}

	public populateTree(): void {
		const myTree: any[] = [];

		myTree.push({
			label: 'One Node',
			collapsedIcon: 'text-primary fas fa-folder',
			expandedIcon: 'text-primary fas fa-folder',
			children: [
				{
					label: 'Level 2 One Child',
					collapsedIcon: 'text-primary fas fa-folder',
					expandedIcon: 'text-primary fas fa-folder',
					children: [
						{
							label: 'Level 3 With Status',
							collapsedIcon: 'text-primary far fa-file far-important',
							expandedIcon: 'text-primary far fa-file far-important',
							status: 'text-primary far fa-address-book',
						},
						{
							label: 'Level 3 Another Child With Status',
							collapsedIcon: 'text-primary far fa-file far-important',
							expandedIcon: 'text-primary far fa-file far-important',
							status: 'text-primary far fa-address-book',
						}
					]

				},
				{
					label: 'Level 2 Another Child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon: 'text-primary far fa-file far-important',
				}
			]
		});


		myTree.push({
			label: 'Not selectable',
			collapsedIcon: 'text-primary far fa-file far-important',
			expandedIcon: 'text-primary far fa-file far-important',
			selectable: false,
		});
		myTree.push({
			label: 'Expanded Node',
			collapsedIcon: 'text-primary fas fa-folder',
			expandedIcon: 'text-primary fas fa-folder',
			expanded: true,
			children: [
				{
					label: 'First child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon: 'text-primary far fa-file far-important',
				},
				{
					label: 'Second child',
					collapsedIcon: 'text-primary far fa-file far-important',
					expandedIcon: 'text-primary far fa-file far-important',
				}
			]
		});

		this.tree = myTree;
	}

	public nodeSelect(evt: any) {
		this.nodeSelected.emit(evt.node);
	}

	public selectRandomNode():void {
		this.selectedNode = this.tree[1];
	}
}
