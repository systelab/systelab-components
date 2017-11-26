# systelab-spinner

Component to select a numerical value inside a range.

## Using the template

```
<systelab-spinner id="touch" [spinValues]="touchSpinValues"></systelab-spinner>
```
where touchSpinValues is an instance of TouchSpinValues, with the current value, a min value, a max value, and and optional step value. For example:

```
this.touchSpinValues = new TouchSpinValues(0, -10, 10, 2);
```



