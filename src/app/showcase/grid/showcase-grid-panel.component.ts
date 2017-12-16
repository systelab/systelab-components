import { Component, ViewChild } from '@angular/core';
import { DialogService } from '../../systelab-components/modal/dialog/dialog.service';
import { QCControlValueData, ShowcaseGrid } from './showcase-grid.component';
import { GridContextMenuOption } from '../../systelab-components/grid/contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from '../../systelab-components/grid/contextmenu/grid-context-menu-action-data';

@Component({
	selector:    'showcase-grid-panel',
	templateUrl: 'showcase-grid-panel.component.html',
})
export class ShowcaseGridPanelComponent {
	@ViewChild('grid') grid: ShowcaseGrid;

	constructor(protected dialogService: DialogService) {
	}

	public showOptions() {
		this.grid.showOptions();
	}

	public doSelect(compareProfileData: QCControlValueData): void {

	}
	public getMenu(): Array<GridContextMenuOption<QCControlValueData>> {
		return [
			new GridContextMenuOption('action1', 'Action 1'),
			new GridContextMenuOption('action2', 'Action 2'),
			new GridContextMenuOption('action3', 'Action 3')
		];
	}
	public doMenuAction(action: GridContextMenuActionData<QCControlValueData>): void {
		if (action.actionId === 'action1') {
		} else if (action.actionId === 'action2') {
		} else if (action.actionId === 'action3') {
		}
	}
}
