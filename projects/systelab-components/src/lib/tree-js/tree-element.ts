export class TreeElement<T = any> {
	label?: string;
	id?: number;
	data?: T;
	icon?: string;
	expandedIcon? = 'fas fa-chevron-down';
	collapsedIcon? = 'fas fa-chevron-right';
	children?: TreeElement<T>[];
	expanded?: boolean;
	textClass?: string;
	isSelected = false;
}
