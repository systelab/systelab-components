import { Component, EventEmitter, Input, Output } from '@angular/core';

export class WizardStep {
	step: number;
	description: string;
	optionalText?: string;
	visited: boolean;
}

@Component({
	selector:    'systelab-wizard-steps',
	templateUrl: './wizard-steps.component.html'
})
export class WizardStepsComponent {

	@Input() steps: Array<WizardStep> = [];
	@Input() roundedStep = true;
	@Input() allowNavigation = false;
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
