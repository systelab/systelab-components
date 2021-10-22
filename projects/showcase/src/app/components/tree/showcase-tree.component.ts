import {Component} from '@angular/core';

@Component({
	selector:    'showcase-tree',
	templateUrl: 'showcase-tree.component.html'
})
export class ShowcaseTreeComponent {

	constructor() {
	}

	public nodeSelected(event: any): void {
		console.log('showcasetreecomponent', event);
	}

	public doOnNodeSelected(node: any): void {
		console.log('New JS Tree', node);
	}
}
