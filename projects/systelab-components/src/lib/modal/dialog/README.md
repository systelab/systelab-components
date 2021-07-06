# systelab-dialog

Classes to show a dialog

## Using the classes

This is not a component by itself. This is an interface that will help you define a dialog and a service that will shown the dialog. 

To define a dialog you must create your own component and implement the interface **ModalComponent&lt;SystelabModalContext&gt;** (lets say, it must have a 'dialog' property that will be received in the constructor method). 

The component will need to export a class in order to get the context. This class must extend from **SystelabModalContext**. SystelabModalContext already has the width, height, dialogClass (deprecated) and fullScreen properties.

For non-responsive dialogs, define the width and height in the context in order to make the dialog always have the same dimension. For small devices, the dialog will be fullScreen.
For responsive dialogs, use widthRelative and heightRelative to specify size in terms like '75%' or '40vh'. It is suggested also to specify min and max width and height.

It is also suggested to keep this class in the same file, as it is more readable because the context is not lost.

Here there is an example:

```javascript
export class MyDialogParameters extends SystelabModalContext {
  public index: number;
  public widthRelative = '50%';
  public heightRelative = '75%';
  public maxHeight = 900;
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
    <button type="button" class="btn ms-auto" (click)="close()"> Submit</button>
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
    <button type="button" class="btn ms-auto" (click)="close()"> Submit</button>
</systelab-dialog-bottom>
```

## Using the new component

In order to show the dialog, you must inject an instance of **DialogService** and call the method showDialog with the Dialog class and the context:

```javascript
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.index = 4;
  this.dialogService.showDialog(MyDialog, parameters);
}
```

## Enabling / Desabling dialog content

Sometimes, when submitting a form or loading information, content should be disabled as no user interaction is allowed.

There are two ways of enabling / desabling the full modal content:

 * Use [systelab-loading](../../loading) component to disabling/enabling the whole application showing a wheel
 * Use the following dialog methods to enable / disable the modal content. In this case only dialog inner components are disabled/enabled. Header component is not disabled to allow cancelling the current process (useful in dialogs with progress bar)

 | Name | Description |
 | ---- | ----------- |
 | enable() | Sets the component as in loading state |
 | disable() | Remove the loading state of the component |
 

