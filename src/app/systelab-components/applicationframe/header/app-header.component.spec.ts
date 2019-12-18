import {Component, OnInit} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {SystelabTranslateModule} from 'systelab-translate';
import {SystelabPreferencesModule} from 'systelab-preferences';
import {ApplicationHeaderComponent, ApplicationHeaderMenuEntry} from './app-header.component';
import {DialogService} from '../../modal';

@Component({
	selector: 'systelab-app-header-test',
	template: `
        <div>
            <systelab-app-header [userName]="userName" [userFullName]="userFullName" [title]="title" [logoIcon]="logoIcon"
                                 [menuBars]="menuBars" [menu]="menu"></systelab-app-header>
        </div>
	`,
	styles: []
})
export class AppHeaderTestComponent implements OnInit {

	public userName = 'test username';
	public userFullName = 'test user full name';
	public title = 'test title';
	public logoIcon = 'fas fa-rebel';
	public menu: ApplicationHeaderMenuEntry[] = [];
	public menuBars = false;

	public dummyValue;

	public ngOnInit(): void {
		this.menu = this.createDummyMenu();
	}

	private createDummyMenu(): Array<ApplicationHeaderMenuEntry> {
		const dummyMenu: Array<ApplicationHeaderMenuEntry> = [];
		dummyMenu.push(new ApplicationHeaderMenuEntry('dummy option 1', false, () => this.dummyAction()));
		dummyMenu.push(new ApplicationHeaderMenuEntry('dummy option 2', false));
		dummyMenu.push(new ApplicationHeaderMenuEntry('dummy option 3', false));
		return dummyMenu;
	}

	public dummyAction(): void {
		this.dummyValue = 'new dummy value';
	}
}

describe('Systelab App Header', () => {
	let fixture: ComponentFixture<AppHeaderTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				OverlayModule,
				SystelabTranslateModule.forRoot(),
				SystelabPreferencesModule.forRoot(),
				HttpClientModule],
			declarations: [
				ApplicationHeaderComponent,
				AppHeaderTestComponent],
			providers: [
				DialogService
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppHeaderTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should display the dropdown menu when menu has items', () => {
		openMenu(fixture);
		expect(fixture.debugElement.nativeElement.querySelectorAll('li').length).toEqual(3);
	});

	it('should execute first menu option when click', () => {
		openMenu(fixture);
		clickOnMenuOption(fixture, 0);
		expect(fixture.componentInstance.dummyValue).toEqual('new dummy value');
	});

	it('should has the expected title', () => {
		expect(fixture.debugElement.nativeElement.querySelector('.slab-app-header-title').innerHTML).toContain(fixture.componentInstance.title);
	});

	it('should has the expected userFullName', () => {
		expect(fixture.debugElement.nativeElement.querySelector('small').innerHTML).toContain(fixture.componentInstance.userFullName);
	});

});

function openMenu(fixture: ComponentFixture<AppHeaderTestComponent>) {
	const menu = fixture.debugElement.nativeElement.querySelector('.slab-app-header-user-container');
	menu.click();
	fixture.detectChanges();
}

function clickOnMenuOption(fixture: ComponentFixture<AppHeaderTestComponent>, optionNumber: number) {
	fixture.debugElement.nativeElement.querySelectorAll('li')[optionNumber].click();
	fixture.detectChanges();
}
