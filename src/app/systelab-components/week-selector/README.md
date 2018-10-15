# systelab-week-selector

Component to show a Week Selector

## Using the component

```html
<systelab-week-selector #wselector [disabled]="isDisabled" [maxDate]="maxDate" [minDate]="minDate" [currentDate]="currentDate" [(selectedWeek)]="selectedWeek"></systelab-week-selector>
```
## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| disabled | boolean | false | Display a active or a disabled week selector |
| maxDate | Date | | Maximum date that you want to display in the selector |
| minDate | Date | | Minimum date that you want to display in the selector |
| currentDate | Date | Current Date | Used to display belongin week to the date set |
| **selectedWeek** | Week |  | The selected week |

In black the Two-Way Data Binding properties.

#### Month

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| week | number |  | Number of the week |
| text | string | | Description of range of the days of the week and the number of the week |
| day | number | | Number of the start day of the week |
| year | number | | Number of the year |
| isActive | boolean | false | If the selector is activate or disabled |


## Translations

The component use the **i18nService** to retrieve the names of the months, but there are no implementation to retrieve the names of the week days and other strings.
Then you need to include in your translation file the following translations:

- COMMON_SUNDAY
- COMMON_MONDAY
- COMMON_TUESDAY
- COMMON_WEDNESDAY
- COMMON_THURSDAY
- COMMON_FRIDAY
- COMMON_SATURDAY
- COMMON_WEEK
- COMMON_TO
