import {Component} from '@angular/core';
import {ContextMenuOption} from '../../../systelab-components/contextmenu/context-menu-option';
import {ContextMenuActionData} from '../../../systelab-components/contextmenu/context-menu-action-data';

@Component({
	selector: 'showcase-context-menu',
	templateUrl: 'showcase-context-menu.component.html'
})
export class ShowcaseContextMenu {

	public contextMenuOptions: Array<ContextMenuOption> = [];

	private generateContextMenuOptions(): void {
		this.contextMenuOptions = [
			new ContextMenuOption('results', 'Results', null,)
		];
	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		switch (contextMenuActionData.actionId) {
			case 'results':
				console.log('action');
				break;
			default:
				break;
		}
	}

}
