import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	templateUrl: './searcher-tree-header-renderer.component.html'
})
export class SearcherTreeHeaderRendererComponent implements AgRendererComponent  {

	public params: any;

	public agInit(params: any): void {
		this.params = params;
	}

	public refresh(params: any): boolean {
		return true;
	}

	public doClick(event): void {
		if(this.params.context.componentParent.searcher.parentSelectable) {
			this.params.context.componentParent.clickRow.emit(event);
		}
	}
}
