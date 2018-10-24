# systelab-spinner

Component to select a numerical value inside a range.

## Using the template

```html
<systelab-spinner id="touch" [spinValues]="touchSpinValues" [disabled]="true"></systelab-spinner>
```
where touchSpinValues is an instance of TouchSpinValues, with the current value, a min value, a max value, and an optional step value. For example:

```javascript
this.touchSpinValues = new TouchSpinValues(0, -10, 10, 2);
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **spinValues** | TouchSpinValues | | TouchSpinValues, with the current value, a min value, a max value, and an optional step value |
| **value** | number | | Current selected value |
| **valueStr** | string | | Current selected value as string |
| fillUnitsWithZero | boolean | false | Add a 0 in front of the value |
| isInGrid | boolean | false | Set to true if it is inside a grid. Otherwise set to false |
| disabled | boolean | false | Set to true if it could not be changed. Otherwise set to false |

In black the Two-Way Data Binding properties.

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| change || Value has been changed.|
