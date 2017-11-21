import { Component, OnInit, Input, Output, EventEmitter, ViewChild, DoCheck, OnDestroy, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Calendar } from 'primeng/components/calendar/calendar';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'systelab-datepicker',
	templateUrl: 'datepicker.component.html'
})
export class Datepicker implements OnInit, AfterViewInit, DoCheck, OnDestroy {

	public previousDate: boolean = false;

	protected _currentDate: Date;
	@Input() public disabled: boolean;
	@Input() public error: boolean;
	@Input() public notBlankAllowed: boolean;
	@Input() public isRequired: boolean;
	@Input() public inputExpandHeight: boolean;
	@Input() public markPreviousDate: boolean = true;

	// TODO: Review
	@Input() public otherLanguage: string;

	@Input()
	get currentDate(): Date {
		return this._currentDate;
	}

	set currentDate(value: Date) {
		this._currentDate = value;
		this.currentDateChange.emit(this._currentDate);
	}

	@Output() public currentDateChange = new EventEmitter<Date>();
	public language: any;
	@ViewChild('calendar') public currentCalendar: Calendar;

	public oldDateValue: boolean;
	public currentDocSize: number;
	public destroyWheelListener: Function;
	public destroyKeyListener: Function;
	public inputElement: ElementRef;
	public focusEvt: FocusEvent;
	public datepickerId: string = (Math.random() * (999999999999 - 1) ).toString();

	public pHeaderElement: any = document.getElementById(this.datepickerId);

	constructor(private myRenderer: Renderer2, private i18nService: I18nService) {
		this.addListeners();
		// TODO: To get the language and modify the values.
	}

	public ngOnInit() {
		this.getLanguage();

		this.oldDateValue = this.currentCalendar._isValid;
		this.currentDocSize = window.innerWidth;

		this.addListeners();
	}

	public ngAfterViewInit() {
		let newElement = document.createElement('i');
		newElement.className = 'icon-calendar';
		this.currentCalendar.el.nativeElement.childNodes[1].className = 'ui-calendar uk-form-icon position-right-icon';
		this.currentCalendar.el.nativeElement.childNodes[1].appendChild(newElement);

		let datePiker: any = document.getElementById(this.datepickerId);
	}

	public ngDoCheck() {
		if (this.oldDateValue !== this.currentCalendar._isValid || !this.currentDate) {
			this.oldDateValue = this.currentCalendar._isValid;
			this.validateDate();
		}

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
	}

	public ngOnDestroy() {
		this.destroyKeyListener();
		this.destroyWheelListener();
	}

	public changeDate(): void {
		let emit: boolean = true;
		if (this.currentCalendar.inputfieldViewChild.nativeElement.value && this.currentCalendar.inputfieldViewChild.nativeElement.value.trim()) {

			let dateStr: string = this.currentCalendar.inputfieldViewChild.nativeElement.value.trim();
			dateStr = dateStr.toLowerCase();

			if (dateStr.length >= 2) {
				let today: Date = new Date();

				if (dateStr.lastIndexOf('d') === dateStr.length - 1) {
					let days: number = Number(dateStr.replace('d', '')
						.replace('D', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setDate(today.getDate() - days);
					this.currentCalendar._isValid = true;
				} else if (dateStr.lastIndexOf('w') === dateStr.length - 1) {
					let weeks: number = Number(dateStr.replace('w', '')
						.replace('W', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setDate(today.getDate() - (weeks * 7));
					this.currentCalendar._isValid = true;
				} else if (dateStr.lastIndexOf('s') === dateStr.length - 1) {
					let weeks: number = Number(dateStr.replace('s', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setDate(today.getDate() - (weeks * 7));
					this.currentCalendar._isValid = true;
				} else if (dateStr.lastIndexOf('m') === dateStr.length - 1) {
					let months: number = Number(dateStr.replace('m', '')
						.replace('M', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setMonth(today.getMonth() - months);
					this.currentCalendar._isValid = true;
				} else if (dateStr.lastIndexOf('a') === dateStr.length - 1) {
					let years: number = Number(dateStr.replace('a', '')
						.replace('S', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setFullYear(today.getFullYear() - years, today.getMonth(), today.getDate());
					this.currentCalendar._isValid = true;
				} else if (dateStr.lastIndexOf('y') === dateStr.length - 1) {
					let years: number = Number(dateStr.replace('y', '')
						.replace('Y', ''));
					this.currentDate = new Date();
					emit = false;
					this.currentDate.setFullYear(today.getFullYear() - years, today.getMonth(), today.getDate());
					this.currentCalendar._isValid = true;
				}
			}
		}
		if (emit) {
			this.currentDateChange.emit(this.currentDate);
		}
	}

	public saveEventOnFocus(evt: FocusEvent): void {
		this.inputElement = new ElementRef(evt.target);
		this.focusEvt = evt;
	}

	public repositionateCalendar(element?: ElementRef): void {

		let inputElementTop: number, inputElementHeight: number, datepickerElementHeight: number;

		inputElementTop = this.inputElement.nativeElement.getBoundingClientRect().top;
		inputElementHeight = this.inputElement.nativeElement.getBoundingClientRect().height;
		datepickerElementHeight = element.nativeElement.getBoundingClientRect().height;

		if (inputElementTop + inputElementHeight + datepickerElementHeight > window.innerHeight) {
			let newTop: number = inputElementTop + inputElementHeight - ( datepickerElementHeight + inputElementHeight + 10 );
			this.myRenderer.setAttribute(element.nativeElement, 'top', newTop + 'px');
		}
	}

	public validateDate(): void {
		if (!this.currentCalendar._isValid || ( this.notBlankAllowed && !this.currentDate )) {
			this.error = true;
		} else {
			this.error = false;
		}
	}

	public nextMonth(event: Event): void {
		this.currentCalendar.nextMonth(event);
	}

	public prevMonth(event: Event): void {
		this.currentCalendar.prevMonth(event);
	}

	public nextYear(): void {
		let currentYear = this.currentCalendar.currentYear + 1;
		this.currentCalendar.onYearDropdownChange(currentYear.toString());
	}

	public prevYear(): void {
		let currentYear = this.currentCalendar.currentYear - 1;
		this.currentCalendar.onYearDropdownChange(currentYear.toString());
	}

	public closeDatepicker(): void {
		this.currentCalendar.focus = false;
		this.currentCalendar.overlayVisible = false;
		//this.currentCalendar.closeOverlay = true;

	}

	/*changeLanguage( event: Event ): void {
	 this.currentCalendar.weekDays = this.language.dayNamesMin;
	 }*/

	private getLanguage(): void {
		// TODO: To translate
		switch (this.otherLanguage) {
			case 'en':
				this.language = {
					firstDayOfWeek:  0,
					dayNames:        ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
					dayNamesShort:   ['sun', 'mon', 'tue', 'wed', 'thu', 'fir', 'sat'],
					dayNamesMin:     ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
					monthNames:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
					monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
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
					monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
					dateFormatValue: 'dd/mm/yy'
				};
				break;
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
