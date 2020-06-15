# systelab-file-selector

Component to select a file.

## Using the template

```html
<systelab-file-selector [(fileName)]="fileName" 
                        [(file)]="file" 
                        [(fileList)]="fileList"
                        [disabled]="disabled"
                        [showButtonOnDisable]="true"
                        [multipleSelection]="true">
</systelab-file-selector>
```

## Properties

| Name | Type | Default | Description |
| ---- |:----:|:-------:| ----------- |
| **fileName** | string || The name of the file selected. |
| **file** | File || Selected File reference. |
| **fileList** | FileList || Selected list of Files selected. Only when 'multipleSelection' is true |
| disabled | boolean | false | To disable the component. |
| showButtonOnDisable | boolean | false | Allow to show the selection button when disabled. |
| multipleSelection | boolean | false | Allow multiple file selection. |

In black the Two-Way Data Binding properties.
