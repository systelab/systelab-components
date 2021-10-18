import { Injectable } from '@angular/core';
import {TreeElementNode} from './tree-element';

export class TreeDataLevelInfo {
	public idFieldName: string;
	public nameFieldName: string;
	public childrenFieldName: string;
}

@Injectable()
export class SystelabTreeConverter {


	constructor() {
	}

	public createDataLevelInfo(name: string, id: string, innerElements?: string): TreeDataLevelInfo {
		const dataInfo: TreeDataLevelInfo = new TreeDataLevelInfo();
		dataInfo.idFieldName = id;
		dataInfo.nameFieldName = name;
		dataInfo.childrenFieldName = innerElements;
		return dataInfo
	}

	public convertToTreeStructure(dataList: Array<any>, levelValue: number, dataInfoList: Array<TreeDataLevelInfo>): Array<TreeElementNode<any>> {
		const treeElementNodeList: Array<TreeElementNode<any>> = [];
		dataList.forEach(data => {
			const dataInfo = dataInfoList[levelValue];
			treeElementNodeList.push(this.createTreeElementNode(data, levelValue, dataInfo));
			if ( data[dataInfo.childrenFieldName]) {
				treeElementNodeList.push(...this.convertToTreeStructure(data[dataInfo.childrenFieldName], levelValue + 1, dataInfoList));
			}
		});
		return treeElementNodeList;
	}

	private createTreeElementNode(data: any, levelValue: number, dataInfo: TreeDataLevelInfo): TreeElementNode<any> {
		const node: TreeElementNode<any> = {};
		node.data = data;
		node.id = data[dataInfo.idFieldName];
		node.name = data[dataInfo.nameFieldName];
		node.level = levelValue;
		node.expandable = !!data[dataInfo.childrenFieldName];
		return node;
	}

}
