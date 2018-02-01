import { AfterViewInit, Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ComboBoxInputRenderer } from '../combobox/renderer/combobox-input-renderer';
import { ColorUtilService } from '../utilities/color.util.service';

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
			this.border = '#' + ColorUtilService.darkColorFromHex( params.data.id.toString() );
		}
	}

	public refresh( params: any ): boolean {
		return true;
	}

	public ngAfterViewInit() {
		if ( this.id && this.id !== null ) {
			this.border = '#' + ColorUtilService.darkColorFromHex( this.id.toString() );
		}
	}
}
