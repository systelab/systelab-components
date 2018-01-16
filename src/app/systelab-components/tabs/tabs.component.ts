import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
	selector: 'systelab-tabs',
	template: `
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" *ngFor="let tab of tabs" (click)="doSelectTab(tab)">
                        <a class="nav-link" [class.active]="tab.active" href="#" data-toggle="tab" role="tab"
                           [attr.aria-controls]="tab.id">{{tab.title}}<i *ngIf="tab.warning" class="text-warning icon-warning ml-3"></i></a>
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
