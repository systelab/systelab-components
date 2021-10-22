import {Component} from '@angular/core';
import {TreeDataFieldsName, AbstractSystelabTree} from 'systelab-components';

export class FirstLevelData {
	public firstLevelName: string;
	public firstLevelID: number;
	public innerSecondLevel: Array<SecondLevelData>;
}

export class SecondLevelData {
	public secondLevelName: string;
	public secondLevelID: number;
	public innerThirdLevel: Array<ThirdLevelData>;
}

export class ThirdLevelData {
	public thirdLevelName: string;
	public thirdLevelID: number;
	public innerFourthLevel: Array<FourthLevelData>;
}
export class FourthLevelData {
	public fourthLevelName: string;
	public fourthLevelID: number;
}

@Component({
	selector: 'showcase-cdk-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-cdk/abstract-systelab-tree.component.html'
})
export class ShowcaseCdkTreeComponent extends AbstractSystelabTree<FirstLevelData> {

	public expandedIcon = 'fas fa-minus-circle';

	private exampleTree: Array<FirstLevelData> = [];

	constructor() {
		super();
		this.exampleTree = this.createExampleTree();
	}

	public doAddMoreNodesToTree(): void {
		const fourthLevelList: Array<FourthLevelData> = [];
		fourthLevelList.push(this.createFourthLevel(0, 'Coco'));
		fourthLevelList.push(this.createFourthLevel(1, 'Mango'));
		this.exampleTree[1].innerSecondLevel[1].innerThirdLevel[1].innerFourthLevel = fourthLevelList;
		this.refresh();
	}

	protected getData(): Array<FirstLevelData> {
		return this.exampleTree;
	}

	protected getTreeDataFieldsMap(): Map<string, TreeDataFieldsName> {
		const treeDataFieldsMap: Map<string, TreeDataFieldsName> = new Map<string, TreeDataFieldsName>();
		treeDataFieldsMap.set(FirstLevelData.name, new TreeDataFieldsName('firstLevelID', 'firstLevelName', 'innerSecondLevel'));
		treeDataFieldsMap.set(SecondLevelData.name, new TreeDataFieldsName('secondLevelID', 'secondLevelName', 'innerThirdLevel'));
		treeDataFieldsMap.set(ThirdLevelData.name, new TreeDataFieldsName('thirdLevelID', 'thirdLevelName', 'innerFourthLevel'));
		treeDataFieldsMap.set(FourthLevelData.name, new TreeDataFieldsName('fourthLevelID', 'fourthLevelName'));
		return treeDataFieldsMap;
	}

	protected getNodeIcon(data: FirstLevelData | SecondLevelData | ThirdLevelData, level: number): string {
		if (data instanceof SecondLevelData && data.secondLevelID === 0) {
			return 'fas fa-jedi text-success';
		} else if (data instanceof SecondLevelData && data.secondLevelID === 1) {
			return 'fab fa-empire';
		} else if (data instanceof FirstLevelData && data.firstLevelID === 1) {
			return 'fab fa-old-republic';
		}
		return '';
	}

	protected getNodeClass(data: FirstLevelData | SecondLevelData | ThirdLevelData, level: number): string {
		if (data instanceof SecondLevelData && data.secondLevelID === 0) {
			return 'text-danger';
		} else if (data instanceof SecondLevelData && data.secondLevelID === 1) {
			return 'text-success';
		} else if (data instanceof ThirdLevelData && data.thirdLevelID === 1) {
			return 'text-warning';
		}
		return '';
	}




	private createFourthLevel(id: number, name: string): FourthLevelData {
		const fourthLevel: FourthLevelData = new FourthLevelData();
		fourthLevel.fourthLevelID = id;
		fourthLevel.fourthLevelName = name;
		return fourthLevel;
	}

	// Dummy methods to create ApplicationData to be represented on the tree for the Showcase.

	private createExampleTree(): Array<FirstLevelData> {
		const showcaseArray: Array<FirstLevelData> = [];
		showcaseArray.push(this.createFristLevelData(0, 'Fruits', this.createSecondLevelList()));
		showcaseArray.push(this.createFristLevelData(1, 'Vegetables', this.createSecondVegetableLevel()));
		return showcaseArray;
	}

	private createFristLevelData(levelID: number, levelName: string, childList?: Array<SecondLevelData>): FirstLevelData {
		const firstLevel: FirstLevelData = new FirstLevelData();
		firstLevel.firstLevelID = levelID;
		firstLevel.firstLevelName = levelName;
		firstLevel.innerSecondLevel = childList;
		return firstLevel;
	}

	private createSecondLevelList(): Array<SecondLevelData> {
		const secondLevelList: Array<SecondLevelData> = new Array<SecondLevelData>();
		secondLevelList.push(this.createSecondLevelData(0, 'Apple'));
		secondLevelList.push(this.createSecondLevelData(1, 'Banana'));
		secondLevelList.push(this.createSecondLevelData(2, 'Fruits Loop'));
		return secondLevelList;
	}

	private createSecondVegetableLevel(): Array<SecondLevelData> {
		const secondLevelList: Array<SecondLevelData> = new Array<SecondLevelData>();
		secondLevelList.push(this.createSecondLevelData(3, 'Green', this.createThidLevelList()));
		secondLevelList.push(this.createSecondLevelData(4, 'Orange', this.createOtherThidLevelList()));
		return secondLevelList;
	}

	private createSecondLevelData(levelID: number, levelName: string, childList?: Array<ThirdLevelData>): SecondLevelData {
		const secondLevel: SecondLevelData = new SecondLevelData();
		secondLevel.secondLevelID = levelID;
		secondLevel.secondLevelName = levelName;
		secondLevel.innerThirdLevel = childList;
		return secondLevel;
	}

	private createThidLevelList(): Array<ThirdLevelData> {
		const thirdLevelList: Array<ThirdLevelData> = new Array<ThirdLevelData>();
		thirdLevelList.push(this.createThirdLevelData(0, 'Broccoli'));
		thirdLevelList.push(this.createThirdLevelData(1, 'Brussels prouts'));
		return thirdLevelList;
	}

	private createOtherThidLevelList(): Array<ThirdLevelData> {
		const thirdLevelList: Array<ThirdLevelData> = new Array<ThirdLevelData>();
		thirdLevelList.push(this.createThirdLevelData(2, 'Pumpkins'));
		thirdLevelList.push(this.createThirdLevelData(3, 'Carrots'));
		return thirdLevelList;
	}

	private createThirdLevelData(levelID: number, levelName: string): ThirdLevelData {
		const thirdLevel: ThirdLevelData = new ThirdLevelData();
		thirdLevel.thirdLevelID = levelID;
		thirdLevel.thirdLevelName = levelName;
		return thirdLevel;
	}
}
