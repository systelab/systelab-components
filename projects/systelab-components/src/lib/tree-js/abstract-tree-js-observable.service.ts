import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {TreeElement} from './tree-element';

@Injectable({
	providedIn: 'root'
})
export class AbstractTreeObservable {

	private selectNodeObserver = new Subject<TreeElement>();
	public readonly selectNodeObservable: Observable<TreeElement> = this.selectNodeObserver.asObservable();

	constructor() {
	}

	public selectNode(node: TreeElement): void {
		this.selectNodeObserver.next(node);
	}

}
