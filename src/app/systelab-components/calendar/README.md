# systelab-calendar-header, systelab-calendar-table

Components to create a custom calendar

## Using the templates

```
<systelab-calendar-header [currentDate]="currentDate" [locale]="locale"
                          (previousYear)="changeYear(-1)" (previousMonth)="changeMonth(-1)"
                          (nextMonth)="changeMonth(1)" (nextYear)="changeYear(1)">
</systelab-calendar-header>

<systelab-calendar-table [currentDate]="currentDate" [locale]="locale" [days]="days"></systelab-calendar-table>
```

The interesting thing here, is that you can specify a custom template for systelab-calendar-table in order to render a component for each day. For example:
```
<systelab-calendar-table  #calendar class="uk-flex-item-1" [currentDate]="currentDate" [locale]="locale" [days]="days">
        <ng-template let-daySlot="daySlot">
            <a [ngClass]="{'is-holiday': daySlot.isHoliday,'disable-link':daySlot.isDisabled}" (click)="selectDaySlot(daySlot)">
                {{daySlot.day}}
            </a>
            <div *ngIf="!daySlot.isHoliday" class="buttons">
                <button class="button1" (click)="doSomething(daySlot)"></button>
            </div>
        </ng-template>
    </systelab-calendar-table>
```

As you see, an object satisfaying the DaySlot is provided.

With this two components you can create your own calendars. A dialog example is provided in the file calendar-dialog.component.ts

In order to show the dialog you could:

```
const parameters: CalendarDialogParameters = CalendarDialog.getParameters();
this.dialogService.showDialog(CalendarDialog, parameters);
```
