import { Injectable } from '@angular/core';
import { addDays, addMonths, addWeeks, addYears, getDaysInMonth } from 'date-fns';

@Injectable()
export class DataTransformerService {

	public processShortcuts(date: string, fromDateForRelative: Date): Date {
		const regExp = new RegExp('^[\-]?[0-9]+[DWSMYA]$', 'i');
		if (regExp.test(date)) {
			const shortcut = date.substr(-1)
				.toUpperCase();
			const amount = Number(date.slice(0, -1));
			const fromDate = fromDateForRelative ?  fromDateForRelative : new Date();
			switch (shortcut) {
				case 'D':
					return addDays(fromDate, amount);
				case 'W':
				case 'S':
					return addWeeks(fromDate, amount);
				case 'M':
					return addMonths(fromDate, amount);
				case 'Y':
				case 'A':
					return addYears(fromDate, amount);
			}
		}
		return undefined;
	}

	public infereDate(date: string, dateFormat: string): Date {
		let dateTmp = date.trim();

		const dayPosition = dateFormat.lastIndexOf('d');
		const monthPosition = dateFormat.lastIndexOf('m');
		const yearPosition = dateFormat.lastIndexOf('y');

		const dayBefore = dayPosition < monthPosition;
		const yearBefore = yearPosition < dayPosition;

		let firstSeparatorPosition: number;
		let secondSeparatorPosition: number;

		const separator = this.getDateSeparator(dateFormat);
		if (separator) {
			// Get separator positions before removing them
			firstSeparatorPosition = dateTmp.indexOf(separator);
			secondSeparatorPosition = dateTmp.lastIndexOf(separator);

			dateTmp = this.removeSeparator(dateTmp, separator);
			// After removing the desired separator, no other separator is expected
			if (this.getDateSeparator(dateTmp)) {
				return undefined;
			}
		}

		const dayLength = this.getDayLength(dateTmp, dayBefore, yearBefore, firstSeparatorPosition, secondSeparatorPosition);
		const monthLength = [4, 6, 8].some(length => dateTmp.length === length) ? dayLength : 2 / dayLength;
		const yearLength = [7, 8].some(length => dateTmp.length === length) ? 4 : 2;

		if (dayLength && monthLength && yearLength) {
			return this.getFormattedDate(dateTmp, dayBefore, yearBefore, dayLength, monthLength, yearLength);
		}

		return undefined;
	}

	private getDayLength(date: string, dayBefore: boolean, yearBefore: boolean, firstSeparatorPosition: number, secondSeparatorPosition: number): number {
		switch (date.length) {
			case 4:
				return 1;
			case 6:
			case 8:
				return 2;
			case 5:
			case 7:
				if (firstSeparatorPosition > 0 && secondSeparatorPosition !== firstSeparatorPosition) {
					let dayLength: number;
					if (secondSeparatorPosition - firstSeparatorPosition === 2) {
						dayLength = 1;
					} else {
						dayLength = 2;
					}
					if (!dayBefore) {
						dayLength = 2 / dayLength;
					}
					if (!yearBefore) {
						dayLength = 2 / dayLength;

					}
					return dayLength;
				}
		}
	}

	private getFormattedDate(dateTmp: string, dayBefore: boolean, yearBefore: boolean, dayLength: number, monthLength: number, yearLength): Date {
		let dayInDate: number;
		let monthInDate: number;
		let yearInDate: number;
		if (yearBefore) {
			yearInDate = +dateTmp.substring(0, yearLength);
			if (dayBefore) {
				dayInDate = +dateTmp.substring(yearLength, yearLength + dayLength);
				monthInDate = +dateTmp.substring(yearLength + dayLength) - 1;
			} else {
				monthInDate = +dateTmp.substring(yearLength, yearLength + monthLength) - 1;
				dayInDate = +dateTmp.substring(yearLength + monthLength);
			}
		} else {
			if (dayBefore) {
				dayInDate = +dateTmp.substring(0, dayLength);
				monthInDate = +dateTmp.substring(dayLength, dayLength + monthLength) - 1;
			} else {
				monthInDate = +dateTmp.substring(0, monthLength) - 1;
				dayInDate = +dateTmp.substring(monthLength, monthLength + dayLength);
			}
			yearInDate = +dateTmp.substring(monthLength + dayLength);
		}

		if (yearInDate < 100) {
			yearInDate = 2000 + yearInDate;
		}
		return (this.checkMonthNumber(monthInDate) && this.checkDayNumber(yearInDate,monthInDate,dayInDate))
			? new Date(yearInDate, monthInDate, dayInDate)
			: null;
	}

	private checkMonthNumber(monthInDate: number): boolean {
		return (monthInDate >= 0 && monthInDate <= 11); // Months go from 0 to 11
	}

	private checkDayNumber(yearInDate: number, monthInDate: number, dayInDate: number): boolean{
		return (dayInDate >= 1 && dayInDate <= getDaysInMonth(new Date(yearInDate, monthInDate)));
	}

	private getDateSeparator(dateFormat: string) {
		let dateSeparator: string;
		if (dateFormat.includes('/')) {
			dateSeparator = '/';
		} else if (dateFormat.includes('-')) {
			dateSeparator = '-';
		} else if (dateFormat.includes('.')) {
			dateSeparator = '.';
		}
		return dateSeparator;
	}

	private removeSeparator(dateTmp: string, dateSeparator: string): string {
		return dateTmp.split(dateSeparator)
			.join('');
	}
}
