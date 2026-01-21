import { Component, ViewChild, provideZoneChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NumPadComponent } from './numpad.component';
import { DialogService } from '../modal/dialog/dialog.service';
import { DialogHeaderComponent } from '../modal/header/dialog-header.component';
import { MessagePopupService } from '../modal/message-popup/message-popup.service';
import { I18nService, SystelabTranslateModule } from 'systelab-translate';

@Component({
    selector: 'systelab-numpad-test',
    template: `
                <div>
                    <systelab-numpad #numpad [value]="value" (change)="doSearch()" [isPassword]="isPassword"></systelab-numpad>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class NumpadTestComponent {
	@ViewChild('numpad') public numpad: NumPadComponent;
	public value: string;
	public isPassword: boolean;

	constructor(public i18nService: I18nService) {
		this.value= 'valueExample';
		this.isPassword = false;
	}

	public doSearch(): void {
		// Do search action
	}

}


const clickShowDialogButton = (fixture: ComponentFixture<NumpadTestComponent>) => {
	const button = fixture.debugElement.nativeElement.querySelector('.btn');
	button.click();
	fixture.detectChanges();
};


const isPopupVisible = () => (document.querySelector('.cdk-overlay-pane') !== null);


describe('Systelab Numpad', () => {
	let fixture: ComponentFixture<NumpadTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				NumPadComponent,
				NumpadTestComponent,
				DialogHeaderComponent,
			],
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				ButtonModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				SystelabTranslateModule,
			],
			providers: [
				DialogService,
				MessagePopupService,
				I18nService,
				provideHttpClient(withInterceptorsFromDi()),
				provideZoneChangeDetection(),
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NumpadTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});


	it('should show numPad dialog and should be closed', async () => {
		clickShowDialogButton(fixture);
		await fixture.whenStable();
		expect(isPopupVisible()).toBeTruthy();
	});

	it('Check type element if it is not password numpad', () => {
		const input = fixture.debugElement.nativeElement.querySelector('input');

		expect(input.type)
			.toBe('text');
	});

	it('Check element if it is password numpad', () => {
		fixture.componentInstance.isPassword = true;
		fixture.detectChanges();
		const input = fixture.debugElement.nativeElement.querySelector('input');
		expect(input.type).toBe('password');
	});

	it('Input element has to have focus after focus method execution', () => {
		fixture.componentInstance.numpad.focus();
		fixture.detectChanges();
		const input = fixture.debugElement.nativeElement.querySelector('input');
		expect(input).toBe(document.activeElement);
	});

	it('Input element has to have focus after blur method execution', () => {
		fixture.componentInstance.numpad.focus();
		fixture.detectChanges();
		fixture.componentInstance.numpad.blur();
		fixture.detectChanges();
		const input = fixture.debugElement.nativeElement.querySelector('input');
		expect(input).not.toBe(document.activeElement);
	});

	it('should select text on input when clicking and onClickSelect is true', () => {
		fixture.componentInstance.numpad.onClickSelectValue = true;
		fixture.componentInstance.numpad.input.nativeElement.value = 'text'
		fixture.detectChanges();

		const input = fixture.componentInstance.numpad.input.nativeElement;
		input.click();
		fixture.detectChanges();

		const selectedText = window.getSelection().toString();
		expect(input.value).toEqual(selectedText);
	});

});



