# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is an abstract class that will help you define and show a dialog.  

In order to do this, you must create your own component and implement the interface ModalComponent&lt;SystelabModalContext&gt; (lets say, it must have a 'dialog' property that will be received in the constructor method). 

The component will need to export a class in order to get the context. This class must extend from SystelabModalContext. SystelabModalContext already has the width, height, dialogClass and fullScreen properties.

Here there is an example:

```javascript
export class MyDialogParameters extends SystelabModalContext {
  public index: number;
}

@Component({
  selector:  'mysuper-dialog',
  templateUrl:  'mysuper-dialog.component.html',
})
export class MyDialog implements ModalComponent<MyDialogParameters> {
  protected parameters: MyDialogParameters;

  constructor(public dialog: DialogRef<MyDialogParameters>) {
    this.parameters = dialog.context;
  }
  public close(): void {
    this.dialog.close('This is a test');
  }

  public static getParameters(): MyDialogParameters {
    return new MyDialogParameters();
  }
}
```
In the constructor, a parameter with the DialogRef will be received, and you will get the parameters in the context of the dialog.

In order to create the template 'mysuper-dialog.component.html' it is suggested to use components like systelab-dialog-header and systelab-dialog-bottom. You have to take into account that the parent layout is a flex one.

An example could be:

```html
<systelab-dialog-header (close)="close();">Dialog title</systelab-dialog-header>
<div class="slab-flex-1">
 Your content
</div>
<systelab-dialog-bottom>
    <button type="button" class="btn btn-sm btn-lg ml-auto" (click)="close()"> Submit</button>
</systelab-dialog-bottom>
```

An example to show a dialog with a tab control on top could be:

```html
<systelab-dialog-header (close)="close();">Dialog title</systelab-dialog-header>
<systelab-tabs class="slab-flex-1">
    <systelab-tab [title]="'Tab 1'" [id]="'1'">
        <form class="w-100">
        ...
        </form>
    </systelab-tab>
    <systelab-tab [title]="'Tab 2'" [id]="'2'">
        <div class="slab-flex-1">Second tab</div>
    </systelab-tab>
    <systelab-tab [title]="'Tab 3'" [id]="'3'" class="p-1">
        <showcase-inner-grid #grid class="slab-flex-1 d-flex position-relative"</showcase-inner-grid>
    </systelab-tab>
</systelab-tabs>
<systelab-dialog-bottom>
    <button type="button" class="btn btn-sm btn-lg ml-auto" (click)="close()"> Submit</button>
</systelab-dialog-bottom>
```

## Using the new component

In order to show the dialog, you must inject an instance of DialogService and call the method showDialog with the Dialog class and the context:

```javascript
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.width = 960;
  parameters.height = 600;
  parameters.index = 4;
  this.dialogService.showDialog(MyDialog, parameters);
}
```
