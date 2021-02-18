import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';
import { AbstractGrid } from '../abstract-grid.component';

@Component({
	selector: 'systelab-grid-header-context-menu-cell-renderer',
	templateUrl: 'grid-header-context-menu-renderer.component.html'
})

export class GridHeaderContextMenuComponent<T> implements IHeaderAngularComp {

	public headerName: string;
	public headerData: any;
	protected container: AbstractGrid<T>;

	public agInit(params: IHeaderParams): void {
		this.container = params.context.componentParent;
		this.headerName = params.displayName;
		this.headerData = params.column.getColDef().headerComponentParams.headerData;
	}

	public refresh(params: IHeaderParams): boolean {
		return false;
	}

	public dotsClicked(event: MouseEvent): void {
		this.container.headerDotsClicked(this.headerData, event);
	}

}
