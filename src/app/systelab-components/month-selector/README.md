# systelab-month-selector

Component to show a Month Selector

## Using the component

```html
<systelab-month-selector #wselector [isDisabled]="isDisabled" [maxDate]="maxDate" [minDate]="minDate" [currentDate]="currentDate"
    [(selectedMonth)]="selectedMonth">
</systelab-month-selector>
```

Set **isDisabled** to true, if you want to display a disabled month selector, it will displaying the month belonging to the date selected.

Set **maxDate** with the maximum date that you want to display in the selector.

Set **minDate** with the minimum date that you want to display in the selector.

Set **currentDate** with the date you want, to display the month belonging to this date, if you don't set any current date the selector will choose the actual date.


**selectedMonth** is an 'Month' object where you can retrieve the information of the selected month.

The Month object has the follow structure:

```javascript
    public month: number,    //Number of the month
    public text: string,    //Description of month selected
    public year: number,    //Number of the year
    public isActive:boolean,//If the selector is activate or disabled
```
