import { AfterViewInit, Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ComboBoxInputRenderer } from '../combobox/renderer/combobox-input-renderer';

@Component( {
	selector:    'systelab-cell-colorpicker',
	templateUrl: 'color-renderer.component.html'
} )
export class ColorCellRendererComponent extends ComboBoxInputRenderer implements AgRendererComponent, AfterViewInit {
	public agGridParams: any;
	public border = '';

	public agInit( params: any ): void {
		this.agGridParams = params;

		if ( params.data ) {
			this.id = params.data.id.toString();
			this.description = params.data.id.toString();
			this.border = params.data.border;
		}
	}

	public refresh( params: any ): boolean {
		return true;
	}

	public ngAfterViewInit() {
		if ( this.componentData ) {
			this.border = this.componentData.border;
		} else if ( this.agGridParams && this.agGridParams.data ) {
			this.border = this.agGridParams.data.border;
		} else {
			this.border = 'white';
		}
	}
}
