import { Component } from '@angular/core';
import { ShowcaseSearcherData } from './showcase-searcher-data.model';

@Component({
	selector:    'showcase-searcher',
	templateUrl: 'showcase-searcher.component.html',
	standalone:  false
})
export class ShowcaseSearcherComponent {
	public comboOptionList: Array<ShowcaseSearcherData> = [];
	public selectedComboOptionList: Array<ShowcaseSearcherData> = [];
	public selectedComboOptionListPaginate: Array<ShowcaseSearcherData> = [];
	public comboSearcherId: string;
	public comboSearcherDescription: string;
	public comboTreeSearcherId: string;
	public comboTreeSearcherDescription: string;
	public comboTreeHeaderSearcherId: string;
	public comboTreeHeaderSelectableSearcherDescription: string;
	public disabledComboSearcherId: string;
	public disabledComboSearcherDescription: string;

	constructor() {
		this.generateMockData(100);
	}

	private getDataModel(): Array<ShowcaseSearcherData> {
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
		return array;
	}

	private generateMockData(numOfElements: number): void {
		for (let i: number = 1; i <= numOfElements; i++) {
			this.comboOptionList.push(new ShowcaseSearcherData(`${i}`, `Code${i}`, `Description${i}`));
		}
	}

	public change(event: any): void {
		console.log(event);
	}
}
