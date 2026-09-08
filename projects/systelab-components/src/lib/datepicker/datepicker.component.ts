import {
	AfterViewInit,
	Component,
	DestroyRef,
	DoCheck,
	ElementRef,
	EventEmitter,
	HostListener,
	inject,
	Input,
	OnInit,
	Output,
	Renderer2,
	ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from 'systelab-translate';
import { DataTransformerService } from './date-transformer.service';
import { DatepickerCalendarComponent, DatePickerTranslations } from './datepicker-calendar.component';

@Component({
	selector:    'systelab-datepicker',
	templateUrl: 'datepicker.component.html',
	providers:   [DataTransformerService],
	standalone:  false
})
export class DatepickerComponent implements OnInit, AfterViewInit, DoCheck {

	@Input() public disabled = false;
	@Input() public error = false;
	@Input() public required = false;
	@Input() public inputExpandHeight: boolean;
	@Input() public markPreviousAfterDate = false;
	@Input() public inputFontSize: number;
	@Input() public showTodayButton = false;
	@Input() public inline = false;
	@Input() public minDate: Date;
	@Input() public maxDate: Date;
	@Input() public warnDaysBefore: number;
	@Input() public warnDaysAfter: number;
	@Input() public autofocus = false;
	@Input() public fromDateForRelativeDates: Date;
	@Input() public tabindex: number;
	@Input() public withIntegratedTime = false;
	@Input() public onlyTime = false;
	@Input() public showOtherMonths = true;
	@Input() public selectOtherMonths = false;
	@Input() public dateFormat: string;
	@Input() public keepInvalid = false;

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		if (this.markPreviousAfterDate || (this.warnDaysBefore && this.warnDaysBefore > 0)) {

			if (!this.warnDaysBefore) {
				this.warnDaysBefore = 1;
			}

			this.checkPreviousAfterDate();
		}
		if (this.warnDaysAfter && this.warnDaysAfter > 0) {
			this.checkTooFarDate();
		}
	}

	@Output() public currentDateChange = new EventEmitter<Date>();

	@ViewChild('calendar', {static: true}) public currentCalendar: DatepickerCalendarComponent;

	public inputChanged = false;
	protected _currentDate: Date;
	public previousAfterDate = false;
	public tooFarDate = false;
	public language: any;

	public currentDocSize: number;
	public currentLanguage: string;
	public inputElement: ElementRef;
	public focusEvt: FocusEvent;
	public isTablet = false;
	public datepickerId: string = (Math.random() * (999999999999 - 1)).toString();
	public formatError: boolean;

	private readonly translateService = inject(TranslateService, {optional: true});
	private readonly destroyRef = inject(DestroyRef);

	constructor(protected myRenderer: Renderer2, protected i18nService: I18nService, protected dataTransformerService: DataTransformerService) {
	}

	public ngOnInit() {
		this.getLanguage();

		this.currentDocSize = window.innerWidth;
		this.currentLanguage = this.i18nService.getCurrentLanguage();

		if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('Android') > -1) {
			this.isTablet = true;
		}

		// The day and month names are reloaded when the language changes.
		this.translateService?.onLangChange
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => {
				this.currentLanguage = this.i18nService.getCurrentLanguage();
				this.getLanguage();
			});
	}

	public ngAfterViewInit() {
		// The input, its icon, the tab index and the autofocus are handled declaratively by the
		// calendar component, so there is nothing left to patch in the DOM here.
	}

	@HostListener('window:resize')
	public onWindowResize(): void {
		if (window.innerWidth !== this.currentDocSize) {
			this.currentDocSize = window.innerWidth;
			this.closeDatepicker();
		}
	}

	public ngDoCheck() {
		// Only needed when there is no translate service to notify the language changes.
		if (!this.translateService && this.currentLanguage !== this.i18nService.getCurrentLanguage()) {
			this.currentLanguage = this.i18nService.getCurrentLanguage();
			this.getLanguage();
		}
	}

	public selectDate(): void {
		this.formatError = false;
		this.currentDateChange.emit(this.currentDate);
		this.inputChanged = false;
	}

	public changeDate(): void {
		this.formatError = false;
		const inputElement = this.currentCalendar?.el.nativeElement.querySelector('input');
		if (inputElement?.value !== undefined) {
			const dateStr = inputElement.value.trim()
				.toLowerCase();
			if (this.inputChanged) {
				if (dateStr.length >= 2) {
					const transformedDate = this.dataTransformerService.processShortcuts(dateStr, this.fromDateForRelativeDates);
					if (transformedDate) {
						this.currentDate = transformedDate;
					} else {
						if (this.onlyTime || this.withIntegratedTime) {
							const splitDateByHours = dateStr.split(':');
							if (!this.onlyTime) {
								switch (splitDateByHours.length) {
									case 1:
										this.infereDate(dateStr);
										break;
									case 2:
										const hourPosition = splitDateByHours[0].length - 2;
										const dateString = splitDateByHours[0].substring(0, hourPosition);
										this.infereDate(dateString);
										this.parseTime(+splitDateByHours[0].substring(hourPosition), +splitDateByHours[1]);
										break;
									default:
										this.formatError = true;
										break;
								}
							} else {
								const hour = +splitDateByHours[0];
								const minute = +splitDateByHours[1];
								this.currentDate = new Date();
								this.parseTime(hour, minute);

							}
						} else {
							this.infereDate(dateStr);
						}
					}
				}
				this.currentDateChange.emit(this.currentDate);
				this.inputChanged = false;
			}
		}
	}

	private parseTime(hour: number, minute: number): void {
		const isValidHour = hour >= 0 && hour <= 23;
		const isValidMinute = minute >= 0 && minute <= 59;
		if (!isValidHour || !isValidMinute) {
			this.formatError = true;
		} else {
			this.currentDate.setHours(hour, minute);
		}
	}

	private infereDate(dateStr: string): void {
		const inferedDate = this.dataTransformerService.infereDate(dateStr, this.i18nService.getDateFormatForDatePicker());
		if (inferedDate) {
			this.currentDate = inferedDate;
		} else {
			this.formatError = true;
		}
	}

	public onInput(event: KeyboardEvent) {
		if (event.code === 'Enter' || event.code === 'Tab') {
			const inputElement = this.currentCalendar.el.nativeElement.querySelector('input');
			inputElement.blur();
			this.currentCalendar.onBlur.emit(event as unknown as FocusEvent);
			this.closeDatepicker();
		} else {
			this.inputChanged = true;
		}
	}

	public saveEventOnFocus(evt: FocusEvent): void {
		this.inputElement = new ElementRef(evt.target);
		this.focusEvt = evt;
	}

	public repositionateCalendar(element?: ElementRef): void {
		this.currentCalendar?.alignOverlay();
	}

	public nextMonth(): void {
		this.currentCalendar?.navForward();
	}

	public prevMonth(): void {
		this.currentCalendar?.navBackward();
	}

	public nextYear(): void {
		this.currentCalendar?.navYearForward();
	}

	public prevYear(): void {
		this.currentCalendar?.navYearBackward();
	}

	public clearDate(event): void {
		if (this.currentCalendar) {
			this.currentDate = null;
			this.currentCalendar.clear();
			this.currentDateChange.emit(this.currentDate);
			this.inputChanged = false;
		}
	}

	public setTodayDate(): void {
		if (this.currentCalendar) {
			this.currentDate = new Date();
			this.currentDateChange.emit(this.currentDate);
			this.inputChanged = false;
		}
	}

	public closeDatepicker(): void {
		if (this.currentCalendar) {
			this.currentCalendar.hideOverlay();
			this.currentCalendar.el.nativeElement.blur();
		}
	}

	private checkPreviousAfterDate(): void {
		if (this._currentDate) {
			this._currentDate.setHours(0, 0, 0, 0);
			const pastDate = this.addDays(new Date(), this.warnDaysBefore * -1);
			pastDate.setHours(0, 0, 0, 0);
			this.previousAfterDate = this._currentDate.getTime() <= pastDate.getTime();
		} else {
			this.previousAfterDate = false;
		}
	}

	private checkTooFarDate() {
		if (this._currentDate) {
			this._currentDate.setHours(0, 0, 0, 0);
			const futureDate = this.addDays(new Date(), this.warnDaysAfter);
			this.tooFarDate = this._currentDate.getTime() >= futureDate.getTime();
		} else {
			this.tooFarDate = false;
		}
	}

	private addDays(date: Date, amount: number): Date {
		const result = new Date(date.getTime());
		result.setDate(result.getDate() + amount);
		return result;
	}

	private getLanguage(): void {

		const weekDaysNames: Array<string> = [];
		const weekDaysNamesShort: Array<string> = [];
		const monthNames: Array<string> = [];
		const monthNamesShort: Array<string> = [];

		this.i18nService.get(['COMMON_SUNDAY', 'COMMON_MONDAY', 'COMMON_TUESDAY', 'COMMON_WEDNESDAY', 'COMMON_THURSDAY', 'COMMON_FRIDAY', 'COMMON_SATURDAY'])
			.subscribe((res) => {
				weekDaysNames.push(res.COMMON_SUNDAY, res.COMMON_MONDAY, res.COMMON_TUESDAY, res.COMMON_WEDNESDAY, res.COMMON_THURSDAY, res.COMMON_FRIDAY, res.COMMON_SATURDAY);
			});

		this.i18nService.get(['COMMON_SEVENTH_DAY', 'COMMON_FIRST_DAY', 'COMMON_SECOND_DAY', 'COMMON_THIRD_DAY', 'COMMON_FOURTH_DAY', 'COMMON_FIFTH_DAY', 'COMMON_SIXTH_DAY'])
			.subscribe((res) => {
				weekDaysNamesShort.push(res.COMMON_SEVENTH_DAY, res.COMMON_FIRST_DAY, res.COMMON_SECOND_DAY, res.COMMON_THIRD_DAY, res.COMMON_FOURTH_DAY, res.COMMON_FIFTH_DAY, res.COMMON_SIXTH_DAY);
			});

		this.i18nService.get(['COMMON_JANUARY', 'COMMON_FEBRUARY', 'COMMON_MARCH', 'COMMON_APRIL', 'COMMON_MAY', 'COMMON_JUNE', 'COMMON_JULY', 'COMMON_AUGUST', 'COMMON_SEPTEMBER', 'COMMON_OCTOBER', 'COMMON_NOVEMBER', 'COMMON_DECEMBER'])
			.subscribe((res) => {
				monthNames.push(res.COMMON_JANUARY, res.COMMON_FEBRUARY, res.COMMON_MARCH, res.COMMON_APRIL, res.COMMON_MAY, res.COMMON_JUNE, res.COMMON_JULY, res.COMMON_AUGUST, res.COMMON_SEPTEMBER, res.COMMON_OCTOBER, res.COMMON_NOVEMBER, res.COMMON_DECEMBER);
			});

		this.i18nService.get(['JOB_MONTHS_1', 'JOB_MONTHS_2', 'JOB_MONTHS_3', 'JOB_MONTHS_4', 'JOB_MONTHS_5', 'JOB_MONTHS_6', 'JOB_MONTHS_7', 'JOB_MONTHS_8', 'JOB_MONTHS_9', 'JOB_MONTHS_10', 'JOB_MONTHS_11', 'JOB_MONTHS_12'])
			.subscribe((res) => {
				monthNamesShort.push(res.JOB_MONTHS_1, res.JOB_MONTHS_2, res.JOB_MONTHS_3, res.JOB_MONTHS_4, res.JOB_MONTHS_5, res.JOB_MONTHS_6, res.JOB_MONTHS_7, res.JOB_MONTHS_8, res.JOB_MONTHS_9, res.JOB_MONTHS_10, res.JOB_MONTHS_11, res.JOB_MONTHS_12);
			});

		const translations: DatePickerTranslations = {
			dayNames:        weekDaysNames,
			dayNamesShort:   weekDaysNamesShort,
			dayNamesMin:     weekDaysNamesShort,
			monthNames:      monthNames,
			monthNamesShort: monthNamesShort
		};

		this.language = {
			translations: translations
		};

		this.language.firstDayOfWeek = this.i18nService.getFirstDayOfWeek();

		this.language.dateFormatValue = this.dateFormat ? this.dateFormat : this.i18nService.getDateFormatForDatePicker(true);
		if (this.currentCalendar) {
			this.currentCalendar.dateFormat = this.dateFormat || this.language.dateFormatValue;
		}
	}
}
