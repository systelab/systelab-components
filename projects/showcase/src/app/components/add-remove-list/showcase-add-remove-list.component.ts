import {Component} from '@angular/core';
import {ShowcaseAddRemoveListData} from './showcase-inner-add-remove-list.component';

@Component({
	selector: 'showcase-add-remove-list',
	templateUrl: 'showcase-add-remove-list.component.html'
})
export class ShowcaseAddRemoveListComponent {

	public dataList: Array<ShowcaseAddRemoveListData> = [];

	constructor() {
		this.populateList();
	}

	private populateList(): void {
		this.dataList.push(new ShowcaseAddRemoveListData(0, 'Elemento 0'));
		this.dataList.push(new ShowcaseAddRemoveListData(1, 'Elemento 1'));
		this.dataList.push(new ShowcaseAddRemoveListData(2, 'Elemento 2'));
		this.dataList.push(new ShowcaseAddRemoveListData(3, 'Elemento 3'));
		this.dataList.push(new ShowcaseAddRemoveListData(4, 'Elemento 4'));
		this.dataList.push(new ShowcaseAddRemoveListData(5, 'Elemento 5'));
		this.dataList.push(new ShowcaseAddRemoveListData(5, 'Elemento 5'));
	}
}
