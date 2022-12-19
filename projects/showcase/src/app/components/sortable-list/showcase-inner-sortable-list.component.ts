import {Component} from '@angular/core';
import {AbstractSortableListComponent} from 'systelab-components';

export class ShowcaseSortableListData {
	public id: string;
	public description: string;
	public isSelected: boolean;

	constructor(id: string, description: string) {
		this.id = id;
		this.description = description;
		this.isSelected = false;
	}
}

@Component({
	selector: 'systelab-inner-sortable-list',
	templateUrl: '../../../../../systelab-components/src/lib/sortable-list/abstract-sortable-list.component.html'
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

	public getIcon(element: ShowcaseSortableListData): string {
		return 'icon-bug';
	}
}
