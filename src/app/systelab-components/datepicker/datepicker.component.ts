import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Calendar } from 'primeng/components/calendar/calendar';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'systelab-datepicker',
	templateUrl: 'datepicker.component.html'
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

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		this.checkPreviousAfterDate();
	}

	@Output() public currentDateChange = new EventEmitter<Date>();

	@ViewChild('calendar') public currentCalendar: Calendar;

	public somethingChanged = false;
	protected _currentDate: Date;
	public previousAfterDate = false;
	public language: any;

	public currentDocSize: number;
	public currentLanguage: string;
	public destroyWheelListener: Function;
	public destroyKeyListener: Function;
	public inputElement: ElementRef;
	public focusEvt: FocusEvent;
	public isTablet = false;
	public datepickerId: string = (Math.random() * (999999999999 - 1)).toString();

	private headerElement: any = document.getElementById(this.datepickerId);

	constructor(private myRenderer: Renderer2, private i18nService: I18nService) {
		this.addListeners();
		// TODO: To get the language and modify the values
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
				this.currentCalendar.el.nativeElement.childNodes[0].className = 'ui-calendar slab-form-icon w-100';
				this.currentCalendar.el.nativeElement.childNodes[0].appendChild(newElement);
			}
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

	private checkPreviousAfterDate() {

		if (this._currentDate) {
			const today = new Date();
			const futureDate = new Date();
			today.setHours(0, 0, 0, 0);
			futureDate.setTime(futureDate.getTime() + (1000 * 60 * 60 * 24 * 30));

			if (this._currentDate.getTime() < today.getTime() || this._currentDate.getTime() > futureDate.getTime()) {
				this.previousAfterDate = true;
			} else {
				this.previousAfterDate = false;
			}
		} else {
			this.previousAfterDate = false;
		}
	}

	public selectDate(): void {
		this.currentDateChange.emit(this.currentDate);
		this.somethingChanged = false;
	}

	public changeDate(): void {
		let emit = true;
		const today: Date = new Date();

		if (this.currentCalendar && this.currentCalendar.inputfieldViewChild.nativeElement.value !== undefined) {

			let dateStr: string = this.currentCalendar.inputfieldViewChild.nativeElement.value.trim();
			dateStr = dateStr.toLowerCase();

			if (dateStr.length >= 2) {

				if (dateStr.lastIndexOf('d') === dateStr.length - 1) {
					const days: number = Number(dateStr.replace('d', '')
						.replace('D', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(days)) {
						this.currentDate.setDate(today.getDate() - days);
						emit = true;
					}
				} else if (dateStr.lastIndexOf('w') === dateStr.length - 1) {
					const weeks: number = Number(dateStr.replace('w', '')
						.replace('W', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(weeks)) {
						this.currentDate.setDate(today.getDate() - (weeks * 7));
						emit = true;
					}
				} else if (dateStr.lastIndexOf('s') === dateStr.length - 1) {
					const weeks: number = Number(dateStr.replace('s', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(weeks)) {
						this.currentDate.setDate(today.getDate() - (weeks * 7));
						emit = true;
					}
				} else if (dateStr.lastIndexOf('m') === dateStr.length - 1) {
					const months: number = Number(dateStr.replace('m', '')
						.replace('M', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(months)) {
						this.currentDate.setMonth(today.getMonth() - months);
						emit = true;
					}
				} else if (dateStr.lastIndexOf('a') === dateStr.length - 1) {
					const years: number = Number(dateStr.replace('a', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(years)) {
						this.currentDate.setFullYear(today.getFullYear() - years, today.getMonth(), today.getDate());
						emit = true;
					}
				} else if (dateStr.lastIndexOf('y') === dateStr.length - 1) {
					const years: number = Number(dateStr.replace('y', '')
						.replace('Y', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(years)) {
						this.currentDate.setFullYear(today.getFullYear() - years, today.getMonth(), today.getDate());
						emit = true;
					}
				}
			} else if (dateStr === '') {
				emit = true;
			}
		}
		if (emit && this.somethingChanged) {
			this.currentDateChange.emit(this.currentDate);
			this.somethingChanged = false;
		}
	}

	public onKeyDown(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.currentCalendar.inputfieldViewChild.nativeElement.blur();
			this.currentCalendar.onBlur.emit(event);
			this.closeDatepicker();
		} else {
			this.somethingChanged = true;
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

	public nextMonth(event: Event): void {
		if (this.currentCalendar) {
			this.currentCalendar.nextMonth(event);
		}
	}

	public prevMonth(event: Event): void {
		if (this.currentCalendar) {
			this.currentCalendar.prevMonth(event);
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
			this.somethingChanged = false;
		}
	}

	public setTodayDate(event): void {
		if (this.currentCalendar) {
			this.currentDate = new Date();
			this.currentDateChange.emit(this.currentDate);
			this.somethingChanged = false;
		}
	}

	public closeDatepicker(): void {
		if (this.currentCalendar) {
			this.currentCalendar.focus = false;
			this.currentCalendar.overlayVisible = false;
		}
	}

	private getLanguage(): void {

		const weekDaysNames: Array<string> = [];
		const weekDaysNamesShort: Array<string> = [];
		const monthNames: Array<string> = [];
		const monthNamesShort: Array<string> = [];
		// tslint:disable:max-line-length
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
			dayNames:        weekDaysNames,
			dayNamesShort:   weekDaysNamesShort,
			dayNamesMin:     weekDaysNamesShort,
			monthNames:      monthNames,
			monthNamesShort: monthNamesShort
		};

		this.language.firstDayOfWeek = this.i18nService.getFirstDayOfWeek();
		this.language.dateFormatValue = this.i18nService.getDateFormatForDatePicker(true);
		if (this.currentCalendar) {
			this.currentCalendar.dateFormat = this.language.dateFormatValue;
		}
	}

	private addListeners(): void {
		this.destroyWheelListener = this.myRenderer.listen('window', 'wheel', () => {
			this.closeDatepicker();
		});

		this.destroyKeyListener = this.myRenderer.listen('document', 'keydown', (evt: KeyboardEvent) => {
			if (evt.keyCode === 27) {
				this.closeDatepicker();
			}
		});
	}
}
