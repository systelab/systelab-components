# systelab-button

Component to trigger an action. You can 

## Using the template

```html
<systelab-button type="primary" [size]="small" disabled="true" (action)="doClick($event)"></systelab-button>
```

The Input type is a string value in order to define the kind of button: regular, primary, warning, danger, success and link .
The Input size is a string value in order to define the component size: slamm, medium, large.
The Input disabled is a boolean value in order to make the component disabled. By default is false.

If you want the defaults the template will look like:

```html
<systelab-button (action)="doClick($event)"></systelab-button>
```


## Properties and Events

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| type | string | regular | Possible values: regular, primary, warning danger, success and link |
| size | string | medium | Possible values: small, medium, large |
| disabled | boolean | false | Set to true if it could not be pressed. Otherwise set to false |


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| action | Events | Emits an event everytime the element is clicked.|

