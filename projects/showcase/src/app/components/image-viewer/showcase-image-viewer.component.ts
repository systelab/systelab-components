import {Component, ViewChild} from '@angular/core';
import {ActionButton, ActionButtonType, ImageViewerComponent} from 'systelab-components';

@Component({
	selector:    'showcase-image-viewer',
	templateUrl: 'showcase-image-viewer.component.html'
})

export class ShowcaseImageViewerComponent {
	@ViewChild('imageViewer') public imageViewer: ImageViewerComponent;

	public imageSrc = 'images/map.jpg';
	public imageTitle = 'Barcelona Eixample District';
	public actionButtons: Array<ActionButton> = [
		{action: 'Action 1', label: 'Action 1', type: ActionButtonType.BUTTON},
		{action: 'contrast', label: 'High contrast', type: ActionButtonType.TOGGLE_BUTTON},
		{action: 'green', label: 'Apply green', type: ActionButtonType.TOGGLE_BUTTON},
		{action: 'red', label: 'Apply red', type: ActionButtonType.TOGGLE_BUTTON}
	];
	public imageFilters = `
		<filter id="red">
			<feColorMatrix type="matrix"
						   values="1 0 0 0 0
								   0 0 0 0 0
								   0 0 0 0 0
								   0 0 0 1 0"/>
		</filter>
		<filter id="green">
			<feColorMatrix type="matrix"
						   values="0 0 0 0 0
								   0 1 0 0 0
								   0 0 0 0 0
								   0 0 0 1 0"/>
		</filter>	
		<filter id="contrast">
		  <feColorMatrix type="matrix" 
							values="1.2 0 0 0 -0.2
									0 1.2 0 0 -0.2
									0 0 1.2 0 -0.2
									0 0 0 1 0"/>
	   </filter>`;

	constructor() {
	}

	public doClickActionButton($event: string): void {
		if ($event === 'Action 1') {
			alert('Click on '+$event);
		} else {
			this.applyImageFilter($event);
		}
	}

	public doClickOverlayText(): void {
		alert('Text over image clicked');
	}

	private applyImageFilter(action: string): void {
		if (this.imageViewer.getFilter() === action) {
				this.imageViewer.setFilter(undefined);
		} else {
			this.imageViewer.setFilter(action);
		}
	}

}
