import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataFilterPipe } from './datafilter.pipe';
import { CurrentSelectionStatus, TwoListItem } from './two-list-utilities';

@Component({
    selector: 'systelab-two-list',
    templateUrl: 'two-list.component.html',
    styles: [`
        :host {
            width: 100%;
            height: 100%;
        }
	`],
    standalone: false
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
		this.refresh(false);
	}

	public addAll() {
		this.visible = this.visible.concat(new DataFilterPipe().transform(this.available, this.firstListSearch));
		for (const element of this.visible) {
			element.isVisible = true;
		}
		this.refresh(false);
	}

	public removeAll() {
		this.available = this.available.concat(new DataFilterPipe().transform(this.visible, this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform(this.visible, this.secondListSearch));
		for (const element of this.available) {
			element.isVisible = false;
		}
		this.refresh(true);
	}

	public remove() {
		for (const element of this.currentSelectionStatus.available) {
			element.isVisible = false;
		}
		this.available = this.available.concat(new DataFilterPipe().transform(this.currentSelectionStatus.visible, this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform(this.currentSelectionStatus.visible, this.secondListSearch));
		this.refresh(true);
	}

	private refresh(sortAvailable: boolean) {
		this.firstListSearch = '';
		this.secondListSearch = '';
		if (sortAvailable) {
			this.available = this.sort(this.available);
		}
		this.available = this.removeItemsFromList(new DataFilterPipe().transform(this.available, this.firstListSearch), this.visible);
		this.currentSelectionStatus.clearAll();
	}

	private sort(list: Array<TwoListItem>) {

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

	public setDefaultColumnValues(): void {
		this.available = this.defaultHiddenColumns;
		this.visible = this.defaultVisibleColumns;
	}

	public removeItemsFromList(list: Array<any>, itemsToRemove: Array<any>): Array<any> {
		return list.filter(element => !itemsToRemove.some(item => item.colId === element.colId));
	}

	public selectAvailableItem(element: TwoListItem, ev: KeyboardEvent) {
		const availableFilteredList = new DataFilterPipe().transform(this.available, this.firstListSearch);
		this.currentSelectionStatus.selectAvailable(element, availableFilteredList, ev.shiftKey, ev.ctrlKey);
	}

	public moveSelectedItemsFromAvailableToVisible(element: TwoListItem, ev: Event) {
		this.available = this.removeItemsFromList(this.available, [element]);
		element.isVisible = true;
		this.visible = this.visible.concat(element);
	}

	public moveSelectedItemsFromVisibleToAvailable(element: TwoListItem) {
		element.isVisible = false;
		this.available = this.available.concat(new DataFilterPipe().transform([element], this.secondListSearch));
		this.visible = this.removeItemsFromList(this.visible, new DataFilterPipe().transform([element], this.secondListSearch));
		this.refresh(true);
	}
}
