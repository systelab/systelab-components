import {Component} from '@angular/core';
import {AbstractSortableListComponent} from '../../../systelab-components/sortable-list/abstract-sortable-list.component';

export class ShowcaseSortableListData {
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
	selector: 'systelab-inner-sortable-list',
	templateUrl: '../../../systelab-components/sortable-list/abstract-sortable-list.component.html'
})
export class ShowcaseInnerSortableListComponent extends AbstractSortableListComponent<ShowcaseSortableListData> {

	constructor() {
		super();
		this.deleteWithSupr = true;
		this.showIcon = true;
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getSelectionField(): string {
		return 'isSelected';
	}

	public getIcon(): string {
		return 'icon-bug';
	}
}
