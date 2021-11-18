# systelab-button

Component to trigger an action. You can 

## Using the template

```html
<systelab-button [type]="'primary'" [small]="true" [disabled]="true" (action)="doClick($event)"></systelab-button>
```

The Input type is a string value in order to define the kind of button: primary, danger, success and link .
The Input small is a boolean value in order to make the component small. By default is false.
The Input disabled is a boolean value in order to make the component disable. By default is false.

If you want the defaults the template will look like:

```html
<systelab-button (action)="doClick($event)"></systelab-button>
```


## Properties and Events

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| type | string | regular | Possible values: regular, primary, danger, success and link |
| small | string | medium | Possible values: small, medium, large |
| disabled | boolean | false | Set to true if it could not be pressed. Otherwise set to false |


