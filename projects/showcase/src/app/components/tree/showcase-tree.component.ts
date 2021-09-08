import {Component, OnInit} from '@angular/core';
import 'jstree';

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
}
