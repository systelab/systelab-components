export interface TreeElementNode {
	expandable: boolean;
	name: string;
	level: number;
	isExpanded?: boolean;
	id: number;
	data: any;
	icon?: string;
	nodeClass?: string;
	isNodeSelected?: boolean;
}
