import {Component, Input} from '@angular/core';
import {SelectedItem, TwoListItem} from '../twolist/two-list.component';
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

	constructor() {
		super();
	}

	public getDescriptionField(): string {
		return 'displayName';
	}

	public getSelectionField(): string {
		return 'selected';
	}

	public setElementNonSelected(list: Array<TwoListItem>) {
		for (const element of list) {
			element.selected = false;
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

		element.selected = !element.selected;
		if (element.selected) {
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
}
