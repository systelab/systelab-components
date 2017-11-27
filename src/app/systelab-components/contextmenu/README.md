# systelab-context-menu

Component to show a context menu

## Using the template
```
<systelab-context-menu [elementID]="elementID" [contextMenuOptions]="contextMenuOptions" (action)="doSomeAction()" ></systelab-context-menu>
```

The contextMenuOptions is an array of ContextMenuOption
```
this.contextMenuOptions.push(new ContextMenuOption('1','Option 1',() => doAction1(),true));
this.contextMenuOptions.push(new ContextMenuOption('2','Option 2',() => doAction2(),true));
this.contextMenuOptions.push(new ContextMenuOption('3','Option 3',() => doAction3(),true));
```

The first paramenter is an Id, the second the text to show, the third the arrow function to execute and the four one is true if the menu option is enabled.
