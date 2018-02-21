import {Component, ViewChild} from '@angular/core';
import {WeekSelectorComponent, Week} from '../../../systelab-components/week-selector/week-selector.component';
@Component({
  selector: 'showcase-week-selector',
  templateUrl: './showcase-week-selector.component.html'
})
export class ShowcaseWeekSelectorComponent {
  public maxDate: Date;
  public minDate: Date;
  public currentDate: Date;
  public isDisabled: boolean;
  public selectedWeek: Week = new Week(0, '', 0, 0, 0, false);
  constructor() {
    this.currentDate = new Date();
    this.maxDate = new Date(2018, 10, 20);
    this.minDate = new Date(2016, 0, 20);
    this.isDisabled = false;
  }
}