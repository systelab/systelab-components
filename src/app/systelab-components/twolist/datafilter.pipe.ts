import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'datafilter'
})

export class DataFilterPipe implements PipeTransform {

	public transform(input: any[], searchString: string): any {
		const result = [];
		if (!searchString) {
			return input;
		}

		for (const element of input) {
			if (element.colId.toLowerCase()
					.indexOf(searchString.toLowerCase()) > -1) {
				result.push(element);
			}
		}
		return result;
	}
}
