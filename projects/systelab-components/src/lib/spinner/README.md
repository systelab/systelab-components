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

It is possible to define if the number is a decimal, and in this case the precision. For example:

```javascript
this.touchSpinValues = new TouchSpinValues(0, -10, 10, 2, true, 4);
```

## Properties

| Name              | Type | Default | Description                                                                                   |
|-------------------|:----:|:-------:|-----------------------------------------------------------------------------------------------|
| **spinValues**    | TouchSpinValues | | TouchSpinValues, with the current value, a min value, a max value, and an optional step value |
| **value**         | number | | Current selected value                                                                        |
| **valueStr**      | string | | Current selected value as string                                                              |
| fillUnitsWithZero | boolean or number |  | false                                                                                         | If true add a 0 in front of the value, if number add the number of 0 in front the value |
| isInGrid          | boolean | false | Set to true if it is inside a grid. Otherwise set to false                                    |
| disabled          | boolean | false | Set to true if it could not be changed. Otherwise set to false                                |
| error             | boolean | false | Set to true to display component in red                                                       |

In black the Two-Way Data Binding properties.

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| valueChange || Value has been changed.|
| change || (DEPRECATED) Value has been changed.|
