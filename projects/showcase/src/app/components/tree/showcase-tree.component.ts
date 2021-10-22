import {Component} from '@angular/core';

@Component({
	selector:    'showcase-tree',
	templateUrl: 'showcase-tree.component.html'
})
export class ShowcaseTreeComponent {

	constructor() {
	}

	public nodeSelected(event: any) {
		console.log('showcasetreecomponent', event);
	}

	public doOnNodeSelected(node: any) {
		console.log('New JS Tree', node);
	}
}
