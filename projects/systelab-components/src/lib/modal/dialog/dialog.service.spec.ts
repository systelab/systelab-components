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
import { DialogService } from './dialog.service';
import { ModalComponent, SystelabModalContext } from './modal-context';
import { DialogRef } from './dialog-ref';
import { DialogBottomComponent } from '../bottom/dialog-bottom.component';
import { DialogHeaderComponent } from '../header/dialog-header.component';

export class SampleDialogParameters extends SystelabModalContext {}

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'sample-dialog',
	template: `
                <systelab-dialog-header [withInfo]="false" (close)="close();">Title</systelab-dialog-header>
                <div class="slab-flex-1">Message</div>
                <systelab-dialog-bottom>
                    <button id="closebutton" type="button" class="btn btn-primary ml-auto" (click)="close()"> Close</button>
                </systelab-dialog-bottom>
	          `
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
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
                <button id="openbutton" type="button" class="btn btn-primary" (click)="openDialog('Message')">Open</button>
                <button id="openbutton2" type="button" class="btn btn-primary" (click)="openDialog('Message 2')">Open 2</button>
	          `
})
export class ModalTestComponent {
	constructor(private dialogService: DialogService) {
	}

	public openDialog(msg: string) {
		const parameters: SampleDialogParameters = SampleDialog.getParameters();
		parameters.height = 175;
		parameters.width = 200;
		parameters['title'] = 'Title';
		parameters['msg'] = msg;
		this.dialogService.showDialog(SampleDialog, parameters);
	}
}

const clickButton = (fixture: ComponentFixture<ModalTestComponent>, buttonId: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
};

const isPopupVisible = () => (document.querySelector('.cdk-overlay-pane') !== null);
const numberPopupVisibles = () => document.querySelectorAll('.cdk-overlay-pane').length;

const clickCloseButton = (fixture: ComponentFixture<ModalTestComponent>, buttonId: string) => {
	const button: any = document.querySelector('#' + buttonId);
	button.click();
	fixture.detectChanges();
};

describe('Systelab Modal', () => {
	let fixture: ComponentFixture<ModalTestComponent>;

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
				ModalTestComponent,
				SampleDialog,
				DialogHeaderComponent,
				DialogBottomComponent]
		});
	});

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
		expect(isPopupVisible()).toBeTruthy();
		clickCloseButton(fixture, 'closebutton');
		expect(isPopupVisible()).toBeFalsy();
	});

	it('should be only one dialog when is opened the same dialog twice', () => {
		clickButton(fixture, 'openbutton');
		clickButton(fixture, 'openbutton');
		expect(numberPopupVisibles()).toBe(1);
	});

	it('should be open two dialogs when is opened a dialog with different messages', () => {
		clickButton(fixture, 'openbutton');
		clickButton(fixture, 'openbutton2');
		expect(numberPopupVisibles()).toBe(2);
	});
});
