import {
	AfterViewInit,
	Component,
	DoCheck,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	ViewChild
} from '@angular/core';
import {Calendar} from 'primeng/components/calendar/calendar';
import {I18nService} from 'systelab-translate/lib/i18n.service';

@Component({
	selector: 'systelab-datepicker',
	templateUrl: 'datepicker.component.html'
})
export class Datepicker implements OnInit, AfterViewInit, DoCheck, OnDestroy {

	public somethingChanged = false;

	public _currentDate: Date;
	@Input() public disabled = false;
	@Input() public error = false;
	@Input() public required = false;
	@Input() public inputExpandHeight: boolean;
	@Input() public markPreviousDate = false;
	@Input() public inputFontSize: number;

	public previousDate = false;

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		this.checkPreviousDate();
	}

	@Output() public currentDateChange = new EventEmitter<Date>();
	public language: any;
	@ViewChild('calendar') public currentCalendar: Calendar;

	public currentDocSize: number;
	public currentLanguage: string;
	public destroyWheelListener: Function;
	public destroyKeyListener: Function;
	public inputElement: ElementRef;
	public focusEvt: FocusEvent;
	public isTablet = false;
	public datepickerId: string = (Math.random() * (999999999999 - 1)).toString();

	public pHeaderElement: any = document.getElementById(this.datepickerId);

	constructor(private myRenderer: Renderer2, private i18nService: I18nService) {
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
		newElement.className = 'icon-calendar';
		if (this.currentCalendar) {
			this.currentCalendar.el.nativeElement.childNodes[1].className = 'ui-calendar slab-form-icon w-100';
			this.currentCalendar.el.nativeElement.childNodes[1].appendChild(newElement);
		}
	}

	public ngDoCheck() {

		if (window.innerWidth !== this.currentDocSize) {
			this.currentDocSize = window.innerWidth;
			this.closeDatepicker();
		}

		if (this.pHeaderElement !== document.getElementById(this.datepickerId)) {
			this.pHeaderElement = document.getElementById(this.datepickerId);
			if (this.pHeaderElement) {
				this.repositionateCalendar(new ElementRef(this.pHeaderElement.parentElement.parentElement));
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

	private checkPreviousDate() {

		if (this._currentDate) {
			const today = new Date();
			today.setHours(0, 0, 0, 0);

			if (this._currentDate.getTime() < today.getTime()) {
				this.previousDate = true;
			} else {
				this.previousDate = false;
			}
		} else {
			this.previousDate = false;
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
					let days: number = Number(dateStr.replace('d', '')
						.replace('D', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(days)) {
						this.currentDate.setDate(today.getDate() - days);
						emit = true;
					}
				} else if (dateStr.lastIndexOf('w') === dateStr.length - 1) {
					let weeks: number = Number(dateStr.replace('w', '')
						.replace('W', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(weeks)) {
						this.currentDate.setDate(today.getDate() - (weeks * 7));
						emit = true;
					}
				} else if (dateStr.lastIndexOf('s') === dateStr.length - 1) {
					let weeks: number = Number(dateStr.replace('s', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(weeks)) {
						this.currentDate.setDate(today.getDate() - (weeks * 7));
						emit = true;
					}
				} else if (dateStr.lastIndexOf('m') === dateStr.length - 1) {
					let months: number = Number(dateStr.replace('m', '')
						.replace('M', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(months)) {
						this.currentDate.setMonth(today.getMonth() + months);
						emit = true;
					}
				} else if (dateStr.lastIndexOf('a') === dateStr.length - 1) {
					let years: number = Number(dateStr.replace('a', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(years)) {
						this.currentDate.setFullYear(today.getFullYear() + years, today.getMonth(), today.getDate());
						emit = true;
					}
				} else if (dateStr.lastIndexOf('y') === dateStr.length - 1) {
					let years: number = Number(dateStr.replace('y', '')
						.replace('Y', ''));
					this.currentDate = new Date();
					emit = false;
					if (!isNaN(years)) {
						this.currentDate.setFullYear(today.getFullYear() + years, today.getMonth(), today.getDate());
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
		// this.getLanguage();
		this.focusEvt = evt;
	}

	public repositionateCalendar(element?: ElementRef): void {

		let inputElementTop: number, inputElementHeight: number, datepickerElementHeight: number;

		inputElementTop = this.inputElement.nativeElement.getBoundingClientRect().top;
		inputElementHeight = this.inputElement.nativeElement.getBoundingClientRect().height;
		datepickerElementHeight = element.nativeElement.getBoundingClientRect().height;

		if (inputElementTop + inputElementHeight + datepickerElementHeight > window.innerHeight) {
			const newTop: number = inputElementTop + inputElementHeight - (datepickerElementHeight + inputElementHeight + 10);
			this.myRenderer.setAttribute(element.nativeElement, 'top', newTop + 'px');
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

	public closeDatepicker(): void {
		if (this.currentCalendar) {
			this.currentCalendar.focus = false;
			this.currentCalendar.overlayVisible = false;
		}

	}

	private getLanguage(): void {
		this.language = {
			dayNames: [
				this.i18nService.instant('COMMON_SUNDAY'),
				this.i18nService.instant('COMMON_MONDAY'),
				this.i18nService.instant('COMMON_TUESDAY'),
				this.i18nService.instant('COMMON_WEDNESDAY'),
				this.i18nService.instant('COMMON_THURSDAY'),
				this.i18nService.instant('COMMON_FRIDAY'),
				this.i18nService.instant('COMMON_SATURDAY')
			],
			dayNamesShort: [
				this.i18nService.instant('COMMON_SEVENTH_DAY'),
				this.i18nService.instant('COMMON_FIRST_DAY'),
				this.i18nService.instant('COMMON_SECOND_DAY'),
				this.i18nService.instant('COMMON_THIRD_DAY'),
				this.i18nService.instant('COMMON_FOURTH_DAY'),
				this.i18nService.instant('COMMON_FIFTH_DAY'),
				this.i18nService.instant('COMMON_SIXTH_DAY')
			],
			dayNamesMin: [
				this.i18nService.instant('COMMON_SEVENTH_DAY'),
				this.i18nService.instant('COMMON_FIRST_DAY'),
				this.i18nService.instant('COMMON_SECOND_DAY'),
				this.i18nService.instant('COMMON_THIRD_DAY'),
				this.i18nService.instant('COMMON_FOURTH_DAY'),
				this.i18nService.instant('COMMON_FIFTH_DAY'),
				this.i18nService.instant('COMMON_SIXTH_DAY')
			],
			monthNames: [
				this.i18nService.instant('COMMON_JANUARY'),
				this.i18nService.instant('COMMON_FEBRUARY'),
				this.i18nService.instant('COMMON_MARCH'),
				this.i18nService.instant('COMMON_APRIL'),
				this.i18nService.instant('COMMON_MAY'),
				this.i18nService.instant('COMMON_JUNE'),
				this.i18nService.instant('COMMON_JULY'),
				this.i18nService.instant('COMMON_AUGUST'),
				this.i18nService.instant('COMMON_SEPTEMBER'),
				this.i18nService.instant('COMMON_OCTOBER'),
				this.i18nService.instant('COMMON_NOVEMBER'),
				this.i18nService.instant('COMMON_DECEMBER')
			],
			monthNamesShort: [
				this.i18nService.instant('JOB_MONTHS_1'),
				this.i18nService.instant('JOB_MONTHS_2'),
				this.i18nService.instant('JOB_MONTHS_3'),
				this.i18nService.instant('JOB_MONTHS_4'),
				this.i18nService.instant('JOB_MONTHS_5'),
				this.i18nService.instant('JOB_MONTHS_6'),
				this.i18nService.instant('JOB_MONTHS_7'),
				this.i18nService.instant('JOB_MONTHS_8'),
				this.i18nService.instant('JOB_MONTHS_9'),
				this.i18nService.instant('JOB_MONTHS_10'),
				this.i18nService.instant('JOB_MONTHS_11'),
				this.i18nService.instant('JOB_MONTHS_12')
			]
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
