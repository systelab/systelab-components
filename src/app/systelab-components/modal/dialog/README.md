# systelab-dialog

Classes to show a dialog

## Using the class

This is not a component by itself, it is a class that lets you show a dialog.

In order to do that, you must inject the and instance of DialogService and use it:
```
public showDialog() {
  const parameters: MyDialogParameters = MyDialog.getParameters();
  parameters.width = 960;
	parameters.height = 600;
	parameters.index = 4;
	this.dialogService.showDialog(MyDialog, parameters);
}

```
