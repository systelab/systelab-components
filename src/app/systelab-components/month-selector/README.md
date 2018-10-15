# systelab-month-selector

Component to show a Month Selector

## Using the component

```html
<systelab-month-selector #wselector [disabled]="isDisabled" [maxDate]="maxDate" [minDate]="minDate" [currentDate]="currentDate"
    [(selectedMonth)]="selectedMonth">
</systelab-month-selector>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| disabled | boolean | false | Display a active or a disabled month selector |
| maxDate | Date | | Maximum date that you want to display in the selector |
| minDate | Date | | Minimum date that you want to display in the selector |
| currentDate | Date | Current Date | Used to display belongin month to the date set |
| **selectedMonth** | Month |  | The selected month |

In black the Two-Way Data Binding properties.

### Month

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| month | number |  | Number of the month |
| text | string | | Description of month selected |
| year | number | | Number of the year |
| isActive | boolean | false | If the selector is activate or disabled |

