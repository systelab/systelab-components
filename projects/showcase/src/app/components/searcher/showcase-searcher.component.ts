import { Component } from '@angular/core';
import { ShowcaseSearcherData } from './inner-searcher';

@Component({
	selector:    'showcase-searcher',
	templateUrl: 'showcase-searcher.component.html'
})
export class ShowcaseSearcherComponent {
	public comboOptionList: Array<ShowcaseSearcherData> = this.getDataModel();
	public selectedComboOptionList: Array<ShowcaseSearcherData> = [];
	public comboSearcherId: string;
	public comboSearcherDescription: string;
	public comboTreeSearcherId: string;
	public comboTreeSearcherDescription: string;
	public comboTreeHeaderSearcherId: string;
	public comboTreeHeaderSelectableSearcherDescription: string;
	public disabledComboSearcherId: string;
	public disabledComboSearcherDescription: string;
	constructor() {
	}

	private getDataModel(): Array<ShowcaseSearcherData> {
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
		return array;
	}

	public doAny(evt): void {
		console.log(evt);
	}

	public changeSearcher(evt) {
		console.log(evt);
		this.comboSearcherDescription = evt;
	}
}
