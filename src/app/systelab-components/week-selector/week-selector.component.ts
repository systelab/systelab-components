import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { I18nService } from 'systelab-translate/lib/i18n.service';
export class Week {
  constructor(public week: number, public text: string, public day: number, public month: number, public year: number, public isActive: boolean) {
  }
}
class Month {
  constructor(public month: number, public text: string, public year: number, public isActive: boolean) {
  }
}

@Component({
  selector: 'systelab-week-selector',
  templateUrl: './week-selector.component.html'
})
export class WeekSelectorComponent implements AfterViewInit {

  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public currentDate: Date;
  @Input() public isDisabled: boolean;

  private _selectedWeek: Week;
  @Input()
  get selectedWeek(): Week {
    return this._selectedWeek;
  }
  @Output() public selectedWeekChange = new EventEmitter();

  set selectedWeek(value: Week) {
    this._selectedWeek = value;
    this.selectedWeekChange.emit(this._selectedWeek);
  }

  public weeks: Array<Week> = [];
  public months: Array<Month> = [];
  public isOpened: boolean = false;
  public monthNames = [];
  public daysNames = [];

  constructor(private i18nService: I18nService) {
    var year = new Date();
    for (var i = 1; i <= 12; i++) {
      var month = this.i18nService.formatMonthAndYear(new Date(i + "/01/" + year.getFullYear())).split(',');
      this.monthNames.push(month[0]);
    }
    this.daysNames.push(this.i18nService.instant("COMMON_SUNDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_MONDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_TUESDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_WEDNESDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_THURSDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_FRIDAY"));
    this.daysNames.push(this.i18nService.instant("COMMON_SATURDAY"));
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
        this.months.push({ month: i, year: year, text: this.monthNames[i], isActive: isActive });
      }
    }

    this.getWeeks();
  }
  public getWeeks() {
    this.weeks = [];
    var monthWeeksActive = this.months[this.currentDate.getMonth()].month;
    var yearActive = this.months[this.currentDate.getMonth()].year;
    var g = this.getWeeksStartAndEndInMonth(monthWeeksActive, yearActive, 'm', 1);
    var week = this.getWeek(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate());
    for (var i = 0; i < g.length - 1; i++) {
      var isActive = false;
      var d = new Date(yearActive, monthWeeksActive, g[i].start, 0, 0, 0, 0);
      if (this.checkDateIntoIntervals(d)) {
        var dend = new Date(yearActive, monthWeeksActive, g[i].end, 0, 0, 0, 0);
        var text = this.i18nService.instant("COMMON_WEEK") + " " + g[i].number + ": " + this.daysNames[d.getDay()] + " " + g[i].start + " " + this.i18nService.instant("COMMON_TO") + " " + this.daysNames[dend.getDay()] + " " + g[i].end;
        if (g[i].number === week) {
          isActive = true;
        }
        var weekObj: Week = new Week(g[i].number, text, g[i].start, monthWeeksActive, yearActive, isActive);
        this.weeks.push(weekObj);
        if (isActive) {
          this.selectedWeek = weekObj;
        }
      }

    }
  }
  public onClickedWeek(week: Week) {
    this.currentDate = new Date(week.year, week.month, week.day);
    this.hideSelector();
    this.getWeeks();
  }
  public onClickedMonth(month: Month) {
    this.currentDate = new Date(month.year, month.month, 1);
    this.getMonths();
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
  public changeMonth(v: number) {
    var da = this.currentDate;
    var curr_month = da.getMonth() + (v);
    var gDate = new Date(da.getFullYear(), curr_month, da.getDate());
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
  public getWeeksStartAndEndInMonth(month: number, year: number, start: string, st: number) {
    let w = [],
      firstDate = new Date(year, month, 1),
      lastDate = new Date(year, month + 1, 0),
      numDays = lastDate.getDate();
    st = 1;
    let end = 7 - firstDate.getDay();
    if (start === 'm') {
      if (firstDate.getDay() === 0) {
        end = 1;
      } else {
        end = 7 - firstDate.getDay() + 1;
      }
    }
    while (st <= numDays) {
      if (st == 1) {
        w.push({ start: st, end: end, number: this.getWeek(year, month, st) });
      }
      st = end + 1;
      end = end + 7;
      end = st === 1 && end === 8 ? 1 : end;
      if (end > numDays) {
        end = numDays;
      }
      w.push({ start: st, end: end, number: this.getWeek(year, month, st) });
    }
    return w;
  }

  public getWeek(year, month, day) {
    month += 1;//use 1-12
    var a = Math.floor((14 - (month)) / 12);
    var y = year + 4800 - a;
    var m = (month) + (12 * a) - 3;
    var jd = day + Math.floor(((153 * m) + 2) / 5) +
      (365 * y) + Math.floor(y / 4) - Math.floor(y / 100) +
      Math.floor(y / 400) - 32045;  // (gregorian calendar)
    var d4 = (jd + 31741 - (jd % 7)) % 146097 % 36524 % 1461;
    var l = Math.floor(d4 / 1460);
    var d1 = ((d4 - l) % 365) + l;
    var numberOfWeek = Math.floor(d1 / 7) + 1;
    return numberOfWeek;
  }

}
