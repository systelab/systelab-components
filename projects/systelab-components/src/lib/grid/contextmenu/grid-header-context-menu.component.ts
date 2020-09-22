import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, IHeaderParams } from 'ag-grid-community';
import { AbstractContextMenuComponent } from '../../contextmenu/abstract-context-menu.component';
import { GridContextMenuOption } from './grid-context-menu-option';

export interface GridHeaderMenuActionHandler {
	executeHeaderContextMenuAction(elementId: string, actionId: string, headerData: any): void;

	isHeaderContextMenuOptionEnabled(elementId: string, actionId: string, headerData: any): boolean;
}

@Component({
	selector:    'systelab-grid-header-context-menu',
	templateUrl: './grid-header-context-menu.component.html'
})

export class GridHeaderContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>> implements IHeaderAngularComp {

	public actionHandler: GridHeaderMenuActionHandler;
	public headerName: string;
	public headerData: any;

	constructor(protected el: ElementRef, protected myRenderer: Renderer2, protected cdr: ChangeDetectorRef) {
		super(el, myRenderer, cdr);
	}

	public refresh(params: IHeaderParams): boolean {
		throw new Error('Method not implemented.');
	}

	public afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
		throw new Error('Method not implemented.');
	}

	public agInit(params: IHeaderParams): void {
		this.actionHandler = params.context.componentParent;
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
		} else {
			return false;
		}
	}

	public isEnabled(elementId: string, actionId: string): boolean {
		return this.actionHandler.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
	}

	public isIconEnabled(elementId: string, actionId: string): boolean {
		return false;
	}

	public executeAction(event: any, elementId: string, actionId: string, parentAction?: string): void {
		this.actionHandler.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
	}

	public showSubmenu(event: any, actionId: string, selectedChild: ElementRef, elementId: string): void {
		// TODO : Implement something
	}

	protected getOption(actionId: string) {
		// TODO : Implement something
	}
}
