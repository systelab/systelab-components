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
  public isOpened = false;
  public monthNames = [];
  public daysNames = [];

  constructor(private i18nService: I18nService) {
    const year = new Date();
    for (let i = 1; i <= 12; i++) {
      const month = this.i18nService.formatMonthAndYear(new Date(i + '/01/' + year.getFullYear())).split(',');
      this.monthNames.push(month[0]);
    }
    this.daysNames.push(this.i18nService.instant('COMMON_SUNDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_MONDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_TUESDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_WEDNESDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_THURSDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_FRIDAY'));
    this.daysNames.push(this.i18nService.instant('COMMON_SATURDAY'));
  }

  public ngAfterViewInit(): void {
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
    const idmonth = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    for (let i = 0; i < this.monthNames.length; i++) {
      const d = new Date(year, i + 1, 1, 0, 0, 0, 0);
      if (this.checkDateIntoIntervals(d)) {
        const isActive = i === idmonth ? true : false;
        this.months.push({ month: i, year: year, text: this.monthNames[i], isActive: isActive });
      }
    }

    this.getWeeks();
  }
  public getWeeks() {
    this.weeks = [];
    const monthWeeksActive = this.months[this.currentDate.getMonth()].month;
    const yearActive = this.months[this.currentDate.getMonth()].year;
    const weekInfo = this.getWeeksInMonth(monthWeeksActive, yearActive);
    const week = this.getWeek(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), true);
    for (let i = 0; i < weekInfo.length - 1; i++) {
      let isActive = false;
      const dateStart = new Date(yearActive, monthWeeksActive, weekInfo[i].start, 0, 0, 0, 0);
      if (this.checkDateIntoIntervals(dateStart)) {
        const dateEnd = new Date(yearActive, monthWeeksActive, weekInfo[i].end, 0, 0, 0, 0);
        const text = this.i18nService.instant('COMMON_WEEK') + ' ' + weekInfo[i].number + ': ' + this.daysNames[dateStart.getDay()] + ' ' + weekInfo[i].start + ' ' + this.i18nService.instant('COMMON_TO') + ' ' + this.daysNames[dateEnd.getDay()] + ' ' + weekInfo[i].end;
        if (weekInfo[i].number === week) {
          isActive = true;
        }
        const weekObj: Week = new Week(weekInfo[i].number, text, weekInfo[i].start, monthWeeksActive, yearActive, isActive);
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
    const newDate = new Date(this.currentDate.getFullYear() + (v), this.currentDate.getMonth(), this.currentDate.getDate());
    if (this.checkDateIntoIntervals(newDate)) {
      this.currentDate = newDate;
      this.getMonths();
    }
  }
  public changeMonth(v: number) {
    const curr_month = this.currentDate.getMonth() + (v);
    const newDate = new Date(this.currentDate.getFullYear(), curr_month, this.currentDate.getDate());
    if (this.checkDateIntoIntervals(newDate)) {
      this.currentDate = newDate;
      this.getMonths();
    }
  }
  public checkDateIntoIntervals(date: Date) {
    if (this.minDate && this.maxDate) {
      if (date >= this.minDate && date <= this.maxDate) { return true; }
      else { return false; }
    }
    else if (this.minDate) {
      if (date >= this.minDate) { return true; }
      else { return false; }
    }
    else if (this.maxDate) {
      if (date <= this.maxDate) { return true; }
      else { return false; }
    }
    else {
      return true;
    }
  }
  // TODO: Move to Translate Library
  public getWeeksInMonth(monthActual: number, yearActual: number) {
    const firstDate = new Date(yearActual, monthActual, 1),
      lastDate = new Date(yearActual, monthActual + 1, 0),
      numDays = lastDate.getDate(),
      weeks = [];
    let endDay = 7 - firstDate.getDay(),
      startDay = 1;
    if (firstDate.getDay() === 0) {
      endDay = 1;
    } else {
      endDay = 7 - firstDate.getDay() + 1;
    }
    while (startDay <= numDays) {
      if (startDay === 1) {
        weeks.push({ start: startDay, end: endDay, number: this.getWeek(yearActual, monthActual, startDay, true) });
      }
      startDay = endDay + 1;
      endDay = endDay + 7;
      endDay = startDay === 1 && endDay === 8 ? 1 : endDay;
      if (endDay > numDays) {
        endDay = numDays;
      }
      weeks.push({ start: startDay, end: endDay, number: this.getWeek(yearActual, monthActual, startDay, true) });
    }
    return weeks;
  }
  // TODO: Move to Translate Library
  public getWeek(yearActual, monthActual, dayActual, isGregorian) {
    monthActual += 1; // use 1-12
    const binaryMod = Math.floor((14 - (monthActual)) / 12), // Only can have as result 1 or 0
      yearValue = yearActual + 4800 - binaryMod,
      monthValue = (monthActual) + (12 * binaryMod) - 3;
    // Find JulianDay
    let julianday = 0;
    if (isGregorian) {
      julianday = dayActual + Math.floor(((153 * monthValue) + 2) / 5) +
        (365 * yearValue) + Math.floor(yearValue / 4) - Math.floor(yearValue / 100) +
        Math.floor(yearValue / 400) - 32045;  // (gregorian calendar)
    }
    else {
      julianday = (dayActual + 1) + Math.round(((153 * monthValue) + 2) / 5) + (365 + yearValue) +
        Math.round(yearValue / 4) - 32083;    // (julian calendar)
    }
    // now calc weekNumber according to Julian Day
    const d4 = (julianday + 31741 - (julianday % 7)) % 146097 % 36524 % 1461;
    const l = Math.floor(d4 / 1460);
    const totalDays = ((d4 - l) % 365) + l;
    const weekNumber = Math.floor(totalDays / 7) + 1;
    return weekNumber;
  }
}
