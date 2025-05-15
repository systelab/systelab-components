import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { AbstractGrid } from '../abstract-grid.component';

@Component({
    selector: 'systelab-grid-context-menu-cell-renderer',
    templateUrl: 'grid-context-menu-cell-renderer.component.html',
    standalone: false
})
export class GridContextMenuCellRendererComponent<T> implements AgRendererComponent {

	protected container: AbstractGrid<T>;
	public fontSize: string;
	public fontColor: string;
	public rowIndex: number;
	public data: T;

	public agInit(params: any): void {
		this.container = params.context.componentParent;
		this.rowIndex = params.rowIndex || params.node.rowIndex;
		this.data = params.data;
	}

	public dotsClicked(event: MouseEvent): void {
		let selectedRows: T | Array<T> = this.data;

		if (event.ctrlKey && !this.container.removeSelectionOnOpenContextMenu) {
			selectedRows = this.container.getSelectedRows();
		} else if (this.container.removeSelectionOnOpenContextMenu) {
			this.container.gridApi.deselectAll();
			if (event.ctrlKey) {
				this.container.gridApi.getDisplayedRowAtIndex(this.rowIndex).setSelected(false);
			}
		}
		this.container.dotsClicked(this.rowIndex, selectedRows, event);
	}

	public refresh(params: any): boolean {
		return true;
	}
}
