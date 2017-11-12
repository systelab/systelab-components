import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { IMessageModalPreset } from './presets/message-modal-preset';

@Component( {
	selector:  'modal-content',
	template:  `<span>This is the modal-content</span>`
} )
export class ModulabMessageModal implements ModalComponent<IMessageModalPreset> {
	constructor( public dialog: DialogRef<IMessageModalPreset> ) {
	}
}