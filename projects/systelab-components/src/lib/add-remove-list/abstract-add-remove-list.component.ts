import { Directive, Input, OnInit } from '@angular/core';
import {AbstractSortableListComponent} from '../sortable-list/abstract-sortable-list.component';

@Directive()
export abstract class AbstractAddRemoveList<T> extends AbstractSortableListComponent<T> implements OnInit {

	@Input() public override elementsList: Array<T> = [];
	@Input() public buttonsOnBottom = false;
	@Input() public isDisabled = false;
	@Input() public showChecks = false;
	@Input() public showSelectedRowsInRemoveButton = false;

	constructor() {
		super();
	}

	public ngOnInit(): void {
	}

	public add(): void {
	}

	public remove(): void {
	}

	public override getDescription(element: T): string {
		return element[this.getDescriptionField(element)];
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}

	public getSelectedElements(): string {
		if (this.showSelectedRowsInRemoveButton) {
			const selectedElements = this.elementsList.filter(element=> element[this.getSelectionField(element)]).length;
			return selectedElements > 0 ? `(${selectedElements})` : '';
		} else {
			return '';
		}
	}

	public override selectElement(element: T, ev: KeyboardEvent) {
		if (!this.showChecks) {
			if (!ev.ctrlKey) {
				this.elementsList.forEach(elementInList => {
					elementInList[this.getSelectionField(element)] = false;
				});
			}
			element[this.getSelectionField(element)] = !element[this.getSelectionField(element)];
		}
	}

	public selectCheckbox(element: T) {
		element[this.getSelectionField(element)] = !element[this.getSelectionField(element)];
	}

	public abstract override getDescriptionField(element: T): string;
}
