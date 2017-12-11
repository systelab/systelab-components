import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	selector: 'systelab-cell-colorpicker',
	template: `
                  <div class="slab-color-tag" [style.background-color]="params.data.color"
                       [style.border-color]="params.data.border"></div>`
})
export class ColorCellRendererComponent implements AgRendererComponent {
	public params: any;

	public agInit(params: any): void {
		this.params = params;

		if (params.data) {
		}
	}

	public refresh(params: any): boolean {
		return true;
	}

}
