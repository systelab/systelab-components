import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';

export class Month {
	constructor(public month: number, public text: string, public year: number, public isActive: boolean) {
	}
}

@Component({
	selector: 'systelab-month-selector',
	templateUrl: './month-selector.component.html'
})
export class MonthSelectorComponent implements AfterViewInit {

	@Input() public maxDate: Date;
	@Input() public minDate: Date;
	@Input() public currentDate: Date;
	@Input() public isDisabled: boolean;

	private _selectedMonth: Month;
	@Input()
	get selectedMonth(): Month {
		return this._selectedMonth;
	}

	@Output() public selectedMonthChange = new EventEmitter();

	set selectedMonth(value: Month) {
		this._selectedMonth = value;
		this.selectedMonthChange.emit(this._selectedMonth);
	}

	public months: Array<Month> = [];
	public isOpened = false;
	public monthNames = [];

	constructor(private i18nService: I18nService) {
		if (this.currentDate) {
			this.setMonthsNames(this.currentDate.getFullYear());
		} else {
			this.setMonthsNames(new Date().getFullYear());
		}
		this.selectedMonth = new Month(0, '', 0, false);
	}

	public ngAfterViewInit(): void {
		if (!this.currentDate) {
			this.currentDate = new Date();
		}
		this.getMonths();
	}

	public setMonthsNames(year: number) {
		this.monthNames = [];
		for (let i = 0; i <= 11; i++) {
			const month = this.i18nService.formatMonthAndYear(new Date(year, i, 1));
			this.monthNames.push(month);
		}
	}

	public onClicked(e) {
		this.isOpened = true;
	}

	public hideSelector() {
		this.isOpened = false;
	}

	public getMonths() {
		this.months = [];
		const month = this.currentDate.getMonth();
		const year = this.currentDate.getFullYear();
		for (let i = 0; i <= 11; i++) {
			const dateStart = new Date(year, i, 1, 0, 0, 0, 0);
			const dateEnd = new Date(year, i + 1, 0);
			if (this.checkDateIntoIntervals(dateStart) || this.checkDateIntoIntervals(dateEnd)) {
				const isActive = (i === month);
				const monthObj: Month = new Month(i, this.monthNames[i], year, isActive);
				this.months.push(monthObj);
				if (isActive) {
					this.selectedMonth = monthObj;
				}
			}
		}
	}

	public addYear(num: number) {
		const date = new Date(this.currentDate.getFullYear() + (num), this.currentDate.getMonth(), this.currentDate.getDate());
		if (this.checkDateIntoIntervals(date)) {
			this.currentDate = date;
			this.setMonthsNames(this.currentDate.getFullYear());
			this.getMonths();
		}
	}

	public checkDateIntoIntervals(date: Date) {
		if (this.minDate && this.maxDate) {
			if (date >= this.minDate && date <= this.maxDate) {
				return true;
			} else {
				return false;
			}
		} else if (this.minDate) {
			if (date >= this.minDate) {
				return true;
			} else {
				return false;
			}
		} else if (this.maxDate) {
			if (date <= this.maxDate) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	public onClickedMonth(month: Month) {
		this.currentDate = new Date(month.year, month.month, 1);
		this.hideSelector();
		this.getMonths();
	}
}
