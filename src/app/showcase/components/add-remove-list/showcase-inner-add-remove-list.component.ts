import {Component} from '@angular/core';
import {AbstractSortableListComponent} from '../../../systelab-components/sortable-list/abstract-sortable-list.component';
import {AbstractAddRemoveList} from '../../../systelab-components/add-remove-list/abstract-add-remove-list.component';

export class ShowcaseAddRemoveListData {
	public id: number;
	public description: string;
	public isSelected: boolean;

	constructor(id: number, description: string) {
		this.id = id;
		this.description = description;
		this.isSelected = false;
	}
}

@Component({
	selector: 'systelab-inner-add-remove-list',
	templateUrl: '../../../systelab-components/add-remove-list/abstract-add-remove-list.component.html'
})
export class ShowcaseInnerAddRemoveListComponent extends AbstractAddRemoveList<ShowcaseAddRemoveListData> {

	constructor() {
		super();
	}

	public getDescriptionField(element: ShowcaseAddRemoveListData): string {
		return 'description';
	}

	public getSelectionField(element: ShowcaseAddRemoveListData): string {
		return 'isSelected';
	}

	public add(): void {
		this.elementsList.push(new ShowcaseAddRemoveListData(9, 'New Added'));
	}

	public remove(): void {
		const selectedRows = this.getSelectedRows();
		selectedRows.forEach(selectedElement => {
			this.elementsList.splice(this.elementsList.indexOf(selectedElement), 1);
		});
	}
}
