import { AbstractApiComboBox } from 'systelab-components';
import { ShowcaseSearcherData } from '../searcher/showcase-searcher-data.model';
import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShowcaseTreeSearcherData } from '../searcher/showcase-tree-searcher-data.model';
import { PreferencesService } from 'systelab-preferences';

@Component({
	selector:    'showcase-api-paginate-combobox',
	templateUrl: '../../../../../systelab-components/src/lib/combobox/abstract-combobox.component.html'
})
export class ShowcaseApiPaginateCombobox extends AbstractApiComboBox<ShowcaseSearcherData> {

	private totalItems: number = 0;
	private mockArrayData: ShowcaseSearcherData[] = [];

	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService: PreferencesService) {
		super(myRenderer, chref, preferencesService);
		this.generateMockData(100);
	}

	private generateMockData(numOfElements: number): void {
		for (let i: number = 1; i <= numOfElements; i++) {
			this.mockArrayData.push(new ShowcaseSearcherData(`${i}`, `Code${i}`, `Description${i}`));
		}
		this.totalItems = numOfElements;
	}

    getData(page: number, itemsPerPage: number, startsWithParameter: string): Observable<Array<ShowcaseSearcherData>> {
		const pages: Map<number, ShowcaseSearcherData[]> = new Map<number, ShowcaseSearcherData[]>();
		let pageIndex: number = 1;
		let pageData: ShowcaseSearcherData[] = [];
		this.mockArrayData.forEach((data, index) => {
			if(pageData.length < itemsPerPage) {
				pageData.push(data);
			} else {
				pages.set(pageIndex, [...pageData]);
				pageIndex += 1;
				pageData = [data];
			}
			if(this.mockArrayData.length === index+1) {
				pages.set(pageIndex, [...pageData]);
				pageData = [];
			}
		});
		return of(pages.get(page));
    }
    getTotalItems(): number {
        return this.totalItems;
    }
    getInstance(): ShowcaseSearcherData {
		return new ShowcaseSearcherData('','','');
    }
    getDescriptionField(): string {
        return 'description';
    }
    getCodeField(): string {
        return 'code';
    }
    getIdField(): string {
        return 'id';
    }

}