import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { DialogHeaderComponent } from './dialog-header.component';

@Component({
	selector: 'systelab-dialog-header-test',
	template: `
                <div>
                    <systelab-dialog-header [withClose]="withClose" (close)="doClose()"
                                            [withHome]="withHome" (home)="doHome()"
                                            [withInfo]="withInfo" (info)="doInfo()"></systelab-dialog-header>
                </div>
	          `,
	styles:   []
})
export class DialogHeaderTestComponent {

	public withClose = true;
	public withInfo = false;
	public withProgressBar = false;
	public withHome = false;
	public withMinimize = false;

	public doClose() {
	}

	public doHome() {
	}

	public doInfo() {
	}
}

describe('Systelab Dialog Header', () => {
	let fixture: ComponentFixture<DialogHeaderTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				SystelabTranslateModule,
				SystelabPreferencesModule,
				HttpClientModule],
			declarations: [DialogHeaderComponent, DialogHeaderTestComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DialogHeaderTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should show the initial values', () => {
		expect(isButtonVisible(fixture, '.slab-dialog-close'))
			.toBeTruthy();
		expect(isButtonVisible(fixture, '.slab-dialog-home'))
			.toBeFalsy();
		expect(isButtonVisible(fixture, '.slab-dialog-minimize'))
			.toBeFalsy();
		expect(isButtonVisible(fixture, '.slab-dialog-info'))
			.toBeFalsy();

	});

	it('should call method close if click on close', () => {
		spyOn(fixture.componentInstance, 'doClose');
		clickButton(fixture, '.slab-dialog-close');
		expect(fixture.componentInstance.doClose)
			.toHaveBeenCalled();
	});

	it('should have button home if is set, and call appropriate method if clicked', () => {
		expect(isButtonVisible(fixture, '.slab-dialog-home'))
			.toBeFalsy();
		showHomeButton(fixture);
		expect(isButtonVisible(fixture, '.slab-dialog-home'))
			.toBeTruthy();
		spyOn(fixture.componentInstance, 'doHome');
		clickButton(fixture, '.slab-dialog-home');
		expect(fixture.componentInstance.doHome)
			.toHaveBeenCalled();
	});

	it('should have button info if is set, and call appropriate method if clicked', () => {
		expect(isButtonVisible(fixture, '.slab-dialog-info'))
			.toBeFalsy();
		showInfoButton(fixture);
		expect(isButtonVisible(fixture, '.slab-dialog-info'))
			.toBeTruthy();
		spyOn(fixture.componentInstance, 'doInfo');
		clickButton(fixture, '.slab-dialog-info');
		expect(fixture.componentInstance.doInfo)
			.toHaveBeenCalled();
	});

});

function clickButton(fixture: ComponentFixture<DialogHeaderTestComponent>, className: string) {
	const button = fixture.debugElement.nativeElement.querySelector(className);
	button.click();
	fixture.detectChanges();
}

function showHomeButton(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withHome = true;
	fixture.detectChanges();
}

function showInfoButton(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withInfo = true;
	fixture.detectChanges();
}

function isButtonVisible(fixture: ComponentFixture<DialogHeaderTestComponent>, className: string) {
	return (fixture.debugElement.nativeElement.querySelector(className) !== null);
}
