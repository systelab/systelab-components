import { ContextMenuComponent } from '../../contextmenu/context-menu.component';
import { AbstractGrid } from '../abstract-grid.component';
import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
	selector:    'systelab-grid-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridContextMenuComponent<T> extends ContextMenuComponent {

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

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isContextMenuOptionEnabled(elementId, actionId);
	}

	protected executeAction($event, elementId: string, actionId: string): void {
		this.container.executeContextMenuAction(elementId, actionId);
	}

}
