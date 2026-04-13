import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
    styles: [],
    standalone: false
})
export class ButtonTestComponent {

	public isClicked = false;
	public disabled = false;

	public doClick() {
		this.isClicked = true;
	}
}

describe('Systelab Button', () => {
	let fixture: ComponentFixture<ButtonTestComponent>;
	let component: ButtonTestComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    		declarations: [ButtonComponent, ButtonTestComponent],
    		imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule
			],
    		providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection()
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ButtonTestComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(component).toBeDefined();
	});

	it('should change value if is clicked', () => {
		expect(getLabelValue()).toEqual('false');
		clickButton();
		expect(getLabelValue()).toEqual('true');
	});

	it('should not change value if is clicked when is disabled', async () => {
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		expect(getLabelValue()).toEqual('false');
		clickButton();
		await fixture.whenStable();
		expect(getLabelValue()).toEqual('false');
	});

	it('should not change value if icon is clicked when is disabled', () => {
		fixture.componentInstance.disabled = true;
		fixture.detectChanges();
		expect(getLabelValue()).toEqual('false');
		clickOnIcon();
		expect(getLabelValue()).toEqual('false');
	});

	function getLabelValue() {
		const label = fixture.debugElement.nativeElement.querySelector('.label-value');
		return label.textContent;
	}

	function clickButton() {
		const button = fixture.debugElement.nativeElement.querySelector('.slab-btn');
		button.click();
		fixture.detectChanges();
	}

	function clickOnIcon() {
		const button = fixture.debugElement.nativeElement.querySelector('.slab-btn i');
		button.click();
		fixture.detectChanges();
	}
});
