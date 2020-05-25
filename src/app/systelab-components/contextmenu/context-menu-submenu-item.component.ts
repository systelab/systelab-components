import { Component, ElementRef, Input, QueryList, ViewChildren, } from '@angular/core';
import { ContextMenuOption } from './context-menu-option';
import { ContextMenuComponent } from './context-menu.component';

@Component({
	selector:    'systelab-context-menu-submenu-item',
	templateUrl: 'context-menu-submenu-item.component.html'
})
export class ContextMenuSubmenuItemComponent {

	@Input() public myAction: ContextMenuOption;
	@Input() public myActionName: string;
	@Input() public hasIcons: boolean;
	@Input() public hasChildren: boolean;
	public readonly levelSeparator = '_|_';
	@Input() public myContextMenuOriginal: ContextMenuComponent;
	@Input() public parentId: string;

	@Input() public elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();

	@ViewChildren('childdropdownmenu0') public childDropdownMenuElement0: QueryList<ElementRef>;

	constructor() {
	}

	public doMouseOver(event: any, elementID: string, actionId: string) {
		let selectedChild;

		const {optionAcitionId} = this.myContextMenuOriginal.getOptionDetails(actionId);

		selectedChild = this.childDropdownMenuElement0.toArray()
			.find((elem) => elem.nativeElement.id === (optionAcitionId + this.elementID));

		this.myContextMenuOriginal.showSubmenu(event, actionId, selectedChild, this.elementID);
	}

	public doClickWithString(event: any, elementID: string, actionId: string) {
		this.myContextMenuOriginal.executeAction(event, elementID, actionId);
	}

	public getMyAction(childActionId: String): string {
		return this.myActionName + this.levelSeparator + childActionId;
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		return (this.myAction && this.myAction.isActionEnabled) ? this.myAction.isActionEnabled(elementId, actionId) : true;
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		return (this.myAction && this.myAction.isIconEnabled) ? this.myAction.isIconEnabled(elementId, actionId) : true;
	}
}
