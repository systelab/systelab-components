import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { PercentageCircleComponent } from './percentage-circle.component';

@Component({
	selector: 'systelab-switch-test',
	template: `
                <div>
                    <systelab-percentage-circle [value]="value" [text]="text" [color]="color"></systelab-percentage-circle>
                </div>
	          `,
	styles:   []
})
export class PercentageCircleTestComponent {
	public value = 45;
	public text = 'initial text';
	public color = 'red';
}

describe('Systelab Percentage Circle', () => {
	let fixture: ComponentFixture<PercentageCircleTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [PercentageCircleComponent, PercentageCircleTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PercentageCircleTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, 45);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, 32);
		checkHasValue(fixture, 32);
	});

	it('should have an initial text', () => {
		checkHasText(fixture, 'initial text');
	});

	it('should have the changed text if there is a change', () => {
		setText(fixture, 'alternative text');
		checkHasText(fixture, 'alternative text');
	});

	it('should have an initial color', () => {
		checkIsColor(fixture, 'red');
	});

	it('should have the changed color if there is a change', () => {
		setColor(fixture, 'blue');
		checkIsColor(fixture, 'blue');
	});

});

function checkHasValue(fixture: ComponentFixture<PercentageCircleTestComponent>, value: number) {
	const label = fixture.debugElement.nativeElement.querySelector('.percentage-circle-value');
	expect(label.innerHTML)
		.toContain(value);
}

function setValue(fixture: ComponentFixture<PercentageCircleTestComponent>, value: number) {
	fixture.componentInstance.value = value;
	fixture.detectChanges();
}

function checkHasText(fixture: ComponentFixture<PercentageCircleTestComponent>, text: string) {
	const label = fixture.debugElement.nativeElement.querySelector('.percentage-circle-value');
	expect(label.innerHTML)
		.toContain(text);
}

function setText(fixture: ComponentFixture<PercentageCircleTestComponent>, text: string) {
	fixture.componentInstance.text = text;
	fixture.detectChanges();
}

function setColor(fixture: ComponentFixture<PercentageCircleTestComponent>, color: string) {
	fixture.componentInstance.color = color;
	fixture.detectChanges();
}

function checkIsColor(fixture: ComponentFixture<PercentageCircleTestComponent>, color: string) {
	console.log(fixture.debugElement.query(By.css('.percentage-circle-bar')).nativeElement.style.borderColor);
	expect(fixture.debugElement.query(By.css('.percentage-circle-bar')).nativeElement.style.borderColor).toEqual(color);
}

