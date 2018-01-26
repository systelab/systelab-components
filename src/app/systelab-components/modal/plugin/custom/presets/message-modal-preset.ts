import { SystelabModalContext } from '../../../modal-context';

export interface IMessageModalPreset extends SystelabModalContext {

	/**
	 * A Class for the header (title) container.
	 * Default: modal-header
	 */
	headerClass: string;

	/**
	 * Caption for the title, enclosed in a H3 container.
	 */
	title: string;

	/**
	 * HTML for the title, if set overrides title property.
	 * The HTML is wrapped in a DIV element, inside the header container.
	 * Example:
	 <div class="modal-header">
	 <div> HTML CONTENT INSERTED HERE </div>
	 </div>
	 * Note: HTML is not compiled.
	 */
	titleHtml: string;

	/**
	 * aliased by 'body'
	 * @aliasedBy body
	 */
	message: string;

	/**
	 * The body of the modal.
	 * Can be either text or HTML.
	 * Note: When using HTML, the template is not compiled. (binding and expression will not parse)
	 * @aliasOf message
	 */
	body: string;

	/**
	 * A Class for the body container.
	 * Default: modal-body
	 */
	bodyClass: string;

	/**
	 * A Class for the footer container.
	 * Default: modal-footer
	 */
	footerClass: string;

	showInput?: any;
}
