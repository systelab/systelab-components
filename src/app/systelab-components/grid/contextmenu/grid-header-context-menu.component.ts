import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { AbstractGrid } from '../abstract-grid.component';
import { AbstractContextMenuComponent } from '../../contextmenu/abstract-context-menu.component';
import { GridContextMenuOption } from './grid-context-menu-option';

@Component({
	selector:    'systelab-grid-header-context-menu',
	templateUrl: './grid-header-context-menu.component.html'
})

export class GridHeaderContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>> implements IHeaderAngularComp {

	public container: AbstractGrid<Object>;
	public headerName: string;
	public headerData: any;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public agInit(params: IHeaderParams): void {
		this.container = params.context.componentParent;
		this.elementID = params.column.getColId();
		this.contextMenuOptions = params.context.componentParent.headerMenu;
		this.headerName = params.displayName;
		this.headerData = params.column.getColDef().headerComponentParams.headerData;
	}

	public openWithOptions(event: MouseEvent, newContextMenuOptions: Array<GridContextMenuOption<T>>): void {
	}

	protected existsAtLeastOneActionEnabled(): boolean {
		if (this.contextMenuOptions) {
			return this.contextMenuOptions.some(option => this.isEnabled(this.elementID, option.actionId));
		}
	}

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
	}

	protected isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	protected executeAction(event: any, elementId: string, actionId: string, parentAction?: string) {
		this.container.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
	}
}
