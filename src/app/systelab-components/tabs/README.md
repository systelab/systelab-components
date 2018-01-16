# systelab-tabs

Component to show more than one panel.

## Using the template

```html
<systelab-tabs class="slab-flex-1" (select)="selectedTab($event)">
  <systelab-tab class="slab-flex-1" [id]="'Tab1'" [title]="'Tab 1'" [active]="true">
    Tab 1 content
  </systelab-tab>
  <systelab-tab class="slab-flex-1" [id]="'Tab2'" [title]="'Tab 2'" [warning]="true">
    Tab 2 content
  </systelab-tab>
</systelab-tabs>
```

The systelab-tabs component has an Output in order to notify that a tab has been selected. In the $event parameter, the selected tab id will be sent.

The systelab-tab component has an four Inputs: The id (must be an string), the title, a boolean Input in order to specify the tab that is active, and a boolean Input in order to specify the tab has some warnings. By default the first tab will be considerered as active, and warning is false.

You can add a padding to the tab content adding the class p-1.

Sometimes in the content you will need to specify that is 100% width.

If you are adding a grid as a content, remember to specify that it will be the element that will grow and that the position is relative. Here you have an example:

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

The styles for the tabs are defined in the tabs.scss Saas file.