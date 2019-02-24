import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@Component({
	selector: 'systelab-tabs-test',
	template: `
                <div>
                    <systelab-tabs class="slab-flex-1" (select)="selectedTab($event)">
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
	styles:   []
})
export class TabsTestComponent {

	public selectedTab(event) {

	}

}

describe('Systelab Tabs', () => {
	let tabsTestFixture: ComponentFixture<TabsTestComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports:      [BrowserModule,
				BrowserAnimationsModule,
				FormsModule,
				DragDropModule,
				OverlayModule,
				TreeModule,
				HttpClientModule],
			declarations: [TabsComponent, TabComponent, TabsTestComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		tabsTestFixture = TestBed.createComponent(TabsTestComponent);
		tabsTestFixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(tabsTestFixture.componentInstance)
			.toBeDefined();
	});

	it('should show initially the first tab', () => {
		expect(isTabContentVisible('.tab1', tabsTestFixture))
			.toBeTruthy();
	});

	it('should not show initially the other tabs', () => {
		expect(isTabContentVisible('.tab2', tabsTestFixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab3', tabsTestFixture))
			.toBeFalsy();
	});

	it('should show second tab when you click on it', () => {
		clickTabButton(tabsTestFixture, 'id-2');
		expect(isTabContentVisible('.tab1', tabsTestFixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab2', tabsTestFixture))
			.toBeTruthy();
		expect(isTabContentVisible('.tab3', tabsTestFixture))
			.toBeFalsy();
	});

	it('should show third tab when you click on it', () => {
		clickTabButton(tabsTestFixture, 'id-3');
		expect(isTabContentVisible('.tab1', tabsTestFixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab2', tabsTestFixture))
			.toBeFalsy();
		expect(isTabContentVisible('.tab3', tabsTestFixture))
			.toBeTruthy();
	});

});

function isTabContentVisible(className: string, fixture: ComponentFixture<TabsTestComponent>): boolean {
	return fixture.debugElement.query(By.css(className)).nativeElement.style.display !== 'none';
}

function clickTabButton(fixture: ComponentFixture<TabsTestComponent>, tabId: string) {
	const button = fixture.debugElement.nativeElement.querySelector('#tab-' + tabId);
	button.click();
	fixture.detectChanges();
}
