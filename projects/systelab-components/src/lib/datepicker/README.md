# systelab-datepicker

The datepicker allows users to enter a date either through text input, or by choosing a date from the calendar.

## Using the component
```
<systelab-datepicker [(currentDate)]="toDate" [error]="true" [markPreviousAfterDate]="true" [required]="true" [inputExpandHeight]="true" [inputFontSize]="true" [showTodayButton]="false"></systelab-datepicker>
```
All the input parameters are optional.

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **currentDate** | Date | | Date selected in the component |
| disabled | boolean | false | If true the component is shown disabled |
| error | boolean | false | If true the components shows the Date selected in red indicating an erroneous date |
| required | boolean | false | If true and currentDate is not set the components shows the input border in red |
| markPreviousAfterDate | boolean | false | (Deprecated, use warnDaysBefore with a value of 1 instead) If true and currentDate previous than today then the input background color is red |
| inputExpandHeight | boolean | false | If true the component expands to parent height |
| fontSize | number | | Font size in pixels |
| showTodayButton | boolean | false | Show Today button |
| inline | boolean | false | When enabled, displays the calendar as inline. Default is false for popup mode |
| minDate | Date | | The minimum selectable date |
| maxDate | Date | | The maximum selectable date |
| warnDaysBefore | number | | If set, when a date is selected the input background is set to red when that date happens before or it is exactly the same than the system's current date minus the number of days specified. |
| warnDaysAfter | number | | If set, when a date is selected the input background is set to red when that date happens after than the system's current date plus the number of days specified. |
| autofocus | boolean | false | If true the input is automatically focused |

In black the Two-Way Data Binding properties.

| |
| --- |
| For the **DatePicker-Time** component, the date's *hours* and *minutes* are modified through the spinner components. |
||
