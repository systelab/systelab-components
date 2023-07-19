import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
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
	          `
})
export class ToastTestComponent {
	private _toastDefaultConfig: ToastConfig;
	constructor(private toastService: ToastService) {
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
	}
}

const clickButton = (fixture: ComponentFixture<ToastTestComponent>, buttonId: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
};

const queryToast = () => document.querySelector('systelab-toast');
const queryCloseToastButton = () => queryToast().querySelector('.close');
const isToastVisible = () => queryToast() !== null;
const toastHasCloseButton = () => queryCloseToastButton() !== null;

const clickCloseButton = (fixture: ComponentFixture<ToastTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.close');
	button.click();
	fixture.detectChanges();
};

describe('Systelab Toast', () => {
	let fixture: ComponentFixture<ToastTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule],
			declarations: [
				ToastTestComponent]
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
		clickCloseButton(fixture);
		expect(isToastVisible()).toBeFalsy();
	});
});

