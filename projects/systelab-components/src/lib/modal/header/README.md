# systelab-dialog-header

Component to create a dialog header.

## Using the template

```html
<systelab-dialog-header #header [withClose]="true" [withInfo]="false" [withProgressBar]="false" [withTextProgressBar]="false" [withMinimize]="false" [withHome]="false" (close)="doClose()" (info)="doInfo()" (minimize)="doMinimize()" (home)="doHome()">
title
</systelab-dialog-header>
```

By default withClose is true, withInfo is false, withMinimize is false, withHome is false and withProgressBar is false. If you want the defaults the template will look like:

```html
<systelab-dialog-header (close)="doClose()">Title</systelab-dialog-header>
```

If you enable a Progress Bar, use the method go(number) to set the progress as a number between 0 and 100.
Optionally you can specify progress text when using Text Progress Bar using go(number,textprogress). If no text is specified it will display percentage text.

For example:

```javascript
	@ViewChild('header', {static: false}) header: DialogHeaderComponent;

	protected parameters: ShowcaseProgressBarDialogParameters;

	constructor(public dialog: DialogRef<ShowcaseProgressBarDialogParameters>) {
		this.parameters = dialog.context;
	}

	public doClose(): void {
		this.dialog.close();
	}

	public submit(): void {
        ...
		this.header.go(100);
		// this.header.go(100, '100 of 100 total' ); // Optional
	}

```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| withClose | boolean | true | Shows X button for closing the Dialog|
| withInfo | boolean | false | Shows info button for showing Help Dialogs|
| withProgressBar | boolean | false| Shows a progress bar in the bottom bar for long waiting actions after submiting the Dialog|
| withMinimize | boolean | false| Shows _ button for minimizing the Dialog|
| withHome | boolean | false | Shows Home button for going to Home route|
| withDrag | boolean | true | Allows the dialog to be draggable |

## Events

| Name | Parameters | Description |
| ---- |:----------:| ------------|
| close | | Event emitted clicking close button  |
| info | | Event emitted clicking info button  |
| minimize | | Event emitted clicking minimize button  |
| home | | Event emitted after clicking home button  |

