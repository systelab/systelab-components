import {Component, Input, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {I18nService} from 'systelab-translate/lib/i18n.service';
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
  public isOpened: boolean = false;
  public monthNames = [];

constructor(private i18nService: I18nService) {
    var year = new Date();
    for (var i = 1; i <= 12; i++) {
      var month = this.i18nService.formatMonthAndYear(new Date(i + "/01/" + year.getFullYear()));
      this.monthNames.push(month);
    }
  }

  ngAfterViewInit(): void {
    if (!this.currentDate) {
      this.currentDate = new Date();
    }
    this.getMonths();
  }
  public onClicked(e) {
    this.isOpened = true;
  }
  public hideSelector() {
    this.isOpened = false;
  }
  public getMonths() {
    this.months = [];
    var idmonth = this.currentDate.getMonth();
    var year = this.currentDate.getFullYear();
    for (var i = 0; i < this.monthNames.length; i++) {
      var d = new Date(year, i + 1, 1, 0, 0, 0, 0);
      if (this.checkDateIntoIntervals(d)) {
        var isActive = i == idmonth ? true : false;
        var monthObj: Month = new Month(i, this.monthNames[i],year,isActive);
        this.months.push(monthObj);
          if (isActive) {
            this.selectedMonth = monthObj;
          }
      }
    }
  }
  public changeYear(v: number) {
    var da = this.currentDate;
    var curr_year = da.getFullYear() + (v);
    var gDate = new Date(curr_year, da.getMonth(), da.getDate());
    if (this.checkDateIntoIntervals(gDate)) {
      this.currentDate = gDate;
      this.getMonths();
    }
  }
  public checkDateIntoIntervals(date: Date) {
    if (this.maxDate && this.minDate) {
      if (date <= this.maxDate && date >= this.minDate) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (this.maxDate) {
      if (date <= this.maxDate) {
        return true;
      }
      else {
        return false;
      }
    }
    else if (this.minDate) {
      if (date >= this.minDate) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  public onClickedMonth(month: Month) {
    this.currentDate = new Date(month.year, month.month, 1);
    this.hideSelector();
    this.getMonths();
  }
}