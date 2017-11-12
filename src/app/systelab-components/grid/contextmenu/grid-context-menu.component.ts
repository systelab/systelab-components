import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AgRendererComponent, ICellRendererAngularComp } from 'ag-grid-angular';
import { ContextMenuComponent } from '../../contextmenu/context-menu.component';
import { AbstractGrid } from '../abstract-grid.component';

@Component({
	selector:    'mp-grid-context-menu',
	templateUrl: '../../contextmenu/context-menu.component.html'
})
export class GridContextMenuComponent<T> extends ContextMenuComponent implements AgRendererComponent {

	protected container: AbstractGrid<T>;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2) {
		super(el, myRenderer);
	}

	public refresh(params: any): boolean {
		return true;
	}

	public agInit(params: any): void {

		this.container = params.context.componentParent;
		this.elementID = 'row' + params.rowIndex;
		this.contextMenuOptions = params.context.componentParent.menu;

	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isContextMenuOptionEnabled(elementId, actionId);
	}

	protected executeAction(elementId: string, actionId: string): void {
		this.container.executeContextMenuAction(elementId, actionId);
	}

}