import { Injectable, Injector, ViewContainerRef } from '@angular/core';

import { OverlayConfig, OverlayRenderer } from '../models/tokens';
import { DialogRefStack } from '../models/dialog-ref-stack';
import { vcRefStore } from '../models/vc-ref-store';
import { DialogRef } from '../models/dialog-ref';
import { OverlayContext } from '../models/overlay-context';

const _stack = new DialogRefStack<any>();

@Injectable()
export class Overlay {
	get stackLength(): number {
		return _stack.length;
	}

	constructor(private _modalRenderer: OverlayRenderer, protected injector: Injector) {
	}

	/**
	 * Check if a given DialogRef is the top most ref in the stack.
	 * TODO: distinguish between body modal vs in element modal.
	 * @param dialogRef
	 * @returns {boolean}
	 */
	isTopMost(dialogRef: DialogRef<any>): boolean {
		return _stack.indexOf(dialogRef) === _stack.length - 1;
	}

	stackPosition(dialogRef: DialogRef<any>) {
		return _stack.indexOf(dialogRef);
	}

	groupStackLength(dialogRef: DialogRef<any>): number {
		return _stack.groupLength(_stack.groupOf(dialogRef));
	}

	/* Feature implemented for Modulab Platform*/
	public closeAllDialogs() {
		_stack.closeAllDialogs();
	}

	/**
	 * Creates an overlay and returns a dialog ref.
	 * @param config instructions how to create the overlay
	 * @param group A token to associate the new overlay with, used for reference (stacks usually)
	 * @returns {DialogRef<T>[]}
	 */
	open<T extends OverlayContext>(config: OverlayConfig, group?: any): DialogRef<T>[] {
		const viewContainer = config.viewContainer;
		let containers: Array<ViewContainerRef> = [];

		if (typeof viewContainer === 'string') {
			containers = vcRefStore.getVCRef(viewContainer as string);
		} else if (Array.isArray(viewContainer)) {
			containers = viewContainer as any;
		} else if (viewContainer) {
			containers = [viewContainer] as any;
		} else {
			containers = [null];
		}

		return containers
			.map(vc => this.createOverlay(config.renderer || this._modalRenderer, vc, config, group));
	}

	private createOverlay(renderer: OverlayRenderer, vcRef: ViewContainerRef, config: OverlayConfig, group: any): DialogRef<any> {

		if (config.context) {
			config.context.normalize();
		}

		if (!config.injector) {
			config.injector = this.injector;
		}

		const dialog = new DialogRef<any>(this, config.context || {});
		dialog.inElement = config.context && !!config.context.inElement;

		const cmpRef = renderer.render(dialog, vcRef, config.injector);

		Object.defineProperty(dialog, 'overlayRef', {value: cmpRef});
		_stack.pushManaged(dialog, group);

		return dialog;
	}
}
