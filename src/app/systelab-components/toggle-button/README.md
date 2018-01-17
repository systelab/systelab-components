# systelab-toggle-button

Component to select between two values.

## Using the template

```html
<systelab-toggle-button [(isChecked)]="check" [disabled]="true"></systelab-toggle-button>
```

The Input disabled is a boolean value in order to make the component disable. By default is false.

If you want the defaults the template will look like:

```html
<systelab-toggle-button [(isChecked)]="check"></systelab-toggle-button>
```

You can add the classes btn-primary btn-secondary, btn-success,... in order to define the background color of the toggle once is checked.

```html
<systelab-toggle-button [(isChecked)]="check" class="btn-danger"></systelab-toggle-button>
```

The styles for the switch are defined in the toggle-button.scss Saas file.

