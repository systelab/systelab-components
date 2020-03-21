import { Directive, Input, OnInit } from '@angular/core';
import {AbstractSortableListComponent} from '../sortable-list/abstract-sortable-list.component';

@Directive()
export abstract class AbstractAddRemoveList<T> extends AbstractSortableListComponent<T> implements OnInit {

	@Input() public elementsList: Array<T> = [];
	@Input() public buttonsOnBottom = false;
	@Input() public isDisabled = false;

	constructor() {
		super();
	}

	public ngOnInit() {
	}

	public add(): void {
	}

	public remove(): void {
	}

	public abstract getDescriptionField(element: T): string;

	public getDescription(element: T): string {
		return element[this.getDescriptionField(element)];
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}
}
