import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataFilterPipe} from './datafilter.pipe';
import {polyfill} from 'mobile-drag-drop';

export class TwoListItem {
	constructor(public displayName: string, public colId: string, public selected: boolean, public visible: boolean) {
	}
}

export class SelectedItem {
	constructor(public available: Array<TwoListItem>, public current: Array<TwoListItem>) {
	}
}

@Component({
	selector: 'systelab-two-list',
	templateUrl: 'two-list.component.html',
	styles: [`
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

	@Output() public visibleChange = new EventEmitter();

	@Output() public availableChange = new EventEmitter();

	@Input() public displayAttr: string;
	@Input() public initialAvailableColumns: Array<TwoListItem>;
	@Input() public defaultVisibleColumns: Array<TwoListItem>;
	@Input() public defaultHiddenColumns: Array<TwoListItem>;

	public firstListSearch: string;
	public secondListSearch: string;
	public selected: SelectedItem = new SelectedItem([], []);

	constructor() {
		polyfill({});
	}

	public preventDefault(event) {
		event.mouseEvent.preventDefault();
		return false;
	}

	public add() {
		for (const element of this.selected.available) {
			element.visible = true;
		}
		this.visible = this.visible.concat(new DataFilterPipe().transform(this.selected.available, this.firstListSearch));
		this.firstListSearch = '';
		this.secondListSearch = '';
		this.refreshAvailable();
	}

	public remove() {

		for (const element of this.selected.available) {
			element.visible = false;
		}

		this.available = this.available.concat(new DataFilterPipe().transform(this.selected.current, this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform(this.selected.current, this.secondListSearch));
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
				if (actual.displayName === list[j].displayName) {
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

	public setElementNonSelected(list: Array<TwoListItem>) {
		for (const element of list) {
			element.selected = false;
		}
	}

	public setDefaultColumnValues(): void {
		this.available = this.defaultHiddenColumns;
		this.visible = this.defaultVisibleColumns;
	}

	public removeItemsFromList(list: Array<any>, itemsToRemove: Array<any>): Array<any> {
		const resultList: Array<any> = [];

		for (const element of list) {
			let match = false;
			for (const item of itemsToRemove) {
				if (item[this.displayAttr] === element[this.displayAttr]) {
					match = true;
					break;
				}
			}
			if (!match) {
				resultList.push(element);
			}
		}
		return resultList;
	}

	public refreshAvailable() {
		this.available = this.removeItemsFromList(new DataFilterPipe().transform(this.available, this.firstListSearch), this.visible);
		this.selected.available = [];
		this.selected.current = [];
		this.setElementNonSelected(this.available);
		this.setElementNonSelected(this.visible);
	}

	public selectAvailableItem(element: TwoListItem, ev: KeyboardEvent) {
		this.selected.current = [];
		this.setElementNonSelected(this.visible);
		const availableFilteredList = new DataFilterPipe().transform(this.available, this.firstListSearch);

		if (this.selected.available.length > 0 && ev.shiftKey) {
			const indexOfLastSelected = availableFilteredList.indexOf(this.selected.available[0]);
			const indexOfSelected = availableFilteredList.indexOf(element);

			this.setElementNonSelected(this.selected.available);
			this.selected.available = [];

			let i;
			if (indexOfLastSelected < indexOfSelected) {
				for (i = indexOfLastSelected; i <= indexOfSelected; i++) {
					availableFilteredList[i].selected = true;
					this.selected.available.push(availableFilteredList[i]);
				}

			} else {
				for (i = indexOfLastSelected; i >= indexOfSelected; i--) {
					availableFilteredList[i].selected = true;
					this.selected.available.push(availableFilteredList[i]);
				}
			}
			return;
		}

		element.selected = !element.selected;
		if (element.selected) {
			if (this.selected.available.length === 0 || (this.selected.available.length > 0 && ev.ctrlKey)) {
				this.selected.available.push(element);
			} else {
				this.setElementNonSelected(this.selected.available);
				this.selected.available = [];
				this.selected.available.push(element);
			}

		} else {
			if (this.selected.available.length === 0 || (this.selected.available.length > 0 && ev.ctrlKey)) {
				this.selected.available.splice(this.selected.available.indexOf(element), 1);
			} else {
				this.setElementNonSelected(this.selected.available);
				this.selected.available = [];
			}
		}
	}

	public selectVisibleCurrent(element: TwoListItem, ev: KeyboardEvent) {
		this.selected.available = [];
		this.setElementNonSelected(this.available);
		const visibleFilteredList = new DataFilterPipe().transform(this.visible, this.secondListSearch);

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
