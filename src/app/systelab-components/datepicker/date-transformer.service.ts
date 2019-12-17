import { Injectable } from '@angular/core';
import { addDays, addMonths, addWeeks, addYears } from 'date-fns';

@Injectable()
export class DataTransformerService {

	public processShortcuts(date: string): Date {
		const regExp = new RegExp('^[\-]?[0-9]+[DWSMYA]$', 'i');
		if (regExp.test(date)) {
			const shortcut = date.substr(-1)
				.toUpperCase();
			const amount = Number(date.slice(0, -1));
			const today = new Date();
			switch (shortcut) {
				case 'D':
					return addDays(today, amount);
				case 'W':
				case 'S':
					return addWeeks(today, amount);
				case 'M':
					return addMonths(today, amount);
				case 'Y':
				case 'A':
					return addYears(today, amount);
			}
		}
		return undefined;
	}

	public infereDate(date: string, dateFormat: string): Date {
		let dateTmp = date.trim();

		const dayPosition = dateFormat.toUpperCase()
			.lastIndexOf('D');
		const monthPosition = dateFormat.toUpperCase()
			.lastIndexOf('M');
		const yearPosition = dateFormat.toUpperCase()
			.lastIndexOf('Y');
		const dayBefore = dayPosition < monthPosition;
		const yearBefore = yearPosition < dayPosition;

		let dateSeparator: string;

		let firstSeparatorPosition: number;
		let secondSeparatorPosition: number;

		if (this.hasSeparator(dateTmp)) {
			// Get separator positions before removing them
			dateSeparator = this.getDateSeparator(dateFormat);
			firstSeparatorPosition = dateTmp.indexOf(dateSeparator);
			secondSeparatorPosition = dateTmp.lastIndexOf(dateSeparator);

			dateTmp = this.removeSeparator(dateTmp, dateSeparator);
			// After removing the desired separator, no other separator is expected
			if (this.hasSeparator(dateTmp)) {
				return undefined;
			}
		}

		return this.getFormattedDate(dateTmp, dayBefore, yearBefore, firstSeparatorPosition, secondSeparatorPosition);
	}

	private getFormattedDate(dateTmp: string, dayBefore: boolean, yearBefore: boolean, firstSeparatorPosition: number, secondSeparatorPosition: number): Date {
		if (dateTmp.length === 4) {
			// Manage dates with format d/m/yy or dmyy or m/d/yy or mdyy
			return this.getFormattedDateFourDigits(dateTmp, dayBefore, yearBefore);
		} else if (dateTmp.length === 6 || dateTmp.length === 8) {
			// Manage dates with format dd/mm/yy or ddmmyy or mm/dd/yy or mmddyy or dd/mm/yyyy or mm/dd/yyyy
			return this.getFormattedDateSixOrEigthDigits(dateTmp, dayBefore, yearBefore);
		} else if ((dateTmp.length === 5 || dateTmp.length === 7) && firstSeparatorPosition > 0 && secondSeparatorPosition !== firstSeparatorPosition) {
			// Manage dates with format dd/m/yy or mm/d/yy or d/mm/yy or m/dd/yy or all before but with year with 4 digits
			return this.getFormattedDateFiveOrSevenDigits(dateTmp, dayBefore, yearBefore, firstSeparatorPosition, secondSeparatorPosition);
		}

		return undefined;
	}

	private getFormattedDateFourDigits(dateTmp: string, dayBefore: boolean, yearBefore: boolean): Date {
		let dayInDate: number;
		let monthInDate: number;
		let yearInDate: number;
		if (yearBefore) {
			yearInDate = +dateTmp.substring(0, 2);
			if (dayBefore) {
				dayInDate = +dateTmp.substring(2, 3);
				monthInDate = +dateTmp.substring(3) - 1;
			} else {
				monthInDate = +dateTmp.substring(2, 3) - 1;
				dayInDate = +dateTmp.substring(3);
			}
		} else {
			if (dayBefore) {
				dayInDate = +dateTmp.substring(0, 1);
				monthInDate = +dateTmp.substring(1, 2) - 1;
			} else {
				monthInDate = +dateTmp.substring(0, 1) - 1;
				dayInDate = +dateTmp.substring(1, 2);
			}
			yearInDate = +dateTmp.substring(2);
		}

		if (yearInDate < 100) {
			yearInDate = 2000 + yearInDate;
		}
		return new Date(yearInDate, monthInDate, dayInDate);
	}

