import { Component, OnInit } from '@angular/core';
import { GridContextMenuOption } from '../../../systelab-components/grid/contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from '../../../systelab-components/grid/contextmenu/grid-context-menu-action-data';
import { ShowcaseData } from './showcase-grid.model';
import { ShowcaseGridUtil } from './showcase-grid.util';

@Component({
	selector:    'showcase-grid',
	templateUrl: 'showcase-grid.component.html'
})
export class ShowcaseGridComponent implements OnInit {

	public gridData: ShowcaseData[] = [];

	constructor() {
	}

	public ngOnInit(): void {
		this.gridData = ShowcaseGridUtil.getGridData();
	}

	public doSelect(showcaseData: ShowcaseData): void {
		console.log(showcaseData);
	}

	public getMenu(): Array<GridContextMenuOption<ShowcaseData>> {


		const contextMenuSubOptions: Array<GridContextMenuOption<ShowcaseData>> = [
			new GridContextMenuOption('option1', 'Option 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option2', 'Option 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option5', 'Option 5', (a) => this.doMenuAction(a)),
		];

		const contextMenuSubOptions22: Array<GridContextMenuOption<ShowcaseData>> = [
			new GridContextMenuOption('option841', 'Option 841 son of 84 son of 8 son of 4', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option842', 'Option 842 son of 84 son of 8 son of 4', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option843', 'Option 843 son of 84 son of 8 son of 4', (a) => this.doMenuAction(a)),
		];

		const contextMenuSubOptions21: Array<GridContextMenuOption<ShowcaseData>> = [
			new GridContextMenuOption('option81', 'Option 81', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option82', 'Option 82 son of 8 son of 4', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option83', 'Option 83 son of 8 son of 4', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option84', 'Option 84', null, () => true, false, undefined, null, null, contextMenuSubOptions22),
		];


		const contextMenuSubOptions2: Array<GridContextMenuOption<ShowcaseData>> = [
			new GridContextMenuOption('option7', 'Option 7', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('option8', 'Option 8  with a long name', null, () => true, false, undefined, null, null, contextMenuSubOptions21),
			new GridContextMenuOption('option9', 'Option 9', (a) => this.doMenuAction(a)),
		];

		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('', '', (a) => this.doMenuAction(a), null, true),
			new GridContextMenuOption('action3', 'Action 3', null, () => true, false, undefined, null, null, contextMenuSubOptions),
			new GridContextMenuOption('action4', 'Action 4', null, () => true, false, undefined, null, null, contextMenuSubOptions2),
			new GridContextMenuOption('action5', 'Action 5', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action6', 'Action 6', (a) => this.doMenuAction(a), () => false)
		];
	}

	public doMenuAction(action: GridContextMenuActionData<ShowcaseData>): void {
		console.log('Here ' + action.actionId);
		console.log('With ' + action.multipleSelectedData);
	}

	public getHeaderContextMenuOptions(): Array<GridContextMenuOption<string>> {
		return [
			new GridContextMenuOption('headeraction1', 'Header Action 1'),
			new GridContextMenuOption('headeraction2', 'Header Action 2'),
			new GridContextMenuOption('headeraction3', 'Header Action 3'),
			new GridContextMenuOption('headeraction4', 'Header Action 4'),
		];
	}

}
