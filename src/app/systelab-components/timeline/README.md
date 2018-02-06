# systelab-timeline

Component to show a verital timeline

## Using the template

```html
<systelab-timeline [events]="events"></systelab-timeline>
```

The Input events is an erray of TimelineEvent.

TimelineEvent is a class whith a title, a date, a text to show, a flag in order to put the event in the left or right, and a class for the icon to show.

THe following example initialize and put some elements into the array:

```javascript
    this.events = [];
    this.events.push(new TimelineEvent('Title 1', new Date(), 'Text 1', false, 'icon-download'));
    this.events.push(new TimelineEvent('Title 2', new Date(), 'Text 2', true, 'icon-comment'));
    this.events.push(new TimelineEvent('Title 3', new Date(), 'Text 3', false, 'icon-plus'));
    this.events.push(new TimelineEvent('Title 4', new Date(), 'text 4', true, 'icon-home'));
```
