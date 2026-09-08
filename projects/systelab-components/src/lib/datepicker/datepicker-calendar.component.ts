import {
	afterRenderEffect,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	Signal,
	signal,
	TemplateRef,
	ViewChild,
	WritableSignal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** Localized names used to render and to parse/format dates. */
export interface DatePickerTranslations {
	dayNames?: Array<string>;
	dayNamesShort?: Array<string>;
	dayNamesMin?: Array<string>;
	monthNames?: Array<string>;
	monthNamesShort?: Array<string>;
}

/**
 * View model for a single cell of the day grid. Everything the template needs is precalculated
 * when the month is built, so no method is evaluated during change detection.
 */
export interface DatePickerDayCell {
	day: number;
	month: number;
	year: number;
	otherMonth: boolean;
	today: boolean;
	selectable: boolean;
	selected: boolean;
	visible: boolean;
	cellClass: string;
	dayClass: string;
}

export interface DatePickerMonthView {
	month: number;
	year: number;
	weeks: Array<Array<DatePickerDayCell>>;
}

const DEFAULT_TRANSLATIONS: DatePickerTranslations = {
	dayNames:        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort:   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin:     ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	monthNames:      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
		'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

const TICKS_TO_1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000;

const PANEL_MARGIN = 5;

export const DATEPICKER_CALENDAR_VALUE_ACCESSOR = {
	provide:     NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DatepickerCalendarComponent),
	multi:       true
};

@Component({
	selector:        'systelab-datepicker-calendar',
	templateUrl:     'datepicker-calendar.component.html',
	providers:       [DATEPICKER_CALENDAR_VALUE_ACCESSOR],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone:      false
})
export class DatepickerCalendarComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

	private readonly $dateFormat = signal('mm/dd/yy');
	private readonly $firstDayOfWeek = signal(0);
	private readonly $translations = signal<DatePickerTranslations>(undefined);
	private readonly $inline = signal(false);
	private readonly $disabled = signal(false);
	private readonly $required = signal(false);
	private readonly $readonlyInput = signal(false);
	private readonly $keepInvalid = signal(false);
	private readonly $showOtherMonths = signal(true);
	private readonly $selectOtherMonths = signal(false);
	private readonly $showTime = signal(false);
	private readonly $timeOnly = signal(false);
	private readonly $minDate = signal<Date>(undefined);
	private readonly $maxDate = signal<Date>(undefined);
	private readonly $disabledDates = signal<Array<Date>>(undefined);
	private readonly $disabledDays = signal<Array<number>>(undefined);
	private readonly $tabindex = signal<number>(undefined);
	private readonly $icon = signal<string>(undefined);
	private readonly $inputId = signal<string>(undefined);
	private readonly $headerTemplate = signal<TemplateRef<any>>(undefined);
	private readonly $footerTemplate = signal<TemplateRef<any>>(undefined);

	@Input()
	public set dateFormat(value: string) {
		this.$dateFormat.set(value);
	}

	public get dateFormat(): string {
		return this.$dateFormat();
	}

	@Input()
	public set firstDayOfWeek(value: number) {
		this.$firstDayOfWeek.set(value);
	}

	public get firstDayOfWeek(): number {
		return this.$firstDayOfWeek();
	}

	@Input()
	public set translations(value: DatePickerTranslations) {
		this.$translations.set(value);
	}

	public get translations(): DatePickerTranslations {
		return this.$translations();
	}

	@Input()
	public set inline(value: boolean) {
		this.$inline.set(value);
	}

	public get inline(): boolean {
		return this.$inline();
	}

	@Input()
	public set disabled(value: boolean) {
		this.$disabled.set(value);
	}

	public get disabled(): boolean {
		return this.$disabled();
	}

	@Input()
	public set required(value: boolean) {
		this.$required.set(value);
	}

	public get required(): boolean {
		return this.$required();
	}

	@Input()
	public set readonlyInput(value: boolean) {
		this.$readonlyInput.set(value);
	}

	public get readonlyInput(): boolean {
		return this.$readonlyInput();
	}

	@Input()
	public set keepInvalid(value: boolean) {
		this.$keepInvalid.set(value);
	}

	public get keepInvalid(): boolean {
		return this.$keepInvalid();
	}

	@Input()
	public set showOtherMonths(value: boolean) {
		this.$showOtherMonths.set(value);
	}

	public get showOtherMonths(): boolean {
		return this.$showOtherMonths();
	}

	@Input()
	public set selectOtherMonths(value: boolean) {
		this.$selectOtherMonths.set(value);
	}

	public get selectOtherMonths(): boolean {
		return this.$selectOtherMonths();
	}

	@Input()
	public set showTime(value: boolean) {
		this.$showTime.set(value);
	}

	public get showTime(): boolean {
		return this.$showTime();
	}

	@Input()
	public set timeOnly(value: boolean) {
		this.$timeOnly.set(value);
	}

	public get timeOnly(): boolean {
		return this.$timeOnly();
	}

	@Input()
	public set minDate(value: Date) {
		this.$minDate.set(value);
	}

	public get minDate(): Date {
		return this.$minDate();
	}

	@Input()
	public set maxDate(value: Date) {
		this.$maxDate.set(value);
	}

	public get maxDate(): Date {
		return this.$maxDate();
	}

	@Input()
	public set disabledDates(value: Array<Date>) {
		this.$disabledDates.set(value);
	}

	public get disabledDates(): Array<Date> {
		return this.$disabledDates();
	}

	@Input()
	public set disabledDays(value: Array<number>) {
		this.$disabledDays.set(value);
	}

	public get disabledDays(): Array<number> {
		return this.$disabledDays();
	}

	@Input()
	public set tabindex(value: number) {
		this.$tabindex.set(value);
	}

	public get tabindex(): number {
		return this.$tabindex();
	}

	@Input()
	public set icon(value: string) {
		this.$icon.set(value);
	}

	public get icon(): string {
		return this.$icon();
	}

	@Input()
	public set inputId(value: string) {
		this.$inputId.set(value);
	}

	public get inputId(): string {
		return this.$inputId();
	}

	@Input()
	public set headerTemplate(value: TemplateRef<any>) {
		this.$headerTemplate.set(value);
	}

	public get headerTemplate(): TemplateRef<any> {
		return this.$headerTemplate();
	}

	@Input()
	public set footerTemplate(value: TemplateRef<any>) {
		this.$footerTemplate.set(value);
	}

	public get footerTemplate(): TemplateRef<any> {
		return this.$footerTemplate();
	}

	/** Only read once, when the view is created, so it does not need to be reactive. */
	@Input() public autofocus = false;

	@Output() public onFocus = new EventEmitter<FocusEvent>();
	@Output() public onBlur = new EventEmitter<FocusEvent>();
	@Output() public onSelect = new EventEmitter<Date>();
	@Output() public onInput = new EventEmitter<Event>();
	@Output() public onClear = new EventEmitter<void>();
	@Output() public onMonthChange = new EventEmitter<{ month: number, year: number }>();
	@Output() public onYearChange = new EventEmitter<{ month: number, year: number }>();

	@ViewChild('inputfield') public inputfieldViewChild: ElementRef<HTMLInputElement>;
	@ViewChild('panel') public panelViewChild: ElementRef<HTMLElement>;

	private readonly $value: WritableSignal<any> = signal(null);
	private readonly $currentMonth = signal<number>(undefined);
	private readonly $currentYear = signal<number>(undefined);
	private readonly $currentHour = signal(0);
	private readonly $currentMinute = signal(0);
	private readonly $overlayVisible = signal(false);
	private readonly $focus = signal(false);

	public get value(): any {
		return this.$value();
	}

	public set value(value: any) {
		this.$value.set(value);
	}

	public get currentMonth(): number {
		return this.$currentMonth();
	}

	public set currentMonth(value: number) {
		this.$currentMonth.set(value);
	}

	public get currentYear(): number {
		return this.$currentYear();
	}

	public set currentYear(value: number) {
		this.$currentYear.set(value);
	}

	public get currentHour(): number {
		return this.$currentHour();
	}

	public get currentMinute(): number {
		return this.$currentMinute();
	}

	public get overlayVisible(): boolean {
		return this.$overlayVisible();
	}

	public get focus(): boolean {
		return this.$focus();
	}

	/** Text shown in the input, derived from the value and the format. */
	private readonly $inputFieldValue: Signal<string> = computed(() => this.formatDateTime(this.$value()));

	/** Week day headers, starting on the configured first day of week. */
	private readonly $weekDays: Signal<Array<string>> = computed(() => {
		const dayLabels = this.getTranslation('dayNamesMin');
		const weekDays: Array<string> = [];
		let dayIndex = this.$firstDayOfWeek() ?? 0;
		for (let i = 0; i < 7; i++) {
			weekDays.push(dayLabels[dayIndex]);
			dayIndex = dayIndex === 6 ? 0 : dayIndex + 1;
		}
		return weekDays;
	});

	/**
	 * The rendered month. Being a derivation there is nothing to invalidate: it is rebuilt when the
	 * displayed month, the value, the selectable range or the translations change, and only when
	 * the panel that reads it is on screen.
	 */
	private readonly $months: Signal<Array<DatePickerMonthView>> = computed(() => {
		const month = this.$currentMonth();
		const year = this.$currentYear();
		if (month === undefined || year === undefined) {
			return [];
		}
		return [this.createMonth(month, year)];
	});

	private readonly $hourDisplay = computed(() => this.pad(this.$currentHour()));
	private readonly $minuteDisplay = computed(() => this.pad(this.$currentMinute()));

	public get inputFieldValue(): string {
		return this.$inputFieldValue();
	}

	public get weekDays(): Array<string> {
		return this.$weekDays();
	}

	public get months(): Array<DatePickerMonthView> {
		return this.$months();
	}

	public get hourDisplay(): string {
		return this.$hourDisplay();
	}

	public get minuteDisplay(): string {
		return this.$minuteDisplay();
	}

	private isKeydown = false;
	private hideTimer: any;
	private focusTimer: any;
	private timePickerTimer: any;
	private unlistenScroll: () => void;
	private unlistenResize: () => void;
	private unlistenDocumentClick: () => void;

	private onModelChange: (value: any) => void = () => {
	};
	private onModelTouched: () => void = () => {
	};

	constructor(public el: ElementRef, protected renderer: Renderer2) {
		// The panel is a fixed element: every time it is shown (and on every render while it is
		// open) it is measured and placed below the input, or above it when it does not fit.
		afterRenderEffect(() => {
			if (this.$overlayVisible()) {
				this.alignOverlay();
			}
		});
	}

	public ngOnInit(): void {
		const date = this.isValidDate(this.$value()) ? this.$value() : new Date();
		this.$currentMonth.set(date.getMonth());
		this.$currentYear.set(date.getFullYear());
		this.initTime(date);
	}

	public ngAfterViewInit(): void {
		if (this.autofocus && this.inputfieldViewChild) {
			// Deferred so that opening the panel on focus does not happen in the middle of a
			// change detection cycle.
			this.focusTimer = setTimeout(() => {
				this.focusTimer = null;
				this.inputfieldViewChild?.nativeElement.focus();
			});
		}
	}

	public ngOnDestroy(): void {
		this.clearTimePickerTimer();
		[this.hideTimer, this.focusTimer].forEach(timer => {
			if (timer) {
				clearTimeout(timer);
			}
		});
		this.hideTimer = this.focusTimer = null;
		this.unbindOverlayListeners();
	}

	// ------------------------------------------------------------------ ControlValueAccessor

	public writeValue(value: any): void {
		let parsed = value;
		if (parsed && typeof parsed === 'string') {
			try {
				parsed = this.parseDateTime(parsed);
			} catch {
				if (!this.keepInvalid) {
					parsed = null;
				}
			}
		}
		this.$value.set(parsed);
		this.updateInputfield();
		this.updateUI();
	}

	public registerOnChange(fn: (value: any) => void): void {
		this.onModelChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onModelTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.$disabled.set(isDisabled);
	}

	// ------------------------------------------------------------------ Public API

	public clear(): void {
		this.$value.set(null);
		this.onModelChange(null);
		this.updateInputfield();
		this.onClear.emit();
	}

	public navBackward(event?: Event): void {
		if (this.disabled) {
			event?.preventDefault();
			return;
		}
		if (this.$currentMonth() === 0) {
			this.$currentMonth.set(11);
			this.$currentYear.update(year => year - 1);
		} else {
			this.$currentMonth.update(month => month - 1);
		}
		this.onMonthChange.emit({month: this.$currentMonth() + 1, year: this.$currentYear()});
	}

	public navForward(event?: Event): void {
		if (this.disabled) {
			event?.preventDefault();
			return;
		}
		if (this.$currentMonth() === 11) {
			this.$currentMonth.set(0);
			this.$currentYear.update(year => year + 1);
		} else {
			this.$currentMonth.update(month => month + 1);
		}
		this.onMonthChange.emit({month: this.$currentMonth() + 1, year: this.$currentYear()});
	}

	public navYearBackward(event?: Event): void {
		if (this.disabled) {
			event?.preventDefault();
			return;
		}
		this.$currentYear.update(year => year - 1);
		this.onYearChange.emit({month: this.$currentMonth() + 1, year: this.$currentYear()});
	}

	public navYearForward(event?: Event): void {
		if (this.disabled) {
			event?.preventDefault();
			return;
		}
		this.$currentYear.update(year => year + 1);
		this.onYearChange.emit({month: this.$currentMonth() + 1, year: this.$currentYear()});
	}

	public showOverlay(): void {
		if (this.inline || this.overlayVisible || this.disabled) {
			return;
		}
		this.updateUI();
		this.$overlayVisible.set(true);
		this.bindOverlayListeners();
	}

	public hideOverlay(): void {
		if (this.hideTimer) {
			clearTimeout(this.hideTimer);
			this.hideTimer = null;
		}
		if (!this.overlayVisible) {
			return;
		}
		this.$overlayVisible.set(false);
		this.unbindOverlayListeners();
	}

	/** Places the panel right below the input, flipping it above when there is not enough room. */
	public alignOverlay(): void {
		if (this.inline || !this.panelViewChild || !this.el?.nativeElement) {
			return;
		}
		const panel = this.panelViewChild.nativeElement;
		const inputRect = (this.inputfieldViewChild?.nativeElement ?? this.el.nativeElement).getBoundingClientRect();
		let top = inputRect.bottom;
		if (top + panel.offsetHeight > window.innerHeight) {
			const flipped = inputRect.top - panel.offsetHeight - PANEL_MARGIN;
			top = flipped > 0 ? flipped : Math.max(window.innerHeight - panel.offsetHeight, 0);
		}
		let left = inputRect.left;
		if (left + panel.offsetWidth > window.innerWidth) {
			left = Math.max(window.innerWidth - panel.offsetWidth, 0);
		}
		this.renderer.setStyle(panel, 'position', 'fixed');
		this.renderer.setStyle(panel, 'top', `${Math.round(top)}px`);
		this.renderer.setStyle(panel, 'left', `${Math.round(left)}px`);
	}

	public isSelectable(day: number, month: number, year: number, otherMonth: boolean): boolean {
		if (otherMonth && !this.selectOtherMonths) {
			return false;
		}
		let validMin = true;
		let validMax = true;
		if (this.minDate) {
			if (this.minDate.getFullYear() > year) {
				validMin = false;
			} else if (this.minDate.getFullYear() === year) {
				if (this.minDate.getMonth() > month) {
					validMin = false;
				} else if (this.minDate.getMonth() === month && this.minDate.getDate() > day) {
					validMin = false;
				}
			}
		}
		if (this.maxDate) {
			if (this.maxDate.getFullYear() < year) {
				validMax = false;
			} else if (this.maxDate.getFullYear() === year) {
				if (this.maxDate.getMonth() < month) {
					validMax = false;
				} else if (this.maxDate.getMonth() === month && this.maxDate.getDate() < day) {
					validMax = false;
				}
			}
		}
		return validMin && validMax && !this.isDateDisabled(day, month, year) && !this.isDayDisabled(day, month, year);
	}

	public isDateDisabled(day: number, month: number, year: number): boolean {
		if (this.disabledDates) {
			return this.disabledDates.some(disabledDate => disabledDate.getFullYear() === year &&
				disabledDate.getMonth() === month && disabledDate.getDate() === day);
		}
		return false;
	}

	public isDayDisabled(day: number, month: number, year: number): boolean {
		if (this.disabledDays) {
			return this.disabledDays.indexOf(new Date(year, month, day).getDay()) !== -1;
		}
		return false;
	}

	public isSelected(day: number, month: number, year: number): boolean {
		return this.isValidDate(this.value) && this.value.getDate() === day && this.value.getMonth() === month &&
			this.value.getFullYear() === year;
	}

	// ------------------------------------------------------------------ Template handlers

	public onInputFocus(event: FocusEvent): void {
		this.$focus.set(true);
		this.showOverlay();
		this.onFocus.emit(event);
	}

	public onInputClick(): void {
		if (!this.overlayVisible) {
			this.showOverlay();
		}
	}

	public onInputBlur(event: FocusEvent): void {
		this.$focus.set(false);
		this.onBlur.emit(event);
		if (!this.keepInvalid) {
			this.updateInputfield();
		}
		this.onModelTouched();
	}

	public onInputKeydown(event: KeyboardEvent): void {
		this.isKeydown = true;
		if (event.key === 'Escape' && this.overlayVisible) {
			this.hideOverlay();
			event.preventDefault();
		}
	}

	public onUserInput(event: Event): void {
		// Guard kept for parity with the previous implementation: only real typing updates the model.
		if (!this.isKeydown) {
			return;
		}
		this.isKeydown = false;
		const text = (event.target as HTMLInputElement).value;
		try {
			const parsed = this.parseValueFromString(text);
			if (parsed === null || this.isValidSelection(parsed)) {
				this.updateModel(parsed);
				this.updateUI();
			} else if (this.keepInvalid) {
				this.updateModel(parsed);
			}
		} catch {
			this.updateModel(this.keepInvalid ? text : null);
		}
		this.onInput.emit(event);
	}

	public onIconClick(event: Event): void {
		event.preventDefault();
		if (this.disabled) {
			return;
		}
		this.inputfieldViewChild?.nativeElement.focus();
		if (!this.overlayVisible) {
			this.showOverlay();
		}
	}

	public onDateSelect(event: Event, cell: DatePickerDayCell): void {
		if (this.disabled || !cell.selectable) {
			event.preventDefault();
			return;
		}
		this.selectDate(cell);
		if (!this.inline) {
			this.hideTimer = setTimeout(() => {
				this.hideTimer = null;
				this.hideOverlay();
			}, 150);
		}
		this.updateInputfield();
		event.preventDefault();
	}

	public onPanelMouseDown(event: MouseEvent): void {
		// Avoids losing the input focus (and therefore closing the panel) when interacting with it.
		const target = event.target as HTMLElement;
		if (target && target.tagName !== 'INPUT') {
			event.preventDefault();
		}
	}

	public incrementHour(event: Event): void {
		this.$currentHour.update(hour => hour >= 23 ? 0 : hour + 1);
		this.constrainTime();
		event.preventDefault();
	}

	public decrementHour(event: Event): void {
		this.$currentHour.update(hour => hour <= 0 ? 23 : hour - 1);
		this.constrainTime();
		event.preventDefault();
	}

	public incrementMinute(event: Event): void {
		this.$currentMinute.update(minute => minute >= 59 ? 0 : minute + 1);
		this.constrainTime();
		event.preventDefault();
	}

	public decrementMinute(event: Event): void {
		this.$currentMinute.update(minute => minute <= 0 ? 59 : minute - 1);
		this.constrainTime();
		event.preventDefault();
	}

	public onTimePickerElementMouseDown(event: MouseEvent, type: number, direction: number): void {
		if (!this.disabled) {
			this.repeat(event, null, type, direction);
			event.preventDefault();
		}
	}

	public onTimePickerElementMouseUp(event: Event): void {
		if (!this.disabled) {
			this.clearTimePickerTimer();
			this.updateTime();
		}
	}

	public onTimePickerElementMouseLeave(): void {
		if (!this.disabled && this.timePickerTimer) {
			this.clearTimePickerTimer();
			this.updateTime();
		}
	}

	// ------------------------------------------------------------------ Model

	/**
	 * Writes the formatted value into the input. The text is already bound through
	 * `inputFieldValue`, but the element has to be written to explicitly to discard what the user
	 * typed when it could not be parsed (the bound value did not change in that case).
	 */
	public updateInputfield(): void {
		if (this.inputfieldViewChild?.nativeElement) {
			// Formatted here instead of reading the derived value, so that it is also right when the
			// bound date was modified in place and the signal therefore did not change.
			this.inputfieldViewChild.nativeElement.value = this.formatDateTime(this.value);
		}
	}

	public updateUI(): void {
		const date = this.isValidDate(this.value) ? this.value : new Date();
		this.$currentMonth.set(date.getMonth());
		this.$currentYear.set(date.getFullYear());
		if (this.showTime || this.timeOnly) {
			this.setTime(date.getHours(), date.getMinutes());
		}
	}

	public formatDateTime(date: any): string {
		if (!this.isValidDate(date)) {
			return this.keepInvalid && typeof date === 'string' ? date : '';
		}
		if (!this.isValidDateForTimeConstraints(date)) {
			return '';
		}
		if (this.timeOnly) {
			return this.formatTime(date);
		}
		let formatted = this.formatDate(date, this.dateFormat);
		if (this.showTime) {
			formatted += ' ' + this.formatTime(date);
		}
		return formatted;
	}

	/** Ported from the jQuery UI datepicker formatDate. */
	public formatDate(date: Date, format: string): string {
		if (!date) {
			return '';
		}
		let iFormat = 0;
		const lookAhead = (match: string): boolean => {
			const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
			if (matches) {
				iFormat++;
			}
			return matches;
		};
		const formatNumber = (match: string, value: number, len: number): string => {
			let num = '' + value;
			if (lookAhead(match)) {
				while (num.length < len) {
					num = '0' + num;
				}
			}
			return num;
		};
		const formatName = (match: string, value: number, shortNames: Array<string>, longNames: Array<string>): string =>
			lookAhead(match) ? longNames[value] : shortNames[value];

		let output = '';
		let literal = false;
		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
					literal = false;
				} else {
					output += format.charAt(iFormat);
				}
				continue;
			}
			switch (format.charAt(iFormat)) {
				case 'd':
					output += formatNumber('d', date.getDate(), 2);
					break;
				case 'D':
					output += formatName('D', date.getDay(), this.getTranslation('dayNamesShort'), this.getTranslation('dayNames'));
					break;
				case 'o':
					output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() -
						new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
					break;
				case 'm':
					output += formatNumber('m', date.getMonth() + 1, 2);
					break;
				case 'M':
					output += formatName('M', date.getMonth(), this.getTranslation('monthNamesShort'), this.getTranslation('monthNames'));
					break;
				case 'y':
					output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + (date.getFullYear() % 100);
					break;
				case '@':
					output += date.getTime();
					break;
				case '!':
					output += date.getTime() * 10000 + TICKS_TO_1970;
					break;
				case '\'':
					if (lookAhead('\'')) {
						output += '\'';
					} else {
						literal = true;
					}
					break;
				default:
					output += format.charAt(iFormat);
			}
		}
		return output;
	}

	public formatTime(date: Date): string {
		if (!date) {
			return '';
		}
		return `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}`;
	}

	/** Ported from the jQuery UI datepicker parseDate. Throws when the value does not match the format. */
	public parseDate(value: string, format: string): Date {
		if (format === null || format === undefined || value === null || value === undefined) {
			throw new Error('Invalid arguments');
		}
		value = typeof value === 'object' ? String(value) : value + '';
		if (value === '') {
			return null;
		}

		const shortYearCutoff = (new Date().getFullYear() % 100) + 10;
		let iFormat = 0;
		let iValue = 0;
		let year = -1;
		let month = -1;
		let day = -1;
		let doy = -1;
		let literal = false;
		let date: Date;

		const lookAhead = (match: string): boolean => {
			const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
			if (matches) {
				iFormat++;
			}
			return matches;
		};
		const getNumber = (match: string): number => {
			const isDoubled = lookAhead(match);
			const size = match === '@' ? 14 : match === '!' ? 20 : match === 'y' && isDoubled ? 4 : match === 'o' ? 3 : 2;
			const minSize = match === 'y' ? size : 1;
			const digits = new RegExp('^\\d{' + minSize + ',' + size + '}');
			const num = value.substring(iValue)
				.match(digits);
			if (!num) {
				throw new Error('Missing number at position ' + iValue);
			}
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		const getName = (match: string, shortNames: Array<string>, longNames: Array<string>): number => {
			const arr = lookAhead(match) ? longNames : shortNames;
			const names: Array<[number, string]> = arr.map((name, index) => [index, name] as [number, string]);
			names.sort((a, b) => -(a[1].length - b[1].length));
			for (const [index, name] of names) {
				if (value.substr(iValue, name.length)
					.toLowerCase() === name.toLowerCase()) {
					iValue += name.length;
					return index + 1;
				}
			}
			throw new Error('Unknown name at position ' + iValue);
		};
		const checkLiteral = (): void => {
			if (value.charAt(iValue) !== format.charAt(iFormat)) {
				throw new Error('Unexpected literal at position ' + iValue);
			}
			iValue++;
		};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
					literal = false;
				} else {
					checkLiteral();
				}
				continue;
			}
			switch (format.charAt(iFormat)) {
				case 'd':
					day = getNumber('d');
					break;
				case 'D':
					getName('D', this.getTranslation('dayNamesShort'), this.getTranslation('dayNames'));
					break;
				case 'o':
					doy = getNumber('o');
					break;
				case 'm':
					month = getNumber('m');
					break;
				case 'M':
					month = getName('M', this.getTranslation('monthNamesShort'), this.getTranslation('monthNames'));
					break;
				case 'y':
					year = getNumber('y');
					break;
				case '@':
					date = new Date(getNumber('@'));
					year = date.getFullYear();
					month = date.getMonth() + 1;
					day = date.getDate();
					break;
				case '!':
					date = new Date((getNumber('!') - TICKS_TO_1970) / 10000);
					year = date.getFullYear();
					month = date.getMonth() + 1;
					day = date.getDate();
					break;
				case '\'':
					if (lookAhead('\'')) {
						checkLiteral();
					} else {
						literal = true;
					}
					break;
				default:
					checkLiteral();
			}
		}

		if (iValue < value.length) {
			const extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw new Error('Extra/unparsed characters found in date: ' + extra);
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - (new Date().getFullYear() % 100) + (year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			let dim: number;
			do {
				dim = this.getDaysCountInMonth(month - 1, year);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this.daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw new Error('Invalid date');
		}
		return date;
	}

	public parseTime(value: string): { hour: number, minute: number } {
		const tokens = value.split(':');
		if (tokens.length !== 2) {
			throw new Error('Invalid time');
		}
		const hour = parseInt(tokens[0], 10);
		const minute = parseInt(tokens[1], 10);
		if (isNaN(hour) || isNaN(minute) || hour > 23 || minute > 59) {
			throw new Error('Invalid time');
		}
		return {hour, minute};
	}

	public parseDateTime(text: string): Date {
		const parts = text.split(' ');
		let date: Date;
		if (this.timeOnly) {
			date = new Date();
			this.populateTime(date, parts[0]);
		} else if (this.showTime) {
			const timeString = parts.pop();
			date = this.parseDate(parts.join(' '), this.dateFormat);
			this.populateTime(date, timeString);
		} else {
			date = this.parseDate(text, this.dateFormat);
		}
		return date;
	}

	public parseValueFromString(text: string): Date {
		if (!text || text.trim().length === 0) {
			return null;
		}
		return this.parseDateTime(text);
	}

	// ------------------------------------------------------------------ Internals

	protected selectDate(cell: DatePickerDayCell): void {
		let date = new Date(cell.year, cell.month, cell.day);
		if (this.showTime) {
			date.setHours(this.currentHour, this.currentMinute, 0, 0);
		}
		if (this.minDate && this.minDate > date) {
			date = this.minDate;
			this.setTime(date.getHours(), date.getMinutes());
		}
		if (this.maxDate && this.maxDate < date) {
			date = this.maxDate;
			this.setTime(date.getHours(), date.getMinutes());
		}
		this.updateModel(date);
		this.onSelect.emit(date);
	}

	protected updateModel(value: any): void {
		this.$value.set(value);
		this.onModelChange(value);
	}

	protected updateTime(): void {
		const value = this.isValidDate(this.value) ? new Date(this.value.getTime()) : new Date();
		value.setHours(this.currentHour, this.currentMinute, 0, 0);
		this.updateModel(value);
		this.onSelect.emit(value);
		this.updateInputfield();
	}

	protected repeat(event: MouseEvent, interval: number, type: number, direction: number): void {
		const i = interval || 500;
		this.clearTimePickerTimer();
		this.timePickerTimer = setTimeout(() => this.repeat(event, 100, type, direction), i);

		if (type === 0) {
			if (direction === 1) {
				this.incrementHour(event);
			} else {
				this.decrementHour(event);
			}
		} else {
			if (direction === 1) {
				this.incrementMinute(event);
			} else {
				this.decrementMinute(event);
			}
		}
		this.updateInputfield();
	}

	protected clearTimePickerTimer(): void {
		if (this.timePickerTimer) {
			clearTimeout(this.timePickerTimer);
			this.timePickerTimer = null;
		}
	}

	/** Keeps the edited time inside the minDate/maxDate boundaries when they fall on the selected day. */
	protected constrainTime(): void {
		const value = this.isValidDate(this.value) ? this.value : null;
		const valueDateString = value ? value.toDateString() : null;
		if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
			if (this.currentHour < this.minDate.getHours()) {
				this.setTime(this.minDate.getHours(), this.minDate.getMinutes());
			} else if (this.currentHour === this.minDate.getHours() && this.currentMinute < this.minDate.getMinutes()) {
				this.setTime(this.currentHour, this.minDate.getMinutes());
			}
		}
		if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
			if (this.currentHour > this.maxDate.getHours()) {
				this.setTime(this.maxDate.getHours(), this.maxDate.getMinutes());
			} else if (this.currentHour === this.maxDate.getHours() && this.currentMinute > this.maxDate.getMinutes()) {
				this.setTime(this.currentHour, this.maxDate.getMinutes());
			}
		}
	}

	protected initTime(date: Date): void {
		if (this.showTime) {
			this.setTime(date.getHours(), date.getMinutes());
		} else {
			this.setTime(0, 0);
		}
	}

	public setTime(hour: number, minute: number): void {
		this.$currentHour.set(hour);
		this.$currentMinute.set(minute);
	}

	protected populateTime(value: Date, timeString: string): void {
		const time = this.parseTime(timeString);
		value.setHours(time.hour, time.minute, 0, 0);
	}

	protected isValidSelection(value: Date): boolean {
		return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
	}

	protected isValidDate(date: any): boolean {
		return date instanceof Date && !isNaN(date.getTime());
	}

	protected isValidDateForTimeConstraints(date: Date): boolean {
		if (this.keepInvalid) {
			return true;
		}
		return (!this.minDate || date >= this.minDate) && (!this.maxDate || date <= this.maxDate);
	}

	protected createMonth(month: number, year: number): DatePickerMonthView {
		const weeks: Array<Array<DatePickerDayCell>> = [];
		const firstDay = this.getFirstDayOfMonthIndex(month, year);
		const daysLength = this.getDaysCountInMonth(month, year);
		const prev = this.getPreviousMonthAndYear(month, year);
		const next = this.getNextMonthAndYear(month, year);
		const prevMonthDaysLength = this.getDaysCountInMonth(prev.month, prev.year);
		const today = new Date();
		const monthRows = Math.ceil((daysLength + firstDay) / 7);
		let dayNo = 1;

		for (let i = 0; i < monthRows; i++) {
			const week: Array<DatePickerDayCell> = [];
			if (i === 0) {
				for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
					week.push(this.createDayCell(j, prev.month, prev.year, true, today));
				}
				const remainingDaysLength = 7 - week.length;
				for (let j = 0; j < remainingDaysLength; j++) {
					week.push(this.createDayCell(dayNo++, month, year, false, today));
				}
			} else {
				for (let j = 0; j < 7; j++) {
					if (dayNo > daysLength) {
						week.push(this.createDayCell(dayNo - daysLength, next.month, next.year, true, today));
					} else {
						week.push(this.createDayCell(dayNo, month, year, false, today));
					}
					dayNo++;
				}
			}
			weeks.push(week);
		}
		return {month, year, weeks};
	}

	protected createDayCell(day: number, month: number, year: number, otherMonth: boolean, today: Date): DatePickerDayCell {
		const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
		const selectable = this.isSelectable(day, month, year, otherMonth);
		const selected = this.isSelected(day, month, year);

		let cellClass = 'slab-datepicker-day-cell';
		if (otherMonth) {
			cellClass += ' slab-datepicker-other-month';
		}
		if (isToday) {
			cellClass += ' slab-datepicker-today';
		}

		let dayClass = 'slab-datepicker-day';
		if (selected && selectable) {
			dayClass += ' slab-datepicker-day-selected';
		}
		if (this.disabled || !selectable) {
			dayClass += ' slab-datepicker-day-disabled';
		}

		return {
			day, month, year, otherMonth,
			today:   isToday,
			selectable, selected,
			visible: !otherMonth || this.showOtherMonths,
			cellClass, dayClass
		};
	}

	protected getFirstDayOfMonthIndex(month: number, year: number): number {
		const day = new Date(year, month, 1);
		const dayIndex = day.getDay() + this.getSundayIndex();
		return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
	}

	protected getSundayIndex(): number {
		const firstDayOfWeek = this.firstDayOfWeek ?? 0;
		return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
	}

	protected getDaysCountInMonth(month: number, year: number): number {
		return 32 - this.daylightSavingAdjust(new Date(year, month, 32))
			.getDate();
	}

	protected getPreviousMonthAndYear(month: number, year: number): { month: number, year: number } {
		return month === 0 ? {month: 11, year: year - 1} : {month: month - 1, year};
	}

	protected getNextMonthAndYear(month: number, year: number): { month: number, year: number } {
		return month === 11 ? {month: 0, year: year + 1} : {month: month + 1, year};
	}

	protected daylightSavingAdjust(date: Date): Date {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	}

	protected getTranslation(key: keyof DatePickerTranslations): Array<string> {
		const value = this.translations ? this.translations[key] : undefined;
		return value?.length ? value : DEFAULT_TRANSLATIONS[key];
	}

	protected pad(value: number): string {
		return value < 10 ? `0${value}` : `${value}`;
	}

	// The overlay only listens to the document while it is open.
	protected bindOverlayListeners(): void {
		if (this.unlistenDocumentClick) {
			return;
		}
		this.unlistenDocumentClick = this.renderer.listen('document', 'mousedown', (event: MouseEvent) => {
			if (this.overlayVisible && !this.el.nativeElement.contains(event.target)) {
				this.hideOverlay();
			}
		});
		this.unlistenScroll = this.renderer.listen('window', 'scroll', () => this.alignOverlay());
		this.unlistenResize = this.renderer.listen('window', 'resize', () => this.hideOverlay());
	}

	protected unbindOverlayListeners(): void {
		this.unlistenDocumentClick?.();
		this.unlistenScroll?.();
		this.unlistenResize?.();
		this.unlistenDocumentClick = null;
		this.unlistenScroll = null;
		this.unlistenResize = null;
	}
}
