# systelab-slider-double-range

Component that allows to select a range of values with double input.

## Using the template

```html
<systelab-slider-double-range 
        [(minValue)]="startValue"
        [(maxValue)]="endValue"
        [min]="0"
        [max]="200"
        [step]="1"
        name="sliderDouble">
</systelab-slider-double-range>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **minValue** | number || Identifier |
| **maxValue** | number || Identifier |
| min | number | 0 | Starting value |
| max | number | 200 | Last value |
| step | number | 1 | Number of values to step |



Two-Way Data Binding properties: 

**minValue**

**maxValue**

The minValue cannot exceed the maxValue and the other way around. This is controlled programmatically in the corresponding component.

The styles for the slider and the thumb are defined in the _slider-double-range.scss file.