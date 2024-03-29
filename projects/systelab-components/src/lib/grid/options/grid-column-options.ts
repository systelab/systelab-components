import { TwoListItem } from '../../twolist/two-list-utilities';

export class GridColumnsOptions {
	public available: Array<TwoListItem> = [];
	public visible: Array<TwoListItem> = [];
	public initialAvailableColumns: Array<TwoListItem> = [];
	public defaultVisibleColumns?: Array<TwoListItem> = [];
	public defaultHiddenColumns?: Array<TwoListItem> = [];
}
