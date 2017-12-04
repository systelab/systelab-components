import { ModalOpenContext } from 'ngx-modialog';

export class ModulabModalContext extends ModalOpenContext {
	/**
	 * A Class for the modal dialog container.
	 * Default: modal-dialog
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
