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

	public getIcon(item: TwoListItem): string {
		return '';
	}

	public selectElement(element: TwoListItem, ev: KeyboardEvent) {
		const visibleFilteredList = new DataFilterPipe().transform(this.elementsList, this.secondListSearch);
		this.currentSelectionStatus.selectVisible(element, visibleFilteredList, ev.shiftKey, ev.ctrlKey);
	}

	public dbClickSelectedItem(element: TwoListItem) {
		this.dbClick.emit(element);
	}
}
