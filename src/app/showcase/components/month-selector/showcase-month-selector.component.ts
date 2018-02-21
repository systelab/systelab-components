import {Component} from '@angular/core';
import {MonthSelectorComponent, Month} from '../../../systelab-components/month-selector/month-selector.component';
@Component({
  selector: 'showcase-month-selector',
  templateUrl: './showcase-month-selector.component.html'
})
export class ShowcaseMonthSelectorComponent{
  public maxDate: Date;
  public minDate: Date;
  public currentDate: Date;
  public isDisabled: boolean;
  public selectedMonth: Month = new Month(0, '', 0, false);
  constructor() {
    this.currentDate = new Date();
    this.maxDate = new Date(2018, 10, 20);
    this.minDate = new Date(2016, 0, 20);
    this.isDisabled = false;
  }
}