import { GridContextMenuActionData } from './grid-context-menu-action-data';

export type GridContextMenuActionFunction<T>= ( data: GridContextMenuActionData<T> ) => void;
export type GridContextMenuIsEnabledFunction<T>= ( data: T ) => boolean;

export class GridContextMenuOption<T> {

	constructor( public actionId: string,
				 public actionText: string,
				 public action?: GridContextMenuActionFunction<T>,
				 public isActionEnabled?: GridContextMenuIsEnabledFunction<T>,
				 public isDivider?: boolean) {
	}

}
