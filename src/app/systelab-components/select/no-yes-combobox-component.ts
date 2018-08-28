import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import {ChangeDetectorRef, Component, Input, Renderer2} from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

class Element {
	constructor( public id: string, public description: string ) {

	}
}

@Component( {
	selector:    'systelab-no-yes-select',
	templateUrl: '../combobox/abstract-combobox.component.html'
} )

export class NoYesSelect extends AbstractComboBox<Element> {


	@Input() public reverseValues = false;

	constructor( public myRenderer: Renderer2, public chRef: ChangeDetectorRef, public i18nService: I18nService ) {
		super( myRenderer, chRef );
		this.values = new Array<Element>();
		if ( this.reverseValues ) {
			this.values.push( new Element( 'Y', this.i18nService.instant( 'COMMON_YES' ) ) );
			this.values.push( new Element( 'N', this.i18nService.instant( 'COMMON_NO' ) ) );
			if ( !this._id ) {
				this._id = 'Y';
			}
		} else {
			this.values.push( new Element( 'N', this.i18nService.instant( 'COMMON_NO' ) ) );
			this.values.push( new Element( 'Y', this.i18nService.instant( 'COMMON_YES' ) ) );
			if ( !this._id ) {
				this._id = 'N';
			}
		}
	}

	getInstance(): Element {
		return new Element('', '');
	}

	getDescriptionField(): string {
		return 'description';
	}

	getCodeField(): string {
		return '';
	}

	getIdField(): string {
		return 'id';
	}
}
