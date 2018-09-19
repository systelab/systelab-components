# systelab-slider

Component to select a numerical value inside a range.

## Using the template

```html
<systelab-slider [(value)]="value" [min]="1" [max]="10" [step]="1" [continuous]="true"></systelab-slider>
```

If you want the defaults the template will look like:

```html
<systelab-slider [(value)]="value"></systelab-slider>
```


## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **value** | number || Identifier |
| min | number | 0 | Starting value |
| max | number | 100 | Last value |
| step | number | 1 | Number of values to step |
| continuous | boolean | true | A boolean value in order to get changes while dragging the thumb. If it is not true you will get the changes at the end.|


In black the Two-Way Data Binding properties.


The styles for the slider and the thumb are defined in the slider.scss Saas file.
