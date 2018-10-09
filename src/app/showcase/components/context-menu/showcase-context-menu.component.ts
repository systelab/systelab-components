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
	public contextMenuOptions3: Array<ContextMenuOption> = [];
	public contextMenuOptions4: Array<ContextMenuOption> = [];
	public contextMenuOptions5: Array<ContextMenuOption> = [];
	public contextMenuOptionsDivider: Array<ContextMenuOption> = [];

	public ngOnInit() {
		this.generateContextMenuOptions();
	}

	private generateContextMenuOptions(): void {
		this.contextMenuOptions = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, 'icon-check-circle', 'rgb(40, 167, 69)'),
			new ContextMenuOption('option2', 'Option 2', null, null, false, 'icon-minus-circle', 'rgb(255, 0, 0)', null, () => this.isIconEnabled()),
			new ContextMenuOption('option3', 'Option 3', null, null, false, 'icon-chevron-circle-up', 'rgb(50, 50, 50)', 'rgb(21, 143, 239)'),
			new ContextMenuOption('option4', 'Option 3', null, null, false, 'icon-close', 'rgb(21, 143, 239)', 'rgb(255, 255, 255)'),
			new ContextMenuOption('option5', 'Option 5', null, null, false, 'icon-checkbox', 'transparent', 'rgb(214, 214, 214)', () => true, null, '20px')
		];

		this.contextMenuOptions3 = [
			new ContextMenuOption('option6', 'Option 6', null),
			new ContextMenuOption('option7', 'Option 7', null),
		];

		this.contextMenuOptions4 = [
			new ContextMenuOption('option8', 'Option 8', null),
			new ContextMenuOption('option9', 'Option 9', null),
			new ContextMenuOption('option10', 'Option 10', null),
			new ContextMenuOption('option11', 'Option 11', null),
			new ContextMenuOption('option12', 'Option 12', null),
			new ContextMenuOption('option13', 'Option 13', null),
		];

		this.contextMenuOptions2 = [
			new ContextMenuOption('option1', 'Option 1', null),
			new ContextMenuOption('option2', 'Option 2', null),
			new ContextMenuOption('option3', 'Option 3', null, null, false, undefined, null, null, null, this.contextMenuOptions3),
			new ContextMenuOption('option4', 'Option 4', null, null, false, undefined, null, null, null, this.contextMenuOptions4),
			new ContextMenuOption('option5', 'Option 5', null),
		];

		this.contextMenuOptionsDivider = [
			new ContextMenuOption('option1', 'Option 1', null),
			new ContextMenuOption('', '', null, null, true),
			new ContextMenuOption('option2', 'Option 2', null),
			new ContextMenuOption('', '', null, null, true),
			new ContextMenuOption('option3', 'Option 3', null),
			new ContextMenuOption('option4', 'Option 4', null),
		];

		this.contextMenuOptions5 = [
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
			new ContextMenuOption('largeOptions', 'Option for scroll', null),
		];

	}

	public executeContextMenuAction(contextMenuActionData: ContextMenuActionData): void {
		console.log(contextMenuActionData.actionId);
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
