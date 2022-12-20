export class TreeNode<T = any> {
	label?: string;
	data?: T;
	icon?: string;
	status?: string;
	expandedIcon?: any;
	collapsedIcon?: any;
	children?: TreeNode<T>[];
	parent?: TreeNode<T>;
	leaf?: boolean;
	expanded?: boolean;
	styleClass?: string;
	selectable?: boolean;
	isNodeSelected?: boolean;
	key?: string;
}
