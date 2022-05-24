import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { ToggleSelectorOption } from './toggle-selector.component';
import { ToggleSelectorComponent } from 'systelab-components';

@Component({
	selector: 'systelab-toggle-selector-test',
	template: `
                <div>
                    <systelab-toggle-selector [options]="options" [currentOption]="currentOption" (select)="doSomething($event)"></systelab-toggle-selector>
                    <label class="label-value">{{currentOption}}</label>
                </div>
	          `,
	styles:   []
})
export class ToggleSelectorTestComponent {
	public options: Array<ToggleSelectorOption> = [{ id: '1', name: 'A' },{ id: '2', name: 'B' },{ id: '3', name: 'C' }];
	public currentOption = '1';

	public doSomething(option: ToggleSelectorOption): void {
		this.currentOption = option.id;
	}
}

describe('Systelab Toggle Selector', () => {
	let fixture: ComponentFixture<ToggleSelectorTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [ToggleSelectorComponent, ToggleSelectorTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ToggleSelectorTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should have an initial value', () => {
		checkHasValue(fixture, '1');
	});

	it('should change value if is clicked', () => {
		clickOption(fixture,'2');
		checkHasValue(fixture, '2');
	});

	it('should change value if is clicked', () => {
		clickOption(fixture,'3');
		checkHasValue(fixture, '3');
	});

});

function checkHasValue(fixture: ComponentFixture<ToggleSelectorTestComponent>, value: string) {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
}


function clickOption(fixture: ComponentFixture<ToggleSelectorTestComponent>, id: string) {
	const button = fixture.debugElement.query(By.css('#id'+id)).nativeElement;
	button.click();
	fixture.detectChanges();
}

