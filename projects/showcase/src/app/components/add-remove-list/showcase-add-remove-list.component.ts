import { Component } from '@angular/core';
import { ShowcaseAddRemoveListData } from './showcase-inner-add-remove-list.component';

@Component({
    selector: 'showcase-add-remove-list',
    templateUrl: 'showcase-add-remove-list.component.html',
    standalone: false
})
export class ShowcaseAddRemoveListComponent {

	public dataListButtonsRightSide: Array<ShowcaseAddRemoveListData> = [];
	public dataListButtonsBottomSide: Array<ShowcaseAddRemoveListData> = [];
	public dataListButtonsCheckbox: Array<ShowcaseAddRemoveListData> = [];
	public dataListDisabled: Array<ShowcaseAddRemoveListData> = [];

	constructor() {
		this.populateList();
	}

	private populateList(): void {
		this.dataListButtonsRightSide.push(...this.generateDataList('ButtonsRightSide'));
		this.dataListButtonsBottomSide.push(...this.generateDataList('ButtonsBottomSide'));
		this.dataListButtonsCheckbox.push(...this.generateDataList('ButtonsCheckbox'));
		this.dataListDisabled.push(...this.generateDataList('Disabled'));
	}

	private generateDataList(id: string): Array<ShowcaseAddRemoveListData> {
		const dataList: Array<ShowcaseAddRemoveListData> = [];
		for (let index = 0; index < 7; index++) {
			dataList.push(new ShowcaseAddRemoveListData(`${id} ${index}`, `Element ${index}`));
		}
		return dataList;
	}
}
