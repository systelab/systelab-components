import { AbstractGrid } from '../abstract-grid.component';
import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import {AbstractContextMenuComponent} from '../../contextmenu/abstract-context-menu.component';
import {GridContextMenuOption} from './grid-context-menu-option';

@Component({
	selector:    'systelab-grid-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>> {

	protected container: AbstractGrid<T>;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public setContainer(container: AbstractGrid<T>): void {
		this.container = container;
	}

	public setRowIndex(rowIndex: number) {
		this.elementID = 'row' + rowIndex;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<T>>): void {
		this.contextMenuOptions = newContextMenuOptions;
		this.open(event);
	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isContextMenuOptionEnabled(elementId, actionId);
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			const optionEnabled: GridContextMenuOption<T> = this.contextMenuOptions.find((menuOption: GridContextMenuOption<T>) => {
				return this.isEnabled(this.elementID, menuOption.actionId);
			});
			return (optionEnabled != null);
		}
	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	protected executeAction($event, elementId: string, actionId: string): void {
		this.container.executeContextMenuAction(elementId, actionId);
	}

	protected checkIfHasIcons(): void {
	}





}
