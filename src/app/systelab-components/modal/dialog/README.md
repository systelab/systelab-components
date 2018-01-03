# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is an abstract class that lets you define and show a dialog.  

In order to do that, you must create your own components and implement ModalComponent&lt;SystelabModalContext&gt;. The component will need to export a class in order to send parameters to the dialog that must extend SystelabModalContext. SystelabModalContext already has the width, height, dialogClass and fullScreen properties.

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

In order to create the template 'mysuper-dialog.component.html' you can use some useful components like the header and the bottom, and you have take into account that the parent layout is a flex one.

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

## Using the new component

In order to show the dialog, you must inject an instance of DialogService and use it:
```javascript
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.width = 960;
  parameters.height = 600;
  parameters.index = 4;
  this.dialogService.showDialog(MyDialog, parameters);
}

```
