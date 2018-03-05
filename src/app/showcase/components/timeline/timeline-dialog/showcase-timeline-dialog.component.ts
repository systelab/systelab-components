import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, SystelabModalContext } from '../../../../systelab-components/modal';
import { TimelineEvent } from '../../../../systelab-components/timeline/timeline.component';

export class ShowcaseTimelineDialogParameters extends SystelabModalContext {
	public fullScreen = true;
}

@Component({
	templateUrl: 'showcase-timeline-dialog.component.html'
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
		this.events.push(new TimelineEvent('Title 2', new Date(), 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', true, 'icon-home'));
		this.events.push(new TimelineEvent('Title 3', new Date(), 'Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.', false, 'icon-plus'));
		this.events.push(new TimelineEvent('Title 4', new Date(), 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', true));
	}

	public close(): void {
		this.dialog.close();
	}

	public static getParameters(): ShowcaseTimelineDialogParameters {
		return new ShowcaseTimelineDialogParameters();
	}
}

