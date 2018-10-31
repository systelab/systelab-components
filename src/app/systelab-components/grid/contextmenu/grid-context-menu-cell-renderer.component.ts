import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AbstractGrid } from '../abstract-grid.component';

@Component({
	selector:    'mp-grid-context-menu',
	templateUrl: 'grid-context-menu-cell-renderer.component.html'
})
export class GridContextMenuCellRendererComponent<T> implements AgRendererComponent {

	protected container: AbstractGrid<T>;
	public fontSize: string;
	public fontColor: string;
	public rowIndex: number;
	public data: any;

	public refresh(params: any): boolean {
		return true;
	}

	public agInit(params: any): void {
		this.container = params.context.componentParent;
		this.rowIndex = params.rowIndex;
		this.data = params.data;
	}

	public dotsClicked(event: MouseEvent) {
		this.container.dotsClicked(this.rowIndex, this.data, event);
	}
}

