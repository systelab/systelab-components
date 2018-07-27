import {ContextMenuActionData} from './context-menu-action-data';

export type ContextMenuActionFunction = (data: ContextMenuActionData) => void;
export type ContextMenuIsEnabledFunction = (elementId: string, actionId: string) => boolean;
export type ContextMenuIsIconEnabledFunction = (elementId: string, actionId: string) => boolean;

export class IconConfiguration {
	public iconClass: string;
	public backgroundColor: string;
	public iconColor: string;
	public isIconEnabled: ContextMenuIsIconEnabledFunction;

	constructor(public nIconClass?: string, public nBackgroundColor?: string, public nIconColor?: string, public nIsIconEnabled?: ContextMenuIsIconEnabledFunction) {
		this.iconClass = nIconClass;
		this.backgroundColor = nBackgroundColor;
		this.iconColor = nIconColor;
		this.isIconEnabled = nIsIconEnabled;
	}
}

export class ContextMenuOption {

	constructor(public actionId: string,
	            public actionText: string,
	            public action?: ContextMenuActionFunction,
	            public isActionEnabled?: ContextMenuIsEnabledFunction,
	            public isDivider?: boolean,
	            public iconConfig?: IconConfiguration) {
	}

}
