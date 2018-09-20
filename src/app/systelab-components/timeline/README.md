# systelab-timeline

Component to show a vertical timeline

## Using the template

```html
<systelab-timeline [events]="events"></systelab-timeline>
```

The Input events is an erray of TimelineEvent. The following example initialize and put some elements into the array:

```javascript
    this.events = [];
    this.events.push(new TimelineEvent('Title 1', new Date(), 'Text 1', false, 'icon-download'));
    this.events.push(new TimelineEvent('Title 2', new Date(), 'Text 2', true, 'icon-comment'));
    this.events.push(new TimelineEvent('Title 3', new Date(), 'Text 3', false, 'icon-plus'));
    this.events.push(new TimelineEvent('Title 4', new Date(), 'text 4', true, 'icon-home'));
```

## Properties

 | Name | Type | Default | Description |
 | ---- |:----:|:-------:| ----------- |
 | events | Array&lt;TimelineEvent&gt; || An array with the event to show in the timeline. |


TimelineEvent is a class with a title, a date, a text to show, a flag in order to put the event in the left or right, and a class for the icon to show.
