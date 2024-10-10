import { Observable, of } from 'rxjs';
import { I18nService } from 'systelab-translate';
import { AbstractSearcher } from 'systelab-components';
import { SearcherDialogParameters } from 'systelab-components';
import { IsFullWidthRowParams } from 'ag-grid-community';
import { SearcherTreeHeaderRendererComponent } from 'systelab-components';
import { ShowcaseSearcherData } from './showcase-searcher-data.model';

export class InnerSearcher extends AbstractSearcher<ShowcaseSearcherData> {

	private dataModel:Array<ShowcaseSearcherData> = [];
	constructor(public i18nService: I18nService) {
		super();
		this.generateMockData(100);
	}

	public getDialogParameters(): SearcherDialogParameters<ShowcaseSearcherData> {
		const searcherDialogParameters: SearcherDialogParameters<ShowcaseSearcherData> = new SearcherDialogParameters<ShowcaseSearcherData>();
		searcherDialogParameters.widthRelative = '66%';
		searcherDialogParameters.heightRelative = '66%';
		searcherDialogParameters.showSelectedRowsInSubmitButton = true;
		return searcherDialogParameters;
	}

	public getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<ShowcaseSearcherData>> {
		const aCode = (useCode) ? valueToSearch : undefined;
		const aSearch = (useCode) ? undefined : valueToSearch;
		//this.dataModel = this.getDataModel(valueToSearch);

		const pages: Map<number, ShowcaseSearcherData[]> = new Map<number, ShowcaseSearcherData[]>();

		let pageIndex: number = 1;
		let pageData: ShowcaseSearcherData[] = [];
		this.dataModel.forEach((data, index) => {
			if(pageData.length < pageNumber) {
				pageData.push(data);
			} else {
				pages.set(pageIndex, [...pageData]);
				pageIndex += 1;
				pageData = [data];
			}
			if(this.dataModel.length === index+1) {
				pages.set(pageIndex, [...pageData]);
				pageData = [];
			}
		});
		console.log(`Page number: ${page} with values ${pages.get(page).length}`);
		return of(this.getDataFromPage(pages.get(page), valueToSearch));
	}


	public getTotalItems(): number {
		return this.dataModel.length ?? 0;
	}

	public getColumnDefs(): Array<any> {
		return [
			{
				colId:      'code',
				headerName: this.i18nService.instant('COMMON_CODE'),
				field:      'code',
				width:      300
			},
			{
				colId:      'description',
				headerName: this.i18nService.instant('COMMON_DESCRIPTION'),
				field:      'description',
			}
		];

	}

	public getIsFullWidthRow(isFullWidthRowParams: IsFullWidthRowParams): boolean {
		return isFullWidthRowParams.rowNode.data ? (this.treeSearcher && isFullWidthRowParams.rowNode.data.level === 0) : false;
	}

	public getFullWidthCellRenderer(): any {
		return SearcherTreeHeaderRendererComponent;
	}

	public getIdField(): string {
		return 'id';
	}

	public getCodeField(): string {
		return 'code';
	}

	public getDescriptionField(): string {
		return 'description';
	}

	public getTextForSearcherLabel(): string {
		return this.i18nService.instant('COMMON_DATA');
	}

	public getTitleForDialog(): string {
		return this.i18nService.instant('COMMON_DATA');
	}

	public getGridOptionsPreferencesPrefix(): string {
		return 'ShowcaseGridSearcher';
	}

	private getDataModel(valueToSearch: string): Array<ShowcaseSearcherData> {
		const array: ShowcaseSearcherData[] = [];

		array.push(new ShowcaseSearcherData('1', 'Code1', 'Description1', 0));
		array.push(new ShowcaseSearcherData('2', 'Code2', 'Description2'));
		array.push(new ShowcaseSearcherData('3', 'Code3', 'Description3'));
		array.push(new ShowcaseSearcherData('4', 'Code4', 'Description4'));
		array.push(new ShowcaseSearcherData('5', 'Code5', 'Description5'));
		array.push(new ShowcaseSearcherData('6', 'Code6', 'Description6', 0));
		array.push(new ShowcaseSearcherData('7', 'Code7', 'Description7'));
		array.push(new ShowcaseSearcherData('8', 'Code8', 'Description8'));
		array.push(new ShowcaseSearcherData('9', 'Code9', 'Description9'));
		array.push(new ShowcaseSearcherData('10', 'Code10', 'Description 10 This is a large description for the element number 10'));
		array.push(new ShowcaseSearcherData('11', 'Code11', 'Description11', 0));
		array.push(new ShowcaseSearcherData('12', 'Code12', 'Description12'));
		array.push(new ShowcaseSearcherData('13', 'Code13', 'Description13'));
		array.push(new ShowcaseSearcherData('14', 'Code14', 'Description14'));
		array.push(new ShowcaseSearcherData('15', 'Code15', 'Description15'));

		if (valueToSearch != null) {
			if (valueToSearch.startsWith(('%'))) {
				return array.filter(item => item.description.includes(valueToSearch.substring(1)));
			} else {
				return array.filter(item => item.description.startsWith(valueToSearch));
			}
		} else {
			return array;
		}
	}

	private generateMockData(numOfElements: number): void {
		for (let i: number = 1; i <= numOfElements; i++) {
			this.dataModel.push(new ShowcaseSearcherData(`${i}`, `Code${i}`, `Description${i}`, (i % 5 === 0 || i === 1) ? 0 : 1));
		}
	}

	private getDataFromPage(pageData: ShowcaseSearcherData[], valueToSearch: string): ShowcaseSearcherData[] {
		if (valueToSearch != null) {
			if (valueToSearch.startsWith(('%'))) {
				return pageData.filter(item => item.description.includes(valueToSearch.substring(1)));
			} else {
				return pageData.filter(item => item.description.startsWith(valueToSearch));
			}
		} else {
			return pageData;
		}
	}
}
