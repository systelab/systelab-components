export class TreeElement<T = any> {
	label?: string;
	id?: number;
	data?: T;
	icon?: string;
	expandedIcon?: any;
	collapsedIcon?: any;
	children?: TreeElement<T>[];
	expanded?: boolean;
	textClass?: string;
	draggable?: boolean;
	droppable?: boolean;
	isSelected = false;
}
