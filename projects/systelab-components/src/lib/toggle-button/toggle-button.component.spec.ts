import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { ToggleButtonComponent } from './toggle-button.component';

@Component({
	selector: 'systelab-toggle-button-test',
	template: `
                <div>
                    <systelab-toggle-button [(isChecked)]="check">My Toggle Button</systelab-toggle-button>
                    <label class="label-value">{{check}}</label>
                </div>
	          `,
	styles:   []
})
export class ToggleButtonTestComponent {
	public check = true;
}

describe('Systelab Toggle Button', () => {
	let fixture: ComponentFixture<ToggleButtonTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [ToggleButtonComponent, ToggleButtonTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ToggleButtonTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, true);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, false);
		checkHasValue(fixture, false);
	});

	it('should change value if is clicked', () => {
		clickSwitch(fixture);
		checkHasValue(fixture, false);
		clickSwitch(fixture);
		checkHasValue(fixture, true);
	});
});

function checkHasValue(fixture: ComponentFixture<ToggleButtonTestComponent>, value: boolean) {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
}

function setValue(fixture: ComponentFixture<ToggleButtonTestComponent>, value: boolean) {
	fixture.componentInstance.check = value;
	fixture.detectChanges();
}

function clickSwitch(fixture: ComponentFixture<ToggleButtonTestComponent>) {
	const button = fixture.debugElement.nativeElement.querySelector('.btn');
	button.click();
	fixture.detectChanges();
}
