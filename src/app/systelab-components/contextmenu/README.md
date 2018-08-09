# systelab-context-menu

Component to show a context menu

## Using the template
```
<systelab-context-menu [elementID]="elementID" [contextMenuOptions]="contextMenuOptions" (action)="doSomeAction()" ></systelab-context-menu>
```

## List of inputs

elementID: ElementID to identify the contextMenu. Default a random auto generated

fontSize: Customize font size. Default undefined

fontColor: Customize font color. Default undefined

isEmbedded: Hides the three dots button. To use as an embedded context menu in other components, such as textAreas, inputs, etc. Default false.

contextMenuOptions: Array of ContextMenuOptions
```
this.contextMenuOptions.push(new ContextMenuOption('1','Option 1',() => doAction1(),true));
this.contextMenuOptions.push(new ContextMenuOption('2','Option 2',() => doAction2(),true));
this.contextMenuOptions.push(new ContextMenuOption('3','Option 3',() => doAction3(),true));
```

## ContextMenuOption - List of parameters

	constructor(public actionId: string,
				public actionText: string,
				public action?: ContextMenuActionFunction,
				public isActionEnabled?: ContextMenuIsEnabledFunction,
				public isDivider?: boolean,
				public iconClass?: string,
				public backgroundIconColor?: string,
				public iconColor?: string,
				public isIconEnabled?: ContextMenuIsIconEnabledFunction,
				public childrenContextMenuOptions?: Array<ContextMenuOption>)

actionId: Unique ID

actionText: Text to display

action: Function to execute

isActionEnabled: Function returns true is menu option is enabled

isDivider: Display a divider line

iconClass: Icon to display

backgroundIconColor: Icon background color

iconColor: Icon color

isIconEnabled: Function returns true if icon is enabled

childrenContextMenuOptions: Array of ContextMenuOption to display as children for this option


## Embedded mode usage

Set [isEmbedded]="true"

Add the systelab-context-menu next to the component that will display the menu:

        <textarea (contextmenu)="openContextMenu($event)" ></textarea>
        <systelab-context-menu #contextMenu [isEmbedded]="true" [contextMenuOptions]="contextMenuOptions"
                               (action)="executeContextMenuAction($event)">
        </systelab-context-menu>

In the component that displays the menu implement the Angular action (contextmenu),
capturing the event that shows the default browser context menu and showing ours,
and call the method open() inside the systelab-context-menu component. This will show the context menu in the position clicked

        public openContextMenu(event: any) {
            event.preventDefault();
            this.contextMenu.open(event);
        }
