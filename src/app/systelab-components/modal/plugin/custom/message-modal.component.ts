import { Component } from '@angular/core';
import { IMessageModalPreset } from './presets/message-modal-preset';
import { ModalComponent } from '../../base/models/tokens';
import { DialogRef } from '../../base/models/dialog-ref';

@Component( {
	selector:  'modal-content',
	template:  `<span>This is the modal-content</span>`
} )
export class SystelabMessageModal implements ModalComponent<IMessageModalPreset> {
	constructor( public dialog: DialogRef<IMessageModalPreset> ) {
	}
}