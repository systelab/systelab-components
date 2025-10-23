import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WizardStep, WizardStepsComponent } from './wizard-steps.component';

@Component({
    selector: 'systelab-wizard-steps-test',
    template: `
                <div>
                    <systelab-wizard-steps [allowNavigation]="allowNavigation" [steps]="steps"
										   [(currentStep)]="currentStep" [roundedStep]="roundedStep"></systelab-wizard-steps>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class WizardStepsTestComponent {
	public allowNavigation = true;
	public currentStep = 2;
	public steps: Array<WizardStep> = [];
	public roundedStep = false;

	constructor() {
		this.steps.push({step: 1, description: 'Step 1', visited: true});
		this.steps.push({step: 2, description: 'Step 2', visited: true});
		this.steps.push({step: 3, description: 'Step 3', visited: false});
	}
}

describe('Systelab Wizard Steps', () => {
	let fixture: ComponentFixture<WizardStepsTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [WizardStepsComponent, WizardStepsTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WizardStepsTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});
});

