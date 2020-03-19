import {Component} from '@angular/core';
import {ShowcaseSortableListData} from './showcase-inner-sortable-list.component';

@Component({
	selector: 'showcase-sortable-list',
	templateUrl: 'showcase-sortable-list.component.html'
})
export class ShowcaseSortableListComponent {

	public dataList: Array<ShowcaseSortableListData> = [];

	constructor() {
		this.populateList();
	}

	private populateList(): void {
		this.dataList.push(new ShowcaseSortableListData(0, 'Elemento 0'));
		this.dataList.push(new ShowcaseSortableListData(1, 'Elemento 1'));
		this.dataList.push(new ShowcaseSortableListData(2, 'Elemento 2'));
		this.dataList.push(new ShowcaseSortableListData(3, 'Elemento 3'));
		this.dataList.push(new ShowcaseSortableListData(4, 'Elemento 4'));
		this.dataList.push(new ShowcaseSortableListData(5, 'Elemento 5'));
		this.dataList.push(new ShowcaseSortableListData(5, 'Elemento 5'));
	}
}
