# systelab-slider

Component to select a numerical value inside a range.

## Using the template

```
<systelab-slider [(value)]="value" [min]="1" [max]="10" [step]="1" [continuous]="true"></systelab-switch>
```

The Input continuous is a boolean value in order to get changes while dragging the thumb. If it is not true you will get the changes at the end.

By default min is 0, max is 100, step is 1 and continuous is true. If you want the defaults the template will look like:

```
<systelab-slider [(value)]="value"></systelab-switch>
```

The styles for the slider and the thumb are defined in the slider.scss Saas file.