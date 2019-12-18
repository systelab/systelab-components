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


## Properties


The properties for the systelab-calendar-table are:

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| currentDate | Date || A date in the month to render. |
| days | Array&lt;DaySlot&gt; || An array of DaySlot objects representing each day of the month in order to override the standard ones (that is with isHoliday equals false).|
| useLongDays | boolean || A boolean to determine if we have to use long or short values in header cells. By default, we use short values.|

The currentDate property applies also to systelab-calendar-header.

The days input is used to set a DaySlot array of elements. For example:

```javascript
returnedDays.push({date: new Date(2017, 10, 25), day: 25, isHoliday: true});
returnedDays.push({date: new Date(2017, 10, 26), day: 26, isHoliday: true});
```
DaysSlot is an interface with three properties: An attribute date of type Date, an atribute day (that is the day number) and a boolean attribute isHoliday to set if the day is holiday.

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

As you see, an object satisfying the DaySlot is provided.

With this two components you can create your own calendars. A dialog example is provided in the file calendar-dialog.component.ts

In order to show that dialog you should add:

```javascript
this.dialogService.showDialog(CalendarDialog, CalendarDialog.getParameters());
```

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| previousYear || User wants to go to the previous year.|
| nextYear || User wants to go to the next year.|
| previousMonth || User wants to go to the previous month.|
| nextMonth || User wants to go to the next month.|

