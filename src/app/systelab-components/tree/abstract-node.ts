import { TreeNode } from 'primeng/components/common/api';

export abstract class AbstractNode implements TreeNode {
	public collapsedIcon: string;
	public expandedIcon: string;
	public nodeType: string;
	public label: string;
	public data: any;

	constructor(public newCollapsedIcon?: string, public newExpandedICon?: string) {
		this.collapsedIcon = ( newCollapsedIcon ) ? newCollapsedIcon : 'icon-angle-right';
		this.expandedIcon = ( newExpandedICon ) ? newExpandedICon : 'icon-angle-down';
	}

	protected abstract onSelectNode(evt: any): void;
}
