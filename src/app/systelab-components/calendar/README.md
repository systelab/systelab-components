# systelab-calendar-header, systelab-calendar-table

Components to create a custom calendar

## Using the templates

```html
<systelab-calendar-header [currentDate]="currentDate"
                          (previousYear)="changeYear(-1)" (previousMonth)="changeMonth(-1)"
                          (nextMonth)="changeMonth(1)" (nextYear)="changeYear(1)">
</systelab-calendar-header>

<systelab-calendar-table [currentDate]="currentDate" [days]="days"></systelab-calendar-table>
```
In both cases currentDate is a date in the month to render.
The days input is used to set a DaySlot array of elements in order to override the standard ones (that is with isHoliday equals false). For example:

```javascript
returnedDays.push({date: new Date(2017, 10, 25), day: 25, isHoliday: true});
returnedDays.push({date: new Date(2017, 10, 26), day: 26, isHoliday: true});
```

The interesting thing here, is that you can specify a custom template for systelab-calendar-table in order to render a component for each day. For example:

```html
<systelab-calendar-table  #calendar class="h-100" [currentDate]="currentDate" [locale]="locale" [days]="days">
        <ng-template let-daySlot="daySlot">
            <a [ngClass]="{'is-holiday': daySlot.isHoliday,'disable-link':daySlot.isDisabled}" (click)="selectDaySlot(daySlot)">
                {{daySlot.day}}
            </a>
            <div *ngIf="!daySlot.isHoliday" class="buttons">
                <button type="button" class="button1" (click)="doSomething(daySlot)"></button>
            </div>
        </ng-template>
</systelab-calendar-table>
```

As you see, an object satisfaying the DaySlot is provided.

With this two components you can create your own calendars. A dialog example is provided in the file calendar-dialog.component.ts

In order to show the dialog you could:

```javascript
const parameters: CalendarDialogParameters = CalendarDialog.getParameters();
this.dialogService.showDialog(CalendarDialog, parameters);
```
