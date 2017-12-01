import { Component, ElementRef, Renderer, OnInit } from '@angular/core';
import { BaseDynamicComponent, DialogRef } from 'ngx-modialog';
import { IMessageModalPreset } from './presets/message-modal-preset';

@Component({
	selector:    'mp-modal-container',
	templateUrl: 'modal-container.component.html',
	host:        {
		'tabindex': '-1',
		'role':     'alertdialog',
		'class':    'ngdialog-overlay',
	}
})
export class ModulabModalContainer extends BaseDynamicComponent implements OnInit {

	public computedClass: string;

	constructor(public dialog: DialogRef<IMessageModalPreset>, el: ElementRef, renderer: Renderer) {
		super(el, renderer);
		this.activateAnimationListener();
	}

	public ngOnInit(): void {

		this.computedClass = 'uk-width-1-3 uk-height-1-3';

		if (this.dialog.context.dialogClass) {
			this.computedClass = this.dialog.context.dialogClass;
		} else if (this.dialog.context.width && this.dialog.context.height) {
			this.computedClass = 'uk-fixed-size';
		} else if (this.dialog.context.fullScreen) {
			this.computedClass = '';
		}

		this.computedClass += ' ngdialog-disabled-animation';
	}

}
