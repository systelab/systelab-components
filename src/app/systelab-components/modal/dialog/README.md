# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is an abstract class that will help you define and show a dialog.  

In order to do this, you must create your own component and implement the interface **ModalComponent&lt;SystelabModalContext&gt;** (lets say, it must have a 'dialog' property that will be received in the constructor method). 

The component will need to export a class in order to get the context. This class must extend from **SystelabModalContext**. SystelabModalContext already has the width, height, dialogClass and fullScreen properties.

It is suggested to define the width and height, or the class, in the context in order to make the dialog always have the same dimension. For small devices, the dialog will be fullScreen.

It is also suggested to keep this class in the same file, as it is more readable because the context is not lost.

Here there is an example:

```javascript
export class MyDialogParameters extends SystelabModalContext {
  public index: number;
  public width = 960;
  public height = 600;
}

@Component({
  selector:  'mysuper-dialog',
  templateUrl:  'mysuper-dialog.component.html',
})
export class MyDialog implements ModalComponent<MyDialogParameters> {
  protected parameters: MyDialogParameters;

  public static getParameters(): MyDialogParameters {
    return new MyDialogParameters();
  }
  constructor(public dialog: DialogRef<MyDialogParameters>) {
    this.parameters = dialog.context;
  }
  public close(): void {
    this.dialog.close('This is a test');
  }
}
```

In the constructor, a parameter with the DialogRef will be received, and you will get the parameters in the context of the dialog.

In order to create the template 'mysuper-dialog.component.html' it is suggested to use the components [systelab-dialog-header](../header) and  [systelab-dialog-bottom](../bottom). You have to take into account that the parent layout is a flex one.

An example could be:

```html
<systelab-dialog-header (close)="close();">Dialog title</systelab-dialog-header>
<div class="slab-flex-1">
 Your content
</div>
<systelab-dialog-bottom>
    <button type="button" class="btn ml-auto" (click)="close()"> Submit</button>
</systelab-dialog-bottom>
```

An example to show a dialog with a tab control on top could be:

```html
<systelab-dialog-header (close)="close();">Dialog title</systelab-dialog-header>
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
<systelab-dialog-bottom>
    <button type="button" class="btn ml-auto" (click)="close()"> Submit</button>
</systelab-dialog-bottom>
```

## Using the new component

In order to show the dialog, you must inject an instance of DialogService and call the method showDialog with the Dialog class and the context:

```javascript
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.index = 4;
  this.dialogService.showDialog(MyDialog, parameters);
}
```
