import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { addDays } from 'date-fns';
import { PrimeNGConfig } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { I18nService } from 'systelab-translate';
import { DataTransformerService } from './date-transformer.service';

@Component({
	selector:    'systelab-datepicker',
	templateUrl: 'datepicker.component.html',
	providers:   [DataTransformerService]
})
export class Datepicker implements OnInit, AfterViewInit, DoCheck, OnDestroy {

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
	@Input() public fromDateForRelativeDates;
	@Input() public tabindex: number;
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

	@ViewChild('calendar', {static: true}) public currentCalendar: Calendar;

	public inputChanged = false;
	protected _currentDate: Date;
	public previousAfterDate = false;
	public tooFarDate = false;
	public language: any;

	public currentDocSize: number;
	public currentLanguage: string;
	public destroyWheelListener: Function;
	public destroyKeyListener: Function;
	public inputElement: ElementRef;
	public focusEvt: FocusEvent;
	public isTablet = false;
	public datepickerId: string = (Math.random() * (999999999999 - 1)).toString();
	public formatError: boolean;

	private headerElement: any = document.getElementById(this.datepickerId);

	constructor(protected myRenderer: Renderer2, protected i18nService: I18nService, protected dataTransformerService: DataTransformerService, protected config: PrimeNGConfig) {
		this.addListeners();
		// TODO: To get the language and modify the values.
	}

