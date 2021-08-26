import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { ToastService } from './toast.service';

@Component({
	selector: 'toast-test',
	template: `
                <button id="openbutton" type="button" class="btn btn-primary" (click)="showToast()">Show</button>
	          `
})
export class ToastTestComponent {
	constructor(private toastService: ToastService) {
	}

	public showToast() {
		this.toastService.showInformation('Text to show');
	}
}

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
		clickButton(fixture, 'openbutton');
		expect(isToastVisible(fixture))
			.toBeTruthy();
	});
});

function clickButton(fixture: ComponentFixture<ToastTestComponent>, buttonId: string) {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
}

function isToastVisible(fixture: ComponentFixture<ToastTestComponent>) {
	return (document.querySelector('.cdk-overlay-pane') !== null);
}

