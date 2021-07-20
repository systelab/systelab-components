import { ContextMenuActionData } from './context-menu-action-data';
import { AbstractContextMenuOption } from './abstract-context-menu-option';

export type ContextMenuActionFunction = (data: ContextMenuActionData) => void;
export type ContextMenuIsEnabledFunction = (elementId: string, actionId: string) => boolean;

export class ContextMenuOption extends AbstractContextMenuOption<ContextMenuActionFunction, ContextMenuIsEnabledFunction> {

	constructor(public override actionId: string,
	            public override actionText: string,
	            public override action?: ContextMenuActionFunction,
	            public override isActionEnabled?: ContextMenuIsEnabledFunction,
	            public override isDivider?: boolean,
	            public override iconClass?: string,
	            public override backgroundIconColor?: string,
	            public override iconColor?: string,
	            public override isIconEnabled?: ContextMenuIsEnabledFunction,
	            public override childrenContextMenuOptions?: Array<ContextMenuOption>,
	            public override iconFontSize?: string) {
		super();
	}
}
