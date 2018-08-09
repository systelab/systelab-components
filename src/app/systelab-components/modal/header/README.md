# systelab-dialog-header

Component to create a dialog header.

## Using the template

```html
<systelab-dialog-header #header [withClose]="true" [withInfo]="false" [withProgressBar]="false" [withMinimize]="false" [withHome]="false" (close)="doClose()" (info)="doInfo()" (minimize)="doMinimize()" (home)="doHome()">
title
</systelab-dialog-header>
```

By default withClose is true, withInfo is false, withMinimize is false, withHome is false and withProgressBar is false. If you want the defaults the template will look like:

```html
<systelab-dialog-header (close)="doClose()">Title</systelab-dialog-header>
```

If you enable a Progress Bar, use the method go() to set the progress as a number between 0 and 100.

For example:

```javascript
	@ViewChild('header') header: DialogHeaderComponent;

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
	}

```
