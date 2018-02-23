import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
    let date;
    if (this.currentDate) {
      date = this.currentDate;
    }
    else {
      date = new Date();
    }
    this.setMonthsNames(date.getFullYear());
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
    const idmonth = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    for (let i = 0; i < this.monthNames.length; i++) {
      const d = new Date(year, i + 1, 1, 0, 0, 0, 0);
      if (this.checkDateIntoIntervals(d)) {
        const isActive = i === idmonth ? true : false;
        const monthObj: Month = new Month(i, this.monthNames[i], year, isActive);
        this.months.push(monthObj);
        if (isActive) {
          this.selectedMonth = monthObj;
        }
      }
    }
    console.log(this.months);
  }
  public changeYear(v: number) {
    const da = this.currentDate;
    const curr_year = da.getFullYear() + (v);
    const gDate = new Date(curr_year, da.getMonth(), da.getDate());
    if (this.checkDateIntoIntervals(gDate)) {
      this.currentDate = gDate;
      this.setMonthsNames(this.currentDate.getFullYear());
      this.getMonths();
    }
  }
  public checkDateIntoIntervals(date: Date) {
    if (this.maxDate && this.minDate) {
      if (date <= this.maxDate && date >= this.minDate) { return true; }
      else { return false; }
    }
    else if (this.maxDate) {
      if (date <= this.maxDate) { return true; }
      else { return false; }
    }
    else if (this.minDate) {
      if (date >= this.minDate) { return true; }
      else { return false; }
    }
    else { return true; }
  }
  public onClickedMonth(month: Month) {
    this.currentDate = new Date(month.year, month.month, 1);
    this.hideSelector();
    this.getMonths();
  }
}