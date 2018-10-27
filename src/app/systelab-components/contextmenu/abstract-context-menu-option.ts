export abstract class AbstractContextMenuOption<T, K> {
	public actionId: string;
	public actionText: string;
	public action?: T;
	public isActionEnabled?: K;
	public isDivider?: boolean;
	public iconClass?: string;
	public backgroundIconColor?: string;
	public iconColor?: string;
	public isIconEnabled?: K;
	public childrenContextMenuOptions?: Array<AbstractContextMenuOption<T, K>>;
	public iconFontSize?: string;
}
