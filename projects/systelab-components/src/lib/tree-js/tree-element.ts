export interface TreeElementNode<T> {
	expandable?: boolean;
	name?: string;
	level?: number;
	isExpanded?: boolean;
	id?: number;
	data?: T;
	icon?: string;
	expandedIcon?: string;
	collapsedIcon?: string;
	textClass?: string;
	isNodeSelected?: boolean;
}
