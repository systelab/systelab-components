import { Component, Input } from '@angular/core';
import { SpyMenuItem } from './spy-menu-item';

@Component({
	selector:    'systelab-spy-menu',
	templateUrl: './spy-menu.component.html'
})
export class SpyMenuComponent {

	@Input() public items: Array<SpyMenuItem>;
	@Input() public sectionSelected: string;

	public doClick(item: SpyMenuItem) {
		const element = document.querySelector(`#${item.id}`);
		if (element) {
			new IntersectionObserver((entries, observer) => {
				if (entries[0].isIntersecting) {
					observer.disconnect();
					this.sectionSelected = item.id
				}
			}).observe(element);
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	public isItemDisabled(item: SpyMenuItem): boolean {
		if (typeof item.disabled === 'function') {
			return item.disabled();
		} else {
			return item.disabled;
		}
	}

	public isItemHidden(item: SpyMenuItem): boolean {
		if (typeof item.hidden === 'function') {
			return item.hidden();
		} else {
			return item.hidden;
		}
	}
}
