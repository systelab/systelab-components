import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToggleButtonComponent } from './toggle-button.component';

@Component({
    selector: 'systelab-toggle-button-test',
    template: `
                <div>
                    <systelab-toggle-button [(isChecked)]="check" [disabled]="disabled">
						<i class="icon-plus-circle"></i>My Toggle Button
					</systelab-toggle-button>
                    <label class="label-value">{{check}}</label>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class ToggleButtonTestComponent {
	public check = true;
	public disabled = false;
}

const checkHasValue = (fixture: ComponentFixture<ToggleButtonTestComponent>, value: boolean) => {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML)
		.toContain(value);
}

const setValue = (fixture: ComponentFixture<ToggleButtonTestComponent>, value: boolean) => {
	fixture.componentInstance.check = value;
	fixture.detectChanges();
}

const clickSwitch = (fixture: ComponentFixture<ToggleButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.btn');
	button.click();
	fixture.detectChanges();
}

const clickOnIconSwitch = (fixture: ComponentFixture<ToggleButtonTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.btn i');
	button.click();
	fixture.detectChanges();
}

describe('Systelab Toggle Button', () => {
	let fixture: ComponentFixture<ToggleButtonTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ToggleButtonComponent,
				ToggleButtonTestComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
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

	it('should not change value if is clicked when is disabled', () => {
		fixture.componentInstance.disabled = true;
		clickSwitch(fixture);
		checkHasValue(fixture, false);
		clickSwitch(fixture);
		checkHasValue(fixture, false);
	});

	it('should not change value if icon is clicked when is disabled', () => {
		fixture.componentInstance.disabled = true;
		clickOnIconSwitch(fixture);
		checkHasValue(fixture, false);
		clickOnIconSwitch(fixture);
		checkHasValue(fixture, false);
	});
});
