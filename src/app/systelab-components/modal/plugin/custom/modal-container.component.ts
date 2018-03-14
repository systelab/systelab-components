import { Component, ElementRef, Renderer, OnInit, Renderer2 } from '@angular/core';
import { IMessageModalPreset } from './presets/message-modal-preset';
import { BaseDynamicComponent } from '../../base/components/base-dynamic-component';
import { DialogRef } from '../../base/models/dialog-ref';

@Component({
	selector:    'mp-modal-container',
	templateUrl: 'modal-container.component.html',
	host:        {
		'tabindex': '-1',
		'role':     'alertdialog',
		'class':    'slab-dialog-overlay',
	}
})
export class SystelabModalContainer extends BaseDynamicComponent implements OnInit {

	public computedClass: string;

	constructor(public dialog: DialogRef<IMessageModalPreset>, el: ElementRef, renderer: Renderer2) {
		super(el, renderer);
		this.activateAnimationListener();
	}

	public ngOnInit(): void {

		this.computedClass = 'w-33 h-33';

		if (this.dialog.context.dialogClass) {
			this.computedClass = this.dialog.context.dialogClass;
		} else if (this.dialog.context.width && this.dialog.context.height) {
			this.computedClass = 'slab-dialog-fixed-size';
		} else if (this.dialog.context.fullScreen) {
			this.computedClass = '';
		}

		this.computedClass += ' slab-dialog-disabled-animation';
	}

}
