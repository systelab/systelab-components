import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ApplicationFrameComponent } from './application-frame.component';
import { ApplicationHeaderComponent, ApplicationHeaderMenuEntry } from './header/app-header.component';
import { ApplicationSidebarLargeComponent } from './sidebar/app-sidebar-large.component';
import { ApplicationSidebarSmallComponent } from './sidebar/app-sidebar-small.component';
import { ApplicationSidebarAction, ApplicationSidebarTab } from './sidebar/app-sidebar.component';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { SystelabTranslateModule } from 'systelab-translate';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
    selector: 'systelab-application-frame-test',
    template: `
        <div class="w-100 h-100 d-flex">
            <systelab-app-frame class="slab-flex-1" [userName]="userName" [userFullName]="userFullName" [title]="title" [menu]="menu"
                                [largeSideBar]="largeSideBar" [tabs]="sideTabs" [logoIcon]="logoIcon"
                                [actions]="sideActions" (selected)="doDummySelected($event)"></systelab-app-frame>
        </div>
	`,
    standalone: false
})
export class ApplicationFrameTestComponent {

	public userName = 'test username';
	public userFullName = 'test user full name';
	public title = 'test title';
	public menu: ApplicationHeaderMenuEntry[] = [];
	public largeSideBar = true;
	public sideTabs: ApplicationSidebarTab[] = [];
	public logoIcon = 'icon-line-chart';
	public sideActions: ApplicationSidebarAction[] = [];

	public selectedTab;

	public doDummySelected(newTab: any): void {
		this.selectedTab = newTab;
	}
}

describe('Systelab ApplicationFrameComponent', () => {
	let fixture: ComponentFixture<ApplicationFrameTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [
        TooltipDirective,
        ApplicationHeaderComponent,
        ApplicationSidebarLargeComponent,
        ApplicationSidebarSmallComponent,
        ApplicationFrameComponent,
        ApplicationFrameTestComponent
    ],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        SystelabTranslateModule,
        OverlayModule],
    providers: [
        TooltipDirective,
        provideHttpClient(withInterceptorsFromDi())
    ]
}).compileComponents();

	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationFrameTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance).toBeDefined();
	});
});



