import { Component, OnInit } from '@angular/core';
import { GridContextMenuOption } from 'systelab-components';
import { GridContextMenuActionData } from 'systelab-components';
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

		return [
			new GridContextMenuOption('action1', 'Action 1', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('action2', 'Action 2', (a) => this.doMenuAction(a)),
			new GridContextMenuOption('', '', (a) => this.doMenuAction(a), null, true),
			new GridContextMenuOption('action3', 'Action 3', null, () => true, false, undefined, null, null, contextMenuSubOptions),
			new GridContextMenuOption('option4', 'Action 4', null, () => true, false, undefined, null, null, contextMenuSubOptions),
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
			new GridContextMenuOption('headeraction4', 'Header Action 4')
		];
	}

}
