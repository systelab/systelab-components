import { Observable, of } from 'rxjs';
import { I18nService } from 'systelab-translate';
import { AbstractSearcher } from 'systelab-components';
import { SearcherDialogParameters } from 'systelab-components';
import { IsFullWidthRowParams } from 'ag-grid-community';
import { SearcherTreeHeaderRendererComponent } from 'systelab-components';

export class ShowcaseSearcherData {
	constructor(public id: string, public code: string, public description: string, public level?: number) {

	}

}

export class InnerSearcher extends AbstractSearcher<ShowcaseSearcherData> {

	private dataModel:Array<ShowcaseSearcherData> = [];
	public treeSearcher: boolean = false;
	public headerSelectable: boolean = false;
	constructor(public i18nService: I18nService) {
		super();
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

		this.dataModel = this.getDataModel(valueToSearch);

		return of(this.dataModel);
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

		array.push(new ShowcaseSearcherData('1', '1', '1', 0));
		array.push(new ShowcaseSearcherData('2', '2', '2'));
		array.push(new ShowcaseSearcherData('3', '3', '3'));
		array.push(new ShowcaseSearcherData('4', '4', '4'));
		array.push(new ShowcaseSearcherData('5', '5', '5'));
		array.push(new ShowcaseSearcherData('6', '6', '6', 0));
		array.push(new ShowcaseSearcherData('7', '7', '7'));
		array.push(new ShowcaseSearcherData('8', '8', '8'));
		array.push(new ShowcaseSearcherData('9', '9', '9'));
		array.push(new ShowcaseSearcherData('10', '10', 'This is a large description for the element number 10'));
		array.push(new ShowcaseSearcherData('11', '11', '11', 0));
		array.push(new ShowcaseSearcherData('12', '12', '12'));
		array.push(new ShowcaseSearcherData('13', '13', '13'));
		array.push(new ShowcaseSearcherData('14', '14', '14'));
		array.push(new ShowcaseSearcherData('15', '15', '15'));

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
}
