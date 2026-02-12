import { ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbstractApiTreeComboBox } from 'systelab-components';
import { PreferencesService } from 'systelab-preferences';
import { ShowcaseTreeSearcherData } from '../searcher/showcase-tree-searcher-data.model';

@Component({
	selector:    'showcase-inner-tree-generic-combobox',
	templateUrl: '../../../../../systelab-components/src/lib/combobox/abstract-combobox.component.html',
	standalone:  false,
})
export class ShowcaseInnerTreeGenericComboboxComponent extends AbstractApiTreeComboBox<ShowcaseTreeSearcherData> {
	constructor(public myRenderer: Renderer2, public chref: ChangeDetectorRef, public preferencesService: PreferencesService) {
		super(myRenderer, chref, preferencesService);
	}

	private totalItems: number = 0;

	getData(): Observable<Array<ShowcaseTreeSearcherData>> {
		const array: ShowcaseTreeSearcherData[] = [];
		array.push(new ShowcaseTreeSearcherData('1', 'Code1', 'Description1', 0, '1', 'level1Code1', 'level1Description1'));
		array.push(new ShowcaseTreeSearcherData('1', 'Code1', 'Description1', 1, '2', 'level1Code2', 'level1Description2'));
		array.push(new ShowcaseTreeSearcherData('1', 'Code1', 'Description1', 1, '3', 'level1Code3', 'level1Description3'));
		array.push(new ShowcaseTreeSearcherData('1', 'Code1', 'Description1', 1, '4', 'level1Code4', 'level1Description4'));
		array.push(new ShowcaseTreeSearcherData('1', 'Code1', 'Description1', 1, '5', 'level1Code5', 'level1Description5'));
		array.push(new ShowcaseTreeSearcherData('6', 'Code6', 'Description6', 0, '6', 'level1Code6', 'level1Description6'));
		array.push(new ShowcaseTreeSearcherData('6', 'Code6', 'Description6', 1, '7', 'level1Code7', 'level1Description7'));
		array.push(new ShowcaseTreeSearcherData('6', 'Code6', 'Description6', 1, '8', 'level1Code8', 'level1Description8'));
		array.push(new ShowcaseTreeSearcherData('6', 'Code6', 'Description6', 1, '9', 'level1Code9', 'level1Description9'));
		array.push(new ShowcaseTreeSearcherData('6', 'Code6', 'Description6', 1, '10', 'level1Code10', 'level1Description 10 This is a large description for the element number 10'));
		array.push(new ShowcaseTreeSearcherData('11', 'Code11', 'Description11', 0, '11', 'level1Code11', 'level1Description11'));
		array.push(new ShowcaseTreeSearcherData('11', 'Code11', 'Description11', 1, '12', 'level1Code12', 'level1Description12'));
		array.push(new ShowcaseTreeSearcherData('11', 'Code11', 'Description11', 1, '13', 'level1Code13', 'level1Description13'));
		array.push(new ShowcaseTreeSearcherData('11', 'Code11', 'Description11', 1, '14', 'level1Code14', 'level1Description14'));
		array.push(new ShowcaseTreeSearcherData('11', 'Code11', 'Description11', 1, '15', 'level1Code15', 'level1Description15'));
		this.totalItems = array.length;
		return of(array);
	}

	public getInstance(): any {
		return {};
	}

	getTotalItems(): number {
		return this.totalItems;
	}

	getCodeField(level): string {
		if (level === 1) {
			return 'level1Code';
		}
		return 'code'
	}

	getIdField(level): string {
		if (level === 1) {
			return 'level1Id';
		}
		return 'id';
	}

	getDescriptionField(level: number): string {
		if (level === 0) {
			return 'description';
		}
		return 'level1Description';
	}

	getLevelDescriptionField(level: number): string {
		if (level === 0) {
			return 'description';
		}
		return 'level1Description';
	}

	getLevelIdField(level: number): string {
		if (level === 0) {
			return 'id';
		}
		return 'level1Id';
	}

	getAllNodeId(): string | number {
		return 0;
	}

	getAllNodeDescription(): string {
		return '';
	}

	getSelectionPrefix(level: number): string {
		if (level === 0) {
			return '0';
		}
		return '1';
	}

}