import { Component, OnInit } from '@angular/core';
import { ContextMenuActionData } from '../../../systelab-components/contextmenu/context-menu-action-data';
import { TouchSpinValues } from '../../../systelab-components/spinner/touch.spin-values';

@Component({
	selector:    'showcase-context-panel',
	templateUrl: 'showcase-context-panel.component.html'
})
export class ShowcaseContextPanel implements OnInit {
	public touchSpinValues1: TouchSpinValues;
	public touchSpinValues2: TouchSpinValues;

	constructor() {
		this.touchSpinValues1 = new TouchSpinValues(0, 1, 1, 999);
		this.touchSpinValues2 = new TouchSpinValues(0, 1, 1, 999);
	}

	public ngOnInit() {
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

}
