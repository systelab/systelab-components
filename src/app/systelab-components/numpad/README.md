# systelab-numpad

Component to show a Numeric Keyboard dialog for an Input Text.

## Using the component

```html
<systelab-numpad [numpadValue]="value" (numpadValueEnter)="doSelectValue($event)"></systelab-numpad>
```


## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| numpadValue | string || The value |
| isPassword | boolean | false | defines if is a password or not.|
| autofocus | boolean | false ||


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| numpadValueEnter | string | The selected value|

