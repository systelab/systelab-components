import { AbstractSearcher } from './abstract-searcher';
import { SystelabModalContext } from '../modal/dialog/modal-context';

export class SearcherDialogParameters<T> extends SystelabModalContext {
	public valueToSearch: string;
	public searcher: AbstractSearcher<T>;
	public showCloseButton = true;
	public showSelectedRowsInSubmitButton = false;
	public isTeeSearcher: boolean = false;
	public debounceTime: number = 0;
	public searchByStartWithAsDefault: boolean = false;
}
