import { ContextMenuActionData } from './context-menu-action-data';
import { AbstractContextMenuOption } from './abstract-context-menu-option';

export type ContextMenuActionFunction = (data: ContextMenuActionData) => void;
export type ContextMenuIsEnabledFunction = (elementId: string, actionId: string) => boolean;

export class ContextMenuOption extends AbstractContextMenuOption<ContextMenuActionFunction, ContextMenuIsEnabledFunction> {

	constructor(public actionId: string,
				public actionText: string,
				public action?: ContextMenuActionFunction,
				public isActionEnabled?: ContextMenuIsEnabledFunction,
				public isDivider?: boolean,
				public iconClass?: string,
				public backgroundIconColor?: string,
				public iconColor?: string,
				public isIconEnabled?: ContextMenuIsEnabledFunction,
				public childrenContextMenuOptions?: Array<ContextMenuOption>,
				public iconFontSize?: string) {
		super();
	}

}
