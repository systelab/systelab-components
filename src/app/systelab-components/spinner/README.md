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



