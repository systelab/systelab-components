import { Component } from '@angular/core';

@Component({
	selector:    'systelab-context-panel',
	templateUrl: 'context-panel.component.html',
})
export class ContextPanelComponent {

	public isOpen = false;

	public closeDropDown(): void {
		this.isOpen = false;
	}

	public doClick():  void {
		this.isOpen = !this.isOpen;
	}
}
