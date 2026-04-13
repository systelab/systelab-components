import { provideZoneChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DataTransformerService } from './date-transformer.service';

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
		{description: '1 month from 1st of current month', dateString: '1m',
			fromDate: new Date(todayDate.getFullYear(), todayDate.getMonth(), 1),
			expected: new Date(todayDate.getFullYear(), todayDate.getMonth() + 1,1)},
		{description: '1 year and No from date', dateString: '1y', fromDate: undefined,
				expected: new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate())},
		{description: '2 year (as a) and No from date', dateString: '1a', fromDate: undefined,
				expected: new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate())},
		{description: 'Minus 3 days and No from date', dateString: '-3d', fromDate: undefined,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 3)},
		{description: '3 days and From yesterday date', dateString: '3d', fromDate: yesterdayDate,
				expected: new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 2)},
	];

	const checkMonthScenarios = [
		{description: 'Month number -1', monthNumber: -1, expected: false},
		{description: 'Month Number 5', monthNumber: 5, expected: true},
		{description: 'Month Number 15', monthNumber: 15, expected: false},
	];

	const checkDayScenarios = [
		{description: 'Day Number -1', yearInDate: 2024, monthInDate: 6, dayNumber: -1, expected: false},
		{description: 'Day Number 21', yearInDate: 2024, monthInDate: 6, dayNumber: 21, expected: true},
		{description: 'Day Number 35', yearInDate: 2024, monthInDate: 6, dayNumber: 35, expected: false},
	];

	const getSeparatorScenarios = [
		{description: 'Format Date yy/mm', dateFormat: 'yy/mm', expected: '/'},
		{description: 'Format Date yy-mm', dateFormat: 'yy-mm', expected: '-'},
		{description: 'Format Date yy.mm', dateFormat: 'yy.mm', expected: '.'},
		{description: 'Format Date yy', dateFormat: 'yy', expected: undefined},
	];

 	const isSameDate = (date1: Date, date2: Date): boolean => {
		if (date1.getDate() !== date2.getDate()) {
			return false;
		}
		if (date1.getMonth() !== date2.getMonth()) {
			return false;
		}
		return date1.getFullYear() === date2.getFullYear();
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports:   [
			],
			providers: [
				DataTransformerService,
				provideZoneChangeDetection(),
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

	checkMonthScenarios.forEach(scenario => {
		it(scenario.description, () => {
			const result = dataTransformerService['checkMonthNumber'](scenario.monthNumber);
			expect(result).toEqual(scenario.expected);
		});
	})

	checkDayScenarios.forEach(scenario => {
		it(scenario.description, () => {
			const result = dataTransformerService['checkDayNumber'](scenario.yearInDate, scenario.monthInDate, scenario.dayNumber);
			expect(result).toEqual(scenario.expected);
		});
	})

	getSeparatorScenarios.forEach(scenario => {
		it(scenario.description, () => {
			const result = dataTransformerService['getDateSeparator'](scenario.dateFormat);
			expect(result).toEqual(scenario.expected);
		});
	})

});
