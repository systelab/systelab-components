import { Component, ElementRef, Input, QueryList, ViewChildren, } from '@angular/core';
import { AbstractContextMenuComponent } from './abstract-context-menu.component';
import { ContextMenuOption } from './context-menu-option';

@Component({
    selector: 'systelab-context-menu-submenu-item',
    templateUrl: 'context-menu-submenu-item.component.html',
    standalone: false
})
export class ContextMenuSubmenuItemComponent {

	@Input() public action: ContextMenuOption;
	@Input() public actionName: string;
	@Input() public hasIcons: boolean;
	@Input() public hasChildren: boolean;
	public readonly levelSeparator = '_|_';
	@Input() public contextMenuOriginal: AbstractContextMenuComponent<ContextMenuOption>;
	@Input() public parentId: string;

	@Input() public elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString();

	@ViewChildren('childdropdownmenu') public childDropdownMenuElement: QueryList<ElementRef>;

	constructor() {
	}

	public doMouseOver(event: any, elementID: string, actionId: string): void {
		let selectedChild;

		const optionAcitionId = this.contextMenuOriginal.getOptionDetailsActionId(actionId);

		selectedChild = this.childDropdownMenuElement.toArray()
			.find((elem) => elem.nativeElement.id === (optionAcitionId + this.elementID));

		this.contextMenuOriginal.showSubmenu(event, actionId, selectedChild, this.elementID);
	}

	public doClickWithAction(event: any, elementID: string, actionId: string): void {
		this.contextMenuOriginal.executeAction(event, elementID, actionId);
	}

	public getAction(childActionId: String): string {
		return this.actionName + this.levelSeparator + childActionId;
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		return (this.action && this.action.isActionEnabled) ? this.action.isActionEnabled(elementId, actionId) : true;
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		return (this.action && this.action.isIconEnabled) ? this.action.isIconEnabled(elementId, actionId) : true;
	}
}
