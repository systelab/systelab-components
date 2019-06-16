import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataFilterPipe } from './datafilter.pipe';

export class TwoListItem {
	constructor(public displayName: string, public colId: string, public isSelected: boolean, public isVisible: boolean) {
	}
}

export class CurrentSelectionStatus {
	constructor(public available: Array<TwoListItem>, public visible: Array<TwoListItem>) {
	}

	public clean() {
		this.available = [];
		this.visible = [];
	}
}

@Component({
	selector:    'systelab-two-list',
	templateUrl: 'two-list.component.html',
	styles:      [`
      :host {
          width: 100%;
          height: 100%;
      }
	`]
})
export class TwoListComponent {

	public _available: Array<TwoListItem> = [];
	@Input()
	get available() {
		return this._available;
	}

	set available(list: Array<TwoListItem>) {

		this._available = list;
		this.availableChange.emit(this._available);
	}

	public _visible: Array<TwoListItem> = [];
	@Input()
	get visible() {
		return this._visible;
	}

	set visible(list: Array<TwoListItem>) {

		this._visible = list;
		this.visibleChange.emit(this._visible);
	}

	@Output() public visibleChange = new EventEmitter<Array<TwoListItem>>();
	@Output() public availableChange = new EventEmitter<Array<TwoListItem>>();

	@Input() public initialAvailableColumns: Array<TwoListItem>;
	@Input() public defaultVisibleColumns: Array<TwoListItem>;
	@Input() public defaultHiddenColumns: Array<TwoListItem>;

	@Input() public dragAndDropEnabled = true;

	public firstListSearch: string;
	public secondListSearch: string;
	public currentSelectionStatus: CurrentSelectionStatus = new CurrentSelectionStatus([], []);

	constructor() {
	}

	public add() {
		for (const element of this.currentSelectionStatus.available) {
			element.isVisible = true;
		}
		this.visible = this.visible.concat(new DataFilterPipe().transform(this.currentSelectionStatus.available, this.firstListSearch));
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.refreshAvailable();
	}

	public addAll() {
		this.visible = this.visible.concat(new DataFilterPipe().transform(this.available, this.firstListSearch));
		for (const element of this.visible) {
			element.isVisible = true;
		}
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.refreshAvailable();
	}

	public removeAll() {
		this.available = this.available.concat(new DataFilterPipe().transform(this.visible, this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform(this.visible, this.secondListSearch));
		for (const element of this.available) {
			element.isVisible = false;
		}
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.available = this.sort(this.available);
		this.refreshAvailable();
	}

	public remove() {

		for (const element of this.currentSelectionStatus.available) {
			element.isVisible = false;
		}

		this.available = this.available.concat(new DataFilterPipe().transform(this.currentSelectionStatus.visible, this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform(this.currentSelectionStatus.visible, this.secondListSearch));
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.available = this.sort(this.available);
		this.refreshAvailable();
	}

	public sort(list: Array<TwoListItem>) {

		const arrayAux = [];
		const theReturn: Array<TwoListItem> = [];
		const length = list.length;

		for (const actual of this.initialAvailableColumns) {
			if (arrayAux.length === length) {
				break;
			}
			for (let j = 0; j < length; j++) {
				if (actual.colId === list[j].colId) {
					arrayAux.push(j);
					break;
				}
			}
		}
		for (let i = 0; i < length; i++) {
			theReturn[i] = list[arrayAux[i]];
		}
		return theReturn;
	}

	private unselectAllElementsOf(list: Array<TwoListItem>) {
		list.forEach(element => element.isSelected = false);
	}

	public setDefaultColumnValues(): void {
		this.available = this.defaultHiddenColumns;
		this.visible = this.defaultVisibleColumns;
	}

	public removeItemsFromList(list: Array<any>, itemsToRemove: Array<any>): Array<any> {
		return list.filter(element => !itemsToRemove.some(item => item.colId === element.colId));
	}

	public refreshAvailable() {
		this.available = this.removeItemsFromList(new DataFilterPipe().transform(this.available, this.firstListSearch), this.visible);
		this.currentSelectionStatus.clean();
		this.unselectAllElementsOf(this.available);
		this.unselectAllElementsOf(this.visible);
	}

	public selectAvailableItem(element: TwoListItem, ev: KeyboardEvent) {
		this.currentSelectionStatus.visible = [];
		this.unselectAllElementsOf(this.visible);

		if (this.currentSelectionStatus.available.length > 0 && ev.shiftKey) {
			const availableFilteredList = new DataFilterPipe().transform(this.available, this.firstListSearch);

			const indexOfLastSelected = availableFilteredList.indexOf(this.currentSelectionStatus.available[0]);
			const indexOfSelected = availableFilteredList.indexOf(element);

			this.unselectAllElementsOf(this.currentSelectionStatus.available);
			this.currentSelectionStatus.available = [];

			if (indexOfLastSelected < indexOfSelected) {
				for (let i = indexOfLastSelected; i <= indexOfSelected; i++) {
					availableFilteredList[i].isSelected = true;
					this.currentSelectionStatus.available.push(availableFilteredList[i]);
				}

			} else {
				for (let i = indexOfLastSelected; i >= indexOfSelected; i--) {
					availableFilteredList[i].isSelected = true;
					this.currentSelectionStatus.available.push(availableFilteredList[i]);
				}
			}
		} else {
			element.isSelected = !element.isSelected;
			if (element.isSelected) {
				if (this.currentSelectionStatus.available.length === 0 || (this.currentSelectionStatus.available.length > 0 && ev.ctrlKey)) {
					this.currentSelectionStatus.available.push(element);
				} else {
					this.unselectAllElementsOf(this.currentSelectionStatus.available);
					this.currentSelectionStatus.available = [element];
				}

			} else {
				if (this.currentSelectionStatus.available.length === 0 || (this.currentSelectionStatus.available.length > 0 && ev.ctrlKey)) {
					this.currentSelectionStatus.available.splice(this.currentSelectionStatus.available.indexOf(element), 1);
				} else {
					this.unselectAllElementsOf(this.currentSelectionStatus.available);
					this.currentSelectionStatus.available = [];
				}
			}
		}
	}

	public moveSelectedItemsFromAvailableToVisible(element: TwoListItem, ev: Event) {
		this.available = this.removeItemsFromList(this.available, [element]);
		element.isVisible = true;
		this.visible = this.visible.concat(element);
		this.visible = this.sort(this.visible);
	}

	public moveSelectedItemsFromVisibleToAvailable(element: TwoListItem) {
		element.isVisible = false;
		this.available = this.available.concat(new DataFilterPipe().transform([element], this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform([element], this.secondListSearch));
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.available = this.sort(this.available);
		this.refreshAvailable();
	}
}
