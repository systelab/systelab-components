# systelab-wizard-steps

Component to show a Steps of a wizard

## Using the component

```html
<systelab-wizard-steps [allowNavigation]="allowNavigation" [steps]="steps" [(currentStep)]="'1'" (action)="gotoStep($event)" [roundedStep]="roundedStep"></systelab-wizard-steps>
```


## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **currentStep** | number || The current step number. |
| allowNavigation | boolean | false | Set to let the user click on a previous step. |
| roundedStep | boolean | false | Set to change the step style to be rounded.|
| steps | Array&lt;WizardStep&gt; || An array of steps for the Wizard |

In black the Two-Way Data Binding properties.


The WizardStep class has the following properties:

| Name | Type | Description |
| ---- |:----------:| ------------|
| step | number |Number of the step|
| description | string |Description of the step|
| visited | boolean |True if the step has been visited|


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| action | string |The event when is allowed the navigation and click on the step.|