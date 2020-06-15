import { Component } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from 'systelab-components';
import { GridContextMenuOption } from 'systelab-components';
import { GridContextMenuActionData } from 'systelab-components';
import { ShowcaseData } from '../../grid/showcase-grid.model';

export class ShowcaseStandardDialogParameters extends SystelabModalContext {
	public index: number;
	public width = 1000;
	public height = 600;
}

@Component({
	templateUrl: 'showcase-standard-dialog.component.html',
})
export class ShowcaseStandardDialog implements ModalComponent<ShowcaseStandardDialogParameters> {

	protected parameters: ShowcaseStandardDialogParameters;

	public static getParameters(): ShowcaseStandardDialogParameters {
		return new ShowcaseStandardDialogParameters();
	}

	constructor(public dialog: DialogRef<ShowcaseStandardDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public doSelect(compareProfileData: ShowcaseData): void {
		console.log(compareProfileData);
	}

	public getMenu(): Array<GridContextMenuOption<ShowcaseData>> {
		return [
			new GridContextMenuOption('action1', 'Action 1'),
			new GridContextMenuOption('action2', 'Action 2'),
			new GridContextMenuOption('action3', 'Action 3')
		];
	}

	public doMenuAction(action: GridContextMenuActionData<ShowcaseData>): void {
		if (action.actionId === 'action1') {
		} else if (action.actionId === 'action2') {
		} else if (action.actionId === 'action3') {
		}
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

