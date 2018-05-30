# systelab-wizard-steps

Component to show a Steps of a wizard

## Using the component

```html
<systelab-wizard-steps class="w-100" [allowNavigation]="allowNavigation" [steps]="steps" [(currentStep)]="'1'" (action)="gotoStep($event)" [roundedStep]="roundedStep"></systelab-wizard-steps>
```

Set **allowNavigation** to true, if you want to let the user click on a previous step.

Set **currentStep** to define the number of the current step.

**action** is the event when is allowed the navigation and click on the step.

Set **roundedStep** to true if you want a rounded style.

**steps** is a list of 'WizardStep' objects.

The WizardStep object has the following structure:

```javascript
    public step: number,    //Number of the step
    public description: string,    //Description of teh step
    public visited: boolean,     //if the step was visited or not.
```
