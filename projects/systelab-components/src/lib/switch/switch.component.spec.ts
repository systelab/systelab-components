import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SwitchComponent } from './switch.component';

@Component({
    selector: 'systelab-switch-test',
    template: `
                <div>
                    <systelab-switch  [(isChecked)]="check"></systelab-switch>
                    <label class="label-value">{{check}}</label>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class SwitchTestComponent {
	public check = true;
}

const checkHasValue = (fixture: ComponentFixture<SwitchTestComponent>, value: boolean) => {
	const label = fixture.debugElement.nativeElement.querySelector('.label-value');
	expect(label.innerHTML).toContain(value);
};

const setValue = (fixture: ComponentFixture<SwitchTestComponent>, value: boolean) => {
	fixture.componentInstance.check = value;
	fixture.detectChanges();
};

const clickSwitch = (fixture: ComponentFixture<SwitchTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.slab-switch');
	button.click();
	fixture.detectChanges();
};

describe('Systelab Switch', () => {
	let fixture: ComponentFixture<SwitchTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [SwitchComponent, SwitchTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        TreeModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SwitchTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
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

	it('should maintain the same value', () => {
		setValue(fixture, false);
		checkHasValue(fixture, false);
		setValue(fixture, false);
		checkHasValue(fixture, false);
	});
});
