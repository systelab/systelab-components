import {Input} from '@angular/core';
import {polyfill} from 'mobile-drag-drop';

export abstract class AbstractSortableListComponent<T> {

	@Input() public elementsList: Array<T> = [];
	@Input() public secondListSearch: string;

	constructor() {
		polyfill({});
	}

	public abstract getDescriptionField(): string;

	public abstract getSelectionField(): string;

	public getDescription(element: T): string {
		return element[this.getDescriptionField()];
	}

	public getSelectionFieldValue(element: T): boolean {
		return element[this.getSelectionField()];
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}

	public selectVisibleCurrent(element: T, ev: KeyboardEvent) {
		element[this.getSelectionField()] = !element[this.getSelectionField()];
	}

	public getSelectedRows(): Array<T> {
		return this.elementsList.filter( element => element[this.getSelectionField()]);
	}
}
