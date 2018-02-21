# systelab-week-selector

Component to show a Week Selector

## Using the component

```html
<systelab-week-selector #wselector [isDisabled]="isDisabled" [maxDate]="maxDate" [minDate]="minDate" [currentDate]="currentDate" [(selectedWeek)]="selectedWeek"></systelab-week-selector>
```

Set **isDisabled** to true, if you want to display a disabled week selector, it will displaying the week belonging to the date selected.

Set **maxDate** with the maximum date that you want to display in the selector.

Set **minDate** with the minimum date that you want to display in the selector.

Set **currentDate** with the date you want, to display the week belonging to this date, if you don't set any current date the selector will choose the actual date.


**selectedWeek** is an 'Week' object where you can retrieve the information of the selected week.
The Week object has the follow structure:
```javascript
    public week: number,    //Number of the week
    public text: string,    //Description of range of the days of the week and the number of the week
    public day: number,     //Number of the start day of the week
    public year: number,    //Number of the year
    public isActive:boolean,//If the selector is activate or disabled
```

### Translations

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