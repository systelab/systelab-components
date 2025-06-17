import {AbstractComboBox} from '../combobox/abstract-combobox.component';
import { AfterViewInit, ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { I18nService } from 'systelab-translate';

class Element {
	constructor( public id: string, public description: string ) {

	}
}

@Component( {
    selector: 'systelab-no-yes-select',
    templateUrl: '../combobox/abstract-combobox.component.html',
    standalone: false
} )

export class NoYesSelect extends AbstractComboBox<Element> implements AfterViewInit{


	@Input() public reverseValues = false;

	constructor( public override myRenderer: Renderer2, public override chRef: ChangeDetectorRef, public i18nService: I18nService ) {
		super( myRenderer, chRef );
	}

	public ngAfterViewInit(): void {
		const elements = new Array<Element>();
		if ( this.reverseValues ) {
			elements.push( new Element( 'Y', this.i18nService.instant( 'COMMON_YES' ) ) );
			elements.push( new Element( 'N', this.i18nService.instant( 'COMMON_NO' ) ) );
			if ( !this._id ) {
				this._id = 'Y';
			}
		} else {
			elements.push( new Element( 'N', this.i18nService.instant( 'COMMON_NO' ) ) );
			elements.push( new Element( 'Y', this.i18nService.instant( 'COMMON_YES' ) ) );
			if ( !this._id ) {
				this._id = 'N';
			}
		}
		this.values = elements;
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
