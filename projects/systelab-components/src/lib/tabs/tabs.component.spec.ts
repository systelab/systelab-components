import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@Component({
    selector: 'systelab-tabs-test',
    template: `
                <div>
                    <systelab-tabs class="slab-flex-1" (select)="selectedTab()">
                        <systelab-tab class="tab1 slab-flex-1" [id]="'id-1'" [title]="'Tab 1'">
                            <div>Tab 1 content</div>
                        </systelab-tab>
                        <systelab-tab class="tab2 slab-flex-1" [id]="'id-2'" [title]="'Tab 2'" [warning]="true">
                            <div>Tab 2 content</div>
                        </systelab-tab>
                        <systelab-tab class="tab3 slab-flex-1" [id]="'id-3'" [title]="'Tab 3'" [warning]="false">
                            <div>Tab 3 content</div>
                        </systelab-tab>
                    </systelab-tabs>
                </div>
	          `,
    styles: [],
    standalone: false
})
export class TabsTestComponent {
	public selectedTab() {
		// Selected tab action
	}
}

const isTabContentVisible = (className: string, fixture: ComponentFixture<TabsTestComponent>): boolean =>
	fixture.debugElement.query(By.css(className)).nativeElement.style.display !== 'none';

const clickTabButton = (fixture: ComponentFixture<TabsTestComponent>, tabId: string) => {
	const button = fixture.debugElement.nativeElement.querySelector('#tab-' + tabId);
	button.click();
	fixture.detectChanges();
};

describe('Systelab Tabs', () => {
	let fixture: ComponentFixture<TabsTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TabsComponent, TabComponent, TabsTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DragDropModule,
        OverlayModule,
        ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TabsTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should show initially the first tab', () => {
		expect(isTabContentVisible('.tab1', fixture))
			.toBeTruthy();
	});

	it('should not show initially the other tabs', () => {
		expect(isTabContentVisible('.tab2', fixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab3', fixture))
			.toBeFalsy();
	});

	it('should show second tab when you click on it', () => {
		clickTabButton(fixture, 'id-2');
		expect(isTabContentVisible('.tab1', fixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab2', fixture))
			.toBeTruthy();
		expect(isTabContentVisible('.tab3', fixture))
			.toBeFalsy();
	});

	it('should show third tab when you click on it', () => {
		clickTabButton(fixture, 'id-3');
		expect(isTabContentVisible('.tab1', fixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab2', fixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab3', fixture))
			.toBeTruthy();
	});

	it('should call method selectedTab when a new tab is selected', () => {

		spyOn(fixture.componentInstance, 'selectedTab');
		clickTabButton(fixture, 'id-3');
		expect(fixture.componentInstance.selectedTab).toHaveBeenCalled();
	});

	it('should call method selectedTab when a new tab is selected and the parameter should be the tab id', () => {

		spyOn(fixture.componentInstance, 'selectedTab');
		clickTabButton(fixture, 'id-2');
		expect(fixture.componentInstance.selectedTab).toHaveBeenCalledWith();
	});


});
