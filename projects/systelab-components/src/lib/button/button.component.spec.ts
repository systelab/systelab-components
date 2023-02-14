import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button.component';

@Component({
	selector: 'systelab-button-test',
	template: `
                <div>
                    <systelab-button (action)="doClick()" [disabled]="disabled" [type]="'primary'">
                        <i class="icon-plus-circle"></i>My Button</systelab-button>
                    <label class="label-value">{{isClicked}}</label>
                </div>
	          `,
	styles:   []
})
export class ButtonTestComponent {

	public isClicked = false;
	public disabled = false;

	public doClick() {
		this.isClicked = true;
	}
}

const checkHasValue = (fixture: ComponentFixture<ButtonTestComponent>, value: boolean) => {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
};

const clickButton = (fixture: ComponentFixture<ButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-btn');
	button.click();
	fixture.detectChanges();
};

const clickOnIcon = (fixture: ComponentFixture<ButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-btn i');
	button.click();
	fixture.detectChanges();
};

describe('Systelab Button', () => {
	let fixture: ComponentFixture<ButtonTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [ButtonComponent, ButtonTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should change value if is clicked', () => {
		checkHasValue(fixture, false);
		clickButton(fixture);
		checkHasValue(fixture, true);
	});

	it('should not change value if is clicked when is disabled', () => {
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		checkHasValue(fixture, false);
		clickButton(fixture);
		checkHasValue(fixture, false);
	});

	it('should not change value if icon is clicked when is disabled', () => {
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		checkHasValue(fixture, false);
		clickOnIcon(fixture);
		checkHasValue(fixture, false);
	});
});
