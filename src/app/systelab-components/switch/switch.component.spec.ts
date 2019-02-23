import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { SwitchComponent } from './switch.component';
import { SpinnerTestComponent } from '../spinner/spinner.component.spec';

@Component({
	selector: 'systelab-switch-test',
	template: `
                <div>
                    <systelab-switch  [(isChecked)]="check"></systelab-switch>
                    <label class="label-value">{{check}}</label>
                </div>
	          `,
	styles:   []
})
export class SwitchTestComponent {
	public check= true;
}

describe('Systelab Switch', () => {
	let switchTestFixture: ComponentFixture<SwitchTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [SwitchComponent, SwitchTestComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		switchTestFixture = TestBed.createComponent(SwitchTestComponent);
		switchTestFixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(switchTestFixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(switchTestFixture, true);
	});

	it('should have the changed value if there is a change', () => {
		setValue(switchTestFixture, false);
		checkHasValue(switchTestFixture, false);
	});

	it('should change value if is clicked', () => {
		clickSwitch(switchTestFixture);
		checkHasValue(switchTestFixture, false);
		clickSwitch(switchTestFixture);
		checkHasValue(switchTestFixture, true);
	});
});

function checkHasValue(switchTestFixture: ComponentFixture<SwitchTestComponent>, value: boolean) {
	const label = switchTestFixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toContain(value);
}

function setValue(switchTestFixture: ComponentFixture<SwitchTestComponent>, value: boolean) {
	switchTestFixture.componentInstance.check = value;
	switchTestFixture.detectChanges();
}

function clickSwitch(switchTestFixture: ComponentFixture<SwitchTestComponent>) {
	const button = switchTestFixture.debugElement.nativeElement.querySelector('.slab-switch');
	button.click();
	switchTestFixture.detectChanges();
}
