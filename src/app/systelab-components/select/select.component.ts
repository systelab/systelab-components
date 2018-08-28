import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Renderer2} from '@angular/core';


class Element {
	constructor(public id: string, public description: string) {

	}
}

@Component({
	selector:    'systelab-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
})



export class ModulabSelect extends AbstractComboBox<Element> {

	constructor(public myRenderer: Renderer2, public chRef: ChangeDetectorRef) {
		super(myRenderer, chRef);
	}

	getInstance(): Element {
		return new Element('', '');
	}

	getDescriptionField(): string {
		return 'description';
	}

	getCodeField(): string {
		return 'code';
	}

	getIdField(): string {
		return 'id';
	}
}
