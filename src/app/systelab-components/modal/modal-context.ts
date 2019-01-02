import { ModalOpenContext } from './base/models/modal-open-context';

export class SystelabModalContext extends ModalOpenContext {
	/**
	 * A Class for the modal dialog container.
	 * Default: modal-dialog
	 * Deprecated
	 */
	public dialogClass: string;

	/**
	 * Forced width
	 */
	public width: number = null;

	/**
	 * Forced height
	 */
	public height: number = null;

	/**
	 * Forced minWidth
	 */
	public minWidth: number = null;

	/**
	 * Forced minHeight
	 */
	public minHeight: number = null;

	/**
	 * Forced maxWidth
	 */
	public maxWidth: number = null;

	/**
	 * Forced maxHeight
	 */
	public maxHeight: number = null;

	/**
	 * Forced width relative
	 */
	public widthRelative: string = null;

	/**
	 * Forced height relative
	 */
	public heightRelative: string = null;

	/**
	 * Forced minWidth relative
	 */
	public minWidthRelative: string = null;

	/**
	 * Forced minHeight relative
	 */
	public minHeightRelative: string = null;

	/**
	 * Forced maxWidth relative
	 */
	public maxWidthRelative: string = null;

	/**
	 * Forced maxHeight relative
	 */
	public maxHeightRelative: string = null;

	/**
	 * Forced fullscreen
	 */
	public fullScreen: boolean = false;

	/**
	 * When true, show a close button on the top right corner.
	 */
	public showClose: boolean;

	public setDefaultSize(w: number, h: number) {
		if (!this.width) {
			this.width = w;
		}
		if (!this.height) {
			this.height = h;
		}
	}

}
