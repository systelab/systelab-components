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

	public doSelect(showcaseData: ShowcaseData): void {
	}

	public getMenu(): Array<GridContextMenuOption<ShowcaseData>> {
		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('', '', (a) => this.doMenuAction(a), null, true),
			new GridContextMenuOption('action3', 'Action 3', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action4', 'Action 4', (a) => this.doMenuAction(a), a => false)
		];
	}

	public doMenuAction(action: GridContextMenuActionData<ShowcaseData>): void {
		console.log('Here ' + action.actionId);
		console.log('With ' + action.data);
		console.log('With ' + action.multipleSelectedData);

	}
}
