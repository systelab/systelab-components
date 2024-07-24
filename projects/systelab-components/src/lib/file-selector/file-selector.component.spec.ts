import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FileSelectorComponent } from './file-selector.component';

@Component({
	selector: 'systelab-file-selector-test',
	template: `
        <div>
            <systelab-file-selector [(fileName)]="fileName"
                                    [showButtonOnDisable]="showButtonOnDisable"
                                    [multipleSelection]="multipleSelection"
                                    [disabled]="disable"
            ></systelab-file-selector>
        </div>
	`
})
export class FileSelectorTestComponent {

	public fileName = 'TestFile.txt';
	public showButtonOnDisable = false;
	public multipleSelection = false;
	public disable = false;
}

describe('Systelab FileSelectorComponent', () => {
	let fixture: ComponentFixture<FileSelectorTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        FileSelectorComponent,
        FileSelectorTestComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OverlayModule,
        ButtonModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();

	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FileSelectorTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});

	it('selection button should be disabled', () => {
		fixture.componentInstance.disable = true;
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.querySelector('#selectionButton').disabled).toBeTruthy();
	});

	it('selection button should be displayed when disabled and showButtonOnDisable is true', () => {
		fixture.componentInstance.disable = true;
		fixture.componentInstance.showButtonOnDisable = true;
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.querySelector('#selectionButton').hidden).toBeFalsy();
	});

	it('selection button should not be displayed when disabled and showButtonOnDisable is false', () => {
		fixture.componentInstance.disable = true;
		fixture.detectChanges();
		expect(fixture.debugElement.nativeElement.querySelector('#selectionButton').hidden).toBeTruthy();
	});
});



