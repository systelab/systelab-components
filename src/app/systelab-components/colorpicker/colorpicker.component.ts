import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { ColorCellRendererComponent } from './color-cell-renderer.component';
import { ColorUtilService } from '../utilities/color.util.service';

declare var jQuery: any;

@Component({
	selector:    'mp-color-combobox',
	templateUrl: '../combobox/abstract-combobox.component.html'
})
export class ColorComboBox extends AbstractComboBox implements OnInit {

	// public colorList: Array<any>;

	constructor(public myRenderer: Renderer2, public colorUtilService: ColorUtilService) {
		super(myRenderer, true);
		this.values = colorUtilService.generateColorArray([0, 128, 192, 255], true);
	}

	public ngOnInit() {
		super.ngOnInit();

		this.columnDefs = [
			{
				colID:                 'id',
				field:                 'value',
				cellRendererFramework: ColorCellRendererComponent,
			}
		];

		this.gridOptions.columnDefs = this.columnDefs;
	}

}
