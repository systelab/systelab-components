# systelab-date-range-picker

The date range picker allows users to select a range of dates by selecting the first and the last date.

## Using the component
```
<systelab-date-range-picker [(fromDate)]="fromDate" [(toDate)]="toDate"></systelab-date-range-picker>
```
All the input parameters are optional.

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **fromDate** | Date | | First date |
| **toDate** | Date | | Last date |
| minDate | Date | | Minimum selectable date |
| maxDate | Date | | Maximum selectable date |
| disabled | boolean | false | If true the component is shown disabled |


In black the Two-Way Data Binding properties.
