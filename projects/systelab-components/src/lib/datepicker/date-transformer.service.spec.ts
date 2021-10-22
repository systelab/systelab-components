import { TestBed } from '@angular/core/testing';
import {DataTransformerService} from './date-transformer.service';

describe('DataTransformerService Test', () => {
	let dataTransformerService: DataTransformerService;
	const todayDate = new Date();
	const yesterdayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 1);

	const shortcutsScenarios = [
		{description: '3 days and No from date', dateString: '3d', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 3)},
		{description: '2 weeks and No from date', dateString: '2w', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 14)},
		{description: '2 weeks (as s) and No from date', dateString: '2s', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 14)},
		{description: '1 month and No from date', dateString: '1m', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, todayDate.getDate())},
		{description: '1 year and No from date', dateString: '1y', fromDate: undefined,
				expected: new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate())},
		{description: '2 year (as a) and No from date', dateString: '1a', fromDate: undefined,
				expected: new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate())},
		{description: 'Minus 3 days and No from date', dateString: '-3d', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 3)},
		{description: '3 days and From yesterday date', dateString: '3d', fromDate: yesterdayDate,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 2)},
	];

 	function isSameDate(date1: Date, date2: Date): boolean {
		if (date1.getDate() !== date2.getDate()) {
			return false;
		}
		if (date1.getMonth() !== date2.getMonth()) {
			return false;
		}
		return date1.getFullYear() === date2.getFullYear();
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:   [
			],
			providers: [
				DataTransformerService
			]
		});
		dataTransformerService = TestBed.inject(DataTransformerService);
	});

	afterEach(() => {
		TestBed.resetTestingModule();
	});

	it('should be created', () => {
		expect(dataTransformerService)
			.toBeTruthy();
	});

	shortcutsScenarios.forEach((parameter) => {
		it(parameter.description, () => {
			const transformedDate: Date = dataTransformerService.processShortcuts(parameter.dateString, parameter.fromDate);
			transformedDate.setHours(0,0,0);
			expect(isSameDate(transformedDate, parameter.expected)).toBeTrue();
		});
	});

});
