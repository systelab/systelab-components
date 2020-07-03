import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { AbstractContextMenuComponent } from '../../contextmenu/abstract-context-menu.component';
import { GridContextMenuOption } from './grid-context-menu-option';

export interface GridRowMenuActionHandler {
	isContextMenuOptionEnabled(elementId: string, actionId: string): boolean;

	executeContextMenuAction(elementId: string, actionId: string): void;
}

@Component({
	selector:    'systelab-grid-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>> {

	protected actionHandler: GridRowMenuActionHandler;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public setActionManager(actionHandler: GridRowMenuActionHandler): void {
		this.actionHandler = actionHandler;
	}

	public setRowIndex(rowIndex: number): void {
		this.elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString() + 'row' + rowIndex;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<T>>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			return this.contextMenuOptions.some((menuOption: GridContextMenuOption<T>) => this.isEnabled(this.elementID, menuOption.actionId));
		} else {
			return false;
		}
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		return this.actionHandler.isContextMenuOptionEnabled(elementId, actionId);
	}

	public executeAction(event: any, elementId: string, actionId: string): void {

		const option: GridContextMenuOption<T> = this.getOption(actionId);

		if (option && !option.hasChildren()) {
			if (this.isEmbedded) {
				this.closeDropDown();
				event.stopPropagation();
				event.preventDefault();
			}

			if (option && option.actionId !== null && option.actionId !== undefined) {
				this.actionHandler.executeContextMenuAction(elementId, option.actionId);
			}
		} else {
			this.doMouseOver(event, elementId, actionId);
		}
	}

	protected getOption(actionId: string): GridContextMenuOption<T> {
		const actions: string[] = actionId.split(this.levelSeparator);
		let level = 1;

		let menuLevel: GridContextMenuOption<T> = this.contextMenuOptions.find(opt => opt.actionId === actions[level - 1]);
		level++;
		while (level <= actions.length) {
			menuLevel = menuLevel.childrenContextMenuOptions.find(opt => opt.actionId === actions[level - 1]);
			level++;
		}

		return menuLevel;

	}

}
