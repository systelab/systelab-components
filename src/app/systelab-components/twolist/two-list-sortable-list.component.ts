import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentSelectionStatus, TwoListItem } from './two-list.component';
import { AbstractSortableListComponent } from '../sortable-list/abstract-sortable-list.component';
import { DataFilterPipe } from './datafilter.pipe';

@Component({
	selector:    'systelab-two-list-sortable-list',
	templateUrl: '../sortable-list/abstract-sortable-list.component.html'
})
export class TwoListSortableListComponent extends AbstractSortableListComponent<TwoListItem> {

	@Input() public currentSelectionStatus: CurrentSelectionStatus;
	@Input() public available: Array<TwoListItem>;
	@Input() public secondListSearch: string;

	@Output() public dbClick: EventEmitter<TwoListItem> = new EventEmitter();

	constructor() {
		super();
	}

	public getDescriptionField(): string {
		return 'displayName';
	}

	public getSelectionField(): string {
		return 'isSelected';
	}

	public getIcon(): string {
		return '';
	}

	private unselectAllElementsOf(list: Array<TwoListItem>) {
		for (const element of list) {
			element.isSelected = false;
		}
	}

	public selectElement(element: TwoListItem, ev: KeyboardEvent) {
		this.unselectAllElementsOf(this.available);

		this.currentSelectionStatus.available = [];
		const visibleFilteredList = new DataFilterPipe().transform(this.elementsList, this.secondListSearch);

		if (this.currentSelectionStatus.visible.length > 0 && ev.shiftKey) {
			const indexOfLastSelected = visibleFilteredList.indexOf(this.currentSelectionStatus.visible[0]);
			const indexOfSelected = visibleFilteredList.indexOf(element);

			this.unselectAllElementsOf(this.currentSelectionStatus.visible);
			this.currentSelectionStatus.visible = [];

			let i;
			if (indexOfLastSelected < indexOfSelected) {
				for (i = indexOfLastSelected; i <= indexOfSelected; i++) {
					visibleFilteredList[i].selected = true;
					this.currentSelectionStatus.visible.push(visibleFilteredList[i]);
				}

			} else {
				for (i = indexOfLastSelected; i >= indexOfSelected; i--) {
					visibleFilteredList[i].selected = true;
					this.currentSelectionStatus.visible.push(visibleFilteredList[i]);
				}
			}
			return;
		}

		element.isSelected = !element.isSelected;
		if (element.isSelected) {
			if (this.currentSelectionStatus.visible.length === 0 || (this.currentSelectionStatus.visible.length > 0 && ev.ctrlKey)) {
				this.currentSelectionStatus.visible.push(element);
			} else {
				this.unselectAllElementsOf(this.currentSelectionStatus.visible);
				this.currentSelectionStatus.visible = [];
				this.currentSelectionStatus.visible.push(element);
			}
		} else {
			if (this.currentSelectionStatus.visible.length === 0 || (this.currentSelectionStatus.visible.length > 0 && ev.ctrlKey)) {
				this.currentSelectionStatus.visible.splice(this.currentSelectionStatus.visible.indexOf(element), 1);
			} else {
				this.unselectAllElementsOf(this.currentSelectionStatus.visible);
				this.currentSelectionStatus.visible = [];

			}
		}
	}

	public dbClickSelectedItem(element: TwoListItem) {
		this.dbClick.emit(element);
	}
}
