import { Modal } from '../providers/modal';
import { ModalContext } from './modal-context';

export class ModalOpenContext extends ModalContext {
	component: any;
	modal: Modal;
}
