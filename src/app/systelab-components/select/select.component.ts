import { AbstractComboBox } from '../combobox/abstract-combobox.component';
import { Component, Renderer2 } from '@angular/core';

@Component({
	selector:    'systelab-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})
export class ModulabSelect extends AbstractComboBox {
	constructor(public myRenderer: Renderer2) {
		super(myRenderer);
	}
}
