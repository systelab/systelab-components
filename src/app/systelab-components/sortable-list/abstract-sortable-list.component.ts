import {Input} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {polyfill} from 'mobile-drag-drop';

export abstract class AbstractSortableListComponent<T> {

	@Input() public elementsList: Array<T> = [];
	@Input() public secondListSearch: string;

	public deleteWithSupr = false;
	public showIcon = false;

	constructor() {
		polyfill({});
	}

	public abstract getDescriptionField(element?: T): string;

	public abstract getSelectionField(element?: T): string;

	public abstract getIcon(element?: T): string;

	public getDescription(element: T): string {
		return element[this.getDescriptionField(element)];
	}

	public getSelectionFieldValue(element: T): boolean {
		return element[this.getSelectionField(element)];
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}

	public selectVisibleCurrent(element: T, ev: KeyboardEvent) {
		if (!ev.ctrlKey) {
			this.elementsList.forEach(elementInList => {
				elementInList[this.getSelectionField(element)] = false;
			});
		}
		element[this.getSelectionField(element)] = !element[this.getSelectionField(element)];
	}

	public getSelectedRows(): Array<T> {
		return this.elementsList.filter(element => element[this.getSelectionField(element)]);
	}

	public removeElement(element: T, event: KeyboardEvent): void {
		if (this.deleteWithSupr && event.keyCode === 46) {
			this.elementsList.splice(this.elementsList.indexOf(element), 1);
		}
	}

	public dropped(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.elementsList, event.previousIndex, event.currentIndex);
	}
}
