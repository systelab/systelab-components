import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SelectedItem, TwoListItem} from './two-list.component';
import {AbstractSortableListComponent} from '../sortable-list/abstract-sortable-list.component';
import {DataFilterPipe} from './datafilter.pipe';


@Component({
	selector: 'systelab-two-list-sortable-list',
	templateUrl: '../sortable-list/abstract-sortable-list.component.html'
})
export class TwoListSortableListComponent extends AbstractSortableListComponent<TwoListItem> {

	@Input() public selected: SelectedItem;
	@Input() public available: Array<TwoListItem>;
	@Input() public visible: Array<TwoListItem>;
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

	public setElementNonSelected(list: Array<TwoListItem>) {
		for (const element of list) {
			element.isSelected = false;
		}
	}

	public selectVisibleCurrent(element: TwoListItem, ev: KeyboardEvent) {
		this.selected.available = [];
		this.setElementNonSelected(this.available);
		const visibleFilteredList = new DataFilterPipe().transform(this.elementsList, this.secondListSearch);

		if (this.selected.current.length > 0 && ev.shiftKey) {
			const indexOfLastSelected = visibleFilteredList.indexOf(this.selected.current[0]);
			const indexOfSelected = visibleFilteredList.indexOf(element);

			this.setElementNonSelected(this.selected.current);
			this.selected.current = [];

			let i;
			if (indexOfLastSelected < indexOfSelected) {
				for (i = indexOfLastSelected; i <= indexOfSelected; i++) {
					visibleFilteredList[i].selected = true;
					this.selected.current.push(visibleFilteredList[i]);
				}

			} else {
				for (i = indexOfLastSelected; i >= indexOfSelected; i--) {
					visibleFilteredList[i].selected = true;
					this.selected.current.push(visibleFilteredList[i]);
				}
			}
			return;
		}

		element.isSelected = !element.isSelected;
		if (element.isSelected) {
			if (this.selected.current.length === 0 || (this.selected.current.length > 0 && ev.ctrlKey)) {
				this.selected.current.push(element);
			} else {
				this.setElementNonSelected(this.selected.current);
				this.selected.current = [];
				this.selected.current.push(element);
			}
		} else {
			if (this.selected.current.length === 0 || (this.selected.current.length > 0 && ev.ctrlKey)) {
				this.selected.current.splice(this.selected.current.indexOf(element), 1);
			} else {
				this.setElementNonSelected(this.selected.current);
				this.selected.current = [];

			}
		}
	}

	public dbClickSelectedItem(element: TwoListItem) {
			this.dbClick.emit(element);
	}
}
