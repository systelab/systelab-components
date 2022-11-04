import { Component } from '@angular/core';
import { AbstractAddRemoveList } from 'systelab-components';

export class ShowcaseAddRemoveListData {
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
	selector:    'systelab-inner-add-remove-list',
	templateUrl: '../../../../../systelab-components/src/lib/add-remove-list/abstract-add-remove-list.component.html'
})
export class ShowcaseInnerAddRemoveListComponent extends AbstractAddRemoveList<ShowcaseAddRemoveListData> {

	constructor() {
		super();
		this.showIcon = true;
	}

	public getDescriptionField(element: ShowcaseAddRemoveListData): string {
		return 'description';
	}

	public getSelectionField(element: ShowcaseAddRemoveListData): string {
		return 'isSelected';
	}

	public getIcon(element: ShowcaseAddRemoveListData): string {
		return 'icon-clock';
	}

	public add(): void {

		this.elementsList.push(new ShowcaseAddRemoveListData(`New Added ${this.elementsList.length}`, 'New Added'));
	}

	public remove(): void {
		const selectedRows = this.getSelectedRows();
		selectedRows.forEach(selectedElement => {
			this.elementsList.splice(this.elementsList.indexOf(selectedElement), 1);
		});
	}
}
