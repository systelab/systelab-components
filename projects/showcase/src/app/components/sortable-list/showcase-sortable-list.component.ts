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

		for (let index = 0; index < 7; index++) {
			this.dataList.push(new ShowcaseSortableListData(`Sortable List ${index}`, `Element ${index}`));
		}
	}
}
