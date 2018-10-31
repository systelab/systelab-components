import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid';
import { AbstractGrid } from '../abstract-grid.component';
import {AbstractContextMenuComponent} from '../../contextmenu/abstract-context-menu.component';
import {GridContextMenuOption} from './grid-context-menu-option';

@Component({
	selector:    'systelab-grid-header-context-menu',
	templateUrl: './grid-header-context-menu.component.html'
})

export class GridHeaderContextMenuComponent<T> extends AbstractContextMenuComponent<GridContextMenuOption<T>>
	implements IHeaderAngularComp {

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

	protected isEnabled(elementId: string, actionId: string): boolean {
		return this.container.isHeaderContextMenuOptionEnabled(elementId, actionId, this.headerData);
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

	protected executeAction(elementId: string, actionId: string): void {
		this.container.executeHeaderContextMenuAction(elementId, actionId, this.headerData);
	}

	protected checkIfHasIcons(): void {
	}

}
