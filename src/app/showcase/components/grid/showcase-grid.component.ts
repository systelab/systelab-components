import { Component } from '@angular/core';
import { ShowcaseData } from './showcase-inner-grid.component';
import { GridContextMenuOption } from '../../../systelab-components/grid/contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from '../../../systelab-components/grid/contextmenu/grid-context-menu-action-data';

@Component({
	selector:    'showcase-grid',
	templateUrl: 'showcase-grid.component.html'
})
export class ShowcaseGridComponent {

	constructor() {
	}

	public doSelect(compareProfileData: ShowcaseData): void {

	}

	public getMenu(): Array<GridContextMenuOption<ShowcaseData>> {
		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('', '', (a) => this.doMenuAction(a), null, true),
			new GridContextMenuOption('action3', 'Action 3', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action4', 'Action 4', (a) => this.doMenuAction(a), (a) => {
				return false;
			})

		];
	}

	public doMenuAction(action: GridContextMenuActionData<ShowcaseData>): void {
		if (action.actionId === 'action1') {
			console.log('action1');
		} else if (action.actionId === 'action2') {
			console.log('action2');
		} else if (action.actionId === 'action3') {
			console.log('action3');
		} else if (action.actionId === 'action4') {
			console.log('action4');
		}
	}
}
