
export * from './framework/fluent-assign';
export { extend, arrayUnion, PromiseCompleter } from './framework/utils';
export { createComponent, CreateComponentArgs } from './framework/createComponent';

export * from './models/errors';
export { DialogRef } from './models/dialog-ref';

export {
	DROP_IN_TYPE,
	ModalComponent,
	OverlayRenderer,
	OverlayConfig,
	CloseGuard,
	ContainerContent
} from './models/tokens';

export { Modal } from './providers/modal';
export { DOMOverlayRenderer } from './providers/dom-modal-renderer';

export {
	overlayConfigFactory,
	OverlayContext,
	OverlayContextBuilder,
	ModalControllingContextBuilder
} from './models/overlay-context';

export {
	Overlay,
	EmbedComponentConfig,
	ModalOverlay,
	OverlayDialogBoundary,
	OverlayTarget
} from './overlay/index';

export {
	DEFAULT_VALUES,
	ModalContext,
} from './models/modal-context';

export { ModalOpenContext } from './models/modal-open-context';


export { ModalModule } from './base-modal.module';

