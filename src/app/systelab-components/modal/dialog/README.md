# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is an abstract class that lets you define and show a dialog.  

In order to do that, you must create your own components and extend from the abstract class DefaultModalActions and implement ModalComponent&lt;ModulabModalContext&gt;. The component will need to export a class in order to send paramters to the dialog that must extend ModulabModalContext.

Here there is an example:

```
export class MyDialogParameters extends ModulabModalContext {
	public index: number;
}

@Component( {
  selector:  'mysuper-dialog',
  templateUrl:  'mysuper-dialog.component.html',
} )
export class MyDialog extends DefaultModalActions implements ModalComponent<MyDialogParameters> {
  protected parameters: MyDialogParameters;

  constructor( public dialog: DialogRef<MyDialogParameters> ) {
    super( dialog );
    this.parameters = dialog.context;
  }
  public close(): void {
    this.dialog.close( 'Esto es una prueba' );
  }

  public static getParameters(): MyDialogParameters {
    return new MyDialogParameters();
  }
}
```
In the constructor a parameter with the DialogRef will be received, and you will get the parameters in the context of the dialog. 

## Using The new component;

In order to show the dialog, you must inject an instance of DialogService and use it:
```
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.width = 960;
  parameters.height = 600;
  parameters.index = 4;
  this.dialogService.showDialog(MyDialog, parameters);
}

```
