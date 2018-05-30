import { Component, Input, Output, EventEmitter } from '@angular/core';
export class StepWizard {
	num: number;
	text: string;
	viewed: boolean;
}
@Component({
	selector: 'systelab-wizard-steps',
	templateUrl: './wizard-steps.component.html',
	styleUrls: ['./wizard-steps.component.scss']
})
export class WizardStepsComponent {

	@Input() steps: Array<StepWizard> = [];
	@Input() circleSteps: boolean;
	@Input() allowNavigation: boolean;
	private _currentStep = 1;
	@Input()
	get currentStep(): number {
		return this._currentStep;
	}

	@Output() currentStepChange = new EventEmitter();

	set currentStep(value: number) {
		this._currentStep = value;
		this.currentStepChange.emit(this._currentStep);
	}
	@Output() action = new EventEmitter();

	public doAction(step) {
		this.action.emit(step);
	}

	constructor() {
	}
}
