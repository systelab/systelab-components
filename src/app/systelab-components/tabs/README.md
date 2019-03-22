# systelab-tabs

Component to show more than one panel.

## Using the template

```html
<systelab-tabs class="slab-flex-1" (select)="selectedTab($event)">
  <systelab-tab [id]="'Tab1'" [title]="'Tab 1'" [active]="true">
    Tab 1 content
  </systelab-tab>
  <systelab-tab [id]="'Tab2'" [title]="'Tab 2'" [warning]="true">
    Tab 2 content
  </systelab-tab>
</systelab-tabs>
```

The systelab-tabs component has an Output in order to notify that a tab has been selected. In the $event parameter, the selected tab id will be sent.

Consider that:
> - You can add a padding to the tab content adding the class p-1.
> - Sometimes in the content you will need to specify that is 100% width.
> - If you are adding a grid as a content, remember to specify that it will be the element that will grow and that the position is relative. Here you have an example:

```html
<systelab-tabs class="slab-flex-1">
    <systelab-tab [title]="'Form'" [id]="'FromTab'">
        <form class="w-100">
         ....
        </form>
    </systelab-tab>
    <systelab-tab [title]="'Table'" [id]="'TableTab'" class="p-1">
        <some-inner-grid #grid class="slab-flex-1 position-relative"></some-inner-grid>
    </systelab-tab>
</systelab-tabs>
```


## Properties

For the tabs parent element:

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| showTabBackground | boolean | true | Set to true to use a background color. Otherwise is transparent |

For each tab element:

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| id | boolean | true | Tab Identifier |
| title | string | | Tab name to show |
| titleHtml | string | | Tab name as inner HTML. Consider the HTML must be sanitized |
| active | boolean | true | Set to true to specify that the tab that is active |
| warning | boolean | true | Set to true to specify the tab content has some warnings. |


## Events for Tabs

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| select | string | The selected Tab Id |


The styles for the tabs are defined in the tabs.scss Saas file.
