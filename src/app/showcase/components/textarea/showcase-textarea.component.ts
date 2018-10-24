import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuOption } from '../../../systelab-components/contextmenu/context-menu-option';
import { ContextMenuActionData } from '../../../systelab-components/contextmenu/context-menu-action-data';
import { ContextMenuComponent } from '../../../systelab-components/contextmenu/context-menu.component';

@Component({
	selector:    'showcase-textarea',
	templateUrl: 'showcase-textarea.component.html'
})
export class ShowcaseTextareaComponent implements OnInit {

	@ViewChild('contextMenu') contextMenu: ContextMenuComponent;

	constructor() {
	}

	public contextMenuOptions: Array<ContextMenuOption> = [];

	public ngOnInit() {
		this.generateContextMenuOptions();
	}

	private generateContextMenuOptions(): void {
		this.contextMenuOptions = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, 'icon-check-circle', 'rgb(40, 167, 69)'),
			new ContextMenuOption('option2', 'Option 2', null, null, false, 'icon-minus-circle', 'rgb(255, 0, 0)', null, null),
			new ContextMenuOption('option3', 'Option 3', null, null, false, 'icon-chevron-circle-up', 'rgb(50, 50, 50)', 'rgb(21, 143, 239)')
		];
	}

	public openContextMenu(event: any) {
		event.preventDefault();
		this.contextMenu.open(event);
	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		switch (contextMenuActionData.actionId) {
			case 'option1':
				console.log('Option 1');
				break;
			case 'option2':
				console.log('Option 2');
				break;
			case 'option3':
				console.log('Option 3');
				break;
			default:
				break;
		}
	}

}
