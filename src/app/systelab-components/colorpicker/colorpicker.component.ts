import {ChangeDetectorRef, Component, OnInit, Renderer2} from '@angular/core';
import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { ColorCellRendererComponent } from './color-cell-renderer.component';
import { ColorUtilService } from '../utilities/color.util.service';

@Component( {
	selector:    'systelab-colorpicker',
	templateUrl: '../combobox/abstract-combobox.component.html'
} )
export class ColorComboBox extends AbstractComboBox implements OnInit {

	constructor( public myRenderer: Renderer2, chRef: ChangeDetectorRef) {
		super( myRenderer, chRef);

		this.customInputRenderer = ColorCellRendererComponent;

		this.values = ColorUtilService.generateColorArray( [0, 128, 192, 255], true );
	}

	public ngOnInit() {
		super.ngOnInit();

		this.columnDefs = [
			{
				colID:                 'id',
				field:                 'description',
				cellRendererFramework: ColorCellRendererComponent,
			}
		];

		this.gridOptions.columnDefs = this.columnDefs;
	}

}
