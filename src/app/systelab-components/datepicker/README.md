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
| markPreviousAfterDate | boolean | false | If true and currentDate previous than today then the input background color is red |
| inputExpandHeight | boolean | false | If true the component expands to parent height |
| fontSize | number | | Font size in pixels |
| showTodayButton | boolean | false | Show Today button |

In black the Two-Way Data Binding properties.

For the DatePicker-Time, consider also the following properties:

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **currentHours** | Date | | Hours selected in the component |
| **currentMinutes** | Date | | Minutes selected in the component |

In black the Two-Way Data Binding properties.