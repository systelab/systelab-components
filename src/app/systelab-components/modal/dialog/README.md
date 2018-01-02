# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is an abstract class that lets you define and show a dialog.  

In order to do that, you must create your own components and implement ModalComponent&lt;ModulabModalContext&gt;. The component will need to export a class in order to send parameters to the dialog that must extend ModulabModalContext. ModulabModalContext already has the width, height, dialogClass and fullScreen properties.

Here there is an example:

```javascript
export class MyDialogParameters extends ModulabModalContext {
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

In order to create the template 'mysuper-dialog.component.html' you can use the selector systelab-dialog with a [title] Input and a (close) Output. A margin is added unless you specify [space]="false"

To specify the content use the selector dialog-content and to specify the buttons use the selector dialog-bottom.

An example with tabs could be:

```html
<systelab-dialog [title]="'Title'" [space]="false" (close)="close()">
    <ng-container dialog-content>
        <systelab-tabs>
            <systelab-tab [title]="'title 1'">
                Panel 1
            </systelab-tab>
            <systelab-tab [title]="'title 2'">
                Panel 2
            </systelab-tab>
            <systelab-tab [title]="'title 3'">
                Panel 3
            </systelab-tab>
        </systelab-tabs>
    </ng-container>
    <ng-container dialog-bottom>
        <button type="button" class="btn btn-primary" (click)="close()">Submit</button>
    </ng-container>
</systelab-dialog>
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
