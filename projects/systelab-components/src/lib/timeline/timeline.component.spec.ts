import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TimelineComponent, TimelineEvent } from './timeline.component';
import { SystelabTranslateModule } from 'systelab-translate';


const checkHasValue = (fixture: ComponentFixture<TimeLineTestComponent>, num: number) => {
	const numElements = fixture.debugElement.nativeElement.querySelectorAll('li').length;
	expect(numElements)
		.toEqual(num);
};

const getTitle = (fixture: ComponentFixture<TimeLineTestComponent>, i: number) =>
	fixture.debugElement.nativeElement.querySelectorAll('li .slab-timeline-title')[i].innerHTML;

const getText = (fixture: ComponentFixture<TimeLineTestComponent>, i: number) =>
	fixture.debugElement.nativeElement.querySelectorAll('li .slab-timeline-body p:nth-child(1)')[i].innerHTML;

const getExtraText = (fixture: ComponentFixture<TimeLineTestComponent>, i: number) =>
	fixture.debugElement.nativeElement.querySelectorAll('li .slab-timeline-body p:nth-child(2)')[i]?.innerHTML;

const getRichExtraText = (fixture: ComponentFixture<TimeLineTestComponent>, i: number) =>
	fixture.debugElement.nativeElement.querySelectorAll('li .slab-timeline-body p:nth-child(3)')[i]?.innerHTML;

const getImage= (fixture: ComponentFixture<TimeLineTestComponent>, i: number) =>
	fixture.debugElement.nativeElement.querySelectorAll('li .slab-timeline-badge')[i].innerHTML;

@Component({
	selector: 'systelab-timeline-test',
	template: `
                  <div>
                      <systelab-timeline [events]="events"></systelab-timeline>
                  </div>
			  `,
	styles:   []
})
export class TimeLineTestComponent {

	public events: TimelineEvent[] = [];

	constructor() {
		const timeLineEvent1 = new TimelineEvent('Title 1', new Date(), 'Text 1');
		timeLineEvent1.inverted = false;
		timeLineEvent1.icon = 'icon-download';
		timeLineEvent1.extraText = 'Extra Text';
		timeLineEvent1.richExtraText = '<a href="url">fake anchor for testing</a>';
		this.events.push(timeLineEvent1);
		const timeLineEvent2 = new TimelineEvent('Title 2', new Date(), 'Text 2');
		timeLineEvent2.inverted = true;
		timeLineEvent2.icon = 'icon-comment';
		this.events.push(timeLineEvent2);
		const timeLineEvent3 = new TimelineEvent('Title 3', new Date(), 'Text 3');
		timeLineEvent3.inverted = false;
		timeLineEvent3.icon = 'icon-plus';
		this.events.push(timeLineEvent3);
		const timeLineEvent4 = new TimelineEvent('Title 4', new Date(), 'text 4');
		timeLineEvent4.inverted = true;
		timeLineEvent4.icon = 'icon-home';
		this.events.push(timeLineEvent4);
	}
}

describe('Systelab Timeline', () => {
	let fixture: ComponentFixture<TimeLineTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
    declarations: [TimelineComponent, TimeLineTestComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        SystelabTranslateModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TimeLineTestComponent);
		fixture.detectChanges();
	});

	it('should instantiate', () => {
		expect(fixture.componentInstance)
			.toBeDefined();
	});

	it('should represent as many elements as events', () => {
		checkHasValue(fixture, fixture.componentInstance.events.length);
	});

	it('should add an element if I add an event', () => {
		fixture.componentInstance.events.push(new TimelineEvent('Title 5', new Date(), 'text 5'));
		fixture.detectChanges();
		checkHasValue(fixture, fixture.componentInstance.events.length);
	});

	it('should have the right title', () => {
		expect(getTitle(fixture, 0))
			.toEqual(fixture.componentInstance.events[0].title);
		expect(getTitle(fixture, 2))
			.toEqual(fixture.componentInstance.events[2].title);
	});

	it('should have the right text', () => {
		expect(getText(fixture, 0))
			.toEqual(fixture.componentInstance.events[0].text);
		expect(getText(fixture, 2))
			.toEqual(fixture.componentInstance.events[2].text);
	});

	it('should have the right extra text', () => {
		expect(getExtraText(fixture, 0))
			.toEqual(fixture.componentInstance.events[0].extraText);
	});

	it('should have the right rich extra text', () => {
		expect(getRichExtraText(fixture, 0))
			.toEqual(fixture.componentInstance.events[0].richExtraText);
	});

	it('should have the right icon', () => {
		expect(getImage(fixture, 0))
			.toContain(fixture.componentInstance.events[0].icon);
		expect(getImage(fixture, 2))
			.toContain(fixture.componentInstance.events[2].icon);
	});
});

