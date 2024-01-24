import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
	selector: 'systelab-tabs',
	template: `
                <ul class="nav nav-tabs" [class.hideTabBackground]="!showTabBackground" [class.slab-tabs-shrink]="shrink" role="tablist">
					@for (tab of tabs; track tab.id) {
						<li class="nav-item" [class.hideTabBackground]="!showTabBackground"
							(click)="doSelectTab(tab)">
							<div class="nav-link nav-single-tab d-flex align-items-center justify-content-center"
								 [class.active]="tab.active" [class.slab-tabs-shrink]="shrink" data-toggle="tab" role="tab" [attr.aria-controls]="tab.id" id="tab-{{tab.id}}"
								 [tabindex]="paintFocus?0:-1" (keydown)="doKeyDown($event,tab)">
								<span *ngIf="tab.titleHtml" [innerHTML]="tab.titleHtml" class="d-flex align-items-center"></span>
								<span *ngIf="tab.title" class="d-flex align-items-center">{{tab.title}}</span>
								<i *ngIf="tab.warning" class="text-warning icon-warning ml-3"></i>
							</div>
						</li>
					}
                </ul>
                <div class="slab-flex-1 d-flex slab-overflow-container">
                    <ng-content></ng-content>
                </div>

	          `,
	styles:   [`
      :host {
          width: 100%;
          display: flex;
          flex-direction: column;
      }


	`]
})
export class TabsComponent implements AfterContentInit {

	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	@Input() public showTabBackground = true;
	@Input() public shrink = false;
	@Input() public paintFocus = false;

	@Output() public select = new EventEmitter<string>();

	public ngAfterContentInit() {

		if (this.tabs.length > 0) {
			const activeTabs = this.tabs.filter((tab) => tab.active);
			if (activeTabs.length === 0) {
				this.doSelectTab(this.tabs.first);
			} else {
				this.doSelectTab(activeTabs[0]);
			}
		}
	}

	public doSelectTab(tab: TabComponent) {
		this.deactivateAllTabs();
		this.selectTab(tab);
	}

	public doSelectTabById(tabId: string) {
		const tab: TabComponent = this.tabs.toArray()
			.find((t) => t.id === tabId);
		if (tab) {
			this.deactivateAllTabs();
			this.selectTab(tab);
		}
	}

	private selectTab(tab: TabComponent) {
		tab.active = true;
		tab.setVisible(true);
		this.select.emit(tab.id);
	}

	private deactivateAllTabs() {
		if (this.tabs) {
			this.tabs.toArray()
				.forEach(t => {
					t.active = false;
					t.setVisible(false);
				});
		}
	}

	public doKeyDown(event: KeyboardEvent, tab: TabComponent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.deactivateAllTabs();
			this.selectTab(tab);
		}
	}
}

