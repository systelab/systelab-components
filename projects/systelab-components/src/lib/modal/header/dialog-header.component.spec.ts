import { Component, ViewChild } from '@angular/core';
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
                    <systelab-dialog-header #header [withClose]="withClose" (close)="doClose()"
                                            [withHome]="withHome" (home)="doHome()" [withProgressBar]="withProgressBar"
                                            [withTextProgressBar]="withTextProgressBar"
                                            [withDrag]="withDrag"
                                            [withInfo]="withInfo" (info)="doInfo()"></systelab-dialog-header>
                </div>
	          `,
	styles:   []
})
export class DialogHeaderTestComponent {

	@ViewChild('header') public header: DialogHeaderComponent;

	public withClose = true;
	public withInfo = false;
	public withProgressBar = false;
	public withTextProgressBar = false;
	public withHome = false;
	public withMinimize = false;
	public withDrag = true;

	public doClose() {
	}

	public doHome() {
	}

	public doInfo() {
	}

	public go(num: number): void {
		this.header.progress=num;
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
		expect(isComponentVisible(fixture, '.slab-dialog-close'))
			.toBeTruthy();
		expect(isComponentVisible(fixture, '.slab-dialog-home'))
			.toBeFalsy();
		expect(isComponentVisible(fixture, '.slab-dialog-minimize'))
			.toBeFalsy();
		expect(isComponentVisible(fixture, '.slab-dialog-info'))
			.toBeFalsy();
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress'))
			.toBeFalsy();
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress-bar-with-text'))
			.toBeFalsy();
	});

	it('should be draggable', () => {
		expect(isComponentDraggable(fixture, '.slab-dialog-header'))
			.toBeTruthy();
	});

	it('should not  be draggable', () => {
		setNoDraggable(fixture);
		expect(isComponentDraggable(fixture, '.slab-dialog-header'))
			.toBeFalsy();
	});

	it('should call method close if click on close', () => {
		spyOn(fixture.componentInstance, 'doClose');
		clickButton(fixture, '.slab-dialog-close');
		expect(fixture.componentInstance.doClose)
			.toHaveBeenCalled();
	});

	it('should have button home if is set, and call appropriate method if clicked', () => {
		expect(isComponentVisible(fixture, '.slab-dialog-home'))
			.toBeFalsy();
		showHomeButton(fixture);
		expect(isComponentVisible(fixture, '.slab-dialog-home'))
			.toBeTruthy();
		spyOn(fixture.componentInstance, 'doHome');
		clickButton(fixture, '.slab-dialog-home');
		expect(fixture.componentInstance.doHome)
			.toHaveBeenCalled();
	});

	it('should have button info if is set, and call appropriate method if clicked', () => {
		expect(isComponentVisible(fixture, '.slab-dialog-info'))
			.toBeFalsy();
		showInfoButton(fixture);
		expect(isComponentVisible(fixture, '.slab-dialog-info'))
			.toBeTruthy();
		spyOn(fixture.componentInstance, 'doInfo');
		clickButton(fixture, '.slab-dialog-info');
		expect(fixture.componentInstance.doInfo)
			.toHaveBeenCalled();
	});

	it('should have progress bar if withProgressBar', () => {
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress'))
			.toBeFalsy();
		showProgressBar(fixture);
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress'))
			.toBeTruthy();
	});

	it('should have text progress bar if withTextProgressBar', () => {
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress-bar-with-text'))
			.toBeFalsy();
		showTextProgressBar(fixture);
		expect(isComponentVisible(fixture, '.slab-dialog-header-progress-bar-with-text'))
			.toBeTruthy();
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


function setNoDraggable(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withDrag = false;
	fixture.detectChanges();
}

function showInfoButton(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withInfo = true;
	fixture.detectChanges();
}

function showProgressBar(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withProgressBar = true;
	fixture.componentInstance.go(50);
    fixture.detectChanges();
}

function showTextProgressBar(fixture: ComponentFixture<DialogHeaderTestComponent>) {
	fixture.componentInstance.withTextProgressBar = true;
	fixture.componentInstance.go(50);
    fixture.detectChanges();
}

function isComponentVisible(fixture: ComponentFixture<DialogHeaderTestComponent>, className: string) {
	return (fixture.debugElement.nativeElement.querySelector(className) !== null);
}

function isComponentDraggable(fixture: ComponentFixture<DialogHeaderTestComponent>, className: string) {
	const element=fixture.debugElement.nativeElement.querySelector(className);
	return element.hasAttribute('cdkdrag') && element.hasAttribute('cdkdragrootelement');
}
