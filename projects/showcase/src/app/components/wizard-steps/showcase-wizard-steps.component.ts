import { Component } from '@angular/core';
import { WizardStep } from 'systelab-components';

@Component({
	selector: 'showcase-wizard-steps',
	templateUrl: './showcase-wizard-steps.component.html'
})
export class ShowcaseWizardStepsComponent {
	public allowNavigation = true;
	public currentStep = 3;
	public steps: Array<WizardStep> = [];
	public roundedStep = true;
	constructor() {
		this.steps.push({ step: 1, description: 'Step 1', visited: true }, { step: 2, description: 'Step 2', visited: true, optionalText: 'Additional optional text' }, { step: 3, description: 'Step 3', visited: false }, { step: 4, description: 'Step 4', visited: false }, { step: 5, description: 'Step 5', visited: false });
	}
	public gotoStep(e) {
		console.log(e)
	}
}
