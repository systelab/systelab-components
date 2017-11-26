import { Component, ContentChild, Input, OnChanges, TemplateRef } from '@angular/core';
import { addDays, getDate, getISODay, isSameDay, lastDayOfMonth, setDate } from 'date-fns';

export interface DaySlot {
	date?: Date;
	day: number;
	isHoliday: boolean;
}

@Component({
	selector:    'systelab-calendar-table',
	templateUrl: 'calendar-table.component.html',
	styleUrls:   ['calendar-table.component.scss']
})
export class CalendarTableComponent implements OnChanges {

	@Input() public currentDate: Date;
	@Input() public days: DaySlot[] = [];
	@Input() locale: string;

	public language: any;
	public daysHeader: string[] = [];
	public rows: DaySlot[][] = [];

	@ContentChild(TemplateRef) templateRef: TemplateRef<any>;

	constructor() {
	}

	public ngOnChanges() {
		if (!this.currentDate) {
			this.currentDate = new Date();
		}
		this.loadLanguage(this.locale);
		this.defineHeaderDays();
		this.rows = [];
		this.putDaySlotsIntoArray(this.generateDaysArray());
	}

	private generateDaysArray(): Date[] {
		const datesArray: Date[] = [];

		const firstDayOfMonth = setDate(this.currentDate, 1);
		const lastDateOfMonth = lastDayOfMonth(firstDayOfMonth);

		// Calculate the days to add at the beginning.
		let firstDayPosition = getISODay(firstDayOfMonth);
		if (this.language.firstDayOfWeek === 1) {
			firstDayPosition = firstDayPosition - 1;
		}
		firstDayPosition = firstDayPosition % 7;

		// Push the empty days.
		for (let i = 0; i < firstDayPosition; i++) {
			datesArray.push(null);
		}

		// put the dates.
		let date = firstDayOfMonth;
		for (let i = 1; i <= getDate(lastDateOfMonth); i++) {
			datesArray.push(date);
			date = addDays(date, 1);
		}
		return datesArray;
	}

	private putDaySlotsIntoArray(datesArray: Date[]) {

		const days: DaySlot[] = [];
		for (const singleDate of datesArray) {
			if (singleDate === null) {
				days.push({day: -1, isHoliday: false});
			} else {
				const loadDay = this.getLoadDay(singleDate);
				if (loadDay) {
					days.push(loadDay);
				} else {
					days.push({date: singleDate, day: getDate(singleDate), isHoliday: false});
				}
			}
		}

		// Split in at maximum 6 rows
		for (let i = 0; i < 6; i++) {
			this.rows.push(days.slice(i * 7, (i * 7) + 7));
		}

		// Remove the last two rows if they are empty.
		for (let i = this.rows.length - 1; i >= 3; i--) {
			if (this.rows[i].length === 0) {
				this.rows.splice(i, 1);
			}
		}
		// The last week should have 7 slots too
		const lastRow = this.rows.length;
		for (let j = this.rows[lastRow - 1].length; j < 7; j++) {
			this.rows[lastRow - 1].push({day: -1, isHoliday: false});
		}
	}

	private defineHeaderDays() {
		this.daysHeader = this.language.dayNamesShort.slice();
		let firstDay: Array<string> = this.daysHeader.slice(0, 1);
		if (this.language.firstDayOfWeek === 1 && firstDay[0] === this.language.dayNamesShort[0]) {
			firstDay = this.daysHeader.splice(0, 1);
			this.daysHeader.push(firstDay[0]);
		}
	}

	private getLoadDay(date: Date): DaySlot {
		for (const day of this.days) {
			if (isSameDay(day.date, date)) {
				return day;
			}
		}
		return null;
	}

	private loadLanguage(shorCode): void {
		// TODO: To translate
		switch (shorCode) {
			case 'en':
				this.language = {
					firstDayOfWeek:  0,
					dayNames:        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
					dayNamesShort:   ['sun', 'mon', 'tue', 'wed', 'thu', 'fir', 'sat'],
					dayNamesMin:     ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
					monthNames:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					dateFormatValue: 'mm/dd/yy'
				};
				break;
			case 'pl':
				this.language = {
					firstDayOfWeek:  0,
					dayNames:        ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
					dayNamesShort:   ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt', 'Sob.'],
					dayNamesMin:     ['Nd', 'P', 'Wt', 'Śr', 'Cz', 'Pt', 'So'],
					monthNames:      ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
					dateFormatValue: 'dd-mm-y'
				};
				break;
			default:
				this.language = {
					firstDayOfWeek:  1,
					dayNames:        ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
					dayNamesShort:   ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
					dayNamesMin:     ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
					monthNames:      ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
					dateFormatValue: 'dd/mm/yy'
				};
				break;
		}
	}
}
