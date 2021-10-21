import {Component, ViewChild} from '@angular/core';
import {TreeDataFieldsName, AbstractSystelabTree} from 'systelab-components';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {ButtonModule} from 'primeng/button';
import {HttpClientModule} from '@angular/common/http';
import {SystelabTranslateModule} from 'systelab-translate';
import {SystelabPreferencesModule} from 'systelab-preferences';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FourthLevelData} from '../../../../showcase/src/app/components/tree/showcase-cdk-tree.component';

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
	selector: 'test-systelab-cdk-tree',
	templateUrl: 'abstract-systelab-tree.component.html'
})
export class TestCdkTreeComponent extends AbstractSystelabTree<FirstLevelData> {

	private exampleTree: Array<FirstLevelData> = [];

		constructor() {
			super();
			this.exampleTree = this.createExampleTree();
		}

	protected getData(): Array<FirstLevelData> {
			return this.exampleTree;
		}

	protected getTreeDataFieldsMap(): Map<string, TreeDataFieldsName> {
			const treeDataFieldsMap: Map<string, TreeDataFieldsName> = new Map<string, TreeDataFieldsName>();
		treeDataFieldsMap.set(FirstLevelData.name, new TreeDataFieldsName('firstLevelID', 'firstLevelName', 'innerSecondLevel'))
		treeDataFieldsMap.set(SecondLevelData.name, new TreeDataFieldsName('secondLevelID', 'secondLevelName', 'innerThirdLevel'))
		treeDataFieldsMap.set(ThirdLevelData.name, new TreeDataFieldsName('thirdLevelID', 'thirdLevelName', 'innerFourthLevel'))
		treeDataFieldsMap.set(FourthLevelData.name, new TreeDataFieldsName('fourthLevelID', 'fourthLevelName'))
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


@Component({
	selector: 'systelab-cdk-tree-test',
	template: `
        <div class="container-fluid" style="height: 200px;">
            <div class="row mt-1">
                <label class="col-md-3 col-form-label" for="form-h-s">Test:</label>
                <div class="col-md-9">
	                <test-systelab-cdk-tree #testTree></test-systelab-cdk-tree>
                </div>
            </div>
        </div>
	`
})
export class SystelabCdkTreeTestComponent {
	@ViewChild('testTree') public testTree: TestCdkTreeComponent;
}

describe( 'Systelab Cdk Tree', () => {
	let fixture: ComponentFixture<SystelabCdkTreeTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				CdkTreeModule
			],
			declarations: [
				TestCdkTreeComponent,
				SystelabCdkTreeTestComponent
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SystelabCdkTreeTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should expand the first node', () => {
		clickNode(fixture, 0);
		expect(fixture.componentInstance.testTree.treeData[0].isNodeSelected).toBeTruthy();
	})
});

function clickNode(fixture: ComponentFixture<SystelabCdkTreeTestComponent>, nodeToSelect: number) {
	fixture.debugElement.nativeElement.getElementsByTagName('cdk-tree-node')[nodeToSelect]?.click();
	fixture.detectChanges();
}
