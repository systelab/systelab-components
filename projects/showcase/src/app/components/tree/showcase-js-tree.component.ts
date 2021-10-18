import {Component} from '@angular/core';
import {TreeDataLevelInfo, SystelabTree, SystelabTreeConverter} from 'systelab-components';

export class FirstLevelData {
	public firstLevelName: string;
	public firstLevelID: number;
	public innerSecondLevel: Array<SecondLevelData>
}

export class SecondLevelData {
	public secondLevelName: string;
	public secondLevelID: number;
	public innerThirdLevel: Array<ThirdLevelData>
}

export class ThirdLevelData {
	public thirdLevelName: string;
	public thirdLevelID: number;
}

@Component({
	selector: 'showcase-js-tree',
	templateUrl: '../../../../../systelab-components/src/lib/tree-js/systelab-tree.component.html',
	providers: [SystelabTreeConverter]
})
export class ShowcaseJSTreeComponent extends SystelabTree<FirstLevelData> {

	constructor(private readonly systelabTreeConverter: SystelabTreeConverter) {
		super();
	}

	public ngOnInit(): void {
		const newTree = this.createTree();
		const treeDataInfoList = this.createTreeDataInfoList();
		this.treeData = this.systelabTreeConverter.convertToTreeStructure(newTree, 0, treeDataInfoList);
		this.treeData[1].icon = 'fas fa-jedi';
		this.treeData[1].textClass = 'text-danger';
		this.treeData[2].icon = 'fab fa-empire';
		this.treeData[2].textClass = 'text-success';
		this.treeData[4].icon = 'fab fa-old-republic';
		this.treeData[7].textClass = 'text-warning';
		this.setDataSource();
	}

	private createTreeDataInfoList(): Array<TreeDataLevelInfo> {
		const dataInfoList: Array<TreeDataLevelInfo> = new Array<TreeDataLevelInfo>();
		dataInfoList.push(this.systelabTreeConverter.createDataLevelInfo('firstLevelName', 'firstLevelID', 'innerSecondLevel'));
		dataInfoList.push(this.systelabTreeConverter.createDataLevelInfo('secondLevelName', 'secondLevelID', 'innerThirdLevel'));
		dataInfoList.push(this.systelabTreeConverter.createDataLevelInfo('thirdLevelName', 'thirdLevelID'));
		return dataInfoList;
	}

	private createTree(): Array<FirstLevelData> {
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
