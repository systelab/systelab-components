import { Component } from '@angular/core';
import { AbstractTree } from 'systelab-components';

@Component({
    selector: 'showcase-inner-tree',
    templateUrl: '../../../../../systelab-components/src/lib/tree/abstract-tree.component.html',
    standalone: false
})
export class ShowcaseInnerTreeComponent extends AbstractTree {

	constructor() {
		super();
		this.populateTree();
	}

	public populateTree(): void {
		const myTree: any[] = [];

		myTree.push({
			label:         'One Node',
			collapsedIcon: 'text-primary icon-cube',
			expandedIcon:  'text-primary icon-cube',
			children:      [
				{
					label:         'Level 2 One Child',
					collapsedIcon: 'text-primary icon-cube',
					expandedIcon:  'text-primary icon-cube',
					children:      [
						{
							label:         'Level 3 With Status',
							collapsedIcon: 'text-primary icon-tag',
							expandedIcon:  'text-primary icon-tag',
							status:        'text-primary icon-square',
						},
						{
							label:         'Level 3 Another Child With Status',
							collapsedIcon: 'text-primary icon-tag',
							expandedIcon:  'text-primary icon-tag',
							status:        'text-primary icon-square',
						}
					]

				},
				{
					label:         'Level 2 Another Child',
					collapsedIcon: 'text-primary icon-tag',
					expandedIcon:  'text-primary icon-tag',
				}
			]
		});

		myTree.push({
			label:         'Not selectable',
			collapsedIcon: 'text-primary icon-tag',
			expandedIcon:  'text-primary icon-tag',
			selectable:    false,
		});
		myTree.push({
			label:         'Expanded Node',
			collapsedIcon: 'text-primary icon-cube',
			expandedIcon:  'text-primary icon-cube',
			expanded:      true,
			children:      [
				{
					label:         'First child',
					collapsedIcon: 'text-primary icon-tag',
					expandedIcon:  'text-primary icon-tag',
				},
				{
					label:         'Second child',
					collapsedIcon: 'text-primary icon-tag',
					expandedIcon:  'text-primary icon-tag',
				}
			]
		});

		this.tree = myTree;
	}

	public nodeSelect(evt: any) {
		this.nodeSelected.emit(evt.node);
	}

	public selectRandomNode(): void {
		this.selectedNode = this.tree[1];
	}
}
