import { Component, ViewChild } from '@angular/core';
import { ShowcaseInnerTreeComponent } from './showcase-inner-tree.component';
import { TreeNode } from 'systelab-components';

@Component({
    selector: 'showcase-tree',
    templateUrl: 'showcase-tree.component.html',
    standalone: false
})
export class ShowcaseTreeComponent {

	@ViewChild('showcaseTree') showcaseTree: ShowcaseInnerTreeComponent;

	constructor() {
	}

	public nodeSelected(node: TreeNode): void {
		console.log('Tree node selected', node);
	}
}
