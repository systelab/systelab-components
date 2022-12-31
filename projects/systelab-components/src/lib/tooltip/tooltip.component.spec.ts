import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';

@Component({
	selector: 'systelab-tabs-test',
	template: `
			<div class="m-4">
          <systelab-button id="my-component" (action)="doSomething()" systelabTooltip="Tooltip on top"
                [systelabTooltipDelay]="0" [systelabTooltipHideDelay]="0">Tooltip on top</systelab-button>
      </div>
	          `,
	styles:   []
})
export class TooltipTestComponent {
		public doSomething() {
			console.log('Button clicked');
		}
}

describe('Systelab Tooltip', () => {
	let fixture: ComponentFixture<TooltipTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [TooltipDirective, TooltipComponent, TooltipTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TooltipTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should show and hide the tooltip', async () => {
		await fixture.whenStable();
		let button = fixture.debugElement.query(By.css('#my-component'));

		expect(isPopupVisible(fixture)).toBeFalsy();

		button.triggerEventHandler('mouseenter', {});
		fixture.detectChanges();

		expect(isPopupVisible(fixture)).toBeTruthy();

		button.triggerEventHandler('mouseleave', {});
		fixture.detectChanges();

		expect(isPopupVisible(fixture)).toBeFalsy();
	})
});

function isPopupVisible(fixture: ComponentFixture<TooltipTestComponent>) {
	return (document.querySelector('tooltip') !== null);
}
