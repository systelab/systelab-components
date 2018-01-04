import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { SystelabModalContext } from '../../../../systelab-components/modal/modal-context';
import { ShowcaseData } from '../../grid/showcase-inner-grid.component';
import { GridContextMenuOption } from '../../../../systelab-components/grid/contextmenu/grid-context-menu-option';
import { GridContextMenuActionData } from '../../../../systelab-components/grid/contextmenu/grid-context-menu-action-data';

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

	constructor(public dialog: DialogRef<ShowcaseStandardDialogParameters>) {
		this.parameters = dialog.context;
	}

	public close(): void {
		this.dialog.close('This is a test');
	}

	public static getParameters(): ShowcaseStandardDialogParameters {
		return new ShowcaseStandardDialogParameters();
	}

	public doSelect(compareProfileData: ShowcaseData): void {

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
}

