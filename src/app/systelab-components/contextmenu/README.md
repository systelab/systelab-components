# systelab-context-menu

Component to show a context menu

## Using the template
```
<systelab-context-menu [elementID]="elementID" [contextMenuOptions]="contextMenuOptions" (action)="doSomeAction()" ></systelab-context-menu>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| elementID | string | random | Context Menu Identifier. Default a random auto generated. |
| fontSize | string | undefined | Font size. |
| fontColor | string | undefined | Font color. |
| isEmbedded | boolean | false | Hides the three dots button. To use as an embedded context menu in other components, such as textAreas, inputs, etc. |
| contextMenuOptions | Array&lt;ContextMenuOption&gt; || An array of ContextMenuOptions objects representing the menu items. |


ContextMenuOption is a class that represent a menu item. The different properties and its meaning are:


| Name | Type | Description |
| ---- |:----------:| ------------|
| actionId | string | Unique ID |
| actionText | string | Text to display |
| action | ContextMenuActionFunction | Function to execute|
| isActionEnabled | ContextMenuIsEnabledFunction | Function returns true is menu option is enabled |
| isDivider | boolean | Display a divider line |
| iconClass | string | Icon to display |
| backgroundIconColor | string | Icon background color |
| iconColor | string | Icon color |
| isIconEnabled | ContextMenuIsIconEnabledFunction |  Function should return true if icon is enabled |
| childrenContextMenuOptions | Array&lt;ContextMenuOption&gt; | Array of ContextMenuOption to display as children for this option |



Simple example:

```
this.contextMenuOptions.push(new ContextMenuOption('1','Option 1',() => doAction1(),true));
this.contextMenuOptions.push(new ContextMenuOption('2','Option 2',() => doAction2(),true));
this.contextMenuOptions.push(new ContextMenuOption('3','Option 3',() => doAction3(),true));
```


### Embedded mode usage

In order to use the component embedded, apart from setting the property isEmbedded to true, add the systelab-context-menu next to the component that will display the menu:

```
    <textarea (contextmenu)="openContextMenu($event)"></textarea>
    <systelab-context-menu #contextMenu [isEmbedded]="true" [contextMenuOptions]="contextMenuOptions"
        (action)="executeContextMenuAction($event)">
    </systelab-context-menu>
```

In the component that displays the menu implement the Angular action (contextmenu), capturing the event that shows the default browser context menu and showing ours,
and call the method open() inside the systelab-context-menu component. This will show the context menu in the position clicked

```
    public openContextMenu(event: any) {
        event.preventDefault();
        this.contextMenu.open(event);
    }
```

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| action | string |The selected ContextMenuOption Id. |

