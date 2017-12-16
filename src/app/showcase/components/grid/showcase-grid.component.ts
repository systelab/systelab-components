import { Component } from '@angular/core';
import { QCControlValueData } from './showcase-inner-grid.component';
import { GridContextMenuOption } from '../../../systelab-components/grid/contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from '../../../systelab-components/grid/contextmenu/grid-context-menu-action-data';

@Component({
	selector:    'showcase-grid',
	templateUrl: 'showcase-grid.component.html'
})
export class ShowcaseGridComponent {


	constructor() {
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
