# systelab-timeline

Component to show a vertical timeline

## Using the template

```html
<systelab-timeline [events]="events" (timelineClick)="doSomethingWithTimelineEvent($event)"></systelab-timeline>
```

The Input events is an erray of TimelineEvent. The following example initialize and put some elements into the array:

```javascript
    this.events = [];
    this.events.push(new TimelineEvent('Title 1', new Date(), 'Text 1'));
    this.events.push(new TimelineEvent('Title 2', new Date(), 'Text 2'));
    this.events.push(new TimelineEvent('Title 3', new Date(), 'Text 3'));
    this.events.push(new TimelineEvent('Title 4', new Date(), 'text 4'));
```

## Properties

 | Name | Type | Default | Description |
 | ---- |:----:|:-------:| ----------- |
 | events | Array&lt;TimelineEvent&gt; || An array with the event to show in the timeline. |


TimelineEvent model object

 | Name | Type | Mandatory | Description |
 | ---- |:----:|:-------:| ----------- |
 | title | string | yes| Title text
 | publishingDate | date | yes| Date text to show
 | text | string | yes| Text to show
 | inverted | boolean | no| A flag in order to put the event in the left or right
 | icon | string | no| Class for the icon to show (Default icon-download)
 | color | string | no | Class for color (Default warning)
 | extraText | string | no| Additional text to show in second line
 | richExtraText | string | no| Additional text to show in second line with HTML content
 | data | Object | no| Data object related to the event


## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| timelineClick | TimelineEvent | Emits the TimelineEvent model object clicked|


