import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext, TimelineEvent } from 'systelab-components';

export class ShowcaseTimelineDialogParameters extends SystelabModalContext {
	public fullScreen = true;
}

@Component({
	templateUrl: 'showcase-timeline-dialog.component.html',
	styleUrls: ['showcase-timeline-dialog.component.scss']
})
export class ShowcaseTimelineDialog implements ModalComponent<ShowcaseTimelineDialogParameters>, OnInit {

	protected parameters: ShowcaseTimelineDialogParameters;

	public events: TimelineEvent[] = [];

	constructor(public dialog: DialogRef<ShowcaseTimelineDialogParameters>) {
		this.parameters = dialog.context;
	}

	public ngOnInit() {
		this.events = [];
		this.events.push(new TimelineEvent('Title 1', new Date(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor.'));
		const timeLineEvent2 = new TimelineEvent('Title 2', new Date(), 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?');
		timeLineEvent2.inverted = true;
		timeLineEvent2.icon = 'icon-home';
		timeLineEvent2.color = 'success';
		this.events.push(timeLineEvent2);
		const timeLineEvent3 = new TimelineEvent('Title 3', new Date(), 'Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.');
		timeLineEvent3.inverted = false;
		timeLineEvent3.icon = 'icon-plus';
		this.events.push(timeLineEvent3);
		const timeLineEvent4 = new TimelineEvent('Title 4', new Date(), 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?');
		timeLineEvent4.inverted = true;
		timeLineEvent4.color = 'danger';
		timeLineEvent4.extraText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor.';
		timeLineEvent4.richExtraText =
			'<i class="time-line-icon icon-close"></i> Text with rich text styled in the app, not in the component';
		this.events.push(timeLineEvent4);
	}

	public close(): void {
		this.dialog.close();
	}

	public static getParameters(): ShowcaseTimelineDialogParameters {
		return new ShowcaseTimelineDialogParameters();
	}

	public doClickExample(timelineEvent: TimelineEvent): void {
		console.log(timelineEvent);
	}
}

