import { Component } from '@angular/core';
import { StepWizard } from '../../../systelab-components/wizard-steps/wizard-steps.component';

@Component({
	selector: 'showcase-wizard-steps',
	templateUrl: './showcase-wizard-steps.component.html'
})
export class ShowcaseWizardStepsComponent {
	public allowNavigation = true;
	public currentStep = 3;
	public steps: Array<StepWizard> = [];
	public circleSteps = false;
	constructor() {
		this.steps.push({ num: 1, text: 'Step 1', viewed: true }, { num: 2, text: 'Step 2', viewed: true }, { num: 3, text: 'Step 3', viewed: false }, { num: 4, text: 'Step 4', viewed: false }, { num: 5, text: 'Step 5', viewed: false });
	}
	public goStep(e) {
		console.log(e)
	}
}
