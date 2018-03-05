import { OverlayContext } from './overlay-context';

export const DEFAULT_VALUES = {};

const DEFAULT_SETTERS = [
	'message'
];

export class ModalContext extends OverlayContext {
	/**
	 * The core message to display.
	 * A modal might have an extended message (e.g: HTML message) or other fields (e.g: title) but
	 * all models, at core, convey a message thus message is common to all modals.
	 */
	message: string;
}
