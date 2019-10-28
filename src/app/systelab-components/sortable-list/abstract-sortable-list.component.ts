import {Input} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {polyfill} from 'mobile-drag-drop';

export abstract class AbstractSortableListComponent<T> {

	@Input() public elementsList: Array<T> = [];
	@Input() public secondListSearch: string;
	@Input() public dragAndDropEnabled = true;

	public deleteWithSupr = false;
	public showIcon = false;

	constructor() {
		polyfill({});
	}

	public abstract getDescriptionField(element?: T): string;

	public abstract getSelectionField(element?: T): string;

	public abstract getIcon(element?: T): string;

	public dbClickSelectedItem(element: T) {
	}

	public getDescription(element: T): string {
		return element[this.getDescriptionField(element)];
	}

	public getSelectionFieldValue(element: T): boolean {
		return element[this.getSelectionField(element)];
	}

	public handleDragEnter(event) {
		if (this.dragAndDropEnabled) {
			return this.preventDefault(event);
		} else {
			return true;
		}
	}

	public handleDragOver(event) {
		if (this.dragAndDropEnabled) {
			return this.preventDefault(event);
		} else {
			return true;
		}
	}

	public handleDragLeave(event) {
		if (this.dragAndDropEnabled) {
			return this.preventDefault(event);
		} else {
			return true;
		}
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}

	protected selectElement(element: T, ev: KeyboardEvent) {
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

	protected removeElement(element: T, event: KeyboardEvent): void {
		if (this.deleteWithSupr && event.keyCode === 46) {
			this.elementsList.splice(this.elementsList.indexOf(element), 1);
		}
	}

	public dropped(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.elementsList, event.previousIndex, event.currentIndex);
	}
}
