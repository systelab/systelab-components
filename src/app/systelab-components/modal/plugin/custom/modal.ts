

import { Injectable, ResolvedReflectiveProvider as RRP } from '@angular/core';

import { ContainerContent, DialogRef, Maybe, Modal as Modal_, Overlay, PromiseCompleter } from '../../base/base-modal';

import { SystelabModalContainer } from './modal-container.component';

@Injectable()
export class Modal extends Modal_ {
	constructor(overlay: Overlay) {
		super(overlay);
	}

	protected create(dialogRef: DialogRef<any>, content: ContainerContent, bindings?: RRP[]): Maybe<DialogRef<any>> {

		const containerRef = this.createContainer(dialogRef, SystelabModalContainer, content, bindings);

		const overlay = dialogRef.overlayRef.instance;
		const container = containerRef.instance;

		dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();

		// This is needed in order to use the same z-index than default slab-dialog styles do
		overlay.setStyle('z-index', '10000');

		// add body class if this is the only dialog in the stack
		if (!document.body.classList.contains('modal-open')) {
			document.body.classList.add('modal-open');
		}

		container.addClass('in');

		if (containerRef.location.nativeElement) {
			containerRef.location.nativeElement.focus();
		}

		overlay.beforeDestroy(() => {
			const completer = new PromiseCompleter<void>();
			container.removeClass('in');

			completer.resolve();
			return completer.promise;
		});

		return dialogRef;
	}
}
