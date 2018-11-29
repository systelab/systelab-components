import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
	selector: 'systelab-tabs',
	template: `
                  <ul class="nav nav-tabs" [class.hideTabBackground]="!showTabBackground" role="tablist">
                      <li class="nav-item" [class.hideTabBackground]="!showTabBackground" *ngFor="let tab of tabs"
                          (click)="doSelectTab(tab)">
                          <a class="nav-link nav-single-tab d-flex align-items-center justify-content-center"
                             [class.active]="tab.active" href="#" data-toggle="tab" role="tab"
                             [attr.aria-controls]="tab.id">
                              <span *ngIf="tab.prefixHTML" [innerHTML]="tab.prefixHTML"
                                    class="d-flex align-items-center mr-1"></span>
                              <span *ngIf="tab.prefix" class="d-flex align-items-center mr-1">{{tab.prefix}}</span>
                              {{tab.title}}<i *ngIf="tab.warning" class="text-warning icon-warning ml-3"></i></a>
                      </li>
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
	@Output() public select = new EventEmitter<string>();

	public ngAfterContentInit() {

		if (this.tabs.length > 0) {
			// get all active tabs
			const activeTabs = this.tabs.filter((tab) => tab.active);
			// if there is no active tab set, activate the first
			if (activeTabs.length === 0) {
				this.doSelectTab(this.tabs.first);
			}
		}
	}

	public doSelectTab(tab: TabComponent) {
		// deactivate all tabs
		this.tabs.toArray()
			.forEach(t => {
				t.active = false;
				t.setVisible(false);
			});

		// activate the tab the user has clicked on.
		tab.active = true;
		tab.setVisible(true);
		this.select.emit(tab.id);
	}
}
