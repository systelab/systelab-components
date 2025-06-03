import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenuActionData, ContextMenuComponent, ContextMenuOption } from 'systelab-components';

@Component({
    selector: 'showcase-textarea',
    templateUrl: 'showcase-textarea.component.html',
    standalone: false
})
export class ShowcaseTextareaComponent implements OnInit {

	@ViewChild('contextMenu', {static: false}) contextMenu: ContextMenuComponent;

	public contextMenuOptions: Array<ContextMenuOption> = [];
	public contextMenuOptions2: Array<ContextMenuOption> = [];
	public contextMenuOptions3: Array<ContextMenuOption> = [];
	public contextMenuOptions4: Array<ContextMenuOption> = [];
	public contextMenuOptions5: Array<ContextMenuOption> = [];
	public contextMenuOptions7: Array<ContextMenuOption> = [];
	public contextMenuOptions8: Array<ContextMenuOption> = [];
	public contextMenuOptions9: Array<ContextMenuOption> = [];
	public contextMenuOptionsDivider: Array<ContextMenuOption> = [];

	constructor() {

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
		this.contextMenuOptions8 = [
			new ContextMenuOption('option88', 'Option 8', null),
			new ContextMenuOption('option99', 'Option 9', null),
			new ContextMenuOption('option100', 'Option 10', null),
			new ContextMenuOption('option111', 'Option 11', null),
			new ContextMenuOption('option121', 'Option 12', null),
			new ContextMenuOption('option131', 'Option 13', null),
		];
		this.contextMenuOptions7 = [
			new ContextMenuOption('option886', 'Option 8', null),
			new ContextMenuOption('option996', 'Option 9', null),
			new ContextMenuOption('option1060', 'Option 10', null),
			new ContextMenuOption('option1116', 'Option 11', null),
			new ContextMenuOption('option1216', 'Option 12', null),
			new ContextMenuOption('option1316', 'Option 13', null),
		];

		this.contextMenuOptions9 = [
			new ContextMenuOption('option8861', 'Option 8', null),
			new ContextMenuOption('option9961', 'Option 9', null),
			new ContextMenuOption('option10601', 'Option 10', null),
			new ContextMenuOption('option11161', 'Option 11', null),
			new ContextMenuOption('option12161', 'Option 12', null),
			new ContextMenuOption('option13161', 'Option 13', null),
		];

		this.contextMenuOptions2 = [
			new ContextMenuOption('option1', 'Option 1', null, null, false, undefined, null, null, null, this.contextMenuOptions8),
			new ContextMenuOption('option2', 'Option 2', null, null, false, undefined, null, null, null, this.contextMenuOptions7),
			new ContextMenuOption('option3', 'Option 3', null, null, false, undefined, null, null, null, this.contextMenuOptions3),
			new ContextMenuOption('option4', 'Option 4', null, null, false, undefined, null, null, null, this.contextMenuOptions4),
			new ContextMenuOption('option5', 'Option 5', null, null, false, undefined, null, null, null, this.contextMenuOptions9),
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

	public ngOnInit() {
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