	public ngOnInit() {
		this.getLanguage();

		this.currentDocSize = window.innerWidth;
		this.currentLanguage = this.i18nService.getCurrentLanguage();

		this.addListeners();
		if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('Android') > -1) {
			this.isTablet = true;
		}
	}

	public ngAfterViewInit() {
		const newElement = document.createElement('i');
		if (!this.inline) {
			newElement.className = 'icon-calendar';
			if (this.currentCalendar) {
				if (this.autofocus) {
					this.currentCalendar.el.nativeElement.querySelector('input')
						.focus();
				}
				this.currentCalendar.el.nativeElement.childNodes[0].className = 'p-calendar slab-form-icon w-100';
				this.currentCalendar.el.nativeElement.childNodes[0].appendChild(newElement);
			}
		}
		if(this.tabindex) {
			this.currentCalendar.el.nativeElement.querySelector('input')
				.setAttribute('tabindex', this.tabindex);
		}

	}

	public ngDoCheck() {
		if (window.innerWidth !== this.currentDocSize) {
			this.currentDocSize = window.innerWidth;
			this.closeDatepicker();
		}

		if (this.headerElement !== document.getElementById(this.datepickerId)) {
			this.headerElement = document.getElementById(this.datepickerId);
			if (this.headerElement) {
				this.repositionateCalendar(new ElementRef(this.headerElement.parentElement.parentElement));
			}
		}

		if (this.currentLanguage !== this.i18nService.getCurrentLanguage()) {
			this.currentLanguage = this.i18nService.getCurrentLanguage();
			this.getLanguage();
		}
	}

	public ngOnDestroy() {
		this.destroyKeyListener();
		this.destroyWheelListener();
	}

	public selectDate(): void {
		this.formatError = false;
		this.currentDateChange.emit(this.currentDate);
		this.inputChanged = false;
	}

	public changeDate(): void {
		this.formatError = false;
		if (this.currentCalendar && this.currentCalendar.inputfieldViewChild.nativeElement.value !== undefined) {
			const dateStr = this.currentCalendar.inputfieldViewChild.nativeElement.value.trim()
				.toLowerCase();
			if (this.inputChanged) {
				if (dateStr.length >= 2) {
					const transformedDate = this.dataTransformerService.processShortcuts(dateStr, this.fromDateForRelativeDates);
					if (transformedDate) {
						this.currentDate = transformedDate;
					} else {
						const inferedDate = this.dataTransformerService.infereDate(dateStr, this.i18nService.getDateFormatForDatePicker());
						if (inferedDate) {
							this.currentDate = inferedDate;
						}
						else {
							this.formatError = true;
						}
					}
				}
				this.currentDateChange.emit(this.currentDate);
				this.inputChanged = false;
			}
		}
	}

	public onInput(event: KeyboardEvent) {
		if (event.keyCode === 13 || event.keyCode === 9) {
			this.currentCalendar.inputfieldViewChild.nativeElement.blur();
			this.currentCalendar.onBlur.emit(event);
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

		try {
			let inputElementTop: number, inputElementHeight: number, datepickerElementHeight: number;
			inputElementTop = this.inputElement.nativeElement.getBoundingClientRect().top;
			inputElementHeight = this.inputElement.nativeElement.getBoundingClientRect().height;
			datepickerElementHeight = element.nativeElement.getBoundingClientRect().height;
			if (inputElementTop + inputElementHeight + datepickerElementHeight > window.innerHeight) {
				const newTop: number = inputElementTop + inputElementHeight - (datepickerElementHeight + inputElementHeight + 10);
				this.myRenderer.setAttribute(element.nativeElement, 'top', newTop + 'px');
			}
		} catch (ex) {
		}
	}

	public nextMonth(): void {
		if (this.currentCalendar) {
			let month = this.currentCalendar.currentMonth;
			if (month < 11) {
				month++;
				this.currentCalendar.onMonthDropdownChange(month.toString());
			} else {
				month = 0;
				let year = this.currentCalendar.currentYear;
				year++;
				this.currentCalendar.onMonthDropdownChange(month.toString());
				this.currentCalendar.onYearDropdownChange(year.toString());
			}
		}
	}

	public prevMonth(): void {
		if (this.currentCalendar) {
			let month = this.currentCalendar.currentMonth;
			if (month > 0) {
				month--;
				this.currentCalendar.onMonthDropdownChange(month.toString());
			} else {
				month = 11;
				let year = this.currentCalendar.currentYear;
				year--;
				this.currentCalendar.onMonthDropdownChange(month.toString());
				this.currentCalendar.onYearDropdownChange(year.toString());
			}
		}
	}

	public nextYear(): void {
		if (this.currentCalendar) {
			const currentYear = this.currentCalendar.currentYear + 1;
			this.currentCalendar.onYearDropdownChange(currentYear.toString());
		}
	}

	public prevYear(): void {
		if (this.currentCalendar) {
			const currentYear = this.currentCalendar.currentYear - 1;
			this.currentCalendar.onYearDropdownChange(currentYear.toString());
		}
	}

	public clearDate(event): void {
		if (this.currentCalendar) {
			this.currentDate = null;
			this.currentCalendar.onClearButtonClick(event);
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
			this.currentCalendar.focus = false;
			this.currentCalendar.overlayVisible = false;
		}
	}

	private checkPreviousAfterDate(): void {
		if (this._currentDate) {
			this._currentDate.setHours(0, 0, 0, 0);
			const pastDate = addDays(new Date(), this.warnDaysBefore * -1);
			pastDate.setHours(0, 0, 0, 0);
			this.previousAfterDate = this._currentDate.getTime() <= pastDate.getTime();
		} else {
			this.previousAfterDate = false;
		}
	}

	private checkTooFarDate() {
		if (this._currentDate) {
			this._currentDate.setHours(0, 0, 0, 0);
			const futureDate = addDays(new Date(), this.warnDaysAfter);
			this.tooFarDate = this._currentDate.getTime() >= futureDate.getTime();
		} else {
			this.tooFarDate = false;
		}
	}

	private getLanguage(): void {

		const weekDaysNames: Array<string> = [];
		const weekDaysNamesShort: Array<string> = [];
		const monthNames: Array<string> = [];
		const monthNamesShort: Array<string> = [];
		/* eslint-disable max-len */
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

		this.language = {
			translations: {
				dayNames:        weekDaysNames,
				dayNamesShort:   weekDaysNamesShort,
				dayNamesMin:     weekDaysNamesShort,
				monthNames:      monthNames,
				monthNamesShort: monthNamesShort
		}};

		this.language.firstDayOfWeek = this.i18nService.getFirstDayOfWeek();
		this.language.dateFormatValue = this.i18nService.getDateFormatForDatePicker(true);
		if (this.currentCalendar) {
			this.currentCalendar.dateFormat = this.language.dateFormatValue;
		}

		this.config.setTranslation(this.language.translations);
	}

	private addListeners(): void {
		this.destroyWheelListener = this.myRenderer.listen('window', 'wheel', () => {
			this.closeDatepicker();
		});

		this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', (evt: KeyboardEvent) => {
			if (evt.keyCode === 27 || evt.key === 'Tab') {
				this.closeDatepicker();
			}
		});
	}
}
