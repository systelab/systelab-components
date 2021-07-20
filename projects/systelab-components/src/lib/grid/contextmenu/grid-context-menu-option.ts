import { GridContextMenuActionData } from './grid-context-menu-action-data';
import { AbstractContextMenuOption } from '../../contextmenu/abstract-context-menu-option';

export type GridContextMenuActionFunction<T> = (data: GridContextMenuActionData<T>) => void;
export type GridContextMenuIsEnabledFunction<T> = (data: T) => boolean;

export class GridContextMenuOption<T> extends AbstractContextMenuOption<GridContextMenuActionFunction<T>, GridContextMenuIsEnabledFunction<T>> {

	constructor(public override actionId: string,
	            public override actionText: string,
	            public override action?: GridContextMenuActionFunction<T>,
	            public override isActionEnabled?: GridContextMenuIsEnabledFunction<T>,
	            public override isDivider?: boolean,
	            public override iconClass?: string,
	            public override backgroundIconColor?: string,
	            public override iconColor?: string,
	            public override childrenContextMenuOptions?: Array<GridContextMenuOption<T>>,
	            public override iconFontSize?: string) {
		super();
	}
}