	private getFormattedDateSixOrEigthDigits(dateTmp: string, dayBefore: boolean, yearBefore: boolean): Date {
		let dayInDate: number;
		let monthInDate: number;
		let yearInDate: number;
		const dateLength = dateTmp.length;
		if (yearBefore) {
			yearInDate = +dateTmp.substring(0, dateLength - 4);
			if (dayBefore) {
				dayInDate = +dateTmp.substring(dateLength - 4, dateLength - 2);
				monthInDate = +dateTmp.substring(dateLength - 2) - 1;
			} else {
				monthInDate = +dateTmp.substring(dateLength - 4, dateLength - 2) - 1;
				dayInDate = +dateTmp.substring(dateLength - 2);
			}
		} else {
			if (dayBefore) {
				dayInDate = +dateTmp.substring(0, 2);
				monthInDate = +dateTmp.substring(2, 4) - 1;
			} else {
				monthInDate = +dateTmp.substring(0, 2) - 1;
				dayInDate = +dateTmp.substring(2, 4);
			}
			yearInDate = +dateTmp.substring(4);
		}
		if (yearInDate < 100) {
			yearInDate = 2000 + yearInDate;
		}
		return new Date(yearInDate, monthInDate, dayInDate);
	}

	private getFormattedDateFiveOrSevenDigits(dateTmp: string, dayBefore: boolean, yearBefore: boolean, firstSeparatorPosition: number, secondSeparatorPosition: number): Date {
		let dayInDate: number;
		let monthInDate: number;
		let yearInDate: number;
		const dateLength = dateTmp.length;
		if (yearBefore) {
			yearInDate = +dateTmp.substring(0, dateLength - 3);
			if (dayBefore) {
				dayInDate = +dateTmp.substring(dateLength - 3, secondSeparatorPosition - 1);
				monthInDate = +dateTmp.substring(secondSeparatorPosition) - 1;
			} else {
				monthInDate = +dateTmp.substring(dateLength - 3, secondSeparatorPosition - 1) - 1;
				dayInDate = +dateTmp.substring(secondSeparatorPosition - 1);
			}
		} else {
			if (dayBefore) {
				dayInDate = +dateTmp.substring(0, firstSeparatorPosition);
				monthInDate = +dateTmp.substring(firstSeparatorPosition, secondSeparatorPosition - 1) - 1;
			} else {
				monthInDate = +dateTmp.substring(0, firstSeparatorPosition) - 1;
				dayInDate = +dateTmp.substring(firstSeparatorPosition, secondSeparatorPosition - 1);
			}
			yearInDate = +dateTmp.substring(secondSeparatorPosition - 1);
		}
		if (yearInDate < 100) {
			yearInDate = 2000 + yearInDate;
		}
		return new Date(yearInDate, monthInDate, dayInDate);
	}

	private getDateSeparator(dateFormat: string) {
		let dateSeparator: string;
		if (dateFormat.lastIndexOf('/') > 0) {
			dateSeparator = '/';
		} else if (dateFormat.lastIndexOf('-') > 0) {
			dateSeparator = '-';
		} else if (dateFormat.lastIndexOf('.') > 0) {
			dateSeparator = '.';
		}
		return dateSeparator;
	}

	private hasSeparator(dateTmp: string): boolean {
		return dateTmp.includes('/') || dateTmp.includes('-') || dateTmp.includes('.');
	}

	private removeSeparator(dateTmp: string, dateSeparator: string): string {
		return dateTmp.split(dateSeparator)
			.join('');
	}
}
