import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonModule } from 'primeng/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { AgGridModule } from 'ag-grid-angular';
import { KeyupDebounceDirective } from './keyup-debounce.directive';

@Component({
    template: `
                  <input keyup-debounce #input type="text" [keyupDebounceTime]="debounceTime" (keyupDebounced)="doKeyUpDebounced()"/>
			  `,
    standalone: false
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class KeyupDebounceDirectiveTest {
	public debounceTime = 350;
	public keyupDebouncedCalled = false;

	public doKeyUpDebounced(): void {
		this.keyupDebouncedCalled = true;
	}
}

describe('Systelab KeyupDebounce Directive', () => {
	let fixture: ComponentFixture<KeyupDebounceDirectiveTest>;
	let inputEl: DebugElement;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [KeyupDebounceDirectiveTest, KeyupDebounceDirective],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule,
        SystelabTranslateModule,
        SystelabPreferencesModule,
        AgGridModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
		fixture = TestBed.createComponent(KeyupDebounceDirectiveTest);
		inputEl = fixture.debugElement.query(By.css('input'));
	});

	it('should call keyupDebounced with 350ms of debouncing', fakeAsync(() => {
		fixture.detectChanges();
		inputEl.triggerEventHandler('keyup', new KeyboardEvent('keyup'));
		tick(300);
		fixture.detectChanges();
		expect(fixture.componentInstance.keyupDebouncedCalled)
			.toBeFalse();
		tick(50);
		expect(fixture.componentInstance.keyupDebouncedCalled)
			.toBeTrue();
	}));

	it('should call keyupDebounced with 0 debouncing', fakeAsync(() => {
		fixture.componentInstance.debounceTime = 0;
		fixture.detectChanges();
		inputEl.triggerEventHandler('keyup', new KeyboardEvent('keyup'));
		tick(1);
		fixture.detectChanges();
		expect(fixture.componentInstance.keyupDebouncedCalled)
			.toBeTrue();
	}));

});
