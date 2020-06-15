import { GridContextMenuActionData } from './grid-context-menu-action-data';
import { AbstractContextMenuOption } from '../../contextmenu/abstract-context-menu-option';

export type GridContextMenuActionFunction<T> = (data: GridContextMenuActionData<T>) => void;
export type GridContextMenuIsEnabledFunction<T> = (data: T) => boolean;

export class GridContextMenuOption<T> extends AbstractContextMenuOption<GridContextMenuActionFunction<T>, GridContextMenuIsEnabledFunction<T>> {

	constructor(public actionId: string,
	            public actionText: string,
	            public action?: GridContextMenuActionFunction<T>,
	            public isActionEnabled?: GridContextMenuIsEnabledFunction<T>,
	            public isDivider?: boolean,
	            public iconClass?: string,
	            public backgroundIconColor?: string,
	            public iconColor?: string,
	            public childrenContextMenuOptions?: Array<GridContextMenuOption<T>>,
	            public iconFontSize?: string) {
		super();
	}
}
