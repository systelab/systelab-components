# systelab-chip-button

Component to create a group of multiple buttons where you can select only one with the option to add more buttons or remove them.

## Using the template

```html
<systelab-chip-button  [buttonList]="buttonList" 
                       [titleDescription]="Confirmation title" 
                       [messageDescription]="'Are you sure you want to continue?'" 
                       [showAddButton]="true"
                       [showRemoveButton]="true"
                       [isDisabled]="false"></systelab-chip-button>
```

The Input isDisabled is a boolean value in order to make the component disable. By default is false.

The Input titleDescription and messageDescription are a string value in order to show a confirmation panel when you remove a button.

The Input showAddButton is a boolean value in order to show the option to add more buttons. by default is false.

If you want the defaults the template will look like:

```html
<systelab-chip-button [buttonList]="buttonList"></systelab-chip-button>
```

## Properties and Events

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| buttonList| Array  |  | Array structure must have id and description [{description: string, id: number}] |
| isDisabled | boolean | false | Set to true if it could not be changed. Otherwise set to false |
| showAddButton | boolean | true | Set to true if you want to show a add button. Otherwise set to false |
| showRemoveButton | boolean | true | Set to true if you want to show a remove button. Otherwise set to false |
| titleDescription and messageDescription | string |  | Set the values if you want to show a confirmation message. Otherwise do not configure them |

The styles are defined in the button.scss Saas file.

