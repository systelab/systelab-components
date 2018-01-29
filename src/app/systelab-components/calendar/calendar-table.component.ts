import { Component, ContentChild, Input, OnChanges, TemplateRef } from '@angular/core';
import { addDays, getDate, getISODay, isSameDay, lastDayOfMonth, setDate } from 'date-fns';
import { I18nService } from 'systelab-translate/lib/i18n.service';

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

	public language: any;
	public daysHeader: string[] = [];
	public rows: DaySlot[][] = [];

	@ContentChild(TemplateRef) templateRef: TemplateRef<any>;

	constructor(private i18nService: I18nService) {
	}

	public ngOnChanges() {
		this.refresh();
	}

	public refresh() {
		if (!this.currentDate) {
			this.currentDate = new Date();
		}
		this.getLanguage();
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

	private getLanguage(): void {
		this.language = {
			dayNames:        [
				this.i18nService.instant( 'COMMON_SUNDAY' ),
				this.i18nService.instant( 'COMMON_MONDAY' ),
				this.i18nService.instant( 'COMMON_TUESDAY' ),
				this.i18nService.instant( 'COMMON_WEDNESDAY' ),
				this.i18nService.instant( 'COMMON_THURSDAY' ),
				this.i18nService.instant( 'COMMON_FRIDAY' ),
				this.i18nService.instant( 'COMMON_SATURDAY' )
			],
			dayNamesShort:   [
				this.i18nService.instant( 'COMMON_SEVENTH_DAY' ),
				this.i18nService.instant( 'COMMON_FIRST_DAY' ),
				this.i18nService.instant( 'COMMON_SECOND_DAY' ),
				this.i18nService.instant( 'COMMON_THIRD_DAY' ),
				this.i18nService.instant( 'COMMON_FOURTH_DAY' ),
				this.i18nService.instant( 'COMMON_FIFTH_DAY' ),
				this.i18nService.instant( 'COMMON_SIXTH_DAY' )
			],
			dayNamesMin:     [
				this.i18nService.instant( 'COMMON_SEVENTH_DAY' ),
				this.i18nService.instant( 'COMMON_FIRST_DAY' ),
				this.i18nService.instant( 'COMMON_SECOND_DAY' ),
				this.i18nService.instant( 'COMMON_THIRD_DAY' ),
				this.i18nService.instant( 'COMMON_FOURTH_DAY' ),
				this.i18nService.instant( 'COMMON_FIFTH_DAY' ),
				this.i18nService.instant( 'COMMON_SIXTH_DAY' )
			],
			monthNames:      [
				this.i18nService.instant( 'COMMON_JANUARY' ),
				this.i18nService.instant( 'COMMON_FEBRUARY' ),
				this.i18nService.instant( 'COMMON_MARCH' ),
				this.i18nService.instant( 'COMMON_APRIL' ),
				this.i18nService.instant( 'COMMON_MAY' ),
				this.i18nService.instant( 'COMMON_JUNE' ),
				this.i18nService.instant( 'COMMON_JULY' ),
				this.i18nService.instant( 'COMMON_AUGUST' ),
				this.i18nService.instant( 'COMMON_SEPTEMBER' ),
				this.i18nService.instant( 'COMMON_OCTOBER' ),
				this.i18nService.instant( 'COMMON_NOVEMBER' ),
				this.i18nService.instant( 'COMMON_DECEMBER' )
			],
			monthNamesShort: [
				this.i18nService.instant( 'JOB_MONTHS_1' ),
				this.i18nService.instant( 'JOB_MONTHS_2' ),
				this.i18nService.instant( 'JOB_MONTHS_3' ),
				this.i18nService.instant( 'JOB_MONTHS_4' ),
				this.i18nService.instant( 'JOB_MONTHS_5' ),
				this.i18nService.instant( 'JOB_MONTHS_6' ),
				this.i18nService.instant( 'JOB_MONTHS_7' ),
				this.i18nService.instant( 'JOB_MONTHS_8' ),
				this.i18nService.instant( 'JOB_MONTHS_9' ),
				this.i18nService.instant( 'JOB_MONTHS_10' ),
				this.i18nService.instant( 'JOB_MONTHS_11' ),
				this.i18nService.instant( 'JOB_MONTHS_12' )
			]
		};

		this.language.firstDayOfWeek = this.getFirstDayOfWeek();
		this.language.dateFormatValue = this.getDateFormat( true );
	}


	private getFirstDayOfWeek(): number {
		switch ( this.i18nService.getCurrentLanguage() ) {
			case 'us': // 'US'
			case 'en_US':
			case 'zh': // 'CN'
			case 'th': // 'TH'
			case 'ja': // 'JP'
				return 0;
			case 'en': // 'GB'
			case 'it': // 'IT'
			case 'ar':
			case 'es':
			case 'bo':
			case 'cl':
			case 'co':
			case 'cr':
			case 'do':
			case 'ec':
			case 'gt':
			case 'hn':
			case 'mx':
			case 'ni':
			case 'pa':
			case 'pe':
			case 'pr':
			case 'py':
			case 'sv':
			case 'ur':
			case 've':
			case 'fr':
			case 'gl':
			case 'ca':
			case 'pl': // 'PL'
			case 'lt': // 'LT'
			case 'pt': // 'PT'
			case 'pt_BR':
			case 'nl': // 'NL'
			case 'sk': // 'SK'
			case 'ru': // 'RU'
			case 'de': // 'DE'
			case 'ko':
			default:
				return 1;
		}
	}

	private getDateFormat( isFullYear: boolean ): string {
		let stringDateFormat = '';
		switch ( this.i18nService.getCurrentLanguage() ) {
			case 'us':
			case 'en_US':
				stringDateFormat = 'm/d/y';
				break;
			case 'en':
			case 'it':
			case 'ar':
			case 'es':
			case 'bo':
			case 'cl':
			case 'co':
			case 'cr':
			case 'do':
			case 'ec':
			case 'gt':
			case 'hn':
			case 'mx':
			case 'ni':
			case 'pa':
			case 'pe':
			case 'pr':
			case 'py':
			case 'sv':
			case 'ur':
			case 've':
			case 'fr':
			case 'gl':
			case 'ca':
				stringDateFormat = 'dd/mm/y';
				break;
			case 'ko':
				stringDateFormat = 'y. m. d';
				break;
			case 'pl':
			case 'lt':
				stringDateFormat = 'y-mm-dd';
				break;
			case 'pt':
			case 'pt-BR':
			case 'nl':
				stringDateFormat = 'dd-mm-y';
				break;
			case 'sk':
			case 'ru':
				stringDateFormat = 'd.m.y';
				break;
			case 'zh':
				stringDateFormat = 'y-m-d';
				break;
			case 'de':
				stringDateFormat = 'dd.mm.y';
				break;
			case 'th':
				stringDateFormat = 'd/m/y';
				break;
			case 'ja':
				stringDateFormat = 'y/mm/dd';
				break;
			default:
				stringDateFormat = 'dd/mm/y';
				break;
		}
		if ( isFullYear ) {
			stringDateFormat = stringDateFormat.replace( 'y', 'yy' );
			if ( this.i18nService.getCurrentLanguage() === 'us' || this.i18nService.getCurrentLanguage() === 'en_US' ) {
				stringDateFormat = stringDateFormat.replace( 'm', 'mm' );
				stringDateFormat = stringDateFormat.replace( 'd', 'dd' );
			}
		}
		return stringDateFormat;
	}


}
