# systelab-numpad

Component to show a Numeric Keyboard dialog for an Input Text.

## Using the component

```html
<systelab-numpad [(value)]="value" (change)="doSelectValue($event)"></systelab-numpad>
```


## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| value | string || The value |
| isPassword | boolean | false | defines if is a password or not.|
| autofocus | boolean | false ||


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| change | string | The selected value|

