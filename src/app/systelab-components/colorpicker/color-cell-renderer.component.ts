import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
	selector: 'systelab-colorpicker',
	template: `<div class="color-tag" [ngStyle]="{'background-color': params.data.color, 'border-color': params.data.border}"></div>`
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
