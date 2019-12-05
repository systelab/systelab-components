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
import { DialogService } from './dialog.service';
import { ModalComponent, SystelabModalContext } from './modal-context';
import { DialogRef } from './dialog-ref';
import { DialogBottomComponent } from '../bottom/dialog-bottom.component';
import { DialogHeaderComponent } from '..';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export class SampleDialogParameters extends SystelabModalContext {
	public parameter1: number;
	public parameter2: string;
}

@Component({
	selector: 'sample-dialog',
	template: `
                <systelab-dialog-header [withInfo]="false" (close)="close();">Title</systelab-dialog-header>
                <div class="slab-flex-1"></div>
                <systelab-dialog-bottom>
                    <button id="closebutton" type="button" class="btn btn-primary ml-auto" (click)="close()"> Close</button>
                </systelab-dialog-bottom>
	          `
})
export class SampleDialog implements ModalComponent<SampleDialogParameters> {

	public parameters: SampleDialogParameters;

	constructor(public dialog: DialogRef<SampleDialogParameters>) {
		this.parameters = dialog.context;
	}

	public static getParameters(): SampleDialogParameters {
		return new SampleDialogParameters();
	}

	public close(): void {
		this.dialog.close('This is a test');
	}
}

@Component({
	selector: 'systelab-modal-test',
	template: `
                <button id="openbutton" type="button" class="btn btn-primary" (click)="openDialog()">Open</button>
	          `
})
export class ModalTestComponent {
	constructor(private dialogService: DialogService) {
	}

	public openDialog() {
		const parameters: SampleDialogParameters = SampleDialog.getParameters();
		parameters.height = 175;
		parameters.width = 200;
		this.dialogService.showDialog(SampleDialog, parameters);
	}
}

describe('Systelab Modal', () => {
	let fixture: ComponentFixture<ModalTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				ButtonModule,
				HttpClientModule,
				SystelabTranslateModule,
				SystelabPreferencesModule.forRoot()],
			declarations: [
				ModalTestComponent,
				SampleDialog,
				DialogHeaderComponent,
				DialogBottomComponent],
			providers:    [
				DialogService],
		});

		TestBed.overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [SampleDialog]
			}
		});
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should be able to show a modal and close it when click on close button.', () => {
		clickButton(fixture, 'openbutton');
		expect(isPopupVisible(fixture)).toBeTruthy();
		clickCloseButton(fixture, 'closebutton');
		expect(isPopupVisible(fixture)).toBeFalsy();
	});
});

function clickButton(fixture: ComponentFixture<ModalTestComponent>, buttonId: string) {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
}

function isPopupVisible(fixture: ComponentFixture<ModalTestComponent>) {
	return (document.querySelector('.cdk-overlay-pane') !== null);
}

function clickCloseButton(fixture: ComponentFixture<ModalTestComponent>, buttonId: string) {
	const button: any = document.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
}
