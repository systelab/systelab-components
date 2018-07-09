import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'showcase-tooltip',
	templateUrl: 'showcase-tooltip.component.html'
})
export class ShowcaseTooltipComponent implements OnInit {

	public tooltipText = 'Tooltip on top';

	constructor() {
	}

	public ngOnInit() {
		this.executeDelayed();
	}

	private executeDelayed(): void {
		setTimeout(() => {
			this.tooltipText = 'This is a text delayed';
		}, 4000);
	}
}
