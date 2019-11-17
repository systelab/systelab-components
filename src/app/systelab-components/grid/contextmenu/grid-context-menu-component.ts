import { AbstractGrid } from '../abstract-grid.component';
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

	public setRowIndex(rowIndex: number) {
		this.elementID = (Math.floor(Math.random() * (999999999999 - 1))).toString() + 'row' + rowIndex;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<T>>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			return this.contextMenuOptions.some((menuOption: GridContextMenuOption<T>) => this.isEnabled(this.elementID, menuOption.actionId));
		}
	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.actionHandler.isContextMenuOptionEnabled(elementId, actionId);
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {

		const option: GridContextMenuOption<T> = this.getOption(actionId, parentAction);

		if (option.hasChildren()) {
			event.stopPropagation();
			event.preventDefault();

			if (this.previousActionChild !== actionId) {
				if (this.previousActionChild) {
					this.toggle(this.previousActionChild + this.elementID);
				}
				this.previousActionChild = actionId;

				this.toggle(actionId + this.elementID);

				const selectedChild = this.childDropdownMenuElement.toArray().find((elem) => elem.nativeElement.id === (actionId + this.elementID));
				this.myRenderer.setStyle(selectedChild.nativeElement, 'top', this.getFirstChildTop(event, selectedChild) + 'px');
				this.myRenderer.setStyle(selectedChild.nativeElement, 'left', this.getFirstChildLeft(selectedChild) + 'px');
			}
		} else {
			if (this.isEmbedded || parentAction) {
				this.closeDropDown();
				event.stopPropagation();
				event.preventDefault();
			}

			if (option && option.actionId !== null && option.actionId !== undefined) {
				this.actionHandler.executeContextMenuAction(elementId, actionId);
			}
		}
	}

	private getOption(actionId: string, parentAction?: string): GridContextMenuOption<T> {
		if (parentAction) {
			const parentMenuOption = this.contextMenuOptions.find(opt => opt.actionId === parentAction);
			return parentMenuOption.childrenContextMenuOptions.find(opt => opt.actionId === actionId);
		} else {
			return this.contextMenuOptions.find(opt => opt.actionId === actionId);
		}
	}
}
