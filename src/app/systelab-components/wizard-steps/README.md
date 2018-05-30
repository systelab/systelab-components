# systelab-wizard-steps

Component to show a Steps of a wizard

## Using the component

```html
<systelab-wizard-steps class="w-100" [allowNavigation]="allowNavigation" [steps]="steps" [(currentStep)]="'1'" (action)="goStep($event)" [circleSteps]="circleSteps"></systelab-wizard-steps>
```

Set **allowNavigation** to true, if you want to allow navigation clicking in the previous steps.

Set **currentStep** to define the number of the current step.

**action** is the event when is allowed the navigation and click on the step.

Set **circleSteps** to true if you want a circle style.

**steps** is a list of 'StepWizard' objects.

The StepWizard object has the following structure:

```javascript
    public num: number,    //Number of the step
    public text: string,    //Description of teh step
    public viewed: boolean,     //if the step was viewed or not.
```
