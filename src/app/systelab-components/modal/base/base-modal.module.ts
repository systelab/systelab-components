import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

import { OverlayRenderer } from './models/tokens';
import { DOMOutsideEventPlugin } from './providers/outside-event-plugin';
import { DOMOverlayRenderer } from './providers/dom-modal-renderer';
import { ModalOverlay } from './overlay/overlay.component';
import { OverlayDialogBoundary, OverlayTarget } from './overlay/overlay.directives';
import { Overlay } from './overlay/overlay.service';

@NgModule({
	declarations:    [
		ModalOverlay,
		OverlayDialogBoundary,
		OverlayTarget
	],
	imports:         [CommonModule],
	exports:         [
		OverlayDialogBoundary,
		OverlayTarget
	],
	providers:       [
		Overlay
	],
	entryComponents: [
		ModalOverlay
	]
})
export class ModalModule {

	/**
	 * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
	 * Since dynamic components are not analysed by the angular compiler they must register manually
	 * using entryComponents, this is an easy way to do it.
	 * @param entryComponents A list of dynamically inserted components (dialog's).
	 * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
	 */
	static withComponents(entryComponents: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  ModalModule,
			providers: [
				{provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true}
			]
		};
	}

	/**
	 * Returns a NgModule for use in the root Module.
	 * @param entryComponents A list of dynamically inserted components (dialog's).
	 * @returns ModuleWithProviders
	 */
	static forRoot(entryComponents?: Array<Type<any> | any[]>): ModuleWithProviders {
		return {
			ngModule:  ModalModule,
			providers: [
				{provide: OverlayRenderer, useClass: DOMOverlayRenderer},
				{provide: EVENT_MANAGER_PLUGINS, useClass: DOMOutsideEventPlugin, multi: true},
				{provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true}
			]
		};
	}
}
