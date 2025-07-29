import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { TreeListBoxElement } from '../abstract-api-tree-listbox.component';

@Component({
    selector: 'abstract-listbox-renderer',
    templateUrl: 'abstract-tree-listbox-renderer.component.html',
    standalone: false
})
export class AbstractTreeListboxRendererComponent implements AgRendererComponent {
	public params: any;

	public isCheckboxActive: boolean;
	public id: string;
	public description: string;
	public level: number;
	public isMultipleSelection = false;
	public checkId: string = (Math.floor(Math.random() * (999999999999 - 1))).toString();

	public agInit(params: any): void {
		this.params = params;
		if (params.data) {
			const listBoxElement: TreeListBoxElement<any> = params.data;
			if (listBoxElement.level === 0) {
				this.id = listBoxElement.nodeData[params.level0IDField];
				this.description = listBoxElement.nodeData[params.level0DescriptionField];
			} else {
				this.id = listBoxElement.nodeData[params.level1IDField];
				this.description = listBoxElement.nodeData[params.level1DescriptionField];
			}
			this.isCheckboxActive = listBoxElement.selected;
			this.level = listBoxElement.level;
			this.isMultipleSelection = (<any>params).isMultipleSelection;
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

	public changeValue(): void {
		this.params.changeFunction(this.params.data);

	}
}
