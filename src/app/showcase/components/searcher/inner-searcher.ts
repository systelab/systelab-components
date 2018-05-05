import { Observable, of } from 'rxjs';
import { I18nService } from 'systelab-translate/lib/i18n.service';
import { AbstractSearcher } from '../../../systelab-components/searcher/abstract-searcher';
import { SearcherDialogParameters } from '../../../systelab-components/searcher/searcher.dialog.component';

export class ShowcaseSearcherData {
	constructor(public id: string, public code: string, public description: string) {

	}

}

export class InnerSearcher extends AbstractSearcher<ShowcaseSearcherData> {

	constructor(public i18nService: I18nService) {
		super();
	}

	public getDialogParameters(): SearcherDialogParameters<ShowcaseSearcherData> {
		const searcherDialogParameters: SearcherDialogParameters<ShowcaseSearcherData> = new SearcherDialogParameters<ShowcaseSearcherData>();
		searcherDialogParameters.dialogClass = 'w-66 h-66';
		return searcherDialogParameters;
	}

	public getData(valueToSearch: string, page: number, pageNumber: number, useCode?: boolean): Observable<Array<ShowcaseSearcherData>> {
		const aCode = (useCode) ? valueToSearch : undefined;
		const aSearch = (useCode) ? undefined : valueToSearch;

		const array: ShowcaseSearcherData[] = [];

		array.push(new ShowcaseSearcherData('1', '1', '1'));
		array.push(new ShowcaseSearcherData('2', '2', '2'));
		array.push(new ShowcaseSearcherData('3', '3', '3'));
		array.push(new ShowcaseSearcherData('4', '4', '4'));
		array.push(new ShowcaseSearcherData('5', '5', '5'));
		array.push(new ShowcaseSearcherData('6', '6', '6'));
		array.push(new ShowcaseSearcherData('7', '7', '7'));
		array.push(new ShowcaseSearcherData('8', '8', '8'));
		array.push(new ShowcaseSearcherData('9', '9', '9'));
		array.push(new ShowcaseSearcherData('10', '10', 'This is a large description for the element number 10'));
		array.push(new ShowcaseSearcherData('11', '11', '11'));
		array.push(new ShowcaseSearcherData('12', '12', '12'));
		array.push(new ShowcaseSearcherData('13', '13', '13'));
		array.push(new ShowcaseSearcherData('14', '14', '14'));
		array.push(new ShowcaseSearcherData('15', '15', '15'));

		return of(array);
	}

	public getTotalItems(): number {
		return 15;
	}

	public getColumnDefs(): Array<any> {
		return [
			{
				colID:      'code',
				headerName: this.i18nService.instant('COMMON_CODE'),
				field:      'code',
				width:      300
			},
			{
				colID:      'description',
				headerName: this.i18nService.instant('COMMON_DESCRIPTION'),
				field:      'description',
			}
		];

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
}
