# systelab-percentage-circle

Component to show a percentage indicator.

## Using the template

```html
<systelab-percentage-circle [value]="55" [text]="'completed'" [color]="'red'"></systelab-percentage-circle>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| value | number || The value should be between 0 and 100. |
| text | string || Percentage description. |
| color | string || Indicator color. Use any html valid color. |


The styles for the percentage circle are defined in the percentage-circle.scss Saas file.
