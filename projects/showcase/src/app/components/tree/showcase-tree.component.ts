import { Component, ViewChild } from '@angular/core';
import { ShowcaseInnerTreeComponent } from './showcase-inner-tree.component';

@Component({
	selector:    'showcase-tree',
	templateUrl: 'showcase-tree.component.html'
})
export class ShowcaseTreeComponent {

	@ViewChild('showcaseTree') showcaseTree: ShowcaseInnerTreeComponent;

	constructor() {
	}

	public nodeSelected(event: any): void {
		console.log('showcasetreecomponent', event);
	}

	public populateTree(): void {
		this.showcaseTree.populateTree();
	}
	public selectNode(): void {
		this.showcaseTree.selectRandomNode();
	}
}
