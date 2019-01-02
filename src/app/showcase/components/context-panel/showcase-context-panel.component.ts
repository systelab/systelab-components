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
	public fromDate: Date = null;
	public toDate: Date = null;

	constructor() {
		this.touchSpinValues1 = new TouchSpinValues(0, 1, 1, 999);
		this.touchSpinValues2 = new TouchSpinValues(0, 1, 1, 999);
	}

	public ngOnInit() {
	}

}
