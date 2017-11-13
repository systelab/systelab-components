import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ContextMenuComponent } from '../../contextmenu/context-menu.component';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid';
import { AbstractGrid } from '../abstract-grid.component';
@Component({
	selector:    'mp-grid-header-context-menu',
	templateUrl: './grid-header-context-menu.component.html'
})
export class GridHeaderContextMenuComponent<T> extends ContextMenuComponent implements IHeaderAngularComp {

	public container: AbstractGrid<Object>;
	public headerName: string;
	public headerData: any;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2) {
		super(el, myRenderer);
	}

	public agInit(params: IHeaderParams): void {

		this.container = params.context.componentParent;
		this.elementID = params.column.getColId();
		this.contextMenuOptions = params.context.componentParent.headerMenu;
		this.headerName = params.displayName;
		this.headerData = params.column.getColDef().headerComponentParams.headerData;

	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
	}

	protected executeAction(elementId: string, actionId: string): void {
		console.log('Pasa por GridHeaderContextMenuComponent executeAction');
		this.container.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
	}

}