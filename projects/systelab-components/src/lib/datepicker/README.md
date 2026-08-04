# systelab-datepicker

The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar.

It has no third party dependency: the calendar itself is the `systelab-datepicker-calendar` component
(`DatepickerCalendarComponent`), written with plain Angular and TypeScript, and `systelab-datepicker` adds on top of it
the systelab look, the relative date shortcuts (`3d`, `-2w`, `1m`, ...), the loose date inference (`011219`) and the
warning states. `systelab-date-time` adds the hour/minute spinners.

Every CSS class uses the `slab-` prefix of the library (`slab-datepicker-panel`, `slab-datepicker-day-cell`,
`slab-datepicker-day`, `slab-datepicker-day-selected`, `slab-datepicker-today`, `slab-datepicker-other-month`,
`slab-datepicker-time-picker`, ...). The `p-datepicker-*` names of the previous PrimeNG based implementation no longer
exist: see the root `README.md` for the full mapping.

## Using the component
```
<systelab-datepicker [(currentDate)]="toDate" [error]="true" [markPreviousAfterDate]="true" [required]="true" [inputExpandHeight]="true" [inputFontSize]="true" [showTodayButton]="false"></systelab-datepicker>
```
All the input parameters are optional.

## Properties

| Name                     |   Type   |  Default  | Description |
|--------------------------|:--------:|:---------:| ----------- |
| **currentDate**          |   Date   |           | Date selected in the component |
| disabled                 | boolean  |   false   | If true the component is shown disabled |
| error                    | boolean  |   false   | If true the components shows the Date selected in red indicating an erroneous date |
| required                 | boolean  |   false   | If true and currentDate is not set the components shows the input border in red |
| markPreviousAfterDate    | boolean  |   false   | (Deprecated, use warnDaysBefore with a value of 1 instead) If true and currentDate previous than today then the input background color is red |
| inputExpandHeight        | boolean  |   false   | If true the component expands to parent height |
| fontSize                 |  number  |           | Font size in pixels |
| showTodayButton          | boolean  |   false   | Show Today button |
| inline                   | boolean  |   false   | When enabled, displays the calendar as inline. Default is false for popup mode |
| minDate                  |   Date   |           | The minimum selectable date |
| maxDate                  |   Date   |           | The maximum selectable date |
| warnDaysBefore           |  number  |           | If set, when a date is selected the input background is set to red when that date happens before or it is exactly the same than the system's current date minus the number of days specified. |
| warnDaysAfter            |  number  |           | If set, when a date is selected the input background is set to red when that date happens after than the system's current date plus the number of days specified. |
| autofocus                | boolean  |   false   | If true the input is automatically focused |
| fromDateForRelativeDates |   date   | undefined | Date to be used as from date to calculate the new date when using the shortcuts (ie. 3d)
| withIntegratedTime       | boolean  |   false   | If true, it will be used the time component integrated in calendar instead of the spinner components
| onlyTime                 | boolean  |   false   | If true, only the timepicker integrated is shown instead of calendar, else is shown the calendar with the time
| showOtherMonths          | boolean  |   true    |	Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
| selectOtherMonths        | boolean  |   false   |	Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
| dateFormat               | string   |           |	Format of the date which can also be defined at locale settings.
| keepInvalid | boolean | false | Keeps invalid date input without clearing the field 

In black the Two-Way Data Binding properties.

### dateFormat
The default value is retrieved from the translation system (language). In case of entering a format, it gives priority to this value and ignores that of the translation system. Following options can be a part of the format.
*   d  ->  day of month (no leading zero)
*   dd  ->  day of month (two digit)
*   o  ->  day of the year (no leading zeros)
*   oo  ->  day of the year (three digit)
*   D  ->  day name short
*   DD  ->  day name long
*   m  ->  month of year (no leading zero)
*   mm  ->  month of year (two digit)
*   M  ->  month name short
*   MM  ->  month name long
*   y  ->  year (two digit)
*   yy  ->  year (four digit)
*   @  ->  Unix timestamp (ms since 01/01/1970)
*   !  ->  Windows ticks (100ns since 01/01/0001)
*   '...'  ->  literal text
*   ''  ->  single quote
*   anything else  ->  literal text

| |
| --- |
| For the **DatePicker-Time** component, the date's *hours* and *minutes* are modified through the spinner components. |
||

## Using the time date picker time
```
            <systelab-date-time
                    [showCalendar]="false"
                    [(currentDate)]="myDate">
            </systelab-date-time>
```

## Properties time date picker time

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **currentDate** | Date | | Date selected in the component |
| disabled | boolean | false | If true the component is shown disabled |
| resetTimeWhenChangingCurrentDate | boolean | false | If true the time is reset when day calendar changes |
| showCalendar | boolean | true | If true the calendar is showed else only timepicker is showed |

## systelab-datepicker-calendar

The calendar widget used by the two components above. It is exported for reuse, but applications are expected to use
`systelab-datepicker` / `systelab-date-time`, which add the systelab behaviour on top of it.

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| dateFormat | string | mm/dd/yy | Date format, with the tokens listed above |
| firstDayOfWeek | number | 0 | First day of the week shown in the grid (0 = Sunday) |
| translations | DatePickerTranslations | English names | `dayNames`, `dayNamesShort`, `dayNamesMin`, `monthNames`, `monthNamesShort` used to render, format and parse |
| inline | boolean | false | Renders the calendar without input, always visible |
| disabled | boolean | false | Disables the input and the calendar |
| required | boolean | false | Sets the input as required |
| readonlyInput | boolean | false | Sets the input as read only (used on tablets) |
| keepInvalid | boolean | false | Keeps the typed text when it cannot be parsed |
| showOtherMonths | boolean | true | Renders the days of the previous/next month |
| selectOtherMonths | boolean | false | Makes those days selectable |
| showTime | boolean | false | Shows an hour/minute picker below the grid |
| timeOnly | boolean | false | Shows only the hour/minute picker |
| minDate / maxDate | Date | | Selectable range |
| disabledDates | Array&lt;Date&gt; | | Individual dates that cannot be selected |
| disabledDays | Array&lt;number&gt; | | Week days (0-6) that cannot be selected |
| tabindex | number | 0 | Tab index of the input |
| autofocus | boolean | false | Focuses the input once rendered |
| icon | string | | Class of the icon rendered inside the input (`icon-calendar`, `icon-clock`) |
| inputId | string | | Id set on the input |
| headerTemplate / footerTemplate | TemplateRef | | Templates rendered at the top and at the bottom of the panel |

Outputs: `onFocus`, `onBlur`, `onSelect`, `onInput`, `onClear`, `onMonthChange`, `onYearChange`. The value is exposed
through `ngModel` (the component is a `ControlValueAccessor`).

The component is signal based and runs with `OnPush`: the inputs above and its state (`value`, `currentMonth`,
`currentYear`, `currentHour`, `currentMinute`, `overlayVisible`) are properties backed by signals, and `months`,
`weekDays`, `hourDisplay`, `minuteDisplay` and `inputFieldValue` are derived from them with `computed()`. Assigning any
of them from code (`calendar.minDate = …`) is reactive as well, so there is nothing to invalidate or mark for check.
