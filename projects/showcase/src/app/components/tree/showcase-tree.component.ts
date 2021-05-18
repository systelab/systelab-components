import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'jstree';

@Component({
	selector:    'showcase-tree',
	templateUrl: 'showcase-tree.component.html'
})
export class ShowcaseTreeComponent implements OnInit {

	constructor() {
	}

	public nodeSelected(event: any) {
		console.log(event);
	}

	public ngOnInit(): void {
	}
}
