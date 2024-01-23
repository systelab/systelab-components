# systelab-numpad

Component to show a Numeric Keyboard dialog for an Input Text.

## Using the component

```html
<systelab-numpad [(value)]="value" (change)="doSelectValue($event)"></systelab-numpad>
```


## Properties

| Name               |  Type   | Default | Description                        |
|--------------------|:-------:|:-------:|------------------------------------|
| value              | string  |         | The value                          |
| isPassword         | boolean |  false  | defines if is a password or not.   |
| autofocus          | boolean |  false  |                                    |
| placeholder        | string  |  empty  |                                    |
| onClickSelectValue | boolean |  false  | defines if selects on click or not |


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| change | string | The selected value|

## Methods

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| focus |  | Put the focus on the numpad input|
| blur |  | Remove the focus on the numpad input|
