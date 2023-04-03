import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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


const getValue = (fixture: ComponentFixture<PercentageCircleTestComponent>) => {
	const label = fixture.debugElement.nativeElement.querySelector('.percentage-circle-value');
	return label.innerHTML;
};

const setValue = (fixture: ComponentFixture<PercentageCircleTestComponent>, value: number) => {
	fixture.componentInstance.value = value;
	fixture.detectChanges();
};

const getText = (fixture: ComponentFixture<PercentageCircleTestComponent>) => {
	const label = fixture.debugElement.nativeElement.querySelector('.percentage-circle-value');
	return label.innerHTML;
};

const setText = (fixture: ComponentFixture<PercentageCircleTestComponent>, text: string) => {
	fixture.componentInstance.text = text;
	fixture.detectChanges();
};

const setColor = (fixture: ComponentFixture<PercentageCircleTestComponent>, color: string) => {
	fixture.componentInstance.color = color;
	fixture.detectChanges();
};

const getColor = (fixture: ComponentFixture<PercentageCircleTestComponent>) => fixture.debugElement.query(By.css('.percentage-circle-bar')).nativeElement.style.borderColor;

describe('Systelab Percentage Circle', () => {
	let fixture: ComponentFixture<PercentageCircleTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
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
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PercentageCircleTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('should have an initial value', () => {
		expect(getValue(fixture)).toContain(45);
	});

	it('should have the changed value if there is a change', () => {
		setValue(fixture, 32);
		expect(getValue(fixture)).toContain(32);
	});

	it('should have an initial text', () => {
		expect(getText(fixture))
			.toContain('initial text');
	});

	it('should have the changed text if there is a change', () => {
		setText(fixture, 'alternative text');
		expect(getText(fixture))
			.toContain('alternative text');
	});

	it('should have an initial color', () => {
		expect(getColor(fixture)).toEqual('red');
	});

	it('should have the changed color if there is a change', () => {
		setColor(fixture, 'blue');
		expect(getColor(fixture)).toEqual('blue');
	});

});
