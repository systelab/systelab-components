import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { AbstractContextMenuComponent } from '../../contextmenu/abstract-context-menu.component';
import { GridContextMenuOption } from './grid-context-menu-option';

export interface GridHeaderMenuActionHandler {
	executeHeaderContextMenuAction(elementId: string, actionId: string, headerData: Object): void;

	isHeaderContextMenuOptionEnabled(elementId: string, actionId: string, headerData: Object): boolean;
}

@Component({
	selector:    'systelab-grid-header-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridHeaderContextMenu<Object> extends AbstractContextMenuComponent<GridContextMenuOption<Object>> {
	public actionHandler: GridHeaderMenuActionHandler;
	public headerData: Object;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public setActionManager(actionHandler: GridHeaderMenuActionHandler): void {
		this.actionHandler = actionHandler;
	}

	public setHeaderData(headerData: Object): void {
		this.headerData = headerData;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<Object>>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		return this.contextMenuOptions ?
			this.contextMenuOptions.some(option => this.isEnabled(this.elementID, option.actionId)) : false;
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		return this.actionHandler.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	public executeAction(event: any, elementId: string, actionId: string): void {
		this.actionHandler.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
	}

	public showSubmenu(event: any, actionId: string, selectedChild: ElementRef, elementId: string): void {
		// TODO : Implement something
	}

	protected getOption(actionId: string) {
		// TODO : Implement something
	}
}
