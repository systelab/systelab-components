import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
	selector: 'systelab-tabs',
	template: `
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" *ngFor="let tab of tabs" (click)="selectTab(tab)">
                        <a class="nav-link" [class.active]="tab.active" href="#" data-toggle="tab" role="tab"
                           [attr.aria-controls]="tab.id" aria-selected="false">{{tab.title}}</a>
                    </li>
                </ul>
	                <div class="slab-flex-1 d-flex slab-overflow-container">
	                    <ng-content></ng-content>
	                </div>

	          `,
	styles: [`
      :host {
		      width: 100%;
          display: flex;
          flex-direction: column;
      }
	`]
})
export class TabsComponent implements AfterContentInit {

	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	// contentChildren are set
	ngAfterContentInit() {
		// get all active tabs
		const activeTabs = this.tabs.filter((tab) => tab.active);

		// if there is no active tab set, activate the first
		if (activeTabs.length === 0) {
			this.selectTab(this.tabs.first);
		}
	}

	selectTab(tab: TabComponent) {
		// deactivate all tabs
		this.tabs.toArray()
			.forEach(t => {t.active = false;t.setVisible(false);});

		// activate the tab the user has clicked on.
		tab.active = true;
		tab.setVisible(true);
	}
}
