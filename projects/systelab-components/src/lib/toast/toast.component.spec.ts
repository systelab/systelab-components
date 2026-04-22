import { Component, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { ToastService } from './toast.service';
import { ToastConfig } from './toast-config';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'toast-test',
    template: `
                <button id="open-toast" type="button" class="btn btn-primary" (click)="showToast()">Show</button>
				<button id="open-toast-with-close-button" type="button" class="btn btn-primary" (click)="showToastWithCloseButton()">
					Show
				</button>
				<button id="open-toast-with-action" type="button" class="btn btn-primary" (click)="showToastWithAction()">
					Show with action
				</button>
	          `,
    standalone: false
})
export class ToastTestComponent {
	private readonly _toastDefaultConfig: ToastConfig;
	public actionCallbackSpy = jasmine.createSpy('actionCallback');

	constructor(public toastService: ToastService) {
		this._toastDefaultConfig = this.toastService.getConfig();
	}

	public showToast(): void {
		this.toastService.showInformation('Text to show');
	}

	public showToastWithCloseButton(): void {
		this.toastService.setConfig({
			...this._toastDefaultConfig,
			showCloseButton: true,
		});
		this.toastService.showInformation('Test to show');
	}

	public showToastWithAction(): void {
		this.toastService.showInformationMessage({
			title: 'Action toast',
			action: { label: 'Undo', callback: this.actionCallbackSpy },
		});
	}
}

const clickButton = (fixture: ComponentFixture<ToastTestComponent>, buttonId: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
};

const queryToast = () => document.querySelector('systelab-toast');
const queryCloseToastButton = () => queryToast().querySelector('.slab-toast__close');
const isToastVisible = () => queryToast() !== null;
const toastHasCloseButton = () => queryCloseToastButton() !== null;

const clickCloseButton = () => {
	const button = document.querySelector('systelab-toast .slab-toast__close');
	const clickEvent = new Event('click');
	button.dispatchEvent(clickEvent);
};

describe('Systelab Toast', () => {
	let fixture: ComponentFixture<ToastTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ToastTestComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
			],
			providers: [
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ToastTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should be able to show a toast.', () => {
		clickButton(fixture, 'open-toast');
		expect(isToastVisible()).toBeTruthy();
	});

	it('should be able to close a toast.', () => {
		clickButton(fixture, 'open-toast-with-close-button');
		expect(isToastVisible()).toBeTruthy();
		expect(toastHasCloseButton()).toBeTruthy();
		clickCloseButton();
		expect(isToastVisible()).toBeFalsy();
	});

	it('should show the action button and invoke its callback when clicked.', () => {
		clickButton(fixture, 'open-toast-with-action');
		const actionButton = document.querySelector('systelab-toast .slab-toast__action') as HTMLElement;
		expect(actionButton).not.toBeNull();
		actionButton.click();
		expect(fixture.componentInstance.actionCallbackSpy).toHaveBeenCalledTimes(1);
		expect(isToastVisible()).toBeFalsy();
	});

	it('should dismiss all active toasts when calling dismissAll.', () => {
		clickButton(fixture, 'open-toast');
		clickButton(fixture, 'open-toast');
		expect(fixture.componentInstance.toastService.getActiveToasts().length).toBeGreaterThan(0);
		fixture.componentInstance.toastService.dismissAll();
		expect(fixture.componentInstance.toastService.getActiveToasts().length).toBe(0);
	});
});

