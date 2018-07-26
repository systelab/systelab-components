import {Component, OnInit} from '@angular/core';
import {ContextMenuOption} from '../../../systelab-components/contextmenu/context-menu-option';
import {ContextMenuActionData} from '../../../systelab-components/contextmenu/context-menu-action-data';

@Component({
	selector: 'showcase-context-menu',
	templateUrl: 'showcase-context-menu.component.html'
})
export class ShowcaseContextMenu implements OnInit {

	public contextMenuOptions: Array<ContextMenuOption> = [];
	public contextMenuOptions2: Array<ContextMenuOption> = [];

	public ngOnInit() {
		this.generateContextMenuOptions();
	}

	private generateContextMenuOptions(): void {
		this.contextMenuOptions = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, 'icon-check-circle', 'rgb(0, 255, 0)'),
			new ContextMenuOption('option2', 'Option 2', null, null, false, 'icon-minus-circle', 'rgb(255, 0, 0)', () => this.isIconEnabled())
		];

		this.contextMenuOptions2 = [
			new ContextMenuOption('option1', 'Option 1', null),
			new ContextMenuOption('option2', 'Option 2', null)
		];
	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		switch (contextMenuActionData.actionId) {
			case 'option1':
				console.log('Option 1');
				break;
			case 'option2':
				console.log('Option 2');
				break;
			default:
				break;
		}
	}

	private isIconEnabled(): boolean {
		return false;
	}

}
